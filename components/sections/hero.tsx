'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ChevronRight, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const data = [
  { value: 40 },
  { value: 30 },
  { value: 50 },
  { value: 35 },
  { value: 60 },
  { value: 45 },
  { value: 80 },
  { value: 70 },
  { value: 90 },
  { value: 85 },
  { value: 100 },
  { value: 90 },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className={cn(
      "relative w-full py-24 md:py-32",
      "before:absolute before:inset-0 before:bg-gradient-to-b before:from-background/10 before:via-background/50 before:to-background",
      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-background after:via-foreground/10 after:to-background"
    )}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      </div>
      
      <div className="px-4 relative">
        <Badge variant="outline" className="mb-6 absolute -top-3 left-1/2 transform -translate-x-1/2 border-foreground/10 text-muted-foreground px-4 py-1.5">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          New Dashboard Features Released
        </Badge>
        
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto justify-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Analytics that <span className="text-primary">transform</span> your business
          </h1>
          
          <p className="mt-6 text-muted-foreground text-lg sm:text-xl max-w-3xl">
            Make better decisions with real-time data insights. Dashflow provides powerful analytics, beautiful dashboards, and seamless integrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button size="lg" asChild>
              <Link href="/auth/signup">
                Start Free Trial <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">
                <Play className="mr-2 h-4 w-4" /> Interactive Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="relative mt-16 sm:mt-24 w-full max-w-5xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden border shadow-2xl">
          <div className="bg-card/80 backdrop-blur-sm border-b px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-muted-foreground">Dashboard Overview</div>
            <div className="w-16"></div>
          </div>
          
          {mounted && (
            <div className="bg-card/95 backdrop-blur-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-sm font-medium mb-1">Total Revenue</div>
                <div className="text-2xl font-bold">$148,800</div>
                <div className="mt-4 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--chart-1))" 
                        fillOpacity={1} 
                        fill="url(#colorRevenue)" 
                        isAnimationActive={true}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-sm font-medium mb-1">Active Users</div>
                <div className="text-2xl font-bold">1,050</div>
                <div className="mt-4 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data.map(d => ({ value: d.value * 0.9 }))}>
                      <defs>
                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--chart-2))" 
                        fillOpacity={1} 
                        fill="url(#colorUsers)" 
                        isAnimationActive={true}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-sm font-medium mb-1">Conversion Rate</div>
                <div className="text-2xl font-bold">3.6%</div>
                <div className="mt-4 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data.map(d => ({ value: d.value * 0.8 }))}>
                      <defs>
                        <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--chart-3))" 
                        fillOpacity={1} 
                        fill="url(#colorConversion)" 
                        isAnimationActive={true}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}