
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import SitemapPage from "./pages/SitemapPage";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Get the base URL for GitHub Pages routing
const basename = '/';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/" element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          } />
          <Route path="/about" element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          } />
          <Route path="/services" element={
            <MainLayout>
              <ServicesPage />
            </MainLayout>
          } />
          <Route path="/testimonials" element={
            <MainLayout>
              <TestimonialsPage />
            </MainLayout>
          } />
          <Route path="/contact" element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          } />
          <Route path="/sitemap" element={
            <MainLayout>
              <SitemapPage />
            </MainLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
