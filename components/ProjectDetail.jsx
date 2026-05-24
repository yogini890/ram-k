'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, MapPin, Calendar, Tag, ArrowRight } from 'lucide-react';

export default function ProjectDetail({ project, backPath, backLabel }) {
  const [activeImage, setActiveImage] = useState(0);
  const [factsOpen, setFactsOpen] = useState(true);
  const [pubOpen, setPubOpen] = useState(false);

  const prevImage = () => setActiveImage((i) => (i - 1 + project.images.length) % project.images.length);
  const nextImage = () => setActiveImage((i) => (i + 1) % project.images.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Back nav */}
      <div className="bg-[#f5f0e8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href={backPath} className="inline-flex items-center gap-2 text-[#1a2e44] text-sm font-medium hover:text-[#c8963e] transition-colors">
            <ArrowLeft size={16} /> Back to {backLabel}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#c8963e] text-white text-xs font-semibold px-3 py-1">{project.category}</span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-sm ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
              {project.status}
            </span>
          </div>
          <h1 className="text-[#1a2e44] font-bold text-3xl sm:text-4xl mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c8963e]" />{project.location}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#c8963e]" />{project.year}</span>
            <span className="flex items-center gap-1.5"><Tag size={14} className="text-[#c8963e]" />{project.scope}</span>
          </div>
        </div>

        {/* Main content: description + images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description + accordions */}
          <div>
            <p className="text-gray-600 text-base leading-[1.9] text-justify mb-8">{project.description}</p>

            {/* Project Facts */}
            <div className="border border-gray-200 rounded-sm mb-4">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setFactsOpen(!factsOpen)}
              >
                <span className="text-[#1a2e44] font-semibold">Project Facts</span>
                <ChevronDown size={18} className={`text-[#c8963e] transition-transform ${factsOpen ? 'rotate-180' : ''}`} />
              </button>
              {factsOpen && (
                <div className="px-4 pb-4 grid grid-cols-2 gap-4">
                  {project.facts.map((fact) => (
                    <div key={fact.label} className="bg-[#f5f0e8] p-3 rounded-sm">
                      <div className="text-[#c8963e] text-xs font-medium uppercase tracking-wide">{fact.label}</div>
                      <div className="text-[#1a2e44] font-bold text-base mt-0.5">{fact.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Publications */}
            <div className="border border-gray-200 rounded-sm">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setPubOpen(!pubOpen)}
              >
                <span className="text-[#1a2e44] font-semibold">Publications</span>
                <ChevronDown size={18} className={`text-[#c8963e] transition-transform ${pubOpen ? 'rotate-180' : ''}`} />
              </button>
              {pubOpen && (
                <div className="px-4 pb-4">
                  {project.publications && project.publications.length > 0 ? (
                    <ul className="space-y-2">
                      {project.publications.map((pub) => (
                        <li key={pub} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c8963e] mt-2 flex-shrink-0" />
                          {pub}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-sm italic">No publications listed for this project.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Image carousel */}
          <div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-3">
              <img
                src={project.images[activeImage]}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1a2e44]/70 hover:bg-[#1a2e44] text-white w-9 h-9 rounded-sm flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1a2e44]/70 hover:bg-[#1a2e44] text-white w-9 h-9 rounded-sm flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              <div className="absolute bottom-3 right-3 bg-[#1a2e44]/70 text-white text-xs px-2.5 py-1 rounded-sm">
                {activeImage + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            {project.images.length > 1 && (
              <div className="flex gap-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`flex-1 aspect-[4/3] rounded-sm overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-[#c8963e]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1a2e44] rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Interested in a Similar Project?</h3>
            <p className="text-gray-400 text-sm">Contact our team for a free consultation and project assessment.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c8963e] text-white font-semibold px-6 py-3 hover:bg-[#b0832e] transition-colors text-sm">
            Get Free Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
