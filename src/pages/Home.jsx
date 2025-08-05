import React, { useEffect, useState } from 'react';

const Home = () => {
  const roles = [
    'Computer Science Student 💖',
    'Machine Learning Explorer 🤖',
    'Data Science Enthusiast 📊',
    'Web Developer 🌐',
    'Cloud Learner ☁️'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (displayText.length < roles[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(roles[currentIndex].slice(0, displayText.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(roles[currentIndex].slice(0, displayText.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 text-5xl animate-bounce">🌸</div>
      <div className="absolute top-40 right-20 text-4xl bounce-cute">🦄</div>
      <div className="absolute bottom-40 left-20 text-4xl wiggle">💜</div>
      <div className="absolute bottom-20 right-10 text-5xl floating">🎀</div>
      <div className="absolute top-60 left-1/4 text-3xl heart-beat">💖</div>
      <div className="absolute bottom-60 right-1/4 text-3xl sparkle">⭐</div>

      <div className="absolute top-32 right-10 code-font text-purple-300 text-sm opacity-70 slide-in-right">
        <div className="code-block p-3 rounded-lg">
          console.log("Hello World! 💜");
        </div>
      </div>
      <div className="absolute bottom-32 left-10 code-font text-indigo-300 text-sm opacity-70 slide-in-left">
        <div className="code-block p-3 rounded-lg">
          const cute_fits = true; ✨
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="fade-in animate__animated animate__bounceIn">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600 p-3 floating sparkle glow-purple">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-2xl">
              <span className="text-8xl wiggle">👩‍💻</span>
            </div>
          </div>
        </div>
        <h1 className="kawaii-font text-7xl md:text-9xl font-bold text-gray-800 mb-6 fade-in fade-in-delay-1">
          Hi, I'm <span className="rainbow-text sparkle">Shruti</span> ✨💜
        </h1>
        <div className="kawaii-font text-4xl md:text-5xl text-gray-600 mb-8 fade-in fade-in-delay-2">
          <span className="typing-animation">{displayText}</span>
        </div>
        <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto fade-in fade-in-delay-3 leading-relaxed">
          Computer Science student with a passion for data science and machine learning! 🚀 Experienced in web development, cloud basics, and applying ML algorithms. Skilled in Python, NLP tools like spaCy, and project-based learning. Looking to contribute to data-driven solutions! 🌈💜
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center fade-in fade-in-delay-4">
          <a
            href="https://github.com/Shruti-ops"
            target="_blank"
            rel="noopener noreferrer"
            className="kawaii-font bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white px-12 py-5 rounded-full hover:from-purple-700 hover:via-pink-600 hover:to-indigo-700 transition-all duration-300 pulse-rainbow shadow-2xl hover:shadow-3xl transform hover:scale-110 text-xl font-bold"
          >
            ✨ View My Work ✨
          </a>

          <a
            href="/resume.pdf"
            download
            className="kawaii-font border-4 border-purple-500 text-purple-600 px-12 py-5 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 text-xl font-bold glow-purple"
          >
            📄 Download Resume 📄
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
