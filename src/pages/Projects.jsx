import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white/60 relative">
      {/* Background floating emojis */}
      <div className="absolute top-10 left-10 text-4xl floating">🎨</div>
      <div className="absolute top-20 right-20 text-4xl bounce-cute">🚀</div>
      <div className="absolute bottom-20 left-20 text-4xl wiggle">💻</div>
      <div className="absolute bottom-10 right-10 text-4xl heart-beat">⚡</div>

      <div className="max-w-6xl mx-auto">
        <h2 className="kawaii-font text-6xl font-bold text-center text-gray-800 mb-16 sparkle">
          🎨 Featured Projects 🎨
        </h2>

        {/* To keep code minimal, you can refactor each card to a component later */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {[
            {
              title: '⏳ Pomodoro Timer App ⏳',
              description: "Get more done with this super cute and simple Pomodoro timer! 💖 Built with React and styled with Tailwind CSS, responsive design that looks great on any device! ✨",
              stack: ['Tailwind CSS 💨', 'React ⚛️', 'JavaScript 💻'],
              bg: 'from-pink-400 via-purple-500 to-indigo-600',
              border: 'border-pink-200',
              icon: '⏳', 
              demo: 'https://pomodoro-app-gamma-three.vercel.app/',
              github: 'https://github.com/Shruti-ops/pomodoro-app'
            },

            {
              title: '📁 FileHandler',
              description: 'A super efficient Python-based application to handle file operations! Features reading, writing, copying, and renaming files with batch operations and error handling.',
              stack: ['🐍 Python', '📝 Logging', '⚠️ Error Handling'],
              bg: 'from-pink-400 via-purple-500 to-indigo-600',
              border: 'border-pink-200',
              icon: '📁',
              demo: 'https://your-filehandler-demo-link.com',
              github: 'https://github.com/shruti-ops/filehandler'
            },
            {
              title: '💰 PricePulse',
              description: 'A smart Python-based application to analyze product price trends! Uses Pandas and Matplotlib. Includes data-cleaning techniques for accurate analysis!',
              stack: ['🐍 Python', '🐼 Pandas', '📈 Matplotlib'],
              bg: 'from-blue-400 via-indigo-500 to-purple-600',
              border: 'border-blue-200',
              icon: '💰',
              demo: 'https://your-filehandler-demo-link.com',
              github: 'https://github.com/shruti-ops/filehandler'
            },
            {
              title: '🏦 Credit Risk Analyzer',
              description: 'A powerful ML model to assess credit risk using Python! Advanced data cleaning, feature engineering, and model evaluation. Perfect for financial analysis!',
              stack: ['🐍 Python', '🤖 ML', '🔧 Feature Engineering'],
              bg: 'from-green-400 via-emerald-500 to-teal-600',
              border: 'border-green-200',
              icon: '🏦',
              demo: 'https://your-filehandler-demo-link.com',
              github: 'https://github.com/shruti-ops/filehandler'
            },
            {
              title: '🧠 SPES Mental Health Website',
              description: 'A hackathon-winning React.js website built with Tailwind CSS and Node.js. Uses MySQL and MongoDB for data management!',
              stack: ['⚛️ React.js', '🎨 Tailwind', '🟢 Node.js'],
              bg: 'from-purple-400 via-pink-500 to-indigo-600',
              border: 'border-purple-200',
              icon: '🧠',
              demo: 'https://your-filehandler-demo-link.com',
              github: 'https://github.com/shruti-ops/filehandler'
            },
            {
              title: '☁️ Sales Forecasting on GCP',
              description: 'An end-to-end ML project using Google Cloud for sales prediction. Includes BigQuery and AutoML!',
              stack: ['🐍 Python', '☁️ GCP', '🤖 AutoML'],
              bg: 'from-orange-400 via-red-500 to-purple-600',
              border: 'border-orange-200',
              icon: '☁️',
              demo: 'https://your-filehandler-demo-link.com',
              github: 'https://github.com/shruti-ops/filehandler'
            }
          ].map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden shadow-2xl card-hover border-4 ${project.border} sparkle`}
            >
              <div className={`h-56 bg-gradient-to-br ${project.bg} flex items-center justify-center relative`}>
                <span className="text-8xl">{project.icon}</span>
              </div>

              <div className="p-8">
                <h3 className="kawaii-font text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="kawaii-font bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-bold"
                    >
                        ✨ Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="kawaii-font border-3 border-gray-400 text-gray-600 px-6 py-3 rounded-full hover:border-gray-600 hover:text-gray-800 transition-all duration-300 transform hover:scale-105 font-bold"
                    >
                        🐙 GitHub
                    </a>
                    </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
