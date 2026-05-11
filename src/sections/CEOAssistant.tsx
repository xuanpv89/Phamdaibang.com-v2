export default function CEOAssistant() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase text-center">
        CEO ASSISTANT
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="space-y-8">
          <div className="inline-block bg-white text-black px-6 py-2 font-bold tracking-widest text-sm uppercase rounded-full">
            Education & Human Development Industry
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-display font-bold">TOMATO EDUCATION</h3>
            <p className="text-xl text-white/60">2017-2018 | ROLE: CEO ASSISTANT (FORMER: ENROLLMENT COORDINATOR)</p>
          </div>
          
          <div className="space-y-4">
             <span className="uppercase tracking-[0.2em] font-bold text-xs opacity-40">Feature Photo</span>
             <div className="aspect-video bg-white/5 rounded-sm overflow-hidden flex flex-col items-center justify-center border border-white/10 p-4">
               <div className="w-full h-full bg-white/10 animate-pulse rounded-sm mb-4"></div>
               <p className="text-[10px] uppercase tracking-widest text-white/40">With kids at mid-autumn event @ a school branch</p>
             </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <span className="uppercase tracking-[0.2em] font-bold text-sm block mb-4">Key Result</span>
            <ul className="space-y-3 text-white/80 font-light list-disc list-inside">
              <li>Successfully implemented the project of Standardizing the Company's Process (with the participation of all employee)</li>
              <li>Complete the tasks set by the company and the CEO</li>
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="h-[2px] bg-white/20 flex-grow"></div>
               <span className="uppercase tracking-[0.2em] font-bold text-sm">Key Activities</span>
            </div>
            <div className="space-y-10 font-light text-white/80 leading-relaxed">
              <div>
                <p className="font-bold text-white mb-4 underline decoration-white/20 underline-offset-4">Role: Enrollment Coordinator</p>
                <ul className="list-decimal list-inside space-y-4 pl-2">
                  <li>Overall responsibility for enrollment for a branch (school), enrollment planning, responsibility for sales of this branch</li>
                  <li>Human management & coordination: monitoring and mentoring employees</li>
                  <li>Advise student's parents, work with other departments (Exp: academic team, teacher...), coordinate with center manager to achieve business goals</li>
                  <li>Coordinate and organize trial class and workshops to find potential students/customers</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-white mb-4 underline decoration-white/20 underline-offset-4">Role: Assistant to CEO</p>
                <ul className="list-decimal list-inside space-y-4 pl-2">
                  <li>Support the CEO in implementing important projects of the company (specifically: Process Standardization project, initial implementation for a subsidiary of the system (Education consulting solution))</li>
                  <li>Work with branches, departments, management team to achieve goals</li>
                  <li>Support personal tasks for the CEO such as scheduling, meeting, working with partners...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
