
import { Button } from '@/components/ui/button';
import { useBookingModal } from '@/hooks/useBookingModal';

const ServicesPage = () => {
  const { openModal } = useBookingModal();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-spa-beige py-16 md:py-24">
        <div className="spa-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-spa-charcoal mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Premium mobile spa treatments brought directly to your location
            </p>
            <div className="w-24 h-1 bg-spa-lavender mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="spa-section">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Explore Our Treatment Categories
            </h2>
            <p className="text-lg text-gray-600">
              All services can be customized to your preferences and delivered at your chosen location.
            </p>
          </div>

          {/* Massage Services */}
          <div className="mb-20">
            <h3 className="text-2xl font-playfair font-bold text-spa-lavender mb-8 text-center">
              Massage Therapy
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-3">Swedish Massage</h4>
                <p className="text-gray-600 mb-4">
                  A gentle, relaxing massage that uses long strokes, kneading, and circular movements to ease tension and promote relaxation.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 60/90 min</p>
                    <p className="text-spa-lavender font-semibold">Starting at R750</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-outline"
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-3">Deep Tissue Massage</h4>
                <p className="text-gray-600 mb-4">
                  Targets deeper layers of muscles and connective tissue, perfect for chronic tension and athletic recovery.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 60/90 min</p>
                    <p className="text-spa-lavender font-semibold">Starting at R850</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-outline"
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-3">Hot Stone Massage</h4>
                <p className="text-gray-600 mb-4">
                  Combines massage with the placement of heated stones on specific points of the body to enhance relaxation.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 75/90 min</p>
                    <p className="text-spa-lavender font-semibold">Starting at R950</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-outline"
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-3">Couples Massage</h4>
                <p className="text-gray-600 mb-4">
                  Experience relaxation together. Two therapists perform massages simultaneously in the comfort of your home.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 60/90 min</p>
                    <p className="text-spa-lavender font-semibold">Starting at R1500</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-outline"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Facial Treatments */}
          <div className="mb-20">
            <h3 className="text-2xl font-playfair font-bold text-spa-green mb-8 text-center">
              Facial Treatments
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-3">Classic Facial</h4>
                <p className="text-gray-600 mb-4">
                  A revitalizing facial that cleanses, exfoliates, and nourishes the skin, leaving it refreshed and glowing.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 60 min</p>
                    <p className="text-spa-green font-semibold">Starting at R650</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-secondary"
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-3">Anti-Aging Facial</h4>
                <p className="text-gray-600 mb-4">
                  Targets fine lines and wrinkles with specialized products to promote skin elasticity and youthful appearance.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 75 min</p>
                    <p className="text-spa-green font-semibold">Starting at R850</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-secondary"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Body Treatments */}
          <div className="mb-20">
            <h3 className="text-2xl font-playfair font-bold text-spa-lavender mb-8 text-center">
              Body Treatments
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-3">Body Scrub</h4>
                <p className="text-gray-600 mb-4">
                  Exfoliates and rejuvenates your skin, removing dead cells and promoting circulation for a healthy glow.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 45 min</p>
                    <p className="text-spa-lavender font-semibold">Starting at R600</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-outline"
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-playfair font-semibold mb-3">Detox Wrap</h4>
                <p className="text-gray-600 mb-4">
                  A purifying treatment that helps eliminate toxins, reduce water retention, and smooth skin.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 60 min</p>
                    <p className="text-spa-lavender font-semibold">Starting at R750</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-outline"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness Packages */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-spa-green mb-8 text-center">
              Wellness Packages
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-spa-green">
                <h4 className="text-xl font-playfair font-semibold mb-3">Relax & Rejuvenate</h4>
                <p className="text-gray-600 mb-4">
                  Includes a 60-minute Swedish massage and a classic facial for complete relaxation.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 2 hours</p>
                    <p className="text-spa-green font-semibold">R1300 (Save R100)</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-secondary"
                  >
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-spa-green">
                <h4 className="text-xl font-playfair font-semibold mb-3">Ultimate Indulgence</h4>
                <p className="text-gray-600 mb-4">
                  Our premium package includes deep tissue massage, anti-aging facial, and body scrub.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Duration: 3 hours</p>
                    <p className="text-spa-green font-semibold">R2100 (Save R200)</p>
                  </div>
                  <Button 
                    onClick={openModal}
                    className="spa-button-secondary"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group & Event Services */}
      <section className="spa-section bg-spa-beige">
        <div className="spa-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Group & Event Services
            </h2>
            <p className="text-lg text-gray-600">
              Perfect for corporate events, bridal parties, birthdays, and special occasions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair font-semibold mb-4">Customized Group Experiences</h3>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in creating tailored wellness experiences for groups of any size. Our team can provide multiple therapists to serve your guests simultaneously, making it perfect for:
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3 mt-1">
                  <span className="text-spa-lavender font-bold">✓</span>
                </div>
                <span>Corporate wellness events</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3 mt-1">
                  <span className="text-spa-lavender font-bold">✓</span>
                </div>
                <span>Bridal parties and wedding preparations</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3 mt-1">
                  <span className="text-spa-lavender font-bold">✓</span>
                </div>
                <span>Birthday celebrations</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3 mt-1">
                  <span className="text-spa-lavender font-bold">✓</span>
                </div>
                <span>Girls' night in or friendship gatherings</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3 mt-1">
                  <span className="text-spa-lavender font-bold">✓</span>
                </div>
                <span>Retirement celebrations</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3 mt-1">
                  <span className="text-spa-lavender font-bold">✓</span>
                </div>
                <span>Holiday parties and family gatherings</span>
              </li>
            </ul>
            
            <p className="text-gray-600 mb-8">
              Group pricing varies based on services selected, number of guests, and location. Contact us for a personalized quote.
            </p>
            
            <div className="text-center">
              <Button 
                onClick={openModal}
                className="spa-button"
              >
                Enquire About Group Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-spa-lavender text-white py-16">
        <div className="spa-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your mobile spa session now and let us bring relaxation to you.
          </p>
          <Button 
            onClick={openModal}
            className="bg-white text-spa-lavender hover:bg-spa-beige transition-colors"
          >
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
