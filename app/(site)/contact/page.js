'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CircleCheck as CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-[#1a2e44] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-4">Reach Out</div>
          <h1 className="text-white font-bold text-4xl sm:text-5xl mb-5">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Have a project in mind? Our team is ready to provide professional consultancy and efficient project execution support.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-[#1a2e44] font-bold text-2xl mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-[#f5f0e8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#c8963e]" />
                  </div>
                  <div>
                    <div className="text-[#1a2e44] font-semibold text-sm mb-1">Office Address</div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Office no. 30, First Floor, Shreeji Villa Building,<br />
                      Near Ganga Vihar Hotel, Takanda Katariya Marg,<br />
                      Matunga-West, Mumbai - 400016
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-[#f5f0e8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#c8963e]" />
                  </div>
                  <div>
                    <div className="text-[#1a2e44] font-semibold text-sm mb-1">Phone</div>
                    <a href="tel:9082048644" className="text-gray-500 text-sm block hover:text-[#c8963e] transition-colors">9082048644</a>
                    <a href="tel:8850288445" className="text-gray-500 text-sm block hover:text-[#c8963e] transition-colors">8850288445</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-[#f5f0e8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#c8963e]" />
                  </div>
                  <div>
                    <div className="text-[#1a2e44] font-semibold text-sm mb-1">Email</div>
                    <a href="mailto:info@rkenterprises.in" className="text-gray-500 text-sm hover:text-[#c8963e] transition-colors">info@rkenterprises.in</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-[#f5f0e8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#c8963e]" />
                  </div>
                  <div>
                    <div className="text-[#1a2e44] font-semibold text-sm mb-1">Working Hours</div>
                    <p className="text-gray-500 text-sm">Monday – Saturday<br />9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-sm overflow-hidden bg-[#f5f0e8] h-56 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-[#c8963e] mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Matunga-West, Mumbai 400016</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-[#1a2e44] font-bold text-2xl mb-8">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-[#1a2e44] font-bold text-xl mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-sm">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-6 px-6 py-2.5 bg-[#c8963e] text-white text-sm font-semibold hover:bg-[#b0832e] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1a2e44] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8963e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a2e44] mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8963e] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1a2e44] mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8963e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a2e44] mb-1.5">Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8963e] transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        <option>Infrastructure Consultancy</option>
                        <option>Architectural Design</option>
                        <option>Project Management (PMC)</option>
                        <option>Structural Repairs</option>
                        <option>Turnkey Project</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a2e44] mb-1.5">Project Details / Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, location, scope, and any specific requirements..."
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#c8963e] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c8963e] text-white font-semibold px-8 py-3.5 hover:bg-[#b0832e] transition-colors text-sm"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Free Site Visit Banner */}
      <section className="py-14 bg-[#1a2e44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-bold text-2xl mb-3">Schedule a Free Site Visit</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Our experts will visit your site, assess requirements, and provide a no-obligation consultation and project roadmap.
          </p>
          <a
            href="tel:9082048644"
            className="inline-flex items-center gap-2 bg-[#c8963e] text-white font-semibold px-7 py-3.5 hover:bg-[#b0832e] transition-colors text-sm"
          >
            <Phone size={16} /> Call Now: 9082048644
          </a>
        </div>
      </section>
    </div>
  );
}
