import React from 'react';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* About Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="sb-container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden">
            {/* Placeholder for profile photo */}
            <div className="w-full h-full bg-gray-300 animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            I'm a passionate web developer and designer with over 5 years of experience creating beautiful,
            functional websites and applications that help businesses grow.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-4 bg-white">
        <div className="sb-container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Background</h2>
              <p className="text-gray-600 mb-4">
                I began my journey as a self-taught developer, learning to code while working in marketing.
                This unique background gives me a perspective that blends technical expertise with a deep
                understanding of user experience and business goals.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, I've worked with startups, agencies, and established companies to create
                digital products that are not only visually stunning but also drive results.
              </p>
              <p className="text-gray-600">
                My approach combines clean code, modern design principles, and performance optimization to
                deliver websites and applications that exceed expectations.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 shadow-lg">
              {/* Placeholder for background image */}
              <div className="w-full h-full bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="sb-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "JavaScript", "TypeScript", "React", "Next.js",
              "Node.js", "TailwindCSS", "UI/UX Design", "Figma",
              "HTML5", "CSS3", "GraphQL", "MongoDB",
              "PostgreSQL", "Git", "AWS", "Docker"
            ].map((skill) => (
              <div key={skill} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-pink-500 text-xl font-bold">{skill.charAt(0)}</span>
                </div>
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="sb-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>

          <div className="space-y-8">
            {[
              {
                position: "Senior Frontend Developer",
                company: "Tech Company Inc.",
                period: "2020 - Present",
                description: "Led the development of responsive web applications using React and Next.js. Implemented design systems and optimized performance."
              },
              {
                position: "Web Developer",
                company: "Digital Agency",
                period: "2018 - 2020",
                description: "Developed websites and applications for a variety of clients across different industries. Worked closely with designers to implement pixel-perfect UIs."
              },
              {
                position: "Junior Developer",
                company: "Startup Studio",
                period: "2017 - 2018",
                description: "Contributed to frontend development of web applications. Learned modern development workflows and techniques while collaborating in agile teams."
              }
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <span className="text-gray-500">{job.period}</span>
                </div>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="sb-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

          <div className="space-y-6">
            {[
              {
                degree: "Bachelor of Science in Computer Science",
                school: "University Name",
                year: "2013 - 2017",
                description: "Focused on web technologies, databases, and user experience design. Graduated with honors."
              },
              {
                degree: "UI/UX Design Certification",
                school: "Design Institute",
                year: "2019",
                description: "Specialized training in user interface and experience design principles, wireframing, and prototyping."
              }
            ].map((edu, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-gray-500">{edu.year}</span>
                </div>
                <p className="text-gray-600 mb-2">{edu.school}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="sb-container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            I'm always looking for new challenges and interesting projects.
            If you think we'd be a good match, let's talk about your ideas.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-6 text-lg rounded-md"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="sb-container">
          <div className="flex justify-between flex-wrap gap-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">My Portfolio</h3>
              <p className="text-gray-400 max-w-xs">Professional portfolio showcasing my skills, projects, and experience in web development and design.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-medium mb-3">Navigation</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services/design" className="hover:text-white">Design</Link></li>
                  <li><Link href="/services/development" className="hover:text-white">Development</Link></li>
                  <li><Link href="/services/consulting" className="hover:text-white">Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
                  <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
                  <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
