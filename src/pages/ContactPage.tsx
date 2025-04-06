
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond as soon as possible.",
      });
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - MindEase</title>
        <meta name="description" content="Get in touch with the MindEase team. We're here to answer your questions about our mental health services and support." />
      </Helmet>

      {/* Header Section */}
      <section className="py-20 bg-mindease-lavender/20">
        <div className="mindease-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help you on your mental health journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="mindease-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Contact Card 1 - Email */}
            <div className="bg-mindease-gray/30 p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-mindease-lavender/50 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-medium mb-2 text-gray-800">Email Us</h3>
              <p className="text-gray-600 mb-1">General Inquiries:</p>
              <p className="font-medium text-gray-800">info@mindease.com</p>
              <p className="text-gray-600 mb-1 mt-2">Support:</p>
              <p className="font-medium text-gray-800">support@mindease.com</p>
            </div>

            {/* Contact Card 2 - Phone */}
            <div className="bg-mindease-gray/30 p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-mindease-blue/50 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-mindease-blue" />
              </div>
              <h3 className="font-heading font-medium mb-2 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-1">Main Office:</p>
              <p className="font-medium text-gray-800">+1 (555) 123-4567</p>
              <p className="text-gray-600 mb-1 mt-2">Support Hotline:</p>
              <p className="font-medium text-gray-800">+1 (555) 987-6543</p>
            </div>

            {/* Contact Card 3 - Location */}
            <div className="bg-mindease-gray/30 p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-mindease-mint/50 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-mindease-mint" />
              </div>
              <h3 className="font-heading font-medium mb-2 text-gray-800">Visit Us</h3>
              <p className="text-gray-600 mb-1">Main Office:</p>
              <p className="font-medium text-gray-800">
                123 Wellness Street<br />
                Mental Health City, MH 10001
              </p>
            </div>

            {/* Contact Card 4 - Hours */}
            <div className="bg-mindease-gray/30 p-6 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-mindease-peach/50 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-mindease-peach" />
              </div>
              <h3 className="font-heading font-medium mb-2 text-gray-800">Office Hours</h3>
              <p className="text-gray-600 mb-1">Monday - Friday:</p>
              <p className="font-medium text-gray-800">9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 mb-1 mt-2">Saturday:</p>
              <p className="font-medium text-gray-800">10:00 AM - 2:00 PM</p>
              <p className="text-gray-600 mb-1 mt-2">Sunday:</p>
              <p className="font-medium text-gray-800">Closed</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-semibold mb-6 text-gray-800">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our services? Want to provide feedback? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your name" 
                      value={formState.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formState.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="What's this regarding?" 
                    value={formState.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    value={formState.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-full">
              <iframe 
                title="MindEase Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941680122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1617796755086!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-mindease-gray/30">
        <div className="mindease-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our mental health services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-heading font-semibold text-lg mb-3 text-gray-800">How do online consultations work?</h3>
              <p className="text-gray-600">
                Our online consultations take place through our secure video platform. Once you book an appointment, you'll receive a link to join your session at the scheduled time from any device.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-heading font-semibold text-lg mb-3 text-gray-800">Are your psychiatrists licensed?</h3>
              <p className="text-gray-600">
                Yes, all our psychiatrists are fully licensed professionals with years of experience in their specialties. You can view their credentials on their profile pages.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-heading font-semibold text-lg mb-3 text-gray-800">How much do sessions cost?</h3>
              <p className="text-gray-600">
                Session costs vary depending on the type of service and the psychiatrist. We accept many insurance plans and also offer affordable self-pay options. Contact us for specific pricing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-heading font-semibold text-lg mb-3 text-gray-800">Can I cancel or reschedule my appointment?</h3>
              <p className="text-gray-600">
                Yes, you can cancel or reschedule your appointment up to 24 hours before your scheduled time without any fee. Changes made within 24 hours may incur a charge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
