export default function EventsTraining() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block bg-primary text-bg px-12 py-1 font-bold tracking-[0.5em] text-xs uppercase rounded-full leading-relaxed">
          Key Activities
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase">
          EVENTS, PROGRAM
        </h2>
        <p className="text-text/40 italic text-sm">(Feature with: Compassio)</p>
      </div>

      <div className="w-full max-w-6xl space-y-12">
        <div className="text-center">
           <div className="inline-block bg-primary text-bg px-8 py-1 font-bold tracking-[0.2em] text-xs uppercase rounded-full">
            EVENT ACTIVITIES (COURSE, WORKSHOP, TALKSHOW)
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1 */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-black tracking-widest uppercase text-left leading-tight">
                FOR ORG<br/>
                <span className="text-sm font-medium text-text/40">(CORPORATE, SOCIAL CLUB, COMMUNITY...)</span>
              </h3>
              <p className="text-sm font-light text-text/80 leading-relaxed text-left">
                Content design, program propose, facilitated/training.... Main topic:
              </p>
              <ul className="text-left text-sm font-bold text-text space-y-1 list-disc list-inside px-1">
                <li>Happiness at workplace</li>
                <li>Emotional Intelligence in Workplace</li>
                <li>Positive Organizational</li>
                <li>Positive Leadership</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-primary/5 border border-border rounded-sm"></div>
              <div className="aspect-[4/3] bg-primary/5 border border-border rounded-sm"></div>
              <div className="aspect-[4/3] bg-primary/5 border border-border rounded-sm"></div>
              <div className="aspect-[4/3] bg-primary/5 border border-border rounded-sm"></div>
            </div>
          </div>

          {/* Column 2 (List) */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="w-full bg-primary/5 border border-border rounded-sm p-2 overflow-hidden h-[500px]">
               <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                 <span className="vertical-text text-text/20 uppercase tracking-widest text-xs">Event List Mockup</span>
               </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-1 border-x border-border h-full hidden lg:block"></div>

          {/* Column 4 */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-black tracking-widest uppercase text-left leading-tight">
                FOR INDIVIDUAL<br/>
                <span className="text-sm font-medium text-text/40">(ATTENDEE, MEMBER..)</span>
              </h3>
              <p className="text-sm font-light text-text/80 leading-relaxed text-left">
                Content design, program propose, facilitated/training.... Main topic:
              </p>
              <ul className="text-left text-sm font-bold text-text space-y-1 list-disc list-inside px-1">
                <li>Emotional Intelligent</li>
                <li>Relationship</li>
                <li>Mental Healthcare</li>
                <li>Self-awareness</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video bg-primary/5 border border-border rounded-sm"></div>
              <div className="aspect-video bg-primary/5 border border-border rounded-sm"></div>
              <div className="aspect-video bg-primary/5 border border-border rounded-sm"></div>
              <div className="aspect-video bg-primary/5 border border-border rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

