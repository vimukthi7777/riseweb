const mainSocials = {
  youtube: "https://www.youtube.com/@risegaminglk",
  tiktok: "https://www.tiktok.com/@risegaming_lk",
  // instagram: "",
  // discord: "https://discord.gg/74RtuZmh2",
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black pt-28 pb-30 md:pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="max-w-2xl">
              <span className="bg-[#08D2C2]/10 border border-[#08D2C2]/20 text-[#08D2C2] font-black tracking-[0.3em] text-[10px] uppercase py-2 px-4 rounded-full">
                The Ultimate Gaming Experience
              </span>
            </div>
            
            <h1 className="text-6xl md:text-[100px] font-black tracking-tighter uppercase leading-[0.85] my-8">
              RISE AMONG<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#08D2C2] to-[#058e82]">
                CHAMPIONS
              </span>
            </h1>

            <p className="max-w-xl text-zinc-400 text-lg md:text-xl font-medium mb-12 leading-relaxed">
              The premier destination for competitive gamers in Sri Lanka. 
              Join tournaments, win big, and build your legacy.
            </p>


            <div className="flex items-center gap-6 mb-12">
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

            <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
              <a href="#tournaments" className="w-full sm:w-auto bg-[#08D2C2] hover:bg-[#07b5a5] text-black font-black py-5 px-12 uppercase tracking-widest rounded-xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(8,210,194,0.2)]">
                Browse Tournaments
              </a>
              <a href="https://discord.gg/riselk" className="w-full sm:w-auto bg-[#5865F2] hover:bg-[#4e59d4] hover:scale-105  border border-white/10 text-white font-black py-5 px-12 uppercase tracking-widest rounded-xl transition-all">
                Join Discord
              </a>
            </div>

            {/* Stats Section - Mobile */}
            <div className="md:hidden mt-16">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "PLAYERS", value: "100+" },
                  { label: "TOURNAMENTS", value: "Coming Soon" },
                  { label: "PRIZE POOL", value: "LKR 50K" },
                  { label: "GAMES", value: "10+" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-[10px] text-zinc-500 font-bold tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image - hidden on mobile */}
          <div className="hidden md:block relative h-[80vh] -mr-32 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]">
            <img
              src="/HeroImg.jpeg"
              alt="Hero Image"
              className="absolute inset-0 w-full h-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/90" />
          </div>
        </div>
      </div>



      {/* Stats Section - Desktop */}
      <div className="hidden md:block absolute bottom-12 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "PLAYERS", value: "100+" },
            { label: "TOURNAMENTS", value: "Coming Soon" },
            { label: "PRIZE POOL", value: "LKR 50K" },
            { label: "GAMES", value: "10+" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] text-zinc-500 font-bold tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}