
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useBookingModal } from '@/hooks/useBookingModal';
import { Heart, Star, Leaf, Shield } from 'lucide-react';

const AboutPage = () => {
  const { openModal } = useBookingModal();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-spa-beige py-16 md:py-24">
        <div className="spa-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-spa-charcoal mb-6">
              About HopeWellness Spa
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Bringing wellness and relaxation to your doorstep
            </p>
            <div className="w-24 h-1 bg-spa-lavender mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="spa-section">
        <div className="spa-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-spa-charcoal mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                HopeWellness Spa was founded with a simple but powerful vision: to make wellness accessible to everyone, wherever they are. We recognized that in today's fast-paced world, finding time to visit a traditional spa can be challenging.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our founder, with over 15 years of experience in the wellness industry, saw an opportunity to bring the spa experience directly to clients—in their homes, offices, hotels, or event venues.
              </p>
              <p className="text-lg text-gray-600">
                Since our inception, we've been dedicated to delivering premium mobile spa services throughout Pretoria and surrounding areas, helping our clients find moments of tranquility in their busy lives.
              </p>
            </div>
            <div className="h-96 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center rounded-lg shadow-xl"></div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="spa-section bg-spa-beige">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at HopeWellness Spa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-spa-lavender-light rounded-full flex items-center justify-center">
                  <Heart size={28} className="text-spa-lavender" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Wellness First</h3>
                <p className="text-gray-600">
                  We believe that wellness is holistic. Our treatments aren't just about physical relaxation but consider mental and emotional well-being too.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center">
                  <Star size={28} className="text-spa-green" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Quality Service</h3>
                <p className="text-gray-600">
                  We're committed to excellence in every aspect of our service, from the products we use to the training of our therapists.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-spa-lavender-light rounded-full flex items-center justify-center">
                  <Leaf size={28} className="text-spa-lavender" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We use eco-friendly products and practices, ensuring our services benefit our clients without harming the environment.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-spa-green-light rounded-full flex items-center justify-center">
                  <Shield size={28} className="text-spa-green" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-3">Client Trust</h3>
                <p className="text-gray-600">
                  We respect your privacy and comfort, ensuring a safe and confidential environment for all our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="spa-section">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Our skilled therapists bring years of experience and expertise to every session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Therapist Nandi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Nandi M.</h3>
              <p className="text-spa-lavender mb-3">Senior Massage Therapist</p>
              <p className="text-gray-600">
                With 10+ years of experience, Nandi specializes in deep tissue and hot stone massage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                  alt="Therapist Thabo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Thabo K.</h3>
              <p className="text-spa-lavender mb-3">Esthetician</p>
              <p className="text-gray-600">
                Thabo is our skincare expert, specializing in rejuvenating facials and skin treatments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Therapist Zinhle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Zinhle N.</h3>
              <p className="text-spa-lavender mb-3">Wellness Coordinator</p>
              <p className="text-gray-600">
                Zinhle ensures your experience is seamless from booking to completion of your session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-spa-lavender text-white py-16">
        <div className="spa-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Mobile Spa Services
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to bring wellness to your location? Book your session now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openModal}
              className="bg-white text-spa-lavender hover:bg-spa-beige transition-colors"
            >
              Book Now
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-spa-lavender transition-colors">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
