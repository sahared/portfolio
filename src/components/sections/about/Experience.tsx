import { motion } from 'framer-motion';
import { MdOutlineWork } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";

interface ExperienceProps {
  isDark?: boolean;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  description: string[];
  technologies: string[]; // kept in data shape, not rendered
  current: boolean;
  companyUrl?: string; // Make company URL optional
}

const Experience = ({ isDark = false }: ExperienceProps) => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Accenture",
      position: "Application Development Analyst",
      duration: "MAR 2023 - AUG 2024",
      location: "Bengaluru, Karnataka, India",
      type: "On-site",
      current: false,
      companyUrl: "https://www.accenture.com",
      description: [
        "Architected and developed an enterprise-grade Data Migration Web Tool using Java, Spring Boot, and RESTful APIs, serving 5,000+ daily users and improving data transfer efficiency by 30% through optimized batch processing and parallel execution strategies",
        "Engineered end-to-end backend solutions for microservices architecture, implementing clean code principles and SOLID design patterns that reduced code review cycles by 50% and decreased technical debt by 40%",
        "Designed and optimized MS SQL Server database architecture with normalized schemas, implementing strategic indexing, stored procedures, and query optimization techniques that improved query performance by 25% and reduced average response time from 800ms to 600ms",
        "Led defect resolution and root cause analysis for production issues, collaborating with cross-functional teams to debug complex system integration challenges and maintain 99.5%+ application uptime",
        "Mentored 3 junior developers on best practices, code review standards, and backend development methodologies, contributing to improved team productivity and code quality metrics"
      ],
      technologies: ["Java 8/11","Spring Boot","RESTful APIs","MS SQL Server","Microservices","Maven","Git","JIRA","Agile/Scrum"]
    },
    {
      id: 2,
      company: "Accenture",
      position: "Application Development Associate",
      duration: "JUN 2021 - MAR 2023",
      location: "Bengaluru, Karnataka, India",
      type: "On-site",
      current: false,
      companyUrl: "https://www.accenture.com",
      description: [
        "Developed and deployed custom Salesforce solutions including Apex classes, Lightning Web Components (LWC), and REST API integrations for Fortune 500 enterprise clients, improving business process efficiency by 20% and reducing manual data entry by 35%",
        "Built scalable Lightning Web Components with JavaScript ES6+ and integrated third-party APIs, creating reusable component libraries adopted across 3 client projects and reducing development time by 25%",
        "Configured and customized Salesforce platform features including workflows, validation rules, custom objects, and permission sets, streamlining user management and automating 15+ business processes",
        "Collaborated in Agile/Scrum teams on sprint planning, daily standups, and retrospectives, consistently delivering features on schedule and contributing to 95%+ sprint completion rate",
        "Established automated testing frameworks with Salesforce Test Classes achieving 85%+ code coverage, ensuring code quality and deployment readiness"
      ],
      technologies: ["Salesforce","Apex","Lightning Web Components","JavaScript","SOQL","REST APIs","Agile"]
    },
    {
      id: 3,
      company: "AmpleSoftech Private Limited",
      position: "Web Developer Intern",
      duration: "JAN 2021 - MAY 2021",
      location: "Bengaluru, India",
      type: "On-site",
      current: false,
      companyUrl: "",
      description: [
        "Designed and developed a responsive property search web application using HTML5, CSS3, and JavaScript, implementing mobile-first design principles that increased mobile user engagement by 20% and improved cross-device accessibility",
        "Created intuitive, user-centered interfaces with semantic HTML and CSS Grid/Flexbox layouts, ensuring WCAG 2.1 accessibility compliance and achieving 95+ Google Lighthouse performance scores",
        "Applied Software Development Life Cycle (SDLC) methodologies including requirements gathering, technical design documentation, iterative development, and user acceptance testing (UAT) to deliver client-facing features",
        "Collaborated with senior developers on code reviews and bug fixes, gaining hands-on experience with version control (Git), responsive design patterns, and web development best practices"
      ],
      technologies: ["HTML5","CSS3","JavaScript ES6","Responsive Design","Bootstrap","Git","Chrome DevTools"]
    }
  ];

  return (
    <section id="experience" className="py-10 sm:py-12 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
              Professional Journey
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Work Experience
            </h2>
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line - Hidden on mobile */}
          <div
            className={`absolute lg:left-[25.25rem] top-0 bottom-0 w-1 hidden lg:block ${
              isDark ? 'bg-blue-500/30' : 'bg-blue-500/20'
            }`}
          />

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className={`absolute left-2 top-0 bottom-0 w-1 lg:hidden ${
            isDark ? 'bg-blue-500/30' : 'bg-blue-500/20'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Mobile Layout */}
                <div className="lg:hidden relative pl-8">
                  {/* Mobile Timeline Dot */}
                    <motion.div
                      className="absolute left-[0.375rem] top-9 w-2 h-2 bg-blue-500 rounded-full z-10 shadow-lg -translate-x-1/2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                      viewport={{ once: true }}
                    />
                  
                  {/* Mobile Content */}
                  <div className="space-y-2">
                    {/* Duration */}
                    <div className={`text-sm font-medium ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.duration}
                    </div>
                    
                    {/* Company Name */}
                    <h3 className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors duration-200 focus-override`}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    
                    {/* Location and Type */}
                    <div className="flex flex-col gap-1">
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <TbLocationFilled className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MdOutlineWork className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                    
                    {/* Position */}
                    <h4 className={`text-base sm:text-lg font-semibold ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {exp.position}
                    </h4>
                    
                    {/* Description */}
                    <ul
                      role="list"
                      className={`list-disc pl-5 space-y-2 mt-3 leading-relaxed ${
                        isDark ? 'text-gray-300 marker:text-blue-400' : 'text-gray-700 marker:text-blue-600'
                      } text-sm`}
                    >
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop Layout - Keep existing desktop layout */}
                <div className="hidden lg:flex lg:flex-row lg:items-start gap-8">
                  {/* Left Side - Date and Company Info */}
                  <div className="lg:w-96 lg:text-right lg:pr-8 flex-shrink-0">
                    <div
                      className={`text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {exp.duration}
                    </div>
                                        <h3
                      className={`text-xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors duration-200 focus-override`}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <div
                      className={`flex flex-col lg:items-end gap-1 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 lg:justify-end">
                        <TbLocationFilled className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MdOutlineWork className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <motion.div
                    className="absolute lg:left-[25rem] top-2.5 w-3 h-3 bg-blue-500 rounded-full z-10 shadow-lg hidden lg:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  />

                  {/* Right Side - Job Details */}
                  <div className="flex-1 lg:pl-8">
                    <div className="mb-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 mb-2">
                        <h4
                            className={`text-xl font-bold ${
                              isDark ? 'text-blue-400' : 'text-blue-600'
                            }`}
                        >
                          {exp.position}
                        </h4>
                      </div>
                    </div>

                    {/* Description - bullet list */}
                    <ul
                      role="list"
                      className={`list-disc pl-5 space-y-3 mb-0 leading-relaxed ${
                        isDark ? 'text-gray-300 marker:text-blue-400' : 'text-gray-700 marker:text-blue-600'
                      } text-sm lg:text-base`}
                    >
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
