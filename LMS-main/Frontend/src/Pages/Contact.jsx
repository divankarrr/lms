import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "support@skillnest.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: "📍",
      title: "Address",
      value: "San Francisco, CA 94102",
      description: "United States"
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "chat.skillnest.com",
      description: "Instant support available 24/7"
    }
  ];

  const departments = [
    {
      name: "Support Team",
      email: "support@skillnest.com",
      response: "Within 24 hours"
    },
    {
      name: "Teaching",
      email: "teach@skillnest.com",
      response: "Within 48 hours"
    },
    {
      name: "Billing",
      email: "billing@skillnest.com",
      response: "Within 24 hours"
    },
    {
      name: "Partnerships",
      email: "partnerships@skillnest.com",
      response: "Within 2-3 days"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
              <p className="text-blue-400 font-semibold mb-2">{info.value}</p>
              <p className="text-sm text-gray-400">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-white font-semibold mb-2">Thank you for reaching out!</p>
                <p className="text-gray-300">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
                >
                  Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
                </button>
              </form>
            )}
          </div>

          {/* FAQ / Departments */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Our Departments</h2>
            <div className="space-y-4 mb-12">
              {departments.map((dept, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="font-bold text-white mb-2">{dept.name}</h3>
                  <p className="text-blue-400 text-sm mb-1">{dept.email}</p>
                  <p className="text-gray-400 text-xs">Response time: {dept.response}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                <details className="group">
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between py-2 hover:text-blue-400 transition-colors">
                    How long does shipping take?
                    <i className="fa-solid fa-chevron-down group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="text-gray-400 text-sm mt-2 ml-4">
                    All courses are instant access. You can start learning immediately after enrollment.
                  </p>
                </details>

                <details className="group">
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between py-2 hover:text-blue-400 transition-colors">
                    Do you offer refunds?
                    <i className="fa-solid fa-chevron-down group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="text-gray-400 text-sm mt-2 ml-4">
                    We offer a 30-day money-back guarantee if you're not satisfied with your course.
                  </p>
                </details>

                <details className="group">
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between py-2 hover:text-blue-400 transition-colors">
                    Can I become a teacher?
                    <i className="fa-solid fa-chevron-down group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="text-gray-400 text-sm mt-2 ml-4">
                    Yes! We're always looking for expert instructors. Email teach@skillnest.com to apply.
                  </p>
                </details>

                <details className="group">
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between py-2 hover:text-blue-400 transition-colors">
                    Is there a certificate?
                    <i className="fa-solid fa-chevron-down group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="text-gray-400 text-sm mt-2 ml-4">
                    Yes! You'll receive a certificate of completion upon finishing any course.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300">
              <i className="fa-brands fa-facebook text-white text-lg"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-400 flex items-center justify-center transition-all duration-300">
              <i className="fa-brands fa-twitter text-white text-lg"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-300">
              <i className="fa-brands fa-instagram text-white text-lg"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300">
              <i className="fa-brands fa-linkedin text-white text-lg"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300">
              <i className="fa-brands fa-youtube text-white text-lg"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
