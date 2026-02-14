const experiences = [
  {
    period: 'Feb 2025 - May 2025',
    title: 'Business Data Analytics Intern',
    company: 'Department of Budget and Management (DBM)',
    location: 'San Miguel, Manila',
    description: [
      'Supported data-driven initiatives and financial reporting as part of the Business Data Analytics Team (BDAL).',
      'Cleaned and transformed government financial data, including converting PDF reports into structured datasets.',
      'Analyzed national budget and banking data to generate insights.',
      'Built interactive Power BI dashboards for budget utilization, fund distribution, and KPIs.',
      'Performed data validation and quality checks to ensure reporting accuracy.',
    ],
    isCurrent: true,
  },
  {
    period: 'Nov 2025 - Dec 2025',
    title: 'Call Center Agent',
    company: 'iQor Philippines',
    location: '1-800-Flowers / Harry & David Account',
    description: [
      'Assisted customers in placing orders accurately through phone and email.',
      'Resolved order holds and payment-related concerns to ensure timely processing.',
      'Provided email support for order updates, inquiries, and issue resolution.',
      'Delivered excellent customer service while meeting quality and productivity standards.',
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
