import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "소개", href: "#about" },
  { label: "프로젝트", href: "#projects" },
  { label: "연락", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-xl text-foreground">
          Portfolio<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
