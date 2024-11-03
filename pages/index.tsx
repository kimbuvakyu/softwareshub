import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CategoryGrid />
    </Layout>
  );
}