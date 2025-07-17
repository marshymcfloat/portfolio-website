"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "login", href: "/login" },
  ];

  const handleLinkClick = (href: string) => {
    router.push(href);

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <span
                key={link.name}
                className={`cursor-pointer hover:text-Custom_lavender transition-all duration-200 ${
                  pathName === link.href
                    ? "text-Custom_orange font-semibold"
                    : "text-gray-300"
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </span>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-Custom_lavender focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {}
      {isMenuOpen && (
        <div className="md:hidden">
          {}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  pathName === link.href
                    ? "bg-gray-800 text-Custom_orange"
                    : "text-gray-300 hover:bg-gray-700 hover:text-Custom_lavender"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
