export default function CommunityProjects() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block bg-white text-black px-12 py-1 font-bold tracking-[0.5em] text-xs uppercase rounded-full leading-relaxed">
          Personal Projects
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase">
          COMMUNITY DEVELOPMENT PROJECTS
        </h2>
        <p className="text-white/40 text-center italic text-sm max-w-4xl">
          This is personal projects, done in the personal brandname, through personal Blog, or collabs with other associations, groups, and organizations.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 text-left">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase underline decoration-white/20 underline-offset-8">Community project (social development purpose):</h3>
            <ul className="space-y-6 text-sm font-light text-white/80 list-none px-0">
              <li className="space-y-1">
                <span className="font-bold text-white uppercase tracking-wider block">Understanding Emotions (2017-present)</span>
                <p>Translating, writing & developing content to raise awareness and community aware in caring for emotions & wellbeing in general.</p>
              </li>
              <li className="space-y-1">
                <span className="font-bold text-white uppercase tracking-wider block">Understanding Yourself (2018-2019)</span>
                <p>Established and operated the group WIG - Wonderful Introversion Group (More than 7000 members) & HSP - Highly Sensitive Person Vietnam (600 members).</p>
              </li>
              <li className="space-y-1">
                <span className="font-bold text-white uppercase tracking-wider block">Crowdtalk & Crowdlearning (2019)</span>
                <p>Series of talks about 'The Self/Who I Am' & sessions in the form of 'self-learning community'.</p>
              </li>
              <li className="space-y-1">
                <span className="font-bold text-white uppercase tracking-wider block">Writing as a Happy Journey/Happiness Writing (2020-present)</span>
                <p>Writing/writing applications in emotional caring & development of a healthy, happy, and fulfilling life.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase underline decoration-white/20 underline-offset-8">Organizations and projects founded and initiated:</h3>
            <ul className="space-y-4 text-sm font-light text-white/80 list-none">
              <li><span className="font-bold text-white uppercase">Folks Foundation (2016-present)</span>: A social organization operating community and social projects on the topics of wellbeing, human development, culture and arts</li>
              <li><span className="font-bold text-white uppercase">Green Seagrass/Cói Xanh (2011-present)</span>: An enterprise producing & exporting handicraft products</li>
              <li><span className="font-bold text-white uppercase">Live House (2016)</span>: A project to develop the music community</li>
              <li><span className="font-bold text-white uppercase">BSG (Business Solution Group) (2011-2012)</span>: A group of personnel performing consulting services</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-6">
            <h3 className="text-xl font-bold tracking-widest uppercase">Other activities and personal experiences:</h3>
            <ul className="space-y-3 text-sm font-light text-white/80 list-disc list-inside">
              <li>35 Days of Wandering (2015): Ride a motorbike alone for 35 days to many places around Vietnam</li>
              <li>Living Across the Three Regions/Eagle's Gap Year (2015-2016)</li>
              <li>Survival Across the Three Regions (2018)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
