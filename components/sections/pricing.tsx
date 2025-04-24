'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started with analytics',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Up to 5 users',
        '10 dashboards',
        '30-day data history',
        'Basic integrations (5)',
        'Email support',
      ],
      cta: 'Start Free Trial',
      href: '/auth/signup',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing organizations',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Up to 20 users',
        'Unlimited dashboards',
        '1-year data history',
        'Advanced integrations (20+)',
        'Priority email & chat support',
        'Advanced analytics',
        'Custom branding',
      ],
      cta: 'Start Free Trial',
      href: '/auth/signup',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: 249,
      annualPrice: 199,
      features: [
        'Unlimited users',
        'Unlimited dashboards',
        'Unlimited data history',
        'All integrations (200+)',
        '24/7 phone, email & chat support',
        'Advanced analytics',
        'Custom branding',
        'API access',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false,
    },
  ];
  
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Transparent pricing for every business
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          All plans include a 14-day free trial. No credit card required.
        </p>
        
        <div className="flex items-center justify-center mt-8 space-x-3">
          <span className={cn("text-sm font-medium", billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground')}>
            Monthly
          </span>
          <Switch 
            checked={billingCycle === 'annual'} 
            onCheckedChange={(checked) => setBillingCycle(checked ? 'annual' : 'monthly')} 
          />
          <span className={cn("text-sm font-medium flex items-center gap-2", billingCycle === 'annual' ? 'text-foreground' : 'text-muted-foreground')}>
            Annual
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800">
              Save 20%
            </Badge>
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={cn(
              "flex flex-col", 
              plan.popular && "relative border-primary shadow-lg"
            )}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge className="bg-primary hover:bg-primary">Most Popular</Badge>
              </div>
            )}
            
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-muted-foreground ml-2">
                  per user / month
                </span>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button 
                asChild 
                className={cn(
                  "w-full", 
                  !plan.popular && "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <Link href={plan.href}>
                  {plan.cta}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}