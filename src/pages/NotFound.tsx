
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/useBookingModal";

const NotFound = () => {
  const location = useLocation();
  const { openModal } = useBookingModal();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-spa-beige px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-playfair font-bold text-spa-lavender mb-4">404</h1>
        <p className="text-2xl text-spa-charcoal mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="spa-button w-full sm:w-auto">
              Return to Home
            </Button>
          </Link>
          <Button 
            onClick={openModal}
            variant="outline" 
            className="border-spa-lavender text-spa-lavender hover:bg-spa-lavender hover:text-white w-full sm:w-auto"
          >
            Book a Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
