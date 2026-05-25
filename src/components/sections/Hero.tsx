import { personalInfo } from '../../data/content';
import SocialLinks from '../ui/SocialLinks';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="hero-gradient-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent/30 -top-32 -right-32" />
      <div
        className="hero-gradient-orb w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-500/20 bottom-20 -left-20"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="hero-gradient-orb w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-cyan-500/15 top-1/3 right-1/4"
        style={{ animationDelay: '4s' }}
      />

      <div className="section-container relative z-10 py-32 md:py-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Text content */}
          <div className="max-w-2xl">
            {/* Greeting */}
            <div className="animate-fade-up text-sm md:text-base font-mono text-accent mb-6 tracking-wider">
              Hi, my name is
            </div>

            {/* Name */}
            <h1
              className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-100 mb-4 leading-[1.1]"
              style={{ animationDelay: '0.1s' }}
            >
              {personalInfo.name}
              {/* <span className="text-accent">.</span> */}
            </h1>

            {/* Subtitle */}
            <h2
              className="animate-fade-up text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-400 mb-6"
              style={{ animationDelay: '0.2s' }}
            >
              I build <span className="text-zinc-200 font-medium">code</span>{' '}
              and research <span className="text-zinc-200 font-medium">AI</span>.
            </h2>

            {/* Description */}
            <p
              className="animate-fade-up text-zinc-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
              style={{ animationDelay: '0.3s' }}
            >
              {personalInfo.subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-fade-up flex flex-wrap gap-4 mb-10"
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                View My Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 font-medium hover:border-zinc-500 hover:text-zinc-100 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              <SocialLinks />
            </div>
          </div>

          {/* Portrait */}
          <div
            className="animate-fade-in hidden lg:block flex-shrink-0"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="relative">
              <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border-2 border-white/[0.06] shadow-2xl shadow-accent/10">
                <img
                  src="/assets/portrait.jpeg"
                  alt="Siddharth Verma"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20 -z-10 blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-zinc-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
