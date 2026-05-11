export default function ContentProjectsSection() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block bg-white text-black px-12 py-1 font-bold tracking-[0.5em] text-xs uppercase rounded-full leading-relaxed">
          Personal Projects
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase">
          CONTENT CREATION PROJECTS
        </h2>
        <p className="text-white/40 text-center italic text-sm max-w-2xl">
          (Posted on personal website, published independently on personal social network channels)
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 text-left">
        {/* Left Column */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase">Writing and Creation:</h3>
            <ul className="space-y-2 text-sm font-light text-white/80 list-disc list-inside">
              <li>Collection of short stories 'Energy Drinks for Oldman' (2019-2020)</li>
              <li>Essay collection 'Small Beautiful Things' (2018-2019)</li>
              <li>Poetry 'Thi-ca' (2019-2022): Free poetry and five words</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase">Series Content:</h3>
            <ul className="space-y-2 text-sm font-light text-white/80 list-disc list-inside">
              <li>The Old Folks Do... Better (Các Cụ Vẫn Có Thể Đúng Hơn - 2021)</li>
              <li>Happiness Pricing (Báo Giá Hạnh Phúc - 2020)</li>
              <li>Self-helpless (Tự Phản Lực - 2021)</li>
              <li>A Cup of Words (2019): Very short stories and pieces</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase">Audio, recording:</h3>
            <ul className="space-y-2 text-sm font-light text-white/80 list-disc list-inside">
              <li>Loitavent (2023): Several recordings, voiceovers & personal podcasts</li>
            </ul>
          </div>

           <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase">Videos, visuals:</h3>
            <ul className="space-y-2 text-sm font-light text-white/80 list-disc list-inside">
              <li>The Loop (2023): Some personal footage and short videos</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase">Publication Publishing:</h3>
            <ul className="space-y-2 text-sm font-light text-white/80 list-disc list-inside">
              <li>Emotional Compass (La Bàn Cảm Xúc 2020-2021)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase">Translation:</h3>
            <ul className="space-y-2 text-sm font-light text-white/80 list-disc list-inside">
              <li>Understanding Emotions (2017-2019)</li>
              <li>How to Get a Job in the US (2019)</li>
            </ul>
          </div>

          <div className="space-y-4">
             <h3 className="text-xl font-bold tracking-widest uppercase">Content creator community development programs:</h3>
             <ul className="space-y-2 text-sm font-light text-white/80 list-disc list-inside px-1">
               <li>2022: Course 'Content Creation - Multimedia Content Creation'</li>
               <li>2020: 'Content Creation' Program - Content Creation Self-Taught Program</li>
               <li>2020: Writing Contest 'Interlude' - New Year's Theme</li>
               <li>2020: Vietnameseize the publication Wheel Of Emotions</li>
               <li>2019: Building a community of authors 'Vietnam New Writers'</li>
               <li>2018: Ebook 'Introvert, Love Yourself' released</li>
               <li>2018: Writing Contest 'Introvert, Love Yourself'</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
