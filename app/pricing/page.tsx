'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { CheckIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started with analytics',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        { name: 'Up to 5 users', included: true },
        { name: '10 dashboards', included: true },
        { name: '30-day data history', included: true },
        { name: 'Basic integrations (5)', included: true },
        { name: 'Email support', included: true },
        { name: 'Advanced analytics', included: false },
        { name: 'Custom branding', included: false },
        { name: 'API access', included: false },
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing organizations',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        { name: 'Up to 20 users', included: true },
        { name: 'Unlimited dashboards', included: true },
        { name: '1-year data history', included: true },
        { name: 'Advanced integrations (20+)', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom branding', included: true },
        { name: 'API access', included: false },
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: 249,
      annualPrice: 199,
      features: [
        { name: 'Unlimited users', included: true },
        { name: 'Unlimited dashboards', included: true },
        { name: 'Unlimited data history', included: true },
        { name: 'All integrations (200+)', included: true },
        { name: '24/7 phone, email & chat support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom branding', included: true },
        { name: 'API access', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Transparent Pricing"
        description="Choose the plan that's right for your business. All plans include a 14-day free trial."
      />
      
      <div className="flex items-center justify-center my-12 space-x-3">
        <span className={cn("text-sm font-medium", billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground')}>
          Monthly
        </span>
        <Switch 
          checked={billingCycle === 'annual'} 
          onCheckedChange={(checked) => setBillingCycle(checked ? 'annual' : 'monthly')} 
        />
        <span className={cn("text-sm font-medium flex items-center", billingCycle === 'annual' ? 'text-foreground' : 'text-muted-foreground')}>
          Annual
          <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800">
            Save 20%
          </Badge>
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={cn(
            "relative flex flex-col", 
            plan.popular ? "border-primary shadow-lg" : ""
          )}>
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <Badge className="bg-primary hover:bg-primary">Most Popular</Badge>
              </div>
            )}
            
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
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
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start">
                    {feature.included ? (
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <XIcon className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                    )}
                    <span className={cn(
                      "text-sm", 
                      feature.included ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button 
                asChild 
                className={cn("w-full", !plan.popular && "bg-secondary text-secondary-foreground hover:bg-secondary/80")}
              >
                <Link href={plan.name === 'Enterprise' ? '/contact' : '/signup'}>
                  {plan.cta}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-medium mb-2">Can I change plans later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades apply at the end of your billing cycle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Do you offer special pricing for startups?</h3>
            <p className="text-muted-foreground">
              Yes! We offer eligible startups up to 90% off for the first year. Contact our sales team to apply.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">What happens after my trial ends?</h3>
            <p className="text-muted-foreground">
              After your 14-day trial, you'll be prompted to select a plan. We won't charge you automatically, and you can continue with free limited access.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Do you offer refunds?</h3>
            <p className="text-muted-foreground">
              Yes, if you're not satisfied with our service, you can request a full refund within 30 days of your initial purchase.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center p-8 bg-muted rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Need a custom solution?</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Our enterprise plan can be customized to meet your specific needs. Contact our sales team to discuss your requirements.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </div>
    </div>
  );
}