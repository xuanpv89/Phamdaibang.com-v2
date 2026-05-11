export default function EventsTraining() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block bg-white text-black px-12 py-1 font-bold tracking-[0.5em] text-xs uppercase rounded-full leading-relaxed">
          Key Activities
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase">
          EVENTS, PROGRAM
        </h2>
        <p className="text-white/40 italic text-sm">(Feature with: Compassio)</p>
      </div>

      <div className="w-full max-w-6xl space-y-12">
        <div className="text-center">
           <div className="inline-block bg-white text-black px-8 py-1 font-bold tracking-[0.2em] text-xs uppercase rounded-full">
            EVENT ACTIVITIES (COURSE, WORKSHOP, TALKSHOW)
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1 */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-black tracking-widest uppercase text-left leading-tight">
                FOR ORG<br/>
                <span className="text-sm font-medium text-white/40">(CORPORATE, SOCIAL CLUB, COMMUNITY...)</span>
              </h3>
              <p className="text-sm font-light text-white/80 leading-relaxed text-left">
                Content design, program propose, facilitated/training.... Main topic:
              </p>
              <ul className="text-left text-sm font-bold text-white space-y-1 list-disc list-inside px-1">
                <li>Happiness at workplace</li>
                <li>Emotional Intelligence in Workplace</li>
                <li>Positive Organizational</li>
                <li>Positive Leadership</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-sm"></div>
            </div>
          </div>

          {/* Column 2 (List) */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="w-full bg-white/5 border border-white/10 rounded-sm p-2 overflow-hidden h-[500px]">
               <div className="w-full h-full bg-white/10 flex items-center justify-center">
                 <span className="vertical-text text-white/20 uppercase tracking-widest text-xs">Event List Mockup</span>
               </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-1 border-x border-white/10 h-full hidden lg:block"></div>

          {/* Column 4 */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-black tracking-widest uppercase text-left leading-tight">
                FOR INDIVIDUAL<br/>
                <span className="text-sm font-medium text-white/40">(ATTENDEE, MEMBER..)</span>
              </h3>
              <p className="text-sm font-light text-white/80 leading-relaxed text-left">
                Content design, program propose, facilitated/training.... Main topic:
              </p>
              <ul className="text-left text-sm font-bold text-white space-y-1 list-disc list-inside px-1">
                <li>Emotional Intelligent</li>
                <li>Relationship</li>
                <li>Mental Healthcare</li>
                <li>Self-awareness</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
              <div className="aspect-video bg-white/5 border border-white/10 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
