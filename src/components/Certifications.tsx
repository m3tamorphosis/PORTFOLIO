const certifications = [
  {
    name: 'Master Data Analysis',
    provider: 'Udemy',
    year: '2026',
    color: '#7c3aed',
    details: 'Python, Stats, Gen AI, EDA, AWS, SQL, Excel, Power BI, Tableau, ETL, Snowflake, Feature Engineering',
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    field: 'Central Philippine University',
    period: '2021 - 2025',
    gpa: null,
    isCurrent: true,
    location: 'Iloilo City, Philippines',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-xl bg-[#111118] border border-[#1f1f2e] flex items-center gap-4"
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cert.color }}
                  />
                  <div>
                    <h3 className="text-white font-medium">{cert.name}</h3>
                    <div className="text-[#9ca3af] text-sm">
                      {cert.provider} &bull; {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#1f1f2e]" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${
                        edu.isCurrent
                          ? 'bg-[#7c3aed] border-[#7c3aed]'
                          : 'bg-[#0a0a0f] border-[#9ca3af]'
                      }`}
                    />

                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <div className="text-[#7c3aed] text-sm mb-1">{edu.field}</div>
                    <div className="text-[#9ca3af] text-sm mb-2">{edu.period}</div>
                    {edu.gpa && (
                      <span className="inline-block px-3 py-1 rounded-md bg-[#111118] border border-[#1f1f2e] text-[#9ca3af] text-xs">
                        CGPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
