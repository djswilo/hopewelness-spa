
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Use navigate instead of Navigate component for more reliable routing on GitHub Pages
    navigate('/', { replace: true });
  }, [navigate]);
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-playfair">Loading HopeWellness Spa...</h2>
        <p className="mt-2 text-gray-500">Please wait while we prepare your wellness experience.</p>
      </div>
    </div>
  );
};

export default Index;
