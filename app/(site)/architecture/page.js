import Link from 'next/link';
import { ArrowRight, Building } from 'lucide-react';
import ProjectGrid from '@/components/ProjectGrid';
import { architectureProjects } from '@/lib/data';

const archServices = [
  { name: 'Architectural Design', desc: 'Translating ideas into innovative design concepts', image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: '2D & 3D Planning', desc: 'Precision-driven plans and immersive visualizations', image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Elevation & Facade Design', desc: 'Contemporary exteriors that define identity', image: 'https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Interior Space Planning', desc: 'Optimizing layouts for efficiency and comfort', image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Sustainable Architecture', desc: 'Eco-conscious and future-ready design solutions', image: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Turnkey Projects', desc: 'End-to-end design and execution solutions', image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Research & Innovation', desc: 'Exploring new materials and construction methods', image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Building Approvals', desc: 'Navigating complex regulations with ease', image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Renovation & Redevelopment', desc: 'Breathing new life into existing structures', image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const categories = [...new Set(architectureProjects.map((p) => p.category))];

export default function ArchitecturePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-[#1a2e44] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-4 bg-[#c8963e]/10 border border-[#c8963e]/30 px-3 py-1.5">
            <Building size={14} />
            Architectural Consultancy
          </div>
          <h1 className="text-white font-bold text-4xl sm:text-5xl mb-5">Architecture Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our architectural team creates functional, aesthetic, and sustainable designs tailored to client requirements. We combine creativity with compliance.
          </p>
        </div>
      </section>

      {/* Service Types - Image Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Service Categories</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl">Architectural Services We Offer</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {archServices.map((svc) => (
              <div key={svc.name} className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer">
                <img src={svc.image} alt={svc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#1a2e44]/55 group-hover:bg-[#1a2e44]/78 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm leading-tight mb-1">{svc.name}</h3>
                  <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Architecture"
                className="w-full rounded-sm"
              />
            </div>
            <div>
              <h2 className="text-[#1a2e44] font-bold text-3xl mb-5">Design Innovation Meets Sustainability</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our architectural team creates functional, aesthetic, and sustainable designs tailored to client requirements. We combine creativity with compliance, ensuring every design is both visionary and practical.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Concept Design', desc: 'Translating ideas into innovative design concepts that inspire.' },
                  { title: 'Architectural Drawings', desc: 'Precision-driven plans that meet all industry standards.' },
                  { title: 'Space Planning', desc: 'Optimizing layouts for efficiency, flow, and comfort.' },
                  { title: '3D Visualization', desc: 'Immersive previews that help clients visualize the final outcome.' },
                  { title: 'Building Approvals', desc: 'Navigating complex regulations with ease and expertise.' },
                  { title: 'Renovation Planning', desc: 'Breathing new life into existing structures with modern sensibility.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8963e] mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="text-[#1a2e44] font-semibold text-sm">{item.title} — </span>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-[#1a2e44] text-white rounded-sm">
                <p className="text-[#c8963e] font-semibold text-sm mb-1">Our Specialty</p>
                <p className="text-gray-300 text-sm leading-relaxed">We merge design innovation with sustainability, ensuring every project is eco-conscious and future-ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-2">Our Portfolio</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl">Architecture Projects</h2>
          </div>
          <ProjectGrid projects={architectureProjects} basePath="/architecture" categories={categories} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1a2e44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-1">Ready to Design Your Vision?</h3>
            <p className="text-gray-400 text-sm">Request a free feasibility report and design consultation.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c8963e] text-white font-semibold px-7 py-3.5 hover:bg-[#b0832e] transition-colors text-sm">
            Get a Free Feasibility Report <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
