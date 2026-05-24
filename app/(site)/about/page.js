import Link from 'next/link';
import { ArrowRight, Target, Eye, Lightbulb, Shield, Award, Users } from 'lucide-react';
import { teamMembers } from '@/lib/data';

const coreValues = [
  { title: 'Integrity', desc: 'We maintain the highest ethical standards in every client engagement and business practice.', icon: Shield },
  { title: 'Innovation', desc: 'We continuously seek creative solutions and embrace new technologies and methodologies.', icon: Lightbulb },
  { title: 'Quality', desc: 'We are committed to delivering work that meets and exceeds industry standards.', icon: Award },
  { title: 'Commitment', desc: 'We honor our promises — to clients, to timelines, and to project outcomes.', icon: Target },
  { title: 'Client Satisfaction', desc: 'Our success is measured by the satisfaction and long-term success of our clients.', icon: Users },
];

const milestones = [
  { year: '1998', event: 'Founded by first generation engineers with a focus on civil infrastructure' },
  { year: '2005', event: 'Expanded to architectural consultancy services' },
  { year: '2010', event: 'Launched Project Management Consultancy division' },
  { year: '2015', event: '100+ projects completed across Maharashtra' },
  { year: '2019', event: 'Second generation leadership transitions into the firm' },
  { year: '2023', event: '200+ projects delivered, team strength of 50+ professionals' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-[#1a2e44] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-4">Who We Are</div>
          <h1 className="text-white font-bold text-4xl sm:text-5xl mb-5">About RK Enterprises</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A second-generation professional consultancy firm specializing in infrastructure development, architectural planning, and project management services.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Our Story</div>
              <h2 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl mb-6">RamKrishan Enterprises</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                RamKrishan Enterprises is a professional, second-generation consultancy firm specializing in infrastructure development, architectural planning, and project management services. Our mission is to deliver innovative, sustainable, and technically sound solutions that add long-term value to every project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded on the principles of technical excellence and client focus, we have grown from a civil engineering consultancy into a full-spectrum multidisciplinary firm serving clients across residential, commercial, industrial, and institutional sectors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, with a team of 50+ seasoned professionals, we bring together expertise in infrastructure, architecture, and project management under one roof — offering clients a seamless, integrated consultancy experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Our work" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-sm overflow-hidden mt-8">
                <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Architecture" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#1a2e44] rounded-sm flex items-center justify-center mb-5">
                <Eye size={24} className="text-[#c8963e]" />
              </div>
              <h3 className="text-[#1a2e44] font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted consultancy partner known for engineering excellence, innovative design, and successful project execution — creating lasting value for clients and communities across India.
              </p>
            </div>
            <div className="bg-[#1a2e44] p-8">
              <div className="w-12 h-12 bg-[#c8963e] rounded-sm flex items-center justify-center mb-5">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  'Deliver high-quality consultancy services',
                  'Ensure timely and cost-effective execution',
                  'Build sustainable and efficient infrastructure',
                  'Maintain transparency and professionalism',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8963e] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">What We Stand For</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="text-center p-6 border border-gray-100 hover:border-[#c8963e] hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 bg-[#f5f0e8] rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c8963e] transition-colors">
                    <Icon size={22} className="text-[#c8963e] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-[#1a2e44] font-semibold mb-2">{val.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">The Professionals</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-[#1a2e44] font-bold text-base">{member.name}</h4>
                  <p className="text-[#c8963e] text-xs font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs mb-1">{member.expertise}</p>
                  <p className="text-gray-400 text-xs">{member.experience} Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-[#1a2e44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Our Journey</div>
            <h2 className="text-white font-bold text-3xl sm:text-4xl">Key Milestones</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-5 items-start">
                <div className="text-[#c8963e] font-bold text-3xl leading-none flex-shrink-0 w-16">{m.year}</div>
                <div>
                  <div className="w-12 h-0.5 bg-[#c8963e] mb-3" />
                  <p className="text-gray-300 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Recognition</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl">Certificates &amp; Awards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { title: 'ISO 9001:2015', desc: 'Quality Management System Certified', icon: '🏅' },
              { title: 'PMC Excellence Award', desc: 'Maharashtra Infrastructure Forum 2022', icon: '🏆' },
              { title: 'Green Building Recognition', desc: 'Sustainable Architecture Initiative 2023', icon: '🌿' },
            ].map((award) => (
              <div key={award.title} className="border border-[#c8963e]/20 p-8 hover:border-[#c8963e] transition-colors">
                <div className="text-4xl mb-4">{award.icon}</div>
                <h4 className="text-[#1a2e44] font-bold text-lg mb-2">{award.title}</h4>
                <p className="text-gray-500 text-sm">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#c8963e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-bold text-3xl mb-4">Ready to Work with Us?</h3>
          <p className="text-white/85 mb-8">Let&#39;s build something exceptional together.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1a2e44] text-white font-semibold px-8 py-4 hover:bg-[#0f1e2e] transition-colors text-sm">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
