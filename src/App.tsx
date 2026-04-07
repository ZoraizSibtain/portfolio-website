import Home from '@/components/Home/Home.tsx';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="bg-white text-primary">
      <Home />
      <Analytics />
    </div>
  );
}
