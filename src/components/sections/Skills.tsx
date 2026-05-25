import { skills } from '../../data/content';
import Section from '../layout/Section';

const categories = [
  {
    key: 'languages' as const,
    label: 'Languages',
    icon: '{ }',
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    key: 'web' as const,
    label: 'Web Development',
    icon: '< >',
    color: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    key: 'aiml' as const,
    label: 'AI / ML',
    icon: '⚡',
    color: 'text-purple-400 bg-purple-500/10',
  },
  {
    key: 'core' as const,
    label: 'Core CS',
    icon: '⌘',
    color: 'text-amber-400 bg-amber-500/10',
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat.key} className="glass-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`w-9 h-9 rounded-lg ${cat.color} flex items-center justify-center text-sm font-mono font-bold`}
              >
                {cat.icon}
              </div>
              <h3 className="text-zinc-200 font-semibold">{cat.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills[cat.key].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800/60 text-zinc-300 text-sm border border-zinc-700/40 hover:border-zinc-600 hover:text-zinc-100 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
