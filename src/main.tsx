
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Capture and handle rendering errors
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Failed to find the root element");
}
