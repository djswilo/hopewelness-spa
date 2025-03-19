
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SitemapPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-spa-beige py-16 md:py-24">
        <div className="spa-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-spa-charcoal mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Find your way around our website
            </p>
            <div className="w-24 h-1 bg-spa-lavender mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="spa-section">
        <div className="spa-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-spa-charcoal mb-6 pb-2 border-b border-gray-200">
                Main Pages
              </h2>
              
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Home</span>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1 ml-6">Our main page with overview of services</p>
                </li>
                
                <li>
                  <Link to="/about" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>About Us</span>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1 ml-6">Learn about our story and team</p>
                </li>
                
                <li>
                  <Link to="/services" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Services</span>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1 ml-6">Detailed descriptions of our spa treatments</p>
                </li>
                
                <li>
                  <Link to="/testimonials" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Testimonials</span>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1 ml-6">Read what our clients say about us</p>
                </li>
                
                <li>
                  <Link to="/contact" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Contact</span>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1 ml-6">Get in touch with us</p>
                </li>
                
                <li>
                  <Link to="/sitemap" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Sitemap</span>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1 ml-6">This page - site navigation overview</p>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-spa-charcoal mb-6 mt-12 pb-2 border-b border-gray-200">
                Legal Pages
              </h2>
              
              <ul className="space-y-4">
                <li>
                  <Link to="#" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                
                <li>
                  <Link to="#" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-spa-charcoal mb-6 pb-2 border-b border-gray-200">
                Service Categories
              </h2>
              
              <ul className="space-y-4">
                <li>
                  <Link to="/services" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Massage Therapy</span>
                  </Link>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Swedish Massage
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Deep Tissue Massage
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Hot Stone Massage
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Couples Massage
                      </Link>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <Link to="/services" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Facial Treatments</span>
                  </Link>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Classic Facial
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Anti-Aging Facial
                      </Link>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <Link to="/services" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Body Treatments</span>
                  </Link>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Body Scrub
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Detox Wrap
                      </Link>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <Link to="/services" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Wellness Packages</span>
                  </Link>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Relax & Rejuvenate
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-gray-600 hover:text-spa-lavender transition-colors">
                        - Ultimate Indulgence
                      </Link>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <Link to="/services" className="flex items-center text-spa-lavender hover:text-spa-lavender-light transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    <span>Group & Event Services</span>
                  </Link>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-spa-charcoal mb-6 mt-12 pb-2 border-b border-gray-200">
                Contact Methods
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <ChevronRight size={16} className="mr-2 text-spa-lavender" />
                  <span>Phone: <a href="tel:0123876120" className="text-spa-lavender hover:underline">012 387 6120</a></span>
                </li>
                
                <li className="flex items-center text-gray-600">
                  <ChevronRight size={16} className="mr-2 text-spa-lavender" />
                  <span>WhatsApp: <a href="https://wa.me/791485902" className="text-spa-lavender hover:underline">079 148 5902</a></span>
                </li>
                
                <li className="flex items-center text-gray-600">
                  <ChevronRight size={16} className="mr-2 text-spa-lavender" />
                  <span>Email: <a href="mailto:info@hopewellnessspa.com" className="text-spa-lavender hover:underline">info@hopewellnessspa.com</a></span>
                </li>
                
                <li className="flex items-center text-gray-600">
                  <ChevronRight size={16} className="mr-2 text-spa-lavender" />
                  <span>Instagram: <a href="https://instagram.com/hopewellnessspa" target="_blank" rel="noopener noreferrer" className="text-spa-lavender hover:underline">@hopewellnessspa</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
