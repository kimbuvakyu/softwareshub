import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="min-h-screen">
        {/* We'll add more sections here soon */}
      </div>
    </Layout>
  );
}