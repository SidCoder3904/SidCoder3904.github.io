import { experiences } from '../../data/content';
import Section from '../layout/Section';
import Badge from '../ui/Badge';

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
    >
      <div className="relative pl-8 md:pl-12">
        {/* Timeline line */}
        <div className="timeline-line" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div
                className={`absolute -left-8 md:-left-12 top-6 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? 'bg-accent border-accent shadow-lg shadow-accent/30'
                    : 'bg-surface-2 border-zinc-600'
                }`}
              />

              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-zinc-100 text-lg font-semibold">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors font-medium"
                    >
                      <p className="text-accent font-medium">{exp.company}</p>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-accent-light/10 text-accent-light border border-accent-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
                        Current
                      </span>
                    )}
                    <span className="text-zinc-500 text-sm font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
