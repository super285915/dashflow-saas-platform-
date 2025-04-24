'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'VP of Marketing, TechCorp',
    content: 'Dashflow has transformed how we analyze our marketing campaigns. The real-time insights have helped us increase ROI by 43% in just three months.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    company: 'TechCorp',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CFO, Innovate Inc',
    content: 'The financial dashboards are incredible. I can now make data-driven decisions faster than ever before. Our quarterly planning process is now 60% more efficient.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    company: 'Innovate Inc',
  },
  {
    name: 'Sarah Williams',
    role: 'Operations Director, Global Retail',
    content: "We have tried several analytics platforms, and Dashflow is by far the most intuitive and powerful. The custom reporting has saved our team countless hours each month.",
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    company: 'Global Retail',
  },
  {
    name: 'David Chen',
    role: 'Data Analytics Lead, FinServe',
    content: 'The integration capabilities are unmatched. We connected all our data sources in minutes, not weeks. Now we have a complete view of our business performance.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    company: 'FinServe',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="bg-muted/40 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by leading companies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our customers have to say about their experience using Dashflow.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={containerRef}>
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "min-w-full px-6 py-8 bg-background border shadow-sm",
                  )}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <blockquote className="text-lg md:text-xl italic mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                          
                          <div className="text-sm font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-2xl font-bold text-muted-foreground/70">Microsoft</div>
          <div className="text-2xl font-bold text-muted-foreground/70">Spotify</div>
          <div className="text-2xl font-bold text-muted-foreground/70">Airbnb</div>
          <div className="text-2xl font-bold text-muted-foreground/70">Shopify</div>
          <div className="text-2xl font-bold text-muted-foreground/70">Slack</div>
        </div>
      </div>
    </div>
  );
}