import Image from "next/image";

interface Tournament {
  title: string;
  prizePool: string;
  date: string;
  time: string;
  mode: string;
  map: string;
  entry: string;
  tag: string;
  image: string;
}

async function getTournaments(): Promise<Tournament[]> {
  const SHEET_ID = "1gRQDPZ3rp9Cj7gi7OsGIrT4cu8moZNmVmOEjU-w4gHI";
  const JSON_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

  try {
    const res = await fetch(JSON_URL, { cache: "no-store" });
    const text = await res.text();
    const jsonString = text.substring(47, text.length - 2);
    const json = JSON.parse(jsonString);
    const rows = json.table.rows;

    return rows
      .map((row: any) => ({
        title: row.c[0]?.v ?? "",
        prizePool: row.c[1]?.v ?? "",
        date: row.c[2]?.v ?? "",
        time: row.c[3]?.v ?? "",
        mode: row.c[4]?.v ?? "",
        map: row.c[5]?.v ?? "",
        entry: row.c[6]?.v ?? "",
        tag: row.c[7]?.v ?? "",
        image: row.c[8]?.v ?? "",
      }))
      // Filter out header row and invalid/empty rows
      .filter(
        (t: Tournament) =>
          t.title &&
          t.title.toLowerCase() !== "title" &&
          (t.image.startsWith("http://") || t.image.startsWith("https://") || t.image.startsWith("/"))
      );
  } catch (error) {
    console.error("Error loading sheet data:", error);
    return [];
  }
}

export default async function Tournaments() {
  const tournaments = await getTournaments();

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

        {tournaments.length === 0 ? (
          <div className="text-center py-20 text-zinc-400 font-bold">
            No active tournaments at the moment. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tournaments.map((t, idx) => (
              <div
                key={t.title + idx}
                className="group bg-zinc-900/50 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-[#08D2C2]/50 transition-all duration-500"
              >
                {/* Card Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">
                      Prize Pool
                    </div>
                    <div className="text-3xl font-black text-white italic">
                      {t.prizePool}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">
                        Date
                      </div>
                      <div className="text-sm font-bold text-zinc-300">
                        {t.date}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">
                        Time
                      </div>
                      <div className="text-sm font-bold text-zinc-300">
                        {t.time}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">
                        Mode
                      </div>
                      <div className="text-sm font-bold text-zinc-300">
                        {t.mode}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">
                        Entry
                      </div>
                      <div
                        className={`text-sm font-black ${
                          t.entry?.toUpperCase() === "FREE"
                            ? "text-green-500"
                            : "text-[#08D2C2]"
                        }`}
                      >
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
        )}
      </div>
    </section>
  );
}