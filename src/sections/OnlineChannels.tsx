export default function OnlineChannels() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block bg-white text-black px-12 py-1 font-bold tracking-[0.5em] text-xs uppercase rounded-full leading-relaxed">
          Key Activities
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase">
          BUILD-UP: ONLINE CHANNELS
        </h2>
        <p className="text-white/40 italic text-sm">(Feature with: Compassio)</p>
      </div>

      <div className="w-full max-w-6xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Previews & Metrics */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
            <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
            <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4 text-center">
              <div className="inline-block border-b border-white/20 px-8 py-1 font-bold tracking-[0.2em] text-sm uppercase">
                Key Metrics
              </div>
              <p className="text-white font-black italic text-lg tracking-widest">100% ORGANIC</p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div className="text-right space-y-1">
                <span className="text-3xl font-display font-black">&gt;100.000</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Website visitors</p>
              </div>
              <div className="text-left space-y-1">
                <span className="text-3xl font-display font-black">&gt;3.000</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Contact</p>
              </div>
              <div className="text-right space-y-1">
                <span className="text-3xl font-display font-black">&gt;4000</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Fanpage followers</p>
              </div>
              <div className="text-left space-y-1">
                <span className="text-3xl font-display font-black">&gt;500</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Articles</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-bold tracking-widest uppercase">VISITORS AROUND THE WORLD</h3>
              <p className="text-sm font-light text-white/60">Vietnamese visitors & abroad (oversea)</p>
            </div>
            <div className="aspect-[21/9] bg-white/5 border border-white/10 rounded-sm flex items-center justify-center">
               <span className="text-white/20 uppercase tracking-[0.5em] text-xs">World Map Mockup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
