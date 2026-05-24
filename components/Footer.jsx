import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e44] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#c8963e] rounded-sm flex items-center justify-center">
                <Building2 size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">RK</div>
                <div className="text-[#c8963e] text-xs font-medium tracking-wider uppercase">Enterprises</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mt-3">
              RamKrishan Enterprises — a second generation consultancy firm delivering infrastructure, architecture, and project management excellence across Maharashtra.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider border-b border-[#c8963e]/40 pb-2">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/infrastructure" className="hover:text-[#c8963e] transition-colors">Infrastructure Consultancy</Link></li>
              <li><Link href="/architecture" className="hover:text-[#c8963e] transition-colors">Architectural Design</Link></li>
              <li><Link href="/pmc" className="hover:text-[#c8963e] transition-colors">Project Management</Link></li>
              <li><Link href="/about" className="hover:text-[#c8963e] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#c8963e] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider border-b border-[#c8963e]/40 pb-2">Expertise</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Residential Projects</li>
              <li className="text-gray-400">Commercial Buildings</li>
              <li className="text-gray-400">Industrial Facilities</li>
              <li className="text-gray-400">Educational Institutions</li>
              <li className="text-gray-400">Healthcare Facilities</li>
              <li className="text-gray-400">Government Infrastructure</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider border-b border-[#c8963e]/40 pb-2">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin size={16} className="text-[#c8963e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">Office no. 30, First Floor, Shreeji Villa Building, Near Ganga Vihar Hotel, Takanda Katariya Marg, Matunga-West, Mumbai - 400016</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#c8963e] flex-shrink-0" />
                <div>
                  <div className="text-gray-300">9082048644</div>
                  <div className="text-gray-300">8850288445</div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-[#c8963e] flex-shrink-0" />
                <span className="text-gray-400">info@rkenterprises.in</span>
              </div>
              <div className="flex gap-3 items-center">
                <Clock size={16} className="text-[#c8963e] flex-shrink-0" />
                <span className="text-gray-400">Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} RamKrishan Enterprises. All rights reserved.</p>
          <p className="text-xs text-gray-500">Infrastructure | Architecture | Project Management Consultancy</p>
        </div>
      </div>
    </footer>
  );
}
