
import { Button } from '@/components/ui/button';
import { useBookingModal } from '@/hooks/useBookingModal';

const BookingCTA = () => {
  const { openModal } = useBookingModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-3 px-4 z-40">
      <div className="spa-container flex justify-between items-center">
        <div className="hidden md:block">
          <p className="text-sm font-medium">Ready for your wellness experience?</p>
          <p className="text-xs text-gray-500">We'll come to your location</p>
        </div>
        <Button 
          onClick={openModal}
          className="spa-button w-full md:w-auto"
        >
          Book Your Spa Session
        </Button>
      </div>
    </div>
  );
};

export default BookingCTA;
