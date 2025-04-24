import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-founder',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      bio: 'Former VP of Product at Tableau with 15+ years in data analytics.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-founder',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      bio: 'Previously led engineering at Looker. Expert in scalable data systems.',
    },
    {
      name: 'Jessica Martinez',
      role: 'VP of Design',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Award-winning UX designer focused on creating intuitive data experiences.',
    },
    {
      name: 'David Wilson',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Building reliable, scalable systems for enterprise customers.',
    },
  ];
  
  const values = [
    {
      title: 'Customer First',
      description: "We prioritize our customers' needs in every decision we make.",
    },
    {
      title: 'Data-Driven',
      description: 'We practice what we preach by using data to guide our decisions.',
    },
    {
      title: 'Continuous Innovation',
      description: "We constantly push the boundaries of what's possible in analytics.",
    },
    {
      title: 'Transparency',
      description: 'We believe in being honest and open with our customers and each other.',
    },
  ];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Our Mission"
        description="We're on a mission to make data accessible and actionable for every business."
      />
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-lg overflow-hidden h-[400px]">
          <Image 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
            alt="Team working together" 
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Founded in 2021 by Sarah Johnson and Michael Chen, Dashflow was born from a simple observation: businesses were collecting more data than ever, but struggled to turn that data into actionable insights.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Having worked at leading analytics companies, Sarah and Michael saw firsthand how traditional BI tools were too complex for most users and required specialized skills. They set out to create a platform that would democratize data analytics and make it accessible to everyone in an organization.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Today, Dashflow serves over 3,000 customers worldwide, from startups to Fortune 500 companies, all using our platform to make better decisions with data.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <Badge className="px-3 py-1 text-sm">Founded 2021</Badge>
            <Badge className="px-3 py-1 text-sm">3,000+ Customers</Badge>
            <Badge className="px-3 py-1 text-sm">120+ Team Members</Badge>
            <Badge className="px-3 py-1 text-sm">$30M Funding</Badge>
          </div>
        </div>
      </div>
      
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're always looking for talented individuals to join our growing team. At Dashflow, you'll work alongside some of the brightest minds in analytics, tackling challenging problems and making a real impact.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Our culture is built on collaboration, innovation, and continuous learning. We offer competitive salaries, comprehensive benefits, and a flexible work environment.
          </p>
          
          <Button asChild className="mt-4">
            <Link href="/careers">
              View Open Positions <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="relative rounded-lg overflow-hidden h-[400px]">
          <Image 
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
            alt="Team collaboration" 
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="mt-24 bg-muted rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Dashflow</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of companies using Dashflow to transform their data into actionable insights.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/signup">
              Start Free Trial
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/demo">
              Request Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}