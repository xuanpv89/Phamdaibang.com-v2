export default function SalesManagement() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase text-center w-full">
        SALES MANAGEMENT
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="space-y-8">
          <div className="inline-block bg-white text-black px-6 py-2 font-bold tracking-widest text-sm uppercase rounded-full">
            Business & Technology Industry
          </div>
          <div className="space-y-2 text-left">
            <h3 className="text-4xl font-display font-bold">GIAO HANG NHANH (GHN)</h3>
            <p className="text-xl text-white/60">2013-2015 | ROLE: SALES MANAGER (FOUNDING MEMBER)</p>
          </div>
          
          <div className="space-y-4">
             <span className="uppercase tracking-[0.2em] font-bold text-xs opacity-40 block">Feature Photo</span>
             <div className="grid grid-cols-3 gap-2">
               <div className="aspect-square bg-white/5 rounded-sm overflow-hidden flex flex-col items-center justify-center border border-white/10 p-2 text-center">
                 <div className="w-full h-full bg-white/10 rounded-sm mb-2"></div>
                 <p className="text-[8px] uppercase tracking-tighter text-white/40 leading-tight">with Core Team GHN (core member)</p>
               </div>
               <div className="aspect-square bg-white/5 rounded-sm overflow-hidden flex flex-col items-center justify-center border border-white/10 p-2 text-center">
                 <div className="w-full h-full bg-white/10 rounded-sm mb-2"></div>
                 <p className="text-[8px] uppercase tracking-tighter text-white/40 leading-tight">presentation in e-commerce conference</p>
               </div>
               <div className="aspect-square bg-white/5 rounded-sm overflow-hidden flex flex-col items-center justify-center border border-white/10 p-2 text-center">
                 <div className="w-full h-full bg-white/10 rounded-sm mb-2"></div>
                 <p className="text-[8px] uppercase tracking-tighter text-white/40 leading-tight">with e-commerce partner</p>
               </div>
             </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-left">
            <span className="uppercase tracking-[0.2em] font-bold text-sm block mb-6">Key Result</span>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="space-y-1">
                <span className="text-4xl font-display font-black">25</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest leading-tight">Big E-commerce Client</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-display font-black">&gt;500</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest leading-tight">Online client (Shop, individual)</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-display font-black">12</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest leading-tight">Staff</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-display font-black">Top 5</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest leading-tight">Contributing to bringing GHN into the top 5 in the industry</p>
              </div>
            </div>
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
                <p className="font-bold text-white mb-4 underline decoration-white/20 underline-offset-4">Role: Sales Lead</p>
                <ul className="list-decimal list-inside space-y-4 pl-2">
                  <li>Reach new markets, plan & execute sales campaigns</li>
                  <li>Managing, training, assign work for sales team</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-white mb-4 underline decoration-white/20 underline-offset-4">Role: Sales Manager</p>
                <ul className="list-decimal list-inside space-y-4 pl-2">
                  <li>Responsible for Northern region market, building a network of customers (big e-commerce company)</li>
                  <li>Cross-functional work with other departments, management team & BOD to implement business strategy, develop brand to become top 5 in the industry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
