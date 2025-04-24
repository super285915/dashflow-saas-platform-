import { CheckCircle } from 'lucide-react';

interface FeatureDetailProps {
  title: string;
  description: string;
}

export function FeatureDetail({ title, description }: FeatureDetailProps) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}