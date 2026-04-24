import React from "react";

const About = () => {
  const values = [
    {
      icon: "🎯",
      title: "Mission-Driven",
      description: "Empowering learners with quality education and practical skills"
    },
    {
      icon: "👥",
      title: "Community First",
      description: "Building a vibrant community of teachers and students"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Continuously improving with latest technologies and methodologies"
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "Making quality education accessible to everyone, everywhere"
    }
  ];

  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", image: "👩‍💼" },
    { name: "Mike Chen", role: "CTO", image: "👨‍💻" },
    { name: "Emily Brown", role: "Head of Content", image: "👩‍🏫" },
    { name: "Alex Wilson", role: "Lead Designer", image: "👨‍🎨" }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About SkillNest
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Empowering learners worldwide to master new skills and unlock their potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              SkillNest was founded in 2020 with a simple mission: to make quality education accessible to everyone. We believe that learning should be engaging, affordable, and flexible.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Today, we've grown to serve thousands of students and teachers across the globe, offering courses in web development, data science, design, and much more.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our platform combines cutting-edge technology with human-centered design to create the best learning experience.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-9xl">📚</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">50K+</p>
            <p className="text-gray-400">Active Students</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-green-400 mb-2">500+</p>
            <p className="text-gray-400">Expert Teachers</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-purple-400 mb-2">200+</p>
            <p className="text-gray-400">Quality Courses</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-orange-400 mb-2">95%</p>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-7xl mb-4">{member.image}</div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Promise</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We're committed to providing affordable, high-quality education that transforms lives. Every course is designed by industry experts, every instructor is carefully vetted, and every student receives the support they need to succeed.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
            Explore Our Courses <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
