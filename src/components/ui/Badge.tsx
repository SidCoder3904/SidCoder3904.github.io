interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default:
      'bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:border-zinc-600',
    accent:
      'bg-accent/10 text-accent-light border border-accent/20 hover:bg-accent/15',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
