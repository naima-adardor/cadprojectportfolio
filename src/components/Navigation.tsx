import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [


    { label: "Projecten", href: "#projects" },

    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--glass-bg)] backdrop-blur-lg border-b border-[var(--glass-border)] shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
      
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
         
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className=" bg-black/80 p-5 bg-blend-overlay rounded-md md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="w-full">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
