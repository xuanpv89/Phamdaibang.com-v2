export default function StoreManagement() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12 text-center lg:text-left">
      <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase text-center w-full">
        STORE MANAGEMENT
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="space-y-8">
          <div className="inline-block bg-white text-black px-6 py-2 font-bold tracking-widest text-sm uppercase rounded-full">
            Business & Technology Industry
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-display font-bold">THE COFFEE HOUSE</h3>
            <p className="text-xl text-white/60">2015-2016 | ROLE: STORE MANAGER</p>
          </div>
          
          <div className="space-y-4">
             <span className="uppercase tracking-[0.2em] font-bold text-xs opacity-40 block">Feature Photo</span>
             <div className="aspect-video bg-white/5 rounded-sm overflow-hidden flex flex-col items-center justify-center border border-white/10 p-4">
               <div className="w-full h-full bg-white/10 animate-pulse rounded-sm mb-4"></div>
               <p className="text-[10px] uppercase tracking-widest text-white/40 text-center">With staff at TCH Tran Cao Van (Centre District 1 - HCMC)</p>
             </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-left">
            <span className="uppercase tracking-[0.2em] font-bold text-sm block mb-4">Key Result</span>
            <ul className="space-y-3 text-white/80 font-light list-disc list-inside">
              <li>From Supervisor to Store Manager in 6 months</li>
              <li>Set up & operate a new branch to become a big branch in the center of District 1 (HCMC)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-10 text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="h-[2px] bg-white/20 flex-grow"></div>
               <span className="uppercase tracking-[0.2em] font-bold text-sm">Key Activities</span>
            </div>
            <div className="space-y-12 font-light text-white/80 leading-relaxed">
              <div>
                <p className="font-bold text-white mb-4 underline decoration-white/20 underline-offset-4">Role: Store Supervisor</p>
                <ul className="list-decimal list-inside space-y-4 pl-2">
                  <li>Responsible for the entire store during the shift: product quality, service attitude, store hygiene, customer care, controlling revenue during the shift</li>
                  <li>Inventory control – control cost of goods sold, warehouse...</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-white mb-4 underline decoration-white/20 underline-offset-4">Role: Store Manager</p>
                <ul className="list-decimal list-inside space-y-4 pl-2">
                  <li>Managing all crew (14 employees): Assigning jobs – recruiting new employees</li>
                  <li>Responsible for store metrics/score (revenue – cost of goods sold – cancellation rate – customer satisfaction) to BOD</li>
                  <li>Finance: Control all financial activities (profit & loss of the store)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
