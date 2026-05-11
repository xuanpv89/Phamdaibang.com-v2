export default function ProjectsCampaigns() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block bg-white text-black px-12 py-1 font-bold tracking-[0.5em] text-xs uppercase rounded-full leading-relaxed">
          Key Activities
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase">
          PROJECT, CHANNEL & CAMPAIGN
        </h2>
        <p className="text-white/40 italic text-sm">(Feature with: Freelance Activities)</p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left column */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
           <div className="space-y-4 text-center">
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
              <p className="font-bold text-sm uppercase tracking-widest">Website & Blog<br/><span className="text-white/40 lowercase font-light">caitonho.com</span></p>
           </div>
           <div className="space-y-4 text-center">
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
              <p className="font-bold text-sm uppercase tracking-widest">Fanpage & website<br/><span className="text-white/40 font-light">Moving Art Atelier</span></p>
           </div>
           <div className="space-y-4 text-center">
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
              <p className="font-bold text-sm uppercase tracking-widest">Blog Article<br/><span className="text-white/40 font-light">Openedu</span></p>
           </div>
           <div className="space-y-4 text-center">
              <div className="aspect-[9/16] bg-white/5 border border-white/10 rounded-md max-w-[120px] mx-auto"></div>
              <p className="font-bold text-sm uppercase tracking-widest">Facebook Group<br/><span className="text-white/40 font-light space-y-1">WIG - Hướng Nội Tuyệt Vời</span></p>
           </div>
           <div className="space-y-4 text-center">
              <div className="aspect-[9/16] bg-white/5 border border-white/10 rounded-md max-w-[120px] mx-auto"></div>
              <p className="font-bold text-sm uppercase tracking-widest">Music community<br/><span className="text-white/40 font-light">Coverit</span></p>
           </div>
           <div className="space-y-4 text-center">
              <div className="aspect-[9/16] bg-white/5 border border-white/10 rounded-md max-w-[120px] mx-auto"></div>
              <p className="font-bold text-sm uppercase tracking-widest">Fanpage&Website<br/><span className="text-white/40 font-light">Ardeli</span></p>
           </div>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-16">
           <div className="space-y-4 text-center col-span-1">
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="space-y-1">
                <p className="font-bold text-sm uppercase tracking-widest">Personal Website</p>
                <p className="text-[10px] text-white/40 leading-tight">Client: loan-truong.com</p>
              </div>
           </div>
           <div className="space-y-4 text-center col-span-1">
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="space-y-1">
                <p className="font-bold text-sm uppercase tracking-widest">Personal Website</p>
                <p className="text-[10px] text-white/40 leading-tight">Client: Coachkhanh.com</p>
              </div>
           </div>
           <div className="space-y-4 text-center col-span-1">
              <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="space-y-1">
                <p className="font-bold text-sm uppercase tracking-widest">Television Program: Vietnam E-commerce Market</p>
                <p className="text-[10px] text-white/40 font-bold">VTC (TV Channel)</p>
              </div>
           </div>
           <div className="space-y-4 text-center col-span-1">
              <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="space-y-1">
                <p className="font-bold text-sm uppercase tracking-widest">Television interview: Logistics service for E-commerce market</p>
                <p className="text-[10px] text-white/40 font-bold">VTV (TV Channel)</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
