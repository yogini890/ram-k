import Link from 'next/link';
import { ArrowRight, HardHat } from 'lucide-react';
import ProjectGrid from '@/components/ProjectGrid';
import { infrastructureProjects } from '@/lib/data';

const infraServices = [
  { name: 'Construction, Repair & Rehabilitation', desc: 'Remodelling structures with precision engineering', image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Structural Repairs & Maintenance', desc: 'Waterproofing and painting solutions', image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Industrial Infrastructure', desc: 'Factories and warehouse construction', image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Civil Works', desc: 'Road and drainage construction', image: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Residential', desc: 'Township, row houses, holiday homes', image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Commercial', desc: 'Hotels, villas, hospitals, schools', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const categories = [...new Set(infrastructureProjects.map((p) => p.category))];

export default function InfrastructurePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-[#1a2e44] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-4 bg-[#c8963e]/10 border border-[#c8963e]/30 px-3 py-1.5">
            <HardHat size={14} />
            Infrastructure Consultancy
          </div>
          <h1 className="text-white font-bold text-4xl sm:text-5xl mb-5">Infrastructure Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Strategic infrastructure planning and engineering consultancy for urban, industrial, and commercial developments. We blend technical expertise with sustainable solutions.
          </p>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Service Categories</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl">Infrastructure Services We Offer</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {infraServices.map((svc) => (
              <div key={svc.name} className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer">
                <img src={svc.image} alt={svc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#1a2e44]/60 group-hover:bg-[#1a2e44]/80 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm leading-tight mb-1">{svc.name}</h3>
                  <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Services Description */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-[#1a2e44] font-bold text-3xl mb-5">What Sets Us Apart</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                We provide strategic infrastructure planning and engineering consultancy for urban, industrial, and commercial developments. What sets us apart is our integrated approach — blending technical expertise with sustainable solutions that anticipate future growth.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Master Planning', desc: 'Long-term, scalable frameworks aligning with city regulations and client goals.' },
                  { title: 'Site Analysis', desc: 'Detailed feasibility studies to ensure optimal land use and minimize risks.' },
                  { title: 'Utility Planning', desc: 'Coordinating power, water, and communication networks for seamless integration.' },
                  { title: 'Road & Drainage Systems', desc: 'Engineered for durability and efficiency, reducing maintenance costs.' },
                  { title: 'Water Management', desc: 'Sustainable designs that conserve resources and prevent flooding.' },
                  { title: 'Infrastructure Feasibility', desc: 'Clear, data-driven insights to support investment decisions.' },
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
                <p className="text-gray-300 text-sm leading-relaxed">We don&#39;t just plan infrastructure — we future-proof it, ensuring resilience against environmental and regulatory challenges.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Infrastructure"
                className="w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-2">Our Portfolio</div>
              <h2 className="text-[#1a2e44] font-bold text-3xl">Infrastructure Projects</h2>
            </div>
          </div>
          <ProjectGrid projects={infrastructureProjects} basePath="/infrastructure" categories={categories} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1a2e44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-1">Ready to Start Your Infrastructure Project?</h3>
            <p className="text-gray-400 text-sm">Request a free consultation and feasibility report today.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c8963e] text-white font-semibold px-7 py-3.5 hover:bg-[#b0832e] transition-colors text-sm">
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
