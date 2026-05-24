import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
