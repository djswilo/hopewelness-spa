
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useBookingModal } from '@/hooks/useBookingModal';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const { openModal } = useBookingModal();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-spa-beige py-16 md:py-24">
        <div className="spa-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-spa-charcoal mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Have questions or ready to book? We're here to help.
            </p>
            <div className="w-24 h-1 bg-spa-lavender mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="spa-section bg-white">
        <div className="spa-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-spa-charcoal mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-spa-lavender-light rounded-full flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-spa-lavender" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Office Address</h3>
                    <p className="text-gray-600">
                      47 Mozart Lane, Sagewood, Midrand, 1682, Pretoria, South Africa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-spa-green-light rounded-full flex items-center justify-center mr-4">
                    <Phone size={24} className="text-spa-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone Numbers</h3>
                    <p className="text-gray-600 mb-1">
                      Office: <a href="tel:0123876120" className="text-spa-lavender hover:underline">012 387 6120</a>
                    </p>
                    <p className="text-gray-600">
                      WhatsApp/Mobile: <a href="https://wa.me/791485902" className="text-spa-lavender hover:underline">079 148 5902</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-spa-lavender-light rounded-full flex items-center justify-center mr-4">
                    <Mail size={24} className="text-spa-lavender" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@hopewellnessspa.com" className="text-spa-lavender hover:underline">
                        info@hopewellnessspa.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-spa-green-light rounded-full flex items-center justify-center mr-4">
                    <Instagram size={24} className="text-spa-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Social Media</h3>
                    <p className="text-gray-600">
                      <a href="https://instagram.com/hopewellnessspa" target="_blank" rel="noopener noreferrer" className="text-spa-lavender hover:underline">
                        @hopewellnessspa
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-spa-lavender-light rounded-full flex items-center justify-center mr-4">
                    <Clock size={24} className="text-spa-lavender" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={openModal}
                  className="spa-button"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-spa-charcoal mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="spa-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="spa-section bg-spa-beige">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Our mobile spa services are available throughout Pretoria and surrounding areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">Pretoria</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Pretoria East</li>
                <li>Pretoria North</li>
                <li>Centurion</li>
                <li>Hatfield</li>
                <li>Menlyn</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">Johannesburg</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Sandton</li>
                <li>Rosebank</li>
                <li>Midrand</li>
                <li>Fourways</li>
                <li>Randburg</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">Other Areas</h3>
              <p className="text-gray-600 mb-4">
                We also serve other areas upon request. Additional travel fees may apply.
              </p>
              <p className="text-gray-600">
                Contact us to confirm availability in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="spa-section">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-spa-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about our mobile spa services? Find answers below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">How much space do you need for a massage?</h3>
              <p className="text-gray-600">
                We typically need a space of about 2m x 2m for setting up our massage table. We can work with smaller spaces if needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">How far in advance should I book?</h3>
              <p className="text-gray-600">
                We recommend booking at least 48 hours in advance, especially for weekends. For group bookings, 1-2 weeks notice is preferred.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">Do I need to provide anything?</h3>
              <p className="text-gray-600">
                No, we bring everything needed for your treatment, including tables, linens, oils, and equipment. Just provide the space!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, credit/debit cards, bank transfers, and mobile payment apps. Payment is due at the time of service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">Do you have a cancellation policy?</h3>
              <p className="text-gray-600">
                Yes, cancellations must be made at least 24 hours in advance for a full refund. Late cancellations may be subject to a fee.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">Can I request a specific therapist?</h3>
              <p className="text-gray-600">
                Yes, you can request a specific therapist when booking, subject to their availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-spa-lavender text-white py-16">
        <div className="spa-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Mobile Spa Experience?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today or book directly online.
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

export default ContactPage;
