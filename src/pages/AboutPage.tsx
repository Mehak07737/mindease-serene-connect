
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - MindEase</title>
        <meta name="description" content="Learn more about MindEase, our mission to provide accessible mental health support." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-mindease-lavender/20">
        <div className="mindease-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
            About MindEase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make mental healthcare accessible, effective, and personalized for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mindease-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold mb-8 text-center text-gray-800">Our Mission</h2>
            
            <div className="bg-mindease-gray/20 p-8 rounded-2xl shadow-md">
              <p className="text-lg text-gray-700 mb-8">
                To make professional mental health support accessible to everyone, anytime, anywhere, 
                by combining clinical expertise with innovative technology.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-mindease-lavender/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-medium mb-2 text-gray-800">Accessibility</h3>
                    <p className="text-gray-600">
                      We're breaking down barriers to mental healthcare by offering affordable, 
                      convenient options for everyone, regardless of location or circumstance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mindease-blue/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Check className="h-6 w-6 text-mindease-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-medium mb-2 text-gray-800">Quality</h3>
                    <p className="text-gray-600">
                      All our services are rooted in evidence-based practices, delivered by licensed 
                      professionals committed to the highest standards of mental healthcare.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mindease-mint/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Check className="h-6 w-6 text-mindease-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-medium mb-2 text-gray-800">Innovation</h3>
                    <p className="text-gray-600">
                      We leverage technology to enhance traditional mental health services, creating 
                      personalized experiences that adapt to each individual's unique needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
