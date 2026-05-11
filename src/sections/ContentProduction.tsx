export default function ContentProduction() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase">
          CONTENT PRODUCTION
        </h2>
        <div className="inline-block bg-white text-black px-12 py-1 font-bold tracking-[0.5em] text-xs uppercase rounded-full">
          Key Activities
        </div>
      </div>

      <div className="w-full max-w-6xl space-y-16">
        <div className="text-center space-y-2">
           <h3 className="text-4xl font-display font-black tracking-widest uppercase">CONTENT CREATION</h3>
           <p className="text-white/40 italic text-sm">(Feature with: Compassio)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Item 1 */}
          <div className="space-y-6 text-center">
            <div className="aspect-[3/4] bg-white/5 rounded-sm overflow-hidden border border-white/10 p-2">
               <div className="w-full h-full bg-white/10 rounded-sm flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest opacity-20">Website Mockup</span>
               </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-widest uppercase underline decoration-white/20 underline-offset-8">Compassio Website</h4>
              <div className="inline-block bg-white text-black px-4 py-1 text-[10px] font-black uppercase rounded-sm">Role: Producer</div>
              <ul className="text-left text-sm font-light text-white/70 space-y-2 list-disc list-inside px-4">
                <li>Production: Content layout, script approve, translate content, audio recording, video production...</li>
                <li>Resource Seeking (partner, guest, talent, crew for production line)</li>
              </ul>
            </div>
          </div>

          {/* Item 2 */}
          <div className="space-y-6 text-center">
            <div className="aspect-[3/4] bg-white/5 rounded-sm overflow-hidden border border-white/10 p-2">
               <div className="w-full h-full bg-white/10 rounded-sm flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest opacity-20">Podcast Mockup</span>
               </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-widest uppercase underline decoration-white/20 underline-offset-8">Compassio Podcast</h4>
              <div className="inline-block bg-white text-black px-4 py-1 text-[10px] font-black uppercase rounded-sm">Role: Editor-in-chief</div>
              <ul className="text-left text-sm font-light text-white/70 space-y-2 list-disc list-inside px-4">
                <li>Recruit, training, guidance for Editor Team</li>
                <li>Production process making & tracking</li>
                <li>Content strategy & long-term development</li>
              </ul>
            </div>
          </div>

          {/* Item 3 */}
          <div className="space-y-6 text-center">
            <div className="aspect-[4/3] bg-white/5 rounded-sm overflow-hidden border border-white/10 p-2">
               <div className="w-full h-full bg-white/10 rounded-sm flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest opacity-20">TV/Video Mockup</span>
               </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white/60 leading-relaxed uppercase tracking-widest">Talkshow, review, sharing video (early phase) - via Compassio TV</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
