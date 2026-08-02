import Image from "next/image";

const footerSocials = [
  { name: "WHATSAPP", href: "#" },
  { name: "DISCORD", href: "https://discord.gg/74RtuZmh2" },
  { name: "TIKTOK", href: "https://discord.gg/74RtuZmh2" },
  { name: "YOUTUBE", href: "https://www.youtube.com/@riselkgaming" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-black border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-[#08D2C2] font-black tracking-[0.3em] text-xs uppercase mb-4">
              Get In Touch
            </h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-8 leading-[0.9]">
              HAVE A <br /><span className="text-zinc-600">QUESTION?</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Whether you want to partner with us or need help with a tournament, our team is here for you 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-[#08D2C2] transition-colors">
                  <svg className="w-5 h-5 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">Email Us</div>
                  <div className="text-white font-bold">hello@riselk.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-[#08D2C2] transition-colors">
                  <svg className="w-5 h-5 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-1">Join Community</div>
                  <div className="text-white font-bold">discord.gg/riselk</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-[40px]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#08D2C2] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#08D2C2] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase ml-1">Subject</label>
                <select className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#08D2C2] transition-colors appearance-none">
                  <option>Tournament Inquiry</option>
                  <option>Partnership</option>
                  <option>Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#08D2C2] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#08D2C2] hover:bg-[#07b5a5] text-black font-black py-5 uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_40px_rgba(8,210,194,0.1)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <a href="#home" className="block">
            <Image
              src="/RiseLogo.png"
              alt="RISE LK Logo"
              width={128}
              height={40}
              className="h-10 w-auto"
            />
          </a>
          <div className="flex gap-12">
            {footerSocials.map(social => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
                {social.name}
              </a>
            ))}
          </div>
          <div className="text-[10px] text-zinc-600 font-bold tracking-widest">
            © {new Date().getFullYear()} RISELK GAMING. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </div>
    </section>
  );
}