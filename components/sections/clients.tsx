import Image from 'next/image';

export function Clients() {
  const logos = [
    { name: 'Microsoft', style: 'font-semibold text-2xl' },
    { name: 'AirBnb', style: 'font-semibold text-2xl italic' },
    { name: 'Shopify', style: 'font-bold text-2xl' },
    { name: 'Spotify', style: 'font-semibold text-2xl' },
    { name: 'Slack', style: 'font-bold text-2xl' },
    { name: 'Uber', style: 'font-black text-2xl' },
  ];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <p className="text-center text-sm text-muted-foreground mb-8">
        TRUSTED BY INDUSTRY LEADERS
      </p>
      
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
        {logos.map((logo, index) => (
          <div key={index} className={`text-muted-foreground/80 ${logo.style}`}>
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}