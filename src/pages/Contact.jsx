import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (name && email && subject && message) {
      alert('💌 Message sent! Thank you for reaching out!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('🤧 Please fill in all fields before sending.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white/60 relative">
      {/* Floating emojis */}
      <div className="absolute top-10 left-10 text-5xl bounce-cute">💌</div>
      <div className="absolute top-20 right-10 text-4xl wiggle">💖</div>
      <div className="absolute bottom-10 left-20 text-4xl floating">🌸</div>
      <div className="absolute bottom-20 right-20 text-5xl sparkle heart-beat">✨</div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="kawaii-font text-7xl font-bold text-gray-800 mb-10 sparkle rainbow-text">
          💌 Let's Connect! 💌
        </h2>
        <p className="text-2xl text-gray-600 mb-16 leading-relaxed">
          I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology!
          Let's create something amazing together! 🌟✨💜
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-2xl card-hover border-4 border-pink-200 sparkle">
            <div className="text-7xl mb-6 bounce-cute">📧</div>
            <h3 className="kawaii-font font-bold text-gray-800 mb-4 text-2xl">✨ Email ✨</h3>
            <p className="text-pink-600 font-bold text-lg">meshram.shruti73@gmail.com</p>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-2xl card-hover border-4 border-green-200 sparkle">
            <div className="text-7xl mb-6 wiggle">📱</div>
            <h3 className="kawaii-font font-bold text-gray-800 mb-4 text-2xl">💫 Phone 💫</h3>
            <p className="text-green-600 font-bold text-lg">+91 7391921975</p>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-2xl card-hover border-4 border-blue-200 sparkle">
            <div className="text-7xl mb-6 floating">💼</div>
            <h3 className="kawaii-font font-bold text-gray-800 mb-4 text-2xl">🌟 LinkedIn 🌟</h3>
            <p className="text-blue-600 font-bold text-lg">linkedin.com/in/shruti</p>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-purple-200 sparkle glow-purple">
          <h3 className="kawaii-font text-4xl font-bold text-gray-800 mb-10 text-center rainbow-text">
            💌 Send me a message! 💌
          </h3>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                name="name"
                placeholder="✨ Your Name"
                className="w-full px-8 py-5 border-4 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all duration-300 focus:scale-105 kawaii-font text-lg glow-purple"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="💌 Your Email"
                className="w-full px-8 py-5 border-4 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all duration-300 focus:scale-105 kawaii-font text-lg glow-purple"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="🌟 Subject"
              className="w-full px-8 py-5 border-4 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all duration-300 focus:scale-105 kawaii-font text-lg glow-purple"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="💖 Your Message"
              rows="6"
              className="w-full px-8 py-5 border-4 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all duration-300 focus:scale-105 resize-none kawaii-font text-lg glow-purple"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="kawaii-font bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white px-16 py-6 rounded-2xl hover:from-purple-700 hover:via-pink-600 hover:to-indigo-700 transition-all duration-300 pulse-rainbow shadow-2xl hover:shadow-3xl transform hover:scale-110 text-2xl font-bold"
            >
              ✨ Send Message ✨
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
