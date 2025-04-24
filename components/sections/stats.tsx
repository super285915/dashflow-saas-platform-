import { cn } from '@/lib/utils';

export function Stats() {
  const stats = [
    { value: '3,000+', label: 'Customers' },
    { value: '180+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' },
    { value: '10B+', label: 'Data points processed daily' },
  ];
  
  return (
    <div className="w-full">
      <div className={cn(
        "relative py-16 w-full",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:via-primary/5 before:to-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}