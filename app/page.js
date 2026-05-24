'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { landingBoxes } from '@/lib/data';

export default function LandingPage() {
  const [hoveredId, setHoveredId] = useState(null);
  const router = useRouter();

  return (
    <main className="h-screen w-screen overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
        {landingBoxes.map((box) => (
          <div
            key={box.id}
            className="relative overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredId(box.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => router.push(box.href)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${box.image})` }}
            />

            {/* Base overlay */}
            <div className="absolute inset-0 bg-[#1a2e44]/55 transition-all duration-400" />

            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-[#1a2e44]/80 transition-all duration-400 ${
                hoveredId === box.id ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Accent bar bottom */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-[#c8963e] transition-all duration-400 ${
                hoveredId === box.id ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
              {/* Default title */}
              <h2
                className={`text-white font-light text-4xl sm:text-5xl tracking-wide transition-all duration-400 ${
                  hoveredId === box.id ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                {box.title}
              </h2>

              {/* Hover content */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-400 ${
                  hoveredId === box.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="w-12 h-0.5 bg-[#c8963e] mb-5" />
                <h3 className="text-white font-semibold text-2xl mb-2">{box.title}</h3>
                <p className="text-[#c8963e] text-sm font-medium mb-3 uppercase tracking-widest">{box.subtitle}</p>
                <p className="text-gray-300 text-sm max-w-xs leading-relaxed mb-6">{box.description}</p>
                <div className="flex items-center gap-2 text-[#c8963e] font-semibold text-sm border border-[#c8963e] px-5 py-2.5 hover:bg-[#c8963e] hover:text-white transition-colors">
                  {box.hoverText}
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* Border between panels */}
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Bottom brand strip */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-[#1a2e44]/90 backdrop-blur-sm py-3 px-6 flex items-center justify-center">
        <span className="text-gray-400 text-xs tracking-widest uppercase">
          RamKrishan Enterprises &mdash; Infrastructure &bull; Architecture &bull; Project Management Consultancy
        </span>
      </div>
    </main>
  );
}
