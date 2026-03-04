// deno-lint-ignore-file no-explicit-any
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.0";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  userAgent?: string;
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const supabase = createClient(supabaseUrl, serviceRoleKey);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(msg: string, code = 400) {
  return new Response(JSON.stringify({ error: msg }), {
    status: code,
    headers: { "Content-Type": "application/json" },
  });
}

function success() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

function validate(body: any): ContactPayload | null {
  if (!body) return null;
  const { name, email, subject, message, userAgent } = body as ContactPayload;
  if (!name || !email || !subject || !message) return null;
  if (!EMAIL_REGEX.test(email)) return null;
  if (message.length > 500) return null;
  return {
    name: String(name).slice(0, 120),
    email: String(email).slice(0, 200),
    subject: String(subject).slice(0, 200),
    message: String(message).slice(0, 500),
    userAgent: userAgent ? String(userAgent).slice(0, 400) : "unknown",
  };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return badRequest("Method not allowed", 405);
  }

  if (!supabaseUrl || !serviceRoleKey) {
    return badRequest("Server misconfigured", 500);
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid JSON");
  }

  const payload = validate(body);
  if (!payload) return badRequest("Invalid payload");

  const { error } = await supabase.from("contact_messages").insert({
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    message: payload.message,
    user_agent: payload.userAgent,
  });

  if (error) {
    console.error("Insert error:", error);
    return badRequest("Failed to save message", 500);
  }

  return success();
});


