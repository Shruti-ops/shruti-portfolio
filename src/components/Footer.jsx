import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
      {/* Floating emojis */}
      <div className="absolute top-4 left-10 text-3xl bounce-cute">🌸</div>
      <div className="absolute top-6 right-20 text-3xl wiggle">✨</div>
      <div className="absolute bottom-4 left-20 text-3xl floating">💖</div>
      <div className="absolute bottom-6 right-10 text-3xl sparkle">🌟</div>
      <div className="absolute top-1/2 left-1/4 text-2xl heart-beat">💜</div>
      <div className="absolute top-1/3 right-1/4 text-2xl bounce-cute">🦄</div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="kawaii-font text-2xl font-bold">
          &copy; 2024 Shruti Meshram. Made with 💖 and lots of ☕ • Cool vibes only! ✨🌈💜
        </p>
        <p className="kawaii-font text-lg mt-4 opacity-90">
          Coded with love, sprinkled with magic! 🪄✨
        </p>
      </div>
    </footer>
  );
};

export default Footer;
