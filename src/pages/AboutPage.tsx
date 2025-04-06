
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - MindEase</title>
        <meta name="description" content="Learn more about MindEase, our mission, values, and the team behind our mental health support platform." />
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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="mindease-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                MindEase was founded in 2020 by Dr. Aditya Sharma, a psychiatrist with over 15 years 
                of experience, and tech entrepreneur Vikram Mehta. They shared a vision of combining professional 
                mental healthcare with innovative technology to help more people access the support they need.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small team of five psychiatrists offering remote consultations has grown 
                into a comprehensive mental health platform serving thousands of clients across India. Our approach 
                integrates evidence-based psychological practices with cutting-edge technology to provide 
                accessible, personalized mental health support.
              </p>
              <p className="text-lg text-gray-600">
                Today, MindEase continues to pioneer new ways to support mental wellness through our video 
                consultations, AI-assisted chat support, and personalized wellness planning tools.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Team of Indian mental health professionals" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="py-20 bg-mindease-gray/30">
        <div className="mindease-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-gray-800">Our Mission & Values</h2>
            <p className="text-lg text-gray-600">
              We're guided by a clear mission and a set of core values that inform everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To make professional mental health support accessible to everyone, anytime, anywhere, 
                by combining clinical expertise with innovative technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-mindease-blue mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong>Accessibility:</strong> Break down barriers to mental healthcare
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-mindease-blue mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong>Quality:</strong> Provide evidence-based, professional support
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-mindease-blue mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong>Innovation:</strong> Use technology to enhance mental health care
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-800">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-mindease-lavender/20 w-10 h-10 rounded-full flex items-center justify-center text-primary font-bold mr-3 shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-gray-800">Compassionate Care</h4>
                    <p className="text-gray-600">Treating everyone with empathy, dignity, and respect</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-mindease-blue/20 w-10 h-10 rounded-full flex items-center justify-center text-mindease-blue font-bold mr-3 shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-gray-800">Ethical Practice</h4>
                    <p className="text-gray-600">Upholding the highest standards of professional conduct</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-mindease-mint/20 w-10 h-10 rounded-full flex items-center justify-center text-mindease-mint font-bold mr-3 shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-gray-800">Continuous Improvement</h4>
                    <p className="text-gray-600">Always learning, adapting, and enhancing our services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-mindease-peach/20 w-10 h-10 rounded-full flex items-center justify-center text-mindease-peach font-bold mr-3 shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-gray-800">Inclusive Support</h4>
                    <p className="text-gray-600">Making mental healthcare accessible to diverse populations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-20 bg-white">
        <div className="mindease-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-gray-800">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experts guiding MindEase's mission to transform mental healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-mindease-gray/30 rounded-2xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dr. Aditya Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-1 text-gray-800">Dr. Aditya Sharma</h3>
                <p className="text-primary mb-3">Co-Founder & Chief Medical Officer</p>
                <p className="text-gray-600">
                  With over 15 years as a practicing psychiatrist, Dr. Sharma leads our clinical team and ensures all services meet the highest medical standards.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-mindease-gray/30 rounded-2xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1627640688713-c08850b457ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Vikram Mehta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-1 text-gray-800">Vikram Mehta</h3>
                <p className="text-primary mb-3">Co-Founder & CEO</p>
                <p className="text-gray-600">
                  A tech entrepreneur with a passion for healthcare innovation, Vikram drives MindEase's vision and strategic growth.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-mindease-gray/30 rounded-2xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dr. Meera Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-1 text-gray-800">Dr. Meera Patel</h3>
                <p className="text-primary mb-3">Head of Research & Development</p>
                <p className="text-gray-600">
                  Leading our R&D team, Dr. Patel focuses on integrating the latest psychological research into our treatment approaches and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
