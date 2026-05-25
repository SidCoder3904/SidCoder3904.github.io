import { personalInfo } from '../../data/content';
import Section from '../layout/Section';
import SocialLinks from '../ui/SocialLinks';

export default function Contact() {
  return (
    <Section id="contact" className="text-center">
      <div className="max-w-lg mx-auto">
        <p className="text-accent font-mono text-sm mb-4 tracking-wider">
          What's Next?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6">
          Get In Touch
        </h2>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
          Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent hover:bg-accent-dark text-white font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
        >
          Say Hello
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </Section>
  );
}
