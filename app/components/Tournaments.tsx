export default function Tournaments() {
  const tournaments = [
    {
      title: "FREE FIRE BATTLE ROYALE SHOWDOWN",
      prizePool: "LKR 50,000",
      date: "OCT 26-28, 2024",
      time: "5:00 PM IST",
      mode: "SQUAD",
      map: "BERMUDA",
      entry: "FREE",
      tag: "FREE FIRE",
      image: "/games/free-fire.jpg"
    },
    {
      title: "VALORANT PREMIER LEAGUE",
      prizePool: "LKR 100,000",
      date: "NOV 05-10, 2024",
      time: "7:00 PM IST",
      mode: "5V5",
      map: "ALL MAPS",
      entry: "PAID",
      tag: "VALORANT",
      image: "/games/valorant.jpg"
    },
    {
      title: "PUBG MOBILE ULTIMATE CHALLENGE",
      prizePool: "LKR 75,000",
      date: "NOV 15-18, 2024",
      time: "6:00 PM IST",
      mode: "SQUAD",
      map: "ERANGEL",
      entry: "FREE",
      tag: "PUBG MOBILE",
      image: "/games/pubg.jpg"
    }
  ];

  return (
    <section id="tournaments" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[#08D2C2] font-black tracking-[0.3em] text-xs uppercase mb-4">
              Ongoing Events
            </h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase italic">
              Active <span className="text-zinc-600">Tournaments</span>
            </h3>
          </div>
          <button className="text-xs font-bold tracking-widest text-zinc-400 hover:text-[#08D2C2] transition-colors border-b border-zinc-800 pb-2">
            VIEW ALL TOURNAMENTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tournaments.map((t, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-[#08D2C2]/50 transition-all duration-500"
            >
              {/* Card Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={t.image} 
                  alt={t.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#08D2C2] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {t.tag}
                </span>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-black leading-tight mb-4 group-hover:text-[#08D2C2] transition-colors">
                  {t.title}
                </h4>
                
                <div className="mb-8">
                  <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">Prize Pool</div>
                  <div className="text-3xl font-black text-white italic">{t.prizePool}</div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">Date</div>
                    <div className="text-sm font-bold text-zinc-300">{t.date}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">Time</div>
                    <div className="text-sm font-bold text-zinc-300">{t.time}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">Mode</div>
                    <div className="text-sm font-bold text-zinc-300">{t.mode}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">Entry</div>
                    <div className={`text-sm font-black ${t.entry === 'FREE' ? 'text-green-500' : 'text-[#08D2C2]'}`}>
                      {t.entry}
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-white/5 hover:bg-[#08D2C2] text-white hover:text-black font-black text-xs uppercase tracking-widest rounded-xl transition-all border border-white/10 hover:border-[#08D2C2]">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}