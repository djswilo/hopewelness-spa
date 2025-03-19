
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BookingCTA from './BookingCTA';
import BookingModal from '../modals/BookingModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-20">
        {children}
      </main>
      <BookingCTA />
      <Footer />
      <BookingModal />
    </div>
  );
};

export default MainLayout;
