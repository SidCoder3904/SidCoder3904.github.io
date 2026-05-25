import { achievements } from '../../data/content';
import Section from '../layout/Section';

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Milestones and recognitions"
    >
      <div className="stagger grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="stagger-item glass-card p-5 md:p-6 text-center group hover:border-accent/20"
          >
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
              {item.metric}
            </div>
            <p className="text-zinc-400 text-xs md:text-sm leading-snug">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
