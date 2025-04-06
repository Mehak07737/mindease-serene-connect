
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email });
    // Implement actual login logic when backend is connected
    toast({
      title: "Login Attempted",
      description: `Login attempt with email: ${email}`,
      duration: 3000,
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Login - MindEase</title>
        <meta name="description" content="Log in to your MindEase account to access mental health services and support." />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="mindease-container">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-heading font-bold mb-3">Welcome Back</h1>
              <p className="text-gray-600">Log in to continue your mental wellness journey</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="text-right">
                  <Link to="/reset-password" className="text-sm text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-mindease-lavender to-mindease-blue text-white hover:opacity-90 transition-opacity">
                  Login
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up
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

export default LoginPage;
