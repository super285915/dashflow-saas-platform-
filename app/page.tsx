import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Testimonials } from '@/components/sections/testimonials';
import { Pricing } from '@/components/sections/pricing';
import { Cta } from '@/components/sections/cta';
import { Clients } from '@/components/sections/clients';
import { Stats } from '@/components/sections/stats';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <Hero />
      <Clients />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <Cta />
    </div>
  );
}