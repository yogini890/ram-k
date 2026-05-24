'use client';
import Link from 'next/link';
import { ArrowRight, CircleCheck as CheckCircle2, Building, HardHat, ClipboardList, Users, Award, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

const whyChooseUs = [
  'Experienced multidisciplinary team',
  'Client-focused approach',
  'Timely project delivery',
  'Cost-effective planning',
  'Technical expertise',
  'Transparent communication',
  'Quality & compliance assurance',
];

const industries = [
  { name: 'Residential Projects', image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Commercial Buildings', image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Industrial Facilities', image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Educational Institutions', image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Hospitals & Healthcare', image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Hospitality Projects', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Government Infrastructure', image: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const services = [
  {
    icon: HardHat,
    title: 'Infrastructure',
    href: '/infrastructure',
    items: ['Township & Road Construction', 'Structural Repairs & Waterproofing', 'Industrial & Factory Construction', 'Civil & Drainage Works'],
  },
  {
    icon: Building,
    title: 'Architecture',
    href: '/architecture',
    items: ['Architectural Design & Planning', '2D & 3D Visualization', 'Elevation & Facade Design', 'Interior Space Planning'],
  },
  {
    icon: ClipboardList,
    title: 'PMC',
    href: '/pmc',
    items: ['Project Planning & Scheduling', 'Cost Estimation & Budgeting', 'Site Supervision & Quality', 'Liaisoning & Documentation'],
  },
];

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '25+', label: 'Years of Experience' },
  { value: '50+', label: 'Expert Professionals' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e44]/90 via-[#1a2e44]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-5 bg-[#c8963e]/10 border border-[#c8963e]/30 px-3 py-1.5 rounded-sm">
              <Award size={14} />
              Second Generation Consultancy Firm
            </div>
            <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Building Ideas into
              <span className="text-[#c8963e] block">Landmark Projects</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              End-to-end Infrastructure, Architecture &amp; Project Management Consultancy services for residential, commercial, industrial, and institutional projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-7 py-3.5 bg-[#c8963e] text-white font-semibold text-sm hover:bg-[#b0832e] transition-colors inline-flex items-center gap-2">
                Request Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/infrastructure" className="px-7 py-3.5 border border-white/50 text-white font-semibold text-sm hover:border-[#c8963e] hover:text-[#c8963e] transition-colors">
                View Projects
              </Link>
              <Link href="/contact" className="px-7 py-3.5 border border-[#c8963e]/50 text-[#c8963e] font-semibold text-sm hover:bg-[#c8963e] hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#c8963e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-white font-bold text-3xl">{stat.value}</div>
              <div className="text-white/80 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Short Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">About RK Enterprises</div>
              <h2 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl leading-tight mb-6">
                Transforming Vision into Built Reality
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a multidisciplinary consultancy firm providing professional services in infrastructure planning, architectural design, engineering coordination, and project management. We help clients transform concepts into functional, sustainable, and high-quality developments through strategic planning and execution excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded as a second-generation firm, RamKrishan Enterprises brings decades of domain expertise and a client-first philosophy to every engagement — from large-scale townships to specialized institutional projects.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#c8963e] font-semibold text-sm border-b border-[#c8963e] pb-0.5 hover:gap-3 transition-all">
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="RK Enterprises"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1a2e44] text-white p-6 rounded-sm">
                <div className="text-2xl font-bold text-[#c8963e]">25+</div>
                <div className="text-xs text-gray-300 mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">What We Do</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl">Our Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-[#1a2e44] rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#c8963e] transition-colors">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-[#1a2e44] font-bold text-xl mb-4">{svc.title}</h3>
                  <ul className="space-y-2.5 mb-6">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c8963e] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={svc.href} className="text-[#c8963e] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Services <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1a2e44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Why RK Enterprises</div>
              <h2 className="text-white font-bold text-3xl sm:text-4xl mb-8">
                Your Trusted Partner in Every Stage of Development
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#c8963e] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-96 rounded-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#c8963e]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Our Reach</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="relative aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer">
                <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#1a2e44]/55 group-hover:bg-[#1a2e44]/70 transition-colors" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="text-white font-semibold text-sm leading-tight">{ind.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Client Feedback</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-6 shadow-sm">
                <div className="flex mb-3">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} size={14} className="text-[#c8963e] fill-[#c8963e]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-[#1a2e44] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#c8963e] text-xs">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#c8963e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={44} className="text-white mx-auto mb-5 opacity-80" />
          <h2 className="text-white font-bold text-3xl sm:text-4xl mb-4">Have a Project in Mind?</h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto mb-8">
            Partner with us for professional consultancy and efficient project execution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a2e44] text-white font-semibold px-8 py-4 hover:bg-[#0f1e2e] transition-colors text-sm"
          >
            Get Free Consultation &amp; Site Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
