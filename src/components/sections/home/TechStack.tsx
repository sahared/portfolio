import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdOutlineWork } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";

interface TechStackProps { isDark?: boolean }
interface TechItem { name: string; icon: string | React.ReactNode; color?: string }

// Moved outside to prevent re-mounting on every render
const TechScroll = ({
  technologies,
  direction = 'left',
  isDark
}: { technologies: TechItem[]; direction?: 'left' | 'right'; isDark?: boolean }) => {
  const dup = useMemo(() => [...technologies, ...technologies], [technologies]);
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-2 sm:gap-3 items-center"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {dup.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            className={`flex items-center gap-1.5 sm:gap-2 ${isDark ? 'bg-gray-800/30 border-gray-700/30' : 'bg-white border-gray-200'} backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border flex-shrink-0`}
            whileHover={{ scale: 1.05 }}
          >
            {typeof t.icon === 'string' ? (
              <img src={t.icon} alt={t.name} className="w-4 sm:w-5 h-4 sm:h-5" />
            ) : (
              t.icon
            )}
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>{t.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Icons for cards
const AcademicIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
  </svg>
);

const BriefcaseIcon = () => (
  <MdOutlineWork className="w-5 h-5" />
);


const TechStack = ({ isDark }: TechStackProps) => {
  // Memoize data to ensure referential stability
  const frontendTech: TechItem[] = useMemo(() => [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
    { name: 'React Native', icon: 'https://cdn.simpleicons.org/react' },
    { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'HTML/CSS', icon: 'https://cdn.simpleicons.org/html5' },
    { name: 'UI/UX', icon: 'https://cdn.simpleicons.org/figma' },
  ], [isDark]);

  const backendTech: TechItem[] = useMemo(() => [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'Express.js', icon: isDark ? 'https://cdn.simpleicons.org/express/ffffff' : 'https://cdn.simpleicons.org/express' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
    { name: 'Flask', icon: isDark ? 'https://cdn.simpleicons.org/flask/ffffff' : 'https://cdn.simpleicons.org/flask' },
    { name: 'Java', icon: <FaJava className="w-4 sm:w-5 h-4 sm:h-5" /> },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
    { name: 'MS SQL Server', icon: 'https://cdn.simpleicons.org/microsoftsqlserver' },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/f90' },
    { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure' },
    { name: 'Linux', icon: <FcLinux className="w-4 sm:w-5 h-4 sm:h-5" /> },
  ], [isDark]);

  const toolsTech: TechItem[] = useMemo(() => [
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
    { name: 'Terraform', icon: 'https://cdn.simpleicons.org/terraform' },
    { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions' },
    { name: 'CI/CD', icon: 'https://cdn.simpleicons.org/circleci' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
    { name: 'GitHub', icon: isDark ? 'https://cdn.simpleicons.org/github/ffffff' : 'https://cdn.simpleicons.org/github' },
    { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman' },
    { name: 'VS Code', icon: <VscVscode className="w-4 sm:w-5 h-4 sm:h-5 text-[#007ACC]" /> },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
    { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira' },
    { name: 'Confluence', icon: <img src="https://cdn.simpleicons.org/confluence" alt="Confluence" style={{ filter: 'brightness(0) saturate(100%) invert(24%) sepia(99%) saturate(747%) hue-rotate(191deg) brightness(97%) contrast(101%)' }} className="w-4 sm:w-5 h-4 sm:h-5" /> },
    { name: 'Trello', icon: 'https://cdn.simpleicons.org/trello' },
  ], [isDark]);


  // helper colors
  const cardBase = 'rounded-3xl overflow-hidden border border-blue-200/60 dark:border-white/[0.08] bg-blue-50/30 dark:bg-slate-950/90 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:-translate-y-1';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderSoft = isDark ? 'border-white/10' : 'border-blue-200/50';
  const statBg = isDark ? 'bg-white/[0.03]' : 'bg-blue-50/40';

  // --- Reusable identical feature card (used for Card 1 and Card 4) ---
  const FeatureCard = ({
    to,
    badge,
    title,
    description,
    icon,
    cta = 'Explore'
  }: {
    to: string;
    badge: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    cta?: string;
  }) => (
    <Link to={to} className="block group focus-override">
      <div className={`${cardBase} p-4 sm:p-5 lg:p-8 h-full flex flex-col justify-center relative min-h-[180px] sm:min-h-[200px]`}>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className={`text-[10px] sm:text-[11px] uppercase tracking-[0.14em] ${textMuted}`}>{badge}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-500">{icon}</span>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{title}</h3>
              </div>
              <p className={`text-xs sm:text-sm mt-2 ${textMuted}`}>{description}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6 flex items-center justify-between min-h-[40px] sm:min-h-[44px]">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {cta}
            </span>
          </div>
          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div>
            <span className={`uppercase tracking-[0.2em] text-[10px] sm:text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Tech Stack & Status
            </span>
            <h2 className={`mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Profile Overview
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 h-auto">
          {/* Card 1 (Academic) — identical style */}
          <FeatureCard
            to="/about"
            badge="For Academics"
            title="Academic Snapshot"
            description="Coursework, research interests, and how I pair engineering depth with product thinking."
            icon={<AcademicIcon />}
            cta="View Profile"
          />

          {/* Card 2 (Tech Stack) */}
          <div className={`lg:col-span-2 ${cardBase} p-4 sm:p-5 lg:p-8`}>
            <div className="mb-4 sm:mb-5 lg:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                My <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Toolbox</span>
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <TechScroll technologies={frontendTech} direction="right" isDark={isDark} />
              <TechScroll technologies={backendTech} direction="left" isDark={isDark} />
              <TechScroll technologies={toolsTech} direction="right" isDark={isDark} />
            </div>
          </div>

          {/* Card 3: What I Do Best */}
          <div className={`lg:col-span-2 ${cardBase} p-4 sm:p-5 lg:p-8`}>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                What I Do <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Best</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Cloud Architecture & DevOps */}
              <div className={`p-4 sm:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="flex items-start gap-2.5">
                  <div className="text-xl flex-shrink-0">☁️</div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-1">Cloud Architecture & DevOps</h4>
                    <p className="text-[11px] sm:text-xs opacity-70 leading-relaxed">
                      AWS infrastructure with Terraform IaC, CI/CD pipelines, auto-scaling, and monitoring
                    </p>
                  </div>
                </div>
              </div>

              {/* Full-Stack Development */}
              <div className={`p-4 sm:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="flex items-start gap-2.5">
                  <div className="text-xl flex-shrink-0">🚀</div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-1">Full-Stack Development</h4>
                    <p className="text-[11px] sm:text-xs opacity-70 leading-relaxed">
                      End-to-end applications with React, Node.js, TypeScript, and modern databases
                    </p>
                  </div>
                </div>
              </div>

              {/* AI/LLM Integration */}
              <div className={`p-4 sm:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="flex items-start gap-2.5">
                  <div className="text-xl flex-shrink-0">🤖</div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-1">AI/LLM Integration</h4>
                    <p className="text-[11px] sm:text-xs opacity-70 leading-relaxed">
                      LangChain workflows, GPT-4o fine-tuning, prompt engineering, and Azure AI integration
                    </p>
                  </div>
                </div>
              </div>

              {/* Enterprise Solutions */}
              <div className={`p-4 sm:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="flex items-start gap-2.5">
                  <div className="text-xl flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-1">Enterprise Solutions</h4>
                    <p className="text-[11px] sm:text-xs opacity-70 leading-relaxed">
                      Scalable architectures, RESTful APIs, microservices, and production-grade systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 (Recruiter) — identical style */}
          <FeatureCard
            to="/projects"
            badge="For Recruiters"
            title=" Project Showcase"
            description="Explore shipped work, case studies, and live demos tailored for hiring."
            icon={<BriefcaseIcon />}
            cta="View Recent Work"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
