
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useBookingModal } from '@/hooks/useBookingModal';
import { ChevronRight, Award, MapPin, Clock, Users } from 'lucide-react';

const HomePage = () => {
  const { openModal } = useBookingModal();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-spa-lavender-light to-spa-lavender py-20 md:py-28">
        <div className="spa-container">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Experience Serenity at Your Doorstep
            </h1>
            <p className="text-lg md:text-xl mb-8">
              HopeWellness Spa brings premium spa treatments directly to your location. Relax and rejuvenate in the comfort of your chosen environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openModal}
                className="bg-white text-spa-lavender hover:bg-spa-beige hover:text-spa-lavender transition-colors"
              >
                Book Your Experience
              </Button>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-spa-lavender transition-colors">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center opacity-20 md:opacity-30 hidden lg:block"></div>
      </section>

      {/* Features Section */}
      <section className="spa-section">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Why Choose Our Mobile Spa?
            </h2>
            <p className="text-lg text-gray-600">
              We bring the complete spa experience to you, tailored to your needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-spa-lavender-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-spa-lavender" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">We Come to You</h3>
              <p className="text-gray-600">
                No travel needed. We bring the full spa experience to your home, office, or event.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-spa-green" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Professional therapists and high-quality products for a luxury experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-spa-lavender-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-spa-lavender" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book appointments at times that work for you, including evenings and weekends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-spa-green" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Group Services</h3>
              <p className="text-gray-600">
                Perfect for couples, friends, corporate events, and special celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-spa-beige spa-section">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-gray-600">
              Each treatment is customized to your needs and delivered with care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">Massage Therapy</h3>
                <p className="text-gray-600 mb-4">
                  From relaxing Swedish to deep tissue massages, our skilled therapists will release your tension.
                </p>
                <Link to="/services" className="text-spa-lavender font-medium flex items-center hover:text-spa-lavender-light transition-colors">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">Facial Treatments</h3>
                <p className="text-gray-600 mb-4">
                  Revitalize your skin with our customized facials using premium organic products.
                </p>
                <Link to="/services" className="text-spa-lavender font-medium flex items-center hover:text-spa-lavender-light transition-colors">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">Wellness Packages</h3>
                <p className="text-gray-600 mb-4">
                  Complete wellness experiences combining multiple treatments for total rejuvenation.
                </p>
                <Link to="/services" className="text-spa-lavender font-medium flex items-center hover:text-spa-lavender-light transition-colors">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="spa-button-outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="spa-section bg-white">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from those who have experienced our mobile spa services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-spa-beige p-8 rounded-lg">
              <p className="text-lg italic mb-6">
                "The convenience of having a spa treatment at home was amazing. The therapist was professional, and the massage was exactly what I needed. Highly recommend!"
              </p>
              <footer className="font-medium">
                — Sarah M., Pretoria
              </footer>
            </blockquote>

            <blockquote className="bg-spa-beige p-8 rounded-lg">
              <p className="text-lg italic mb-6">
                "We booked HopeWellness for our corporate wellness day, and it was a huge hit! The team handled everything professionally, and our employees loved the experience."
              </p>
              <footer className="font-medium">
                — David T., HR Director
              </footer>
            </blockquote>
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button className="spa-button-outline">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-spa-lavender text-white py-16">
        <div className="spa-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Mobile Spa?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your session now and let us bring relaxation and wellness to your doorstep.
          </p>
          <Button 
            onClick={openModal}
            className="bg-white text-spa-lavender hover:bg-spa-beige transition-colors px-8 py-3 text-lg"
          >
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
