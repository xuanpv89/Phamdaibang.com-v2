export default function Achievements() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center">
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase bg-white text-black px-12 py-2 inline-block">
          ACHIEVEMENT & NETWORK
        </h2>
      </div>

      <div className="w-full max-w-6xl space-y-20">
        <div className="space-y-8">
           <div className="text-center">
              <span className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Feature Award</span>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-4xl font-display font-black">3th Prize</span>
                  <div className="text-left leading-tight text-white/60">
                    <p className="font-bold text-white uppercase text-sm">Kawai Start-up Contest - 2012</p>
                    <p className="text-xs italic">Top 5</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-4xl font-display font-black">Consolation Prize</span>
                  <div className="text-left leading-tight text-white/60">
                    <p className="font-bold text-white uppercase text-sm">Start-up Nation (VCCI) - 2011</p>
                    <p className="text-xs italic">Ươm Mầm Kinh Doanh Contest - 2011</p>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
               <h3 className="text-xl font-bold tracking-widest uppercase border-b border-white/20 pb-2 text-left">
                  CLIENTS NETWORK<br/>
                  <span className="text-xs font-medium text-white/40">COMMUNICATION & EDUCATION ACTIVITIES</span>
               </h3>
               <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-sm p-4 relative">
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                     <span className="text-white/10 uppercase tracking-widest text-[10px]">Logo Cloud 1</span>
                  </div>
                  <p className="mt-4 text-xs font-light text-white/60 italic text-left">Feature with Compassio (2019-2023)</p>
               </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
               <h3 className="text-xl font-bold tracking-widest uppercase border-b border-white/20 pb-2 text-left">
                  CLIENTS NETWORK<br/>
                  <span className="text-xs font-medium text-white/40">BUSINESS & TECHNOLOGY ACTIVITIES</span>
               </h3>
               <div className="aspect-[21/9] bg-white/5 border border-white/10 rounded-sm p-4 relative">
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                     <span className="text-white/10 uppercase tracking-widest text-[10px]">Logo Cloud 2</span>
                  </div>
                  <p className="mt-4 text-xs font-light text-white/60 italic text-left">Feature with Giao Hang Nhanh (2013-2015)</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
