import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Floating Emojis */}
      <div className="absolute top-10 left-10 text-4xl bounce-cute">⚡</div>
      <div className="absolute top-20 right-10 text-4xl wiggle">🌟</div>
      <div className="absolute bottom-10 right-20 text-4xl floating">💎</div>
      <div className="absolute bottom-20 left-20 text-4xl heart-beat">🔮</div>

      <div className="max-w-6xl mx-auto">
        <h2 className="kawaii-font text-6xl font-bold text-center text-gray-800 mb-16 sparkle">
          ⚡ Skills & Technologies ⚡
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-purple-200 sparkle slide-in-left">
            <h3 className="kawaii-font text-3xl font-bold text-gray-800 mb-10 text-center rainbow-text">
              💻 Technical Skills
            </h3>
            <div className="space-y-8">
              {[
                { skill: '🐍 Python', percent: 95, colors: 'from-yellow-500 via-orange-500 to-red-500' },
                { skill: '🤖 Machine Learning', percent: 85, colors: 'from-purple-500 via-pink-500 to-indigo-500' },
                { skill: '📊 Data Science', percent: 90, colors: 'from-blue-500 via-cyan-500 to-purple-500' },
                { skill: '☁️ Cloud Computing', percent: 80, colors: 'from-green-500 via-emerald-500 to-teal-500' },
              ].map(({ skill, percent, colors }, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-3">
                    <span className="kawaii-font text-gray-700 font-bold text-lg">{skill}</span>
                    <span className="text-purple-600 font-bold text-lg">{percent}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-4">
                    <div
                      className={`skill-bar bg-gradient-to-r ${colors} h-4 rounded-full glow-purple`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-indigo-200 sparkle slide-in-right">
            <h3 className="kawaii-font text-3xl font-bold text-gray-800 mb-10 text-center rainbow-text">
              🛠️ Tools & Frameworks
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🐍', label: 'Python' },
                { icon: '🐼', label: 'Pandas' },
                { icon: '📊', label: 'NumPy' },
                { icon: '🤖', label: 'Scikit-learn' },
                { icon: '🔥', label: 'PyTorch' },
                { icon: '☁️', label: 'GCP' },
                { icon: '⚛️', label: 'React.js' },
                { icon: '🗃️', label: 'MongoDB' },
                { icon: '📚', label: 'NLP' },
              ].map(({ icon, label }, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 card-hover border-2 border-purple-100"
                >
                  <div className="text-4xl mb-2 bounce-cute">{icon}</div>
                  <span className="kawaii-font text-gray-700 font-bold text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
