'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageHeader } from '@/components/page-header';
import { FeatureDetail } from '@/components/feature-detail';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("analytics");
  
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Powerful Features That Scale"
        description="Explore the full suite of tools designed to transform your business analytics and decision-making process."
      />
      
      <div className="mt-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
            <TabsTrigger value="analytics" className="py-3">Analytics</TabsTrigger>
            <TabsTrigger value="dashboards" className="py-3">Dashboards</TabsTrigger>
            <TabsTrigger value="reporting" className="py-3">Reporting</TabsTrigger>
            <TabsTrigger value="integration" className="py-3">Integration</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analytics" className="mt-8">
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
                  <Link href="/demo">
                    See it in action <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg" 
                  alt="Analytics Dashboard Interface" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="dashboards" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                <Image 
                  src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg" 
                  alt="Interactive Dashboard" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover" 
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
                  <Link href="/demo">
                    Build a dashboard <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reporting" className="mt-8">
            {/* Reporting tab content structure similar to above */}
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
                  <Link href="/demo">
                    See reporting options <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg" 
                  alt="Automated Reporting" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="integration" className="mt-8">
            {/* Integration tab content structure similar to above */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                <Image 
                  src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg" 
                  alt="Integration Ecosystem" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover" 
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Seamless Integrations</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with over 200+ tools and services out of the box. Import data from any source and create a unified analytics platform.
                </p>
                
                <div className="space-y-4 mt-6">
                  <FeatureDetail 
                    title="200+ Pre-built Connectors" 
                    description="Connect to popular services like Salesforce, Google Analytics, and more."
                  />
                  <FeatureDetail 
                    title="API Access" 
                    description="Full API access for custom integrations and data importing."
                  />
                  <FeatureDetail 
                    title="Real-time Syncing" 
                    description="Keep your data in sync across all connected platforms."
                  />
                </div>
                
                <Button asChild className="mt-8">
                  <Link href="/integrations">
                    Explore integrations <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">More Powerful Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Data Security</h3>
            <p className="text-muted-foreground">Enterprise-grade security with SOC 2 compliance and end-to-end encryption.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Collaboration Tools</h3>
            <p className="text-muted-foreground">Work together with team members through comments, sharing, and collaborative editing.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Mobile App</h3>
            <p className="text-muted-foreground">Access your data on the go with our native iOS and Android applications.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">AI Insights</h3>
            <p className="text-muted-foreground">Get intelligent recommendations and discover hidden patterns in your data.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Data Transformation</h3>
            <p className="text-muted-foreground">Clean, transform, and prepare your data without writing complex formulas.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Alerts & Notifications</h3>
            <p className="text-muted-foreground">Set up custom alerts when metrics reach thresholds or anomalies are detected.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}