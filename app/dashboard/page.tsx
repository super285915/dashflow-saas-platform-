'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { CalendarIcon, Download, TrendingUp, TrendingDown, Users, CreditCard, ShoppingCart, Activity, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

export default function DashboardPage() {
  const [timeFrame, setTimeFrame] = useState('weekly');
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const revenueData = [
    { name: 'Jan', value: 5400 },
    { name: 'Feb', value: 6200 },
    { name: 'Mar', value: 7800 },
    { name: 'Apr', value: 7200 },
    { name: 'May', value: 8100 },
    { name: 'Jun', value: 9500 },
    { name: 'Jul', value: 10200 },
    { name: 'Aug', value: 11800 },
    { name: 'Sep', value: 11200 },
    { name: 'Oct', value: 12500 },
    { name: 'Nov', value: 13100 },
    { name: 'Dec', value: 14800 },
  ];
  
  const usersData = [
    { name: 'Jan', value: 320 },
    { name: 'Feb', value: 380 },
    { name: 'Mar', value: 420 },
    { name: 'Apr', value: 450 },
    { name: 'May', value: 520 },
    { name: 'Jun', value: 580 },
    { name: 'Jul', value: 620 },
    { name: 'Aug', value: 700 },
    { name: 'Sep', value: 780 },
    { name: 'Oct', value: 880 },
    { name: 'Nov', value: 950 },
    { name: 'Dec', value: 1050 },
  ];
  
  const trafficSourceData = [
    { name: 'Direct', value: 35 },
    { name: 'Organic Search', value: 30 },
    { name: 'Paid Search', value: 15 },
    { name: 'Social', value: 12 },
    { name: 'Referral', value: 8 },
  ];
  
  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8 mt-10">
        <PageHeader
          title="Analytics Dashboard"
          description="Interactive demo of the Dashflow analytics platform."
        />
        
        <div className="flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'MMM d, yyyy') : 'Select date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </PopoverContent>
          </Popover>
          
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-3xl">$148,800</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-500 text-sm font-medium">+12.5%</span>
              <span className="text-muted-foreground text-sm ml-2">vs last period</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>New Users</CardDescription>
            <CardTitle className="text-3xl">1,050</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-500 text-sm font-medium">+8.2%</span>
              <span className="text-muted-foreground text-sm ml-2">vs last period</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Conversion Rate</CardDescription>
            <CardTitle className="text-3xl">3.6%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingDown className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-red-500 text-sm font-medium">-1.2%</span>
              <span className="text-muted-foreground text-sm ml-2">vs last period</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Avg Order Value</CardDescription>
            <CardTitle className="text-3xl">$128</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-500 text-sm font-medium">+4.3%</span>
              <span className="text-muted-foreground text-sm ml-2">vs last period</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Revenue Overview</CardTitle>
              <RadioGroup defaultValue={timeFrame} onValueChange={setTimeFrame} className="flex space-x-2">
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="daily" id="daily" className="scale-75" />
                  <Label htmlFor="daily" className="text-xs">Daily</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="weekly" id="weekly" className="scale-75" />
                  <Label htmlFor="weekly" className="text-xs">Weekly</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="monthly" id="monthly" className="scale-75" />
                  <Label htmlFor="monthly" className="text-xs">Monthly</Label>
                </div>
              </RadioGroup>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Traffic Source</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficSourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {trafficSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={usersData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))"/>
                  <XAxis dataKey="name" />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { name: 'Business Analytics', sales: 342, growth: 12.5 },
                { name: 'Financial Dashboard', sales: 276, growth: 8.3 },
                { name: 'Marketing Suite', sales: 183, growth: -2.4 },
                { name: 'Sales Tracker', sales: 124, growth: 6.7 },
                { name: 'Customer Insights', sales: 96, growth: 14.2 },
              ].map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                  </div>
                  <span className={cn(
                    "text-sm font-medium flex items-center",
                    product.growth > 0 ? "text-green-500" : "text-red-500"
                  )}>
                    {product.growth > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {product.growth > 0 ? '+' : ''}{product.growth}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}