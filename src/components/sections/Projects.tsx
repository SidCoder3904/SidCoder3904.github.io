import { projects } from '../../data/content';
import Section from '../layout/Section';
import Badge from '../ui/Badge';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 group block"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
              </div>
              <svg
                className="w-5 h-5 text-zinc-600 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>

            <h3 className="text-zinc-100 font-semibold text-lg mb-2 group-hover:text-accent-light transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
