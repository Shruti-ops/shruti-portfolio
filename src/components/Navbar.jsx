import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b-4 border-purple-300 shadow-xl">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-4xl font-bold kawaii-font sparkle glow-purple rounded-full p-2">
            <span className="rainbow-text">SM</span>
          </div>

          {/* Nav Links (desktop) */}
          <div className="hidden md:flex space-x-8">
            {[
              { href: '#home', label: '🏠 Home' },
              { href: '#about', label: '💫 About' },
              { href: '#projects', label: '🎨 Projects' },
              { href: '#skills', label: '⚡ Skills' },
              { href: '#contact', label: '💌 Contact' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="kawaii-font text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button (hamburger) */}
          <button className="md:hidden text-purple-600 wiggle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
