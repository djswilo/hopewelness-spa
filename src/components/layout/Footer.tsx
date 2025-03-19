
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBookingModal } from '@/hooks/useBookingModal';

const Footer = () => {
  const { openModal } = useBookingModal();

  return (
    <footer className="bg-spa-charcoal text-white">
      <div className="spa-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-spa-lavender-light">HopeWellness</span>
              <span className="text-xl font-playfair text-spa-green-light ml-1">Spa</span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              A mobile spa that brings wellness and relaxation directly to your location.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-playfair font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-playfair font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-spa-lavender-light" />
                <span className="text-sm">47 Mozart Lane, Sagewood, Midrand, 1682, Pretoria, South Africa</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-spa-lavender-light" />
                <a href="tel:0123876120" className="text-sm hover:text-spa-lavender-light transition-colors">012 387 6120</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-spa-lavender-light" />
                <a href="mailto:info@hopewellnessspa.com" className="text-sm hover:text-spa-lavender-light transition-colors">info@hopewellnessspa.com</a>
              </li>
              <li className="flex items-center">
                <Instagram size={18} className="mr-2 text-spa-lavender-light" />
                <a href="https://instagram.com/hopewellnessspa" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-spa-lavender-light transition-colors">@hopewellnessspa</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-playfair font-medium mb-4">Book Your Session</h3>
            <p className="text-sm mb-4">Ready to experience our mobile spa services? Book your session now.</p>
            <Button onClick={openModal} className="spa-button w-full">
              Book Now
            </Button>
            <p className="mt-4 text-sm text-gray-300">
              WhatsApp: <a href="https://wa.me/791485902" className="text-spa-lavender-light hover:underline">079 148 5902</a>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} HopeWellness Spa. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
