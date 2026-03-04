import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CertificationsProps {
  isDark?: boolean;
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  logo: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    credentialId: "Available on request",
    logo: "aws",
    credentialUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    id: 2,
    title: "Salesforce Platform Developer I",
    issuer: "Salesforce",
    issueDate: "2023",
    credentialId: "Available on request",
    logo: "salesforce",
    credentialUrl: "https://trailhead.salesforce.com/en/credentials/platformdeveloper1"
  },
  {
    id: 3,
    title: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    issueDate: "2023",
    credentialId: "Available on request",
    logo: "salesforce",
    credentialUrl: "https://trailhead.salesforce.com/credentials/administrator"
  }
];

const logoBox = (logo: string) => {
  const logoClass = "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg font-bold";
  switch (logo) {
    case "aws": return <div className={`${logoClass} bg-yellow-500 text-white text-xs`}>AWS</div>;
    case "salesforce": return <div className={`${logoClass} bg-blue-500 text-white text-[10px]`}>SFDC</div>;
    default: return <div className={`${logoClass} bg-gray-500 text-white text-sm`}>?</div>
  }
};

const Certifications = ({ isDark = false }: CertificationsProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="uppercase tracking-[0.2em] text-[11px] text-slate-500 dark:text-slate-400">
              Professional Development
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Licenses & Certifications
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-2xl border ${isDark ? 'border-gray-700/60 bg-gray-800/80' : 'border-gray-200 bg-white'} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
            >
              <div className="p-4 sm:p-5 flex flex-col h-full gap-3">
                <div className="flex justify-center">{logoBox(cert.logo)}</div>
                <div className="text-center space-y-1">
                  <p className={`text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>{cert.issuer}</p>
                  <h4 className={`text-sm sm:text-base font-semibold leading-snug text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {cert.title}
                    </h4>
                  </div>
                <div className="text-center text-xs text-gray-600 dark:text-gray-300">Issued: {cert.issueDate}</div>
                <div className={`mt-auto text-center text-xs font-medium px-3 py-2 rounded-lg ${isDark ? 'bg-gray-700/60 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                  ID: {cert.credentialId}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;


