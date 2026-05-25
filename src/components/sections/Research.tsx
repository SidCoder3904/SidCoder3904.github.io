import { research } from '../../data/content';
import Section from '../layout/Section';
import Badge from '../ui/Badge';

export default function Research() {
  return (
    <Section
      id="research"
      title="Research"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {research.map((paper, index) => (
          <div key={index} className="glass-card p-6 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-accent-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              <Badge variant="accent">{paper.conference}</Badge>
            </div>

            <h3 className="text-zinc-100 font-semibold text-lg mb-1 group-hover:text-accent-light transition-colors">
              {paper.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              {paper.fullTitle}
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              {paper.description}
            </p>

            {/* Co-authors */}
            {paper.authors && paper.authors.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-1 text-xs text-zinc-500 mb-4">
                <span>with</span>
                {paper.authors.map((author, i) => (
                  <span key={author.name}>
                    <a
                      href={author.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-accent-light transition-colors underline underline-offset-2 decoration-zinc-700 hover:decoration-accent/40"
                    >
                      {author.name}
                    </a>
                    {i < paper.authors.length - 1 && <span>,&nbsp;</span>}
                  </span>
                ))}
              </div>
            )}

            {/* Paper link */}
            {paper.paperUrl && (
              <a
                href={paper.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors font-medium"
              >
                Read Paper
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
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
