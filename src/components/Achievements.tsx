const achievements = [
  {
    title: 'Hackathon Winner',
    subtitle: 'University Tech Fest 2023',
    description:
      'Secured 1st place for creating an optimized route mapping tool using Python.',
  },
  {
    title: '5 Star SQL Coder',
    subtitle: 'HackerRank',
    description:
      'Ranked in the top percentile for SQL problem solving skills and optimization.',
  },
  {
    title: 'Top 10% Kaggle',
    subtitle: 'Titanic Machine Learning',
    description:
      'Optimized feature engineering to achieve high accuracy on the survival prediction challenge.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Achievements</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="p-6 rounded-2xl bg-[#111118] border border-[#1f1f2e] card-hover"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <div className="text-[#9ca3af] text-sm mb-4">{achievement.subtitle}</div>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
