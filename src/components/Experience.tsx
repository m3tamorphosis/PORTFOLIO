const experiences = [
  {
    period: 'February - May 2025',
    title: 'Business Data Analytics Intern',
    company: 'Department of Budget and Management (DBM)',
    location: 'Gen. Solano Street, SanMiguel, Manila',
    description: [
      'Analyzed and prepared government financial datasets and developed Power BI dashboards to support internal reporting and decision-making.',
      'Converted 100+ PDF financial reports into structured datasets (~10,000+ records), reducing manual data preparation time.',
      'Validated and monitored budget utilization and fund distribution KPIs, ensuring reporting accuracy across multiple datasets.',
    ],
    isCurrent: false,
  },
  {
    period: 'November - December 2025',
    title: 'Customer Service Representative',
    company: 'iQor Philippines',
    location: 'Mandurriao, Iloilo City',
    description: [
      'Handled inbound calls and email support to process customer orders, payment concerns, and order updates.',
      'Assisted 50-80 customers daily while maintaining quality and productivity performance standards.',
      'Resolved order holds and payment issues with high accuracy, helping ensure on-time order processing and customer satisfaction.',
    ],
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#1f1f2e]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${
                    exp.isCurrent
                      ? 'bg-[#7c3aed] border-[#7c3aed]'
                      : 'bg-[#0a0a0f] border-[#9ca3af]'
                  }`}
                />

                {/* Period */}
                <div className="text-[#7c3aed] text-sm mb-2">{exp.period}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>

                {/* Company */}
                <div className="text-[#9ca3af] text-sm mb-4">
                  {exp.company}
                  {exp.location && ` • ${exp.location}`}
                </div>

                {/* Description */}
                {exp.description.length > 1 ? (
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-[#9ca3af] flex items-start gap-2">
                        <span className="text-[#7c3aed] mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#9ca3af]">{exp.description[0]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
