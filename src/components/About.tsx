import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="aspect-square max-w-md mx-auto md:mx-0 rounded-2xl bg-[#111118] border border-[#1f1f2e] overflow-hidden">
            <Image
              src="/headshot.png"
              alt="Carl John D. Haro"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>

            <div className="space-y-4 text-[#9ca3af] leading-relaxed">
              <p>
                Hello! I&apos;m Carl John D. Haro, a Data Analyst experienced in working with SQL,
                Excel, and Power BI to clean data, prepare reports, and build dashboards for
                monitoring performance and trends.
              </p>
              <p>
                I&apos;m familiar with data preparation tasks including SQL transformations and
                basic ETL workflows using Python and cloud platforms. I enjoy translating raw
                datasets into clear insights that support decision-making.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-6 rounded-xl bg-[#111118] border border-[#1f1f2e]">
                <div className="text-lg font-bold text-white">Bachelor of Science</div>
                <div className="text-sm text-[#9ca3af] uppercase tracking-wider">Computer Science</div>
              </div>
              <div className="p-6 rounded-xl bg-[#111118] border border-[#1f1f2e]">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-[#9ca3af] uppercase tracking-wider">Data Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
