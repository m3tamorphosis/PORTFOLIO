const projects = [
  {
    title: 'Danger Zone — Disaster Simulation Game',
    description:
      'Thesis project integrating Unity with Firebase Authentication and Realtime Database for authentication and real-time data syncing, while assisting in UI/UX and gameplay system design.',
    tags: ['UNITY', 'FIREBASE', 'C#'],
    color: '#ef4444',
    link: 'https://dangerzone.vercel.app/',
  },
  {
    title: 'Climate & Agriculture Analytics Pipeline',
    description:
      'Built a complete cloud-based analytics pipeline using AWS, Snowflake, and Power BI Fabric, handling data ingestion, cleaning, transformation, and interactive dashboard reporting.',
    tags: ['AWS S3', 'SNOWFLAKE', 'POWER BI'],
    color: '#22c55e',
  },
  {
    title: 'Loan Default & Financial Risk Dashboard',
    description:
      'Built end-to-end dashboards for loan default and financial risk analysis, integrating SQL Server/MySQL data, Dataflow Gen1, and advanced DAX measures.',
    tags: ['POWER BI FABRIC', 'DAX', 'SQL'],
    color: '#7c3aed',
  },
  {
    title: 'Azure SQL + Power BI Analytics Project',
    description:
      'Built a cloud data pipeline with Azure SQL, SSMS, and Power BI, performing CSV import, SQL data cleaning, DAX calculations, and interactive dashboard visualizations.',
    tags: ['AZURE SQL', 'SSMS', 'POWER BI'],
    color: '#3b82f6',
  },
  {
    title: 'Café Sales Performance Dashboard',
    description:
      'Developed an interactive café sales dashboard analyzing revenue, orders, top-selling items, and customer behavior, with data cleaning using Pandas and visualization in Power BI.',
    tags: ['POWER BI', 'PYTHON', 'PANDAS'],
    color: '#f59e0b',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <a
            href="https://github.com/m3tamorphosis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-white transition-colors text-sm"
          >
            View GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl bg-[#111118] border border-[#1f1f2e] card-hover"
            >
              {/* Color indicator */}
              <div
                className="w-10 h-10 rounded-lg mb-6"
                style={{ backgroundColor: project.color }}
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-[#9ca3af] text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-[#0a0a0f] border border-[#1f1f2e] text-[#9ca3af] text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
