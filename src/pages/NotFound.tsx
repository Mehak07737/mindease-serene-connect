
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Page Not Found - MindEase</title>
        <meta name="description" content="The page you were looking for could not be found." />
      </Helmet>
      
      <div className="mindease-container py-20">
        <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-mindease-lavender/50 flex items-center justify-center mb-6">
            <span className="text-4xl font-heading font-bold text-primary">404</span>
          </div>
          <h1 className="text-3xl font-heading font-bold mb-4 text-gray-800">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-mindease-lavender to-mindease-blue text-white hover:opacity-90 transition-opacity px-8">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
