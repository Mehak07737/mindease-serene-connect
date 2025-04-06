
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-mindease-lavender/20 to-white py-20">
      <div className="mindease-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 mb-6 leading-tight">
              Your Journey to <span className="text-primary">Mental Wellness</span> Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional support, AI-powered guidance, and personalized resources to help you navigate life's challenges with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button className="bg-gradient-to-r from-mindease-lavender to-mindease-blue text-white hover:opacity-90 transition-opacity text-lg px-6 py-6 h-auto">
                  Book a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/chat">
                <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-mindease-gray/50 transition-colors text-lg px-6 py-6 h-auto">
                  Try AI Chat Support
                </Button>
              </Link>
              <Link to="/wellness">
                <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-mindease-gray/50 transition-colors text-lg px-6 py-6 h-auto">
                  Start My Wellness Plan
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Woman meditating peacefully" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Bubble pattern decorations */}
      <div className="absolute top-20 left-0 w-24 h-24 rounded-full bg-mindease-mint/30 -z-10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-mindease-blue/20 -z-10 blur-xl" />
    </section>
  );
};

export default HeroSection;
