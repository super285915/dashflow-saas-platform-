'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    companySize: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, companySize: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      setFormState({
        name: '',
        email: '',
        companySize: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Get in Touch"
        description="Have questions or need help? We're here to assist you with any inquiries."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Company Size</Label>
                <RadioGroup 
                  value={formState.companySize} 
                  onValueChange={handleRadioChange}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-10" id="1-10" />
                      <Label htmlFor="1-10">1-10</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="11-50" id="11-50" />
                      <Label htmlFor="11-50">11-50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="51-200" id="51-200" />
                      <Label htmlFor="51-200">51-200</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="201+" id="201+" />
                      <Label htmlFor="201+">201+</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..." 
                  rows={6}
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MailIcon className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">hello@dashflow.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageCircleIcon className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h4 className="font-medium">Live Chat</h4>
                  <p className="text-sm text-muted-foreground">Available 24/7 for support</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Office Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">San Francisco</h4>
                <p className="text-sm text-muted-foreground">
                  555 Market St, Suite 1000<br />
                  San Francisco, CA 94105
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">New York</h4>
                <p className="text-sm text-muted-foreground">
                  350 5th Avenue<br />
                  New York, NY 10118
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">London</h4>
                <p className="text-sm text-muted-foreground">
                  10 Finsbury Square<br />
                  London EC2A 1AF, UK
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-medium mb-2">How long does it take to get set up?</h3>
            <p className="text-muted-foreground">
              Most customers are up and running within a day. Our onboarding team will help you get set up quickly and efficiently.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Do you offer implementation services?</h3>
            <p className="text-muted-foreground">
              Yes, our professional services team can help with custom implementation, training, and ongoing support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">What kind of support do you offer?</h3>
            <p className="text-muted-foreground">
              We offer email, chat, and phone support depending on your plan. Enterprise customers receive dedicated account management.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Can I migrate data from another platform?</h3>
            <p className="text-muted-foreground">
              Yes, we provide data migration tools and services to help you transition smoothly from your current solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}