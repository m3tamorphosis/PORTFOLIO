'use client';

import { useState } from 'react';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="p-8 md:p-12 rounded-2xl bg-[#111118] border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded bg-[#9ca3af]" />
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          </div>

          <p className="text-[#9ca3af] mb-8">
            I am currently available for full-time opportunities. If you have a role that
            fits my skills, or just want to discuss data, feel free to drop a message.
          </p>

          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e] mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-[#9ca3af]">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#9ca3af] text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Recruiter Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-[#1f1f2e] text-white placeholder-[#6b7280] focus:outline-none focus:border-[#7c3aed] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#9ca3af] text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-[#1f1f2e] text-white placeholder-[#6b7280] focus:outline-none focus:border-[#7c3aed] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#9ca3af] text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Carl John, I'd like to discuss a job opportunity..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-[#1f1f2e] text-white placeholder-[#6b7280] focus:outline-none focus:border-[#7c3aed] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-white text-[#0a0a0f] font-semibold hover:bg-[#f0f0f0] transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
