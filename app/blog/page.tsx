import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { BlogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Insights & Resources"
        description="Latest thoughts, tips, and insights about analytics and business intelligence to help you make better decisions."
      />
      
      <div className="mt-8 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search articles..." 
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover"
              />
            </div>
            
            <CardHeader className="flex-grow">
              <div className="flex items-center mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground ml-3">{post.date}</span>
              </div>
              <CardTitle className="line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-3 mt-2">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            
            <CardFooter className="border-t pt-4">
              <div className="flex items-center">
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium ml-3">{post.author.name}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="py-6 h-auto">
            Data Analytics
          </Button>
          <Button variant="outline" className="py-6 h-auto">
            Business Intelligence
          </Button>
          <Button variant="outline" className="py-6 h-auto">
            Dashboards
          </Button>
          <Button variant="outline" className="py-6 h-auto">
            Reporting
          </Button>
        </div>
      </div>
      
      <div className="mt-20 text-center p-8 bg-muted rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Subscribe to our newsletter</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Get the latest articles, resources, and case studies delivered to your inbox weekly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            placeholder="Enter your email" 
            type="email"
            className="flex-grow"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}