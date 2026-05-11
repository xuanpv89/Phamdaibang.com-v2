export default function ProjectManager() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase text-center">
        PROJECT MANAGER
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="space-y-8">
          <div className="inline-block bg-white text-black px-6 py-2 font-bold tracking-widest text-sm uppercase rounded-full">
            Education & Human Development Industry
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-display font-bold">COMPASSIO (FOLKS., LTD)</h3>
            <p className="text-xl text-white/60">2019-PRESENT | ROLE: PROJECT MANAGER (FOUNDING MEMBER)</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video bg-white/5 rounded-sm overflow-hidden flex items-center justify-center border border-white/10 group">
              <span className="text-white/20 group-hover:text-white/40 transition-colors">Workspace photo 1</span>
            </div>
            <div className="aspect-video bg-white/5 rounded-sm overflow-hidden flex items-center justify-center border border-white/10 group">
              <span className="text-white/20 group-hover:text-white/40 transition-colors">Workspace photo 2</span>
            </div>
            <div className="aspect-video bg-white/5 rounded-sm overflow-hidden flex items-center justify-center border border-white/10 group">
              <span className="text-white/20 group-hover:text-white/40 transition-colors">Team photo</span>
            </div>
            <div className="aspect-video bg-white/5 rounded-sm overflow-hidden flex items-center justify-center border border-white/10 group">
              <span className="text-white/20 group-hover:text-white/40 transition-colors">Event photo</span>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="h-[2px] bg-white/20 flex-grow"></div>
               <span className="uppercase tracking-[0.2em] font-bold text-sm">Working Role</span>
            </div>
            <div className="space-y-6 font-light text-white/80 leading-relaxed">
              <div>
                <p className="font-bold text-white mb-2 underline decoration-white/20 underline-offset-4">Role: Project Manager</p>
                <ul className="list-decimal list-inside space-y-2 pl-2">
                  <li>Project overall, operated & coordination all activities</li>
                  <li>Planning development strategy, coordinating resources to develop the project</li>
                  <li>Administration: resource seeking, human development, partnership networking, cash flow, R&D...</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-white mb-2 underline decoration-white/20 underline-offset-4">Role: Facilitator/trainer</p>
                <ul className="list-decimal list-inside space-y-2 pl-2">
                  <li>Facilitate, coordinate programs, events, classes for individual customers & organizations client</li>
                  <li>Develop program content, design content to develop community of users of products and services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-white/10">
            <span className="uppercase tracking-[0.2em] font-bold text-sm">Key Result</span>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="text-4xl font-display font-black">&gt;10.000</span>
                <p className="text-xs text-white/40 uppercase tracking-widest leading-tight">Member in this community</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-display font-black">&gt;1.000</span>
                <p className="text-xs text-white/40 uppercase tracking-widest leading-tight">Client/active member (used at least 01 transaction)</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-display font-black">~50</span>
                <p className="text-xs text-white/40 uppercase tracking-widest leading-tight">Staff & Collaborator</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-display font-black">&gt;50</span>
                <p className="text-xs text-white/40 uppercase tracking-widest leading-tight">Event (course, class, talkshow)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
