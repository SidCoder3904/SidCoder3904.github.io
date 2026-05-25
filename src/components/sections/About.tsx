import { personalInfo, education } from '../../data/content';
import Section from '../layout/Section';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        {/* Text */}
        <div className="md:col-span-3">
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            {personalInfo.about}
          </p>
        </div>

        {/* Education Card */}
        <div className="md:col-span-2">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
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
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-zinc-100 font-semibold">Education</h3>
                <p className="text-xs text-zinc-500">{education.years}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-200 font-medium text-sm">
                {education.institution}
              </p>
              <p className="text-zinc-400 text-sm">{education.degree}</p>
              <p className="text-zinc-400 text-sm">{education.field}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06] mt-3">
                <span className="text-3xl font-bold gradient-text">
                  {education.cgpa}
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  CGPA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
