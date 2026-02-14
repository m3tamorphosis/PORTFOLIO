const coreCompetencies = [
  { name: 'Python', details: 'Pandas, NumPy, Matplotlib, Seaborn' },
  { name: 'SQL', details: 'MySQL, Azure SQL, Snowflake' },
  { name: 'Power BI', details: 'Fabric, DAX, Data Modeling' },
  { name: 'Cloud', details: 'AWS, Azure' },
];

const tools = ['Power BI Fabric', 'Excel', 'AWS S3', 'Snowflake', 'Azure SQL', 'SSMS', 'Jupyter', 'VS Code', 'GitHub'];

const softSkills = ['Dashboard Storytelling', 'Insights Delivery', 'Documentation', 'Team Collaboration'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Competencies */}
          <div>
            <h3 className="text-sm text-[#9ca3af] uppercase tracking-wider mb-6">
              Core Competencies
            </h3>
            <div className="space-y-4">
              {coreCompetencies.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-[#111118] border border-[#1f1f2e] hover:border-[#7c3aed] transition-colors"
                >
                  <div className="text-white font-medium mb-1">{skill.name}</div>
                  <div className="text-[#9ca3af] text-sm">{skill.details}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Libraries + Soft Skills */}
          <div>
            <h3 className="text-sm text-[#9ca3af] uppercase tracking-wider mb-6">
              Tools & Libraries
            </h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg bg-[#111118] border border-[#1f1f2e] text-white text-sm hover:border-[#7c3aed] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h3 className="text-sm text-[#9ca3af] uppercase tracking-wider mb-6">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill) => (
                <span key={skill} className="text-[#9ca3af]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
