import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import { Suspense } from 'react';
import AuthProvider from '@/components/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashflow - Modern SaaS Analytics Platform',
  description: 'Powerful analytics and dashboard solution for modern businesses',
  keywords: 'saas, analytics, dashboard, business intelligence, data visualization',
  openGraph: {
    title: 'Dashflow - Modern SaaS Analytics Platform',
    description: 'Powerful analytics and dashboard solution for modern businesses',
    url: 'https://dashflow.com',
    siteName: 'Dashflow',
    images: [
      {
        url: 'https://dashflow.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashflow - Modern SaaS Analytics Platform',
    description: 'Powerful analytics and dashboard solution for modern businesses',
    creator: '@dashflow',
    images: ['https://dashflow.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}