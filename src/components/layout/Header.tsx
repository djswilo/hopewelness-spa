
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBookingModal } from '@/hooks/useBookingModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useBookingModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="spa-container py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-spa-lavender">HopeWellness</span>
            <span className="text-xl font-playfair text-spa-green ml-1">Spa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="font-medium hover:text-spa-lavender transition-colors">Home</Link>
            <Link to="/about" className="font-medium hover:text-spa-lavender transition-colors">About</Link>
            <Link to="/services" className="font-medium hover:text-spa-lavender transition-colors">Services</Link>
            <Link to="/testimonials" className="font-medium hover:text-spa-lavender transition-colors">Testimonials</Link>
            <Link to="/contact" className="font-medium hover:text-spa-lavender transition-colors">Contact</Link>
            <Button 
              onClick={openModal}
              className="spa-button"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="tel:0123876120" className="text-spa-lavender" aria-label="Call us">
              <Phone size={20} />
            </a>
            <button
              onClick={toggleMenu}
              className="text-spa-charcoal focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium p-2 hover:bg-spa-beige rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium p-2 hover:bg-spa-beige rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="font-medium p-2 hover:bg-spa-beige rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/testimonials" 
              className="font-medium p-2 hover:bg-spa-beige rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="font-medium p-2 hover:bg-spa-beige rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              onClick={() => {
                openModal();
                setIsMenuOpen(false);
              }}
              className="spa-button w-full"
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
