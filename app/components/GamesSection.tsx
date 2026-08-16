"use client";

import { useEffect, useRef } from 'react';

export default function GamesSection() {
  const games = [
    { name: "PUBG Mobile", image: "/games/Pubg.jpg" },
    { name: "Free Fire", image: "/games/Freefire.jpg" },
    { name: "Valorant", image: "/games/Valorant.jpg" },
    { name: "Counter Strike 2", image: "/games/CS2.jpg" },
    { name: "Mobile Legends", image: "/games/MobileLegend.jpg" },
    { name: "Overwatch", image: "/games/Overwatch.jpg" },
    { name: "Rainbow Six", image: "/games/Seige.jpg" },
  ];

  // Duplicate the games array for a seamless loop
  const duplicatedGames = [...games, ...games];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scroll = () => {
      // When the scroll position reaches the end of the first set of items, reset it
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5; // Adjust scroll speed here
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="games" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#08D2C2] font-black tracking-[0.3em] text-xs uppercase mb-4">
            Our Library
          </h2>
          <h3 className="text-5xl font-black tracking-tighter uppercase italic">
            Supported <span className="text-zinc-600">Games</span>
          </h3>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-12 gap-6 no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          {duplicatedGames.map((game, idx) => (
            <div
              key={idx}
              className="flex-none w-64 h-[400px] relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5"
            >
              <img 
                src={game.image} 
                alt={game.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="w-12 h-1 bg-[#08D2C2] mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <h4 className="text-xl font-black text-white uppercase tracking-tighter leading-tight">
                  {game.name}
                </h4>
                <div className="mt-4 text-[10px] font-black text-[#08D2C2] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW EVENTS
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}