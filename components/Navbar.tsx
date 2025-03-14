import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile nav

const Navbar = ({ color }: { color: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate the dynamic color classes
  const textColor = `text-${color}-400`;
  const hoverTextColor = `hover:text-${color}-200`;
  const linkColor = `text-${color}-300`;
  const hoverLinkColor = `hover:text-${color}-200`;
  const bgHoverColor = `bg-${color}-500`;

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-transparent shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1
          className={`text-4xl font-bold ${textColor} custom-font tracking-wide`}
        ></h1>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-6">
          {[
            { href: "#home", label: "Home" },
            { href: "#featured", label: "featured" },
            { href: "#latest", label: "latest" },
            { href: "#reviews", label: "reviews" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-lg font-serif ${linkColor} tracking-wide transition-all duration-300 hover:scale-105 ${hoverLinkColor}`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 w-0 h-0.5 ${bgHoverColor} transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`${textColor} md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-lg p-4 space-y-4">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/Projects", label: "Projects" },
            { href: "/writings", label: "Writings" },
            { href: "/Contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg font-serif ${linkColor} tracking-wide transition-all duration-300 hover:text-green-200`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
