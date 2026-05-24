'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

export default function ProjectGrid({ projects, basePath, categories }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium transition-all border ${
              activeCategory === cat
                ? 'bg-[#1a2e44] text-white border-[#1a2e44]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#c8963e] hover:text-[#c8963e]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Link key={project.id} href={`${basePath}/${project.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1a2e44]/0 group-hover:bg-[#1a2e44]/40 transition-colors" />
              <div className="absolute top-3 left-3">
                <span className="bg-[#c8963e] text-white text-xs font-semibold px-2.5 py-1">{project.category}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white text-[#1a2e44] text-xs font-semibold px-4 py-2 flex items-center gap-1.5">
                  View Details <ArrowRight size={13} />
                </div>
              </div>
            </div>
            <h3 className="text-[#1a2e44] font-semibold text-base mb-2 group-hover:text-[#c8963e] transition-colors">{project.title}</h3>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><MapPin size={11} />{project.location}</span>
              <span className="flex items-center gap-1"><Calendar size={11} />{project.year}</span>
              <span className={`font-medium ${project.status === 'Completed' ? 'text-green-600' : 'text-[#c8963e]'}`}>{project.status}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
