import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-4 text-center max-w-3xl mx-auto", className)}>
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  );
}