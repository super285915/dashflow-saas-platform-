'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { BarChart2, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserButton } from '@/components/user-button';

const navigationLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-200',
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BarChart2 className="h-6 w-6" />
              <span className="font-bold text-xl">Dashflow</span>
            </Link>
            
            <NavigationMenu className="hidden md:flex ml-10">
              <NavigationMenuList>
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink asChild>
                      <Link 
                        href={link.href}
                        className={cn(
                          'inline-flex h-9 px-4 py-2 items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-primary',
                          isActive(link.href) ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    isActive('/dashboard') ? 'text-primary' : 'text-foreground'
                  )}>
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/dashboard"
                            className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline"
                          >
                            <BarChart2 className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Dashboard Demo
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Experience our interactive dashboard preview with live data visualization.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/features"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Analytics</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Real-time data analytics and interactive visualizations.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/features"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Reporting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Automated reports and scheduling for key stakeholders.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/features"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Integrations</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connect with 200+ tools and services out of the box.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <UserButton />
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      className={cn(
                        'justify-start',
                        isActive(link.href) && 'text-primary'
                      )}
                      asChild
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </Button>
                  ))}
                  <Button
                    variant="ghost"
                    className={cn(
                      'justify-start',
                      isActive('/dashboard') && 'text-primary'
                    )}
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard">Dashboard Demo</Link>
                  </Button>
                  
                  <div className="h-px bg-border my-4" />
                  
                  <Button variant="ghost" className="justify-start" asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/auth/login">Sign in</Link>
                  </Button>
                  <Button className="w-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/auth/signup">Get started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}