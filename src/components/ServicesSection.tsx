
import { Card, CardContent } from "@/components/ui/card";
import { Video, MessageCircle, Calendar, FileText } from "lucide-react";

const services = [
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Online Consultations",
    description: "Connect with licensed mental health professionals through secure video calls from the comfort of your home.",
    color: "bg-mindease-lavender/20",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-mindease-blue" />,
    title: "AI Support Chat",
    description: "Get immediate support through our AI-powered chatbot trained to provide mental health guidance and resources.",
    color: "bg-mindease-blue/20",
  },
  {
    icon: <Calendar className="h-8 w-8 text-mindease-mint" />,
    title: "Wellness Planner",
    description: "Create personalized mental wellness routines and track your progress with our interactive planner.",
    color: "bg-mindease-mint/20",
  },
  {
    icon: <FileText className="h-8 w-8 text-mindease-peach" />,
    title: "Resource Library",
    description: "Access a comprehensive library of articles, exercises, and tools for various mental health challenges.",
    color: "bg-mindease-peach/20",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mindease-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive mental health support designed to help you thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-6">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
