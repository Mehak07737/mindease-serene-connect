
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt with:", { name, email });
    // Implement actual signup logic when backend is connected
    toast({
      title: "Signup Attempted",
      description: `Signup attempt for ${name} with email: ${email}`,
      duration: 3000,
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Sign Up - MindEase</title>
        <meta name="description" content="Create your MindEase account to access mental health services and support." />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="mindease-container">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-heading font-bold mb-3">Create Your Account</h1>
              <p className="text-gray-600">Join MindEase and start your mental wellness journey</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-mindease-lavender to-mindease-blue text-white hover:opacity-90 transition-opacity">
                  Sign Up
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignupPage;
