import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`reveal py-20 md:py-28 ${className}`}
    >
      <div className="section-container">
        {title && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-zinc-400 text-lg max-w-2xl">{subtitle}</p>
            )}
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full mt-4" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
