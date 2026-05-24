import Link from 'next/link';
import { ArrowRight, ClipboardList } from 'lucide-react';
import ProjectGrid from '@/components/ProjectGrid';
import { pmcProjects } from '@/lib/data';

const pmcServices = [
  { name: 'Liaisoning', desc: 'Government and authority approvals management', image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Project Planning & Scheduling', desc: 'Streamlined timelines with milestone tracking', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Site Development Consultancy', desc: 'Expert guidance for site readiness and preparation', image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Infrastructure Planning', desc: 'Strategic utility and civil coordination', image: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Cost Estimation & Budgeting', desc: 'Transparent financial management to avoid overruns', image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Contractor Coordination', desc: 'Strong partnerships for reliable execution', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Quality Monitoring', desc: 'Regular inspections to maintain quality and safety', image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Site Supervision', desc: 'On-ground oversight throughout project lifecycle', image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Progress Tracking & Reporting', desc: 'Clear communication for stakeholders at every stage', image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const categories = [...new Set(pmcProjects.map((p) => p.category))];

export default function PMCPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-[#1a2e44] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-4 bg-[#c8963e]/10 border border-[#c8963e]/30 px-3 py-1.5">
            <ClipboardList size={14} />
            Project Management Consultancy
          </div>
          <h1 className="text-white font-bold text-4xl sm:text-5xl mb-5">PMC Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We ensure efficient coordination, planning, and supervision throughout the project lifecycle. Our PMC services guarantee projects delivered on time, within budget, to the highest quality standards.
          </p>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-3">Service Categories</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl">PMC Services We Offer</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {pmcServices.map((svc) => (
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

      {/* Details */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-[#1a2e44] font-bold text-3xl mb-5">Bridging Vision and Execution</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                We act as the bridge between vision and execution, ensuring smooth collaboration among stakeholders while safeguarding timelines and budgets. Our PMC team brings disciplined project management to every engagement.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Project Scheduling', desc: 'Streamlined timelines with milestone tracking and critical path analysis.' },
                  { title: 'Budget & Cost Control', desc: 'Transparent financial management to avoid overruns and surprises.' },
                  { title: 'Vendor & Contractor Management', desc: 'Strong partnerships for reliable and quality execution.' },
                  { title: 'Site Monitoring', desc: 'Regular inspections to maintain quality, safety, and compliance.' },
                  { title: 'Risk Management', desc: 'Proactive strategies to identify and mitigate potential issues early.' },
                  { title: 'Documentation & Reporting', desc: 'Clear communication for stakeholders at every project stage.' },
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
                <p className="text-gray-300 text-sm leading-relaxed">We act as the bridge between vision and execution, ensuring smooth collaboration among stakeholders while safeguarding timelines and budgets.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="PMC"
                className="w-full rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-[#c8963e] text-xs font-semibold uppercase tracking-widest mb-2">Our Portfolio</div>
            <h2 className="text-[#1a2e44] font-bold text-3xl">PMC Projects</h2>
          </div>
          <ProjectGrid projects={pmcProjects} basePath="/pmc" categories={categories} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1a2e44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-1">Need a Trusted PMC Partner?</h3>
            <p className="text-gray-400 text-sm">Contact us for expert project management from planning to handover.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c8963e] text-white font-semibold px-7 py-3.5 hover:bg-[#b0832e] transition-colors text-sm">
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
