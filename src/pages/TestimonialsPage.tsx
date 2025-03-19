
import { Button } from '@/components/ui/button';
import { useBookingModal } from '@/hooks/useBookingModal';
import { Star } from 'lucide-react';

const TestimonialsPage = () => {
  const { openModal } = useBookingModal();

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? "text-spa-gold fill-spa-gold" : "text-gray-300"}
      />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-spa-beige py-16 md:py-24">
        <div className="spa-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-spa-charcoal mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Hear what our clients have to say about their mobile spa experiences
            </p>
            <div className="w-24 h-1 bg-spa-lavender mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="spa-section">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Our Clients' Experiences
            </h2>
            <p className="text-lg text-gray-600">
              We take pride in delivering exceptional mobile spa experiences that leave lasting impressions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-spa-lavender">
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(5)}
                </div>
                <span className="text-sm text-gray-500">| Massage Therapy</span>
              </div>
              <p className="text-lg italic mb-6">
                "I was skeptical about having a massage at home, thinking it wouldn't be as relaxing as going to a spa. I couldn't have been more wrong! The therapist from HopeWellness created a serene atmosphere in my living room, complete with calming music and aromatherapy. The massage was exactly what I needed, and I didn't have to drive anywhere afterward. Perfect for my busy schedule!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3">
                  <span className="text-spa-lavender font-bold">S</span>
                </div>
                <div>
                  <p className="font-medium">Sarah M.</p>
                  <p className="text-sm text-gray-500">Pretoria, South Africa</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-spa-green">
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(5)}
                </div>
                <span className="text-sm text-gray-500">| Corporate Wellness Event</span>
              </div>
              <p className="text-lg italic mb-6">
                "Our company hired HopeWellness Spa for our annual employee wellness day, and it was the highlight of our event! Their team of therapists efficiently set up stations for chair massages, mini-facials, and hand treatments. Everyone on our team was impressed with the professionalism and quality of service. Several employees have already asked when we're bringing them back!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-spa-green-light flex items-center justify-center mr-3">
                  <span className="text-spa-green font-bold">D</span>
                </div>
                <div>
                  <p className="font-medium">David T.</p>
                  <p className="text-sm text-gray-500">HR Director, Tech Solutions Inc.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-spa-lavender">
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(5)}
                </div>
                <span className="text-sm text-gray-500">| Couples Massage</span>
              </div>
              <p className="text-lg italic mb-6">
                "My husband and I celebrated our anniversary with a couples massage from HopeWellness Spa, and it was the perfect gift to ourselves. The therapists arrived on time, set up quickly, and created a luxurious experience right in our guest room. The quality of the massage was outstanding, and having it at home made the whole experience so much more intimate and special. We'll definitely be booking again!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3">
                  <span className="text-spa-lavender font-bold">L</span>
                </div>
                <div>
                  <p className="font-medium">Lisa & John K.</p>
                  <p className="text-sm text-gray-500">Midrand, South Africa</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-spa-green">
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(5)}
                </div>
                <span className="text-sm text-gray-500">| Facial Treatment</span>
              </div>
              <p className="text-lg italic mb-6">
                "I've been to many spas for facials, but the experience I had with HopeWellness was exceptional. The esthetician was knowledgeable and took time to analyze my skin before starting the treatment. What I appreciated most was how she explained each step and the products she was using. My skin has never looked better, and I loved not having to go out in public right after my facial. The convenience factor is amazing!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-spa-green-light flex items-center justify-center mr-3">
                  <span className="text-spa-green font-bold">M</span>
                </div>
                <div>
                  <p className="font-medium">Michelle P.</p>
                  <p className="text-sm text-gray-500">Pretoria, South Africa</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-spa-lavender">
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(5)}
                </div>
                <span className="text-sm text-gray-500">| Bridal Party</span>
              </div>
              <p className="text-lg italic mb-6">
                "We hired HopeWellness for my sister's bridal shower, and it was such a hit! The team arrived with everything needed to transform our rental venue into a spa oasis. All six of us received massages and mini-facials, and the bride-to-be got a special deluxe treatment. It was so much fun having this experience together as a group, and the quality of service was top-notch. Highly recommend for any special occasion!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-spa-lavender-light flex items-center justify-center mr-3">
                  <span className="text-spa-lavender font-bold">T</span>
                </div>
                <div>
                  <p className="font-medium">Thandi N.</p>
                  <p className="text-sm text-gray-500">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Write a Testimonial Section */}
      <section className="spa-section bg-spa-beige">
        <div className="spa-container">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">
              Share Your Experience
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Have you experienced our mobile spa services? We'd love to hear about your experience!
            </p>
            <div className="flex justify-center">
              <Button className="spa-button">
                Write a Testimonial
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
            Join our satisfied clients and book your mobile spa session today.
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

export default TestimonialsPage;
