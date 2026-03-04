import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import ContactCTA from '../components/sections/ContactCTA';
import { projects, categoryMeta } from '../data/projects';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectDetailPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ProjectDetailPage = ({ isDark, toggleTheme }: ProjectDetailPageProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => projects.find((p) => p.id === id), [id]);

  if (!project) {
    navigate('/projects');
    return null;
  }

  const meta = categoryMeta[project.category];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6 transition-colors focus-override"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>

          {/* Header Section with Image and Basic Info */}
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6 lg:gap-10 mb-10">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-800 object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-md w-fit">
                {meta && <meta.Icon className="w-3.5 h-3.5" />}
                {meta ? meta.label : project.category}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-50">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-md"
                  >
                    <span className="text-gray-500 dark:text-gray-500">{tag.icon}</span>
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-2.5 pt-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-override"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus-override"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Description Section */}
          {project.longDescription && (
            <div className="space-y-6">
              {(() => {
                const sections = project.longDescription.split('\n\n').filter(s => s.trim());
                let currentSection: { header: string; items: string[] } | null = null;
                const renderedSections: React.ReactElement[] = [];
                let sectionKey = 0;

                sections.forEach((section) => {
                  const trimmed = section.trim();
                  
                  // Check if this is a header (ends with colon and no bullet)
                  if (trimmed.match(/^[A-Za-z\s]+:$/) && !trimmed.startsWith('•')) {
                    // Save previous section if exists
                    if (currentSection && currentSection.items.length > 0) {
                      const sectionToRender = currentSection;
                      renderedSections.push(
                        <div key={sectionKey++} className="space-y-3">
                          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">
                            {sectionToRender.header}
                          </h2>
                          <ul className="space-y-2">
                            {sectionToRender.items.map((item: string, i: number) => (
                              <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <span className="text-gray-500 dark:text-gray-500 flex-shrink-0">•</span>
                                <span className="text-sm sm:text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    // Start new section
                    currentSection = { header: trimmed.replace(':', ''), items: [] };
                  } else if (trimmed.startsWith('•')) {
                    // This is a bullet point
                    if (currentSection) {
                      currentSection.items.push(trimmed.substring(1).trim());
                    }
                  } else {
                    // Regular paragraph - save previous section first
                    if (currentSection && currentSection.items.length > 0) {
                      const sectionToRender = currentSection;
                      renderedSections.push(
                        <div key={sectionKey++} className="space-y-3">
                          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">
                            {sectionToRender.header}
                          </h2>
                          <ul className="space-y-2">
                            {sectionToRender.items.map((item: string, i: number) => (
                              <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <span className="text-gray-500 dark:text-gray-500 flex-shrink-0">•</span>
                                <span className="text-sm sm:text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                      currentSection = null;
                    }
                    
                    // Render paragraph
                    const isFirst = renderedSections.length === 0;
                    renderedSections.push(
                      <div key={sectionKey++} className="space-y-3">
                        {isFirst && (
                          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">
                            Overview
                          </h2>
                        )}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                          {trimmed}
                        </p>
                      </div>
                    );
                  }
                });

                // Don't forget the last section
                if (currentSection) {
                  const finalSection = currentSection as { header: string; items: string[] };
                  if (finalSection.items.length > 0) {
                  renderedSections.push(
                    <div key={sectionKey++} className="space-y-3">
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        {finalSection.header}
                      </h2>
                      <ul className="space-y-2">
                        {finalSection.items.map((item: string, i: number) => (
                          <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <span className="text-gray-500 dark:text-gray-500 flex-shrink-0">•</span>
                            <span className="text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                  }
                }

                return renderedSections;
              })()}
            </div>
          )}
        </div>

        <ContactCTA
          className="mt-16"
          title="Need a similar build?"
          description="Let's tailor a solution with React, Node.js, and cloud infrastructure that fits your use case."
          primaryButtonText="Start a project"
          secondaryButtonText="Back to projects"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;


