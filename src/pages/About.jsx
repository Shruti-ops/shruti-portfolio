import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="absolute top-10 right-10 text-4xl bounce-cute">🌈</div>
      <div className="absolute bottom-10 left-10 text-4xl wiggle">💝</div>
      <div className="absolute top-1/2 left-5 text-3xl floating">🔮</div>
      <div className="absolute top-1/3 right-5 text-3xl heart-beat">💎</div>

      <div className="max-w-6xl mx-auto">
        <h2 className="kawaii-font text-6xl font-bold text-center text-gray-800 mb-16 sparkle">
          💫 About Me 💫
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Intro */}
          <div className="space-y-8 slide-in-left">
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm a Computer Science student with a passion for data science and machine learning! 💜 My journey in tech started with curiosity about data patterns, and it has evolved into a deep love for creating data-driven solutions through code.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring ML algorithms, working on hackathon projects, or diving deep into NLP research with tools like spaCy! I love turning raw data into meaningful insights! ✨🚀
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 px-6 py-3 rounded-full text-lg font-semibold hover-lift">📊 Data Enthusiast</span>
              <span className="bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 px-6 py-3 rounded-full text-lg font-semibold hover-lift">🤖 ML Explorer</span>
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold hover-lift">☁️ Cloud Learner</span>
            </div>
          </div>

          {/* Right column: Education & Experience */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl card-hover border-4 border-purple-100 sparkle slide-in-right">
            <h3 className="kawaii-font text-3xl font-bold text-gray-800 mb-8 text-center rainbow-text">
              🎓 Education & Experience 🎓
            </h3>

            <div className="space-y-8">
              <div className="border-l-6 border-purple-500 pl-8 hover-lift">
                <h4 className="kawaii-font font-bold text-gray-800 text-xl">🎓 B.Tech Computer Science Engineering</h4>
                <p className="text-purple-600 font-semibold text-lg">SGGSIE&T, Nanded • 2022-2026</p>
                <p className="text-gray-600">Focus: Data Science & Machine Learning ⭐</p>
              </div>

              <div className="border-l-6 border-indigo-500 pl-8 hover-lift">
                <h4 className="kawaii-font font-bold text-gray-800 text-xl">Work exp- RoadMarc Foundation Nagpur  </h4>
                <p className="text-indigo-600 font-semibold text-lg">Intern • 2023-24</p>
                <p className="text-gray-600">Conducted video editing for foundation projects. Assisted in organizing and volunteering for road safety programs. 
Networked with key industry figures, including meeting Nitin Gadkari. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
