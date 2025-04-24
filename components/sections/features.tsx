'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, LineChart, BarChart, PieChart } from 'lucide-react';
import { FeatureDetail } from '@/components/feature-detail';

export function Features() {
  const [activeTab, setActiveTab] = useState("analytics");
  
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Powerful features for data-driven teams
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to collect, analyze, and visualize your data in one powerful platform.
        </p>
      </div>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
          <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
            <LineChart className="h-4 w-4 mr-2" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="dashboards" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
            <BarChart className="h-4 w-4 mr-2" />
            Dashboards
          </TabsTrigger>
          <TabsTrigger value="reporting" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
            <PieChart className="h-4 w-4 mr-2" />
            Reporting
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="analytics" className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Real-time Data Analytics</h3>
              <p className="text-muted-foreground mb-6">
                Track key metrics in real-time and get instant insights into your business performance. 
                Our analytics engine processes billions of data points to provide actionable intelligence.
              </p>
              
              <div className="space-y-4 mt-6">
                <FeatureDetail 
                  title="Live Data Processing" 
                  description="Process data as it comes in with sub-second latency for immediate insights."
                />
                <FeatureDetail 
                  title="Custom Metrics" 
                  description="Create and track custom metrics specific to your business needs."
                />
                <FeatureDetail 
                  title="Predictive Analytics" 
                  description="Use AI-powered predictions to anticipate future trends and outcomes."
                />
              </div>
              
              <Button asChild className="mt-8">
                <Link href="/features">
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image 
                src="https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg" 
                alt="Analytics Dashboard Interface" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="dashboards" className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px] order-2 lg:order-1">
              <Image 
                src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg" 
                alt="Interactive Dashboard" 
                fill
                className="object-cover" 
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Customizable Dashboards</h3>
              <p className="text-muted-foreground mb-6">
                Build beautiful dashboards with drag-and-drop simplicity. Create the perfect 
                visualization for your data with our comprehensive widget library.
              </p>
              
              <div className="space-y-4 mt-6">
                <FeatureDetail 
                  title="Drag-and-Drop Interface" 
                  description="No coding required - build complex dashboards with simple drag and drop."
                />
                <FeatureDetail 
                  title="50+ Visualization Types" 
                  description="Choose from a wide range of charts, graphs, and display options."
                />
                <FeatureDetail 
                  title="Responsive Layouts" 
                  description="Dashboards automatically adapt to any screen size or device."
                />
              </div>
              
              <Button asChild className="mt-8">
                <Link href="/features">
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reporting" className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Automated Reporting</h3>
              <p className="text-muted-foreground mb-6">
                Schedule and automate reports to be delivered to key stakeholders. Save time and ensure everyone stays informed with the latest data.
              </p>
              
              <div className="space-y-4 mt-6">
                <FeatureDetail 
                  title="Scheduled Reports" 
                  description="Set up daily, weekly, or monthly reports delivered automatically."
                />
                <FeatureDetail 
                  title="Multiple Export Formats" 
                  description="Export data as PDF, Excel, CSV, or interactive web reports."
                />
                <FeatureDetail 
                  title="Custom Branding" 
                  description="White-label reports with your company branding and design."
                />
              </div>
              
              <Button asChild className="mt-8">
                <Link href="/features">
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <Image 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg" 
                alt="Automated Reporting" 
                fill
                className="object-cover" 
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}