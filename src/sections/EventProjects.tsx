export default function EventProjects() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-block bg-primary text-bg px-12 py-1 font-bold tracking-[0.5em] text-xs uppercase rounded-full leading-relaxed">
          Personal Projects
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black tracking-[0.3em] uppercase">
          EVENT PROJECTS ORGANIZED AND PARTICIPATED
        </h2>
        <p className="text-text/40 text-center italic text-sm max-w-4xl">
          Personal projects, done in the personal brandname, through personal Blog, or collabs with other associations, groups, and organizations.
          <br/><span className="underline decoration-white/20 underline-offset-4 cursor-pointer hover:text-text transition-colors">Click on the link to see the program introduction</span>
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 text-left">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase border-b border-border pb-2">Big events and programs (participating as an initiator)</h3>
            <ul className="space-y-4 text-sm font-light text-text/80 list-none">
              <li><span className="font-bold underline decoration-white/20">Compassion Expert Talk (2020-2022)</span> - Series of events with psychologists and client advocates</li>
              <li><span className="font-bold underline decoration-white/20">Online Sharing: Thế Giới Cảm Xúc (2022)</span> - Series of events about Emotional Intelligent</li>
              <li><span className="font-bold underline decoration-white/20">Fulfill Live - Sống Đủ Đầy (2021)</span> - The program converges many partners and individuals - who are important components in the wellbeing field in Vietnam</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase border-b border-border pb-2">Community events (participating as Organizers, Operators):</h3>
            <div className="grid grid-cols-1 gap-2 text-text/70 text-[13px]">
              <p>2021: Sharing Talk: Purpose - How To Use Emotional Intelligence for Goals, Meaning, Purpose</p>
              <p>2021: Workshop: The Power of Resilience - Sức Mạnh Của Sự Bền Chí</p>
              <p>2020: Chiếu Phim: It's a Wonderful Life - Nếu Chỉ Còn Một Giờ Để Sống</p>
              <p>2020: Workshop: Empathy Connection - Hiểu mình, hiểu người & kết nối thấu cảm</p>
              <p>2020: Sharing Talk: Becoming Fulfilled Me - Trở Thành Cái Tôi Đủ Đầy</p>
              <p>2020: Compassion Writing: Viết Thế Nào - Dịch Ra Sao</p>
              <p>2020: Happiness At Work - Phát Triển Tiềm Năng - Thăng Hoa Công Việc</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 text-text/70 text-[13px]">
              <p>2019: Buổi nói chuyện/talk: Cuộc Nói Chuyện Về Đam Mê</p>
              <p>2019: Crowd-learning: Cảm Xúc Màu Gì?</p>
              <p>2019: Workshop: The Self - Chăm Sóc Chính Mình</p>
              <p>2019: Khóa Học: Quiet Communication - Hướng Nội Giao Tiếp Hiệu Quả</p>
              <p>2017: Crowdtalk: Introvert - Love Yourself</p>
              <p>2016: Tổ chức Thẳng Donna Tour - Đêm nhạc Pháp - Le Temps Des Fleurs</p>
              <p>2016: Đồng tổ chức show diễn Revival Night - Halloween 2016</p>
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-border">
            <h3 className="text-xl font-bold tracking-widest uppercase underline decoration-white/20 underline-offset-8">Artistic and experimental projects (directly performed)</h3>
            <ul className="space-y-4 text-sm font-light text-text/80 list-none">
              <li><span className="font-bold border-b border-border">Tâm Nối Tâm (Heart to heart to heart - 2021)</span>: Improvisation program between Poetry - Contemporary Dance - Music</li>
              <li><span className="font-bold border-b border-border">Sống Đủ Đầy/Fulfill Live (2020)</span>: The program combines activities of taking care of Body - Mind - Mind through Art - Health - Psychology</li>
              <li><span className="font-bold border-b border-border">Sống Như Ứng Tác (Improv Living 2021-2022)</span>: Inspiring a theme of Improv Living, with practices through writing & movement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

