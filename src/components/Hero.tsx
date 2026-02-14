'use client';

import { useState, useEffect } from 'react';

const roles = ['Building Dashboards', 'Cloud Pipelines', 'Data Engineering', 'ETL Processes'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111118] border border-[#1f1f2e] mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm text-[#9ca3af]">Fresher &bull; Open to Work</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">Carl John </span>
          <span className="text-[#9ca3af]">D. Haro</span>
        </h1>

        {/* Role with typing animation */}
        <div className="text-2xl md:text-3xl text-[#9ca3af] mb-6 h-10">
          <span>Junior Data Analyst </span>
          <span className="text-[#7c3aed]">{displayText}</span>
          <span className="typing-cursor text-[#7c3aed]">|</span>
        </div>

        {/* Description */}
        <p className="text-[#9ca3af] text-lg max-w-2xl mb-8 leading-relaxed">
          Data Analyst with hands-on experience in data engineering and cloud technologies.
          Specializing in SQL, Python, Power BI, AWS, and Azure. Passionate about building
          scalable analytics solutions and transforming complex datasets into actionable insights.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#contact" className="btn-primary text-center">
            Hire Me
          </a>
          <a href="#projects" className="btn-outline text-center">
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#1f1f2e] text-[#9ca3af] hover:text-white hover:border-[#7c3aed] transition-colors text-center"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
