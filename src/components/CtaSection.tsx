
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-mindease-lavender to-mindease-blue">
      <div className="mindease-container text-center">
        <h2 className="text-3xl lg:text-4xl font-heading font-semibold mb-6 text-white">
          Ready to Start Your Mental Wellness Journey?
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Take the first step towards better mental health. Book a session with one of our qualified psychiatrists or start with our AI support chat.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/booking">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Book a Session
            </Button>
          </Link>
          <Link to="/chat">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
              Try AI Chat Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
