import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Cta() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto bg-card rounded-xl p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your business with data?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of companies using Dashflow to make better decisions, improve efficiency, and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/auth/signup">
                Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}