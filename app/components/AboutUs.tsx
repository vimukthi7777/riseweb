"use client";
import { useEffect, useRef, useState } from 'react';

const teamMembers = [
  {
    name: "JuzTy",
    title: "Organizer",
    image: "/team/juzty.png",
    socials: {
      youtube: "https://www.youtube.com/@juztygaming",
      tiktok: "https://www.tiktok.com/@juztygaming_jp",
      discord: "https://discord.gg/WSBbMKfg9",
    },
  },
  {
    name: "Blacka Stream",
    title: "Organizer",
    image: "/team/blacka.png",
    socials: {
      youtube: "https://www.youtube.com/@blacka_streaming",
      tiktok: "https://www.tiktok.com/@blackastreams",
      discord: "https://discord.gg/AAGrY7ES6",
    },
  },
  {
    name: "Chathuwa",
    title: "Organizer",
    image: "/team/chathuwa.png",
    socials: {
      youtube: "https://www.youtube.com/@chathu_streams",
      tiktok: "https://www.tiktok.com/@chathuwa_streams",
      discord: "https://discord.gg/YSCPnySJW",
    },
  },
  {
    name: "Vimuwa",
    title: "Developer",
    image: "/team/vimuwa.png",
    socials: {
      youtube: "https://www.youtube.com/@VimuwaStreams",
      tiktok: "https://www.tiktok.com/@vimuwa_777",
      discord: "#",
    },
  },
  {
    name: "Syrex",
    title: "Developer",
    image: "/team/syrex.png",
    socials: {
      youtube: "#",
      tiktok: "#",
      discord: "#",
    },
  },
];

const mainSocials = {
  youtube: "https://www.youtube.com",
  tiktok: "https://www.tiktok.com",
  discord: "https://discord.gg/74RtuZmh2",
  instagram: "",
};

export default function AboutUs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      // Use a small tolerance for floating point inaccuracies
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkForScroll();
      container.addEventListener('scroll', checkForScroll);
      window.addEventListener('resize', checkForScroll);
      return () => {
        container.removeEventListener('scroll', checkForScroll);
        window.removeEventListener('resize', checkForScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="about">
      <section className="py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#08D2C2]/20 rounded-[40px] blur-2xl group-hover:bg-[#08D2C2]/30 transition-all duration-700" />
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-zinc-800 rounded-[32px] overflow-hidden border border-white/5">
                <img
                  src="/about.jpeg"
                  alt="Gaming Setup"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="text-4xl font-black text-white italic leading-none">SINCE<br />2026</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <h2 className="text-[#08D2C2] font-black tracking-[0.3em] text-xs uppercase mb-4">
                Our Story
              </h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-8 leading-[0.9]">
                WE ARE THE <br /><span className="text-zinc-600">NEW ERA</span> OF GAMING
              </h3>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">RISE LK</strong> started with a simple vision: to create a professional ecosystem for Sri Lankan gamers to showcase their skills on a global stage.
                </p>
                <p>
                  Today, we are more than just a tournament organizer. We are a community of over 1000 players, creators, and enthusiasts who believe in the power of competitive gaming.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black text-[#08D2C2] mb-1">PRO-LEVEL</div>
                  <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Production Quality</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#08D2C2] mb-1">FAIR-PLAY</div>
                  <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Anti-Cheat Systems</div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Follow Us</div>
                <div className="flex gap-4">
                  {Object.entries(mainSocials).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zinc-800/50 hover:bg-white border border-white/10 rounded-full flex items-center justify-center text-white transition-colors"
                      aria-label={`RISE LK on ${platform}`}
                    >
                      <img src={`/${platform}.svg`} alt={platform} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#08D2C2] font-black tracking-[0.3em] text-xs uppercase mb-4">
              The Crew
            </h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase italic">
              Meet the <span className="text-zinc-600">Team</span>
            </h3>
          </div>

          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-12 gap-8 no-scrollbar scroll-smooth"
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="group relative overflow-hidden rounded-3xl flex-none w-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[450px] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tighter">{member.name}</h4>
                      <p className="text-xs font-bold tracking-[0.2em] text-[#08D2C2] uppercase">{member.title}</p>
                    </div>
                    <div className="mt-4 flex gap-3">
                      {Object.entries(member.socials).map(([platform, link]) => (
                        <a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/10 hover:bg-white rounded-full flex items-center justify-center text-white transition-colors"
                          aria-label={`${member.name}'s ${platform}`}
                        >
                          <img src={`/${platform}.svg`} alt={platform} className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-white/10 text-white hover:bg-zinc-700/80 transition-all duration-300 disabled:opacity-0 disabled:cursor-not-allowed ${!canScrollLeft && 'opacity-0'}`}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              &#x276E;
            </button>
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-14 h-14 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-white/10 text-white hover:bg-zinc-700/80 transition-all duration-300 disabled:opacity-0 disabled:cursor-not-allowed ${!canScrollRight && 'opacity-0'}`}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              &#x276F;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}