
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-mindease-gray/30">
      <div className="mindease-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold mb-6 text-gray-800">
              About MindEase
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded by a team of mental health professionals and technology experts, 
              MindEase bridges the gap between traditional therapy and modern digital 
              solutions. We believe that mental health support should be accessible, 
              personalized, and effective.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                <p className="text-gray-700">
                  <strong>Professional Support:</strong> All our psychiatrists and therapists are licensed and experienced.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                <p className="text-gray-700">
                  <strong>Evidence-Based Approach:</strong> Our methods and resources are grounded in scientific research.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                <p className="text-gray-700">
                  <strong>Privacy Focused:</strong> Your data security and confidentiality are our top priorities.
                </p>
              </div>
            </div>
            <Link to="/about">
              <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-mindease-lavender/20">
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div className="lg:order-1 grid grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Indian therapist in session" 
                className="w-full h-auto rounded-2xl shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1623594444359-d05c641eab5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Indian family discussing wellness" 
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1568306336662-98b30497e833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Indian woman in meditation practice" 
                className="w-full h-auto rounded-2xl shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Indian healthcare professionals discussing mental health" 
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
