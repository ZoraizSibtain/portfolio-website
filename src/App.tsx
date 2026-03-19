import Home from '@/components/Home/Home.tsx';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div className="bg-white text-primary">
      <Home />
      <SpeedInsights />
    </div>
  );
}
