const projects = [
  {
    title: 'Danger Zone — First-Person Disaster Simulation Game',
    description:
      'Thesis project integrating Unity with Firebase Authentication & Realtime Database to enable secure login, real-time syncing, and persistent player progress in a playable web demo.',
    tags: ['UNITY', 'FIREBASE AUTH', 'FIREBASE REALTIME DB'],
    color: '#ef4444',
    link: 'https://dangerzone.vercel.app/',
  },
  {
    title: 'Climate & Agriculture Data Analytics Pipeline',
    description:
      'Built an end-to-end cloud pipeline ingesting and transforming environmental datasets into analytics dashboards showing climate and agriculture trends.',
    tags: ['AWS S3', 'SNOWFLAKE', 'SQL', 'POWER BI FABRIC', 'ETL'],
    color: '#22c55e',
  },
  {
    title: 'Loan Default & Financial Risk Analytics Dashboard',
    description:
      'Developed dashboards analyzing borrower behavior and default risk using modeled financial datasets and advanced measures.',
    tags: ['POWER BI', 'DAX', 'SQL SERVER', 'MYSQL', 'DATAFLOW GEN1'],
    color: '#7c3aed',
  },
  {
    title: 'End-to-End Azure SQL + Power BI Analytics Project',
    description:
      'Created a cloud data workflow for importing, cleaning, modeling, and visualizing business performance data.',
    tags: ['AZURE SQL', 'SSMS', 'T-SQL', 'POWER BI', 'DAX'],
    color: '#3b82f6',
  },
  {
    title: 'Café Sales Performance Dashboard',
    description:
      'Analyzed transactional sales data to identify revenue trends and customer purchasing patterns.',
    tags: ['PYTHON', 'PANDAS', 'POWER BI', 'CSV DATA MODELING'],
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
