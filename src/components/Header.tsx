
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (path: string) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="mindease-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mindease-lavender to-mindease-blue flex items-center justify-center mr-2">
              <span className="font-heading font-bold text-white">M</span>
            </div>
            <span className="text-xl font-heading font-semibold text-gray-800">MindEase</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/psychiatrists">Psychiatrists</NavLink>
            <NavLink to="/booking">Book a Session</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => handleNavigate("/login")}
            >
              Login
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-mindease-lavender to-mindease-blue text-white hover:opacity-90 transition-opacity"
              onClick={() => handleNavigate("/signup")}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="mindease-container py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About Us</MobileNavLink>
              <MobileNavLink to="/psychiatrists" onClick={toggleMenu}>Psychiatrists</MobileNavLink>
              <MobileNavLink to="/booking" onClick={toggleMenu}>Book a Session</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            </nav>
            <div className="mt-6 flex flex-col space-y-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full"
                onClick={() => handleNavigate("/login")}
              >
                Login
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-mindease-lavender to-mindease-blue text-white hover:opacity-90 transition-opacity"
                onClick={() => handleNavigate("/signup")}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-gray-700 hover:text-primary transition-colors font-medium">
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link to={to} className="text-gray-700 hover:text-primary transition-colors font-medium text-lg py-1" onClick={onClick}>
    {children}
  </Link>
);

export default Header;
