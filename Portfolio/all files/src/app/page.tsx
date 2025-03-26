import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  personalInfo,
  skills,
  projects,
  testimonials,
  services,
  siteConfig
} from "@/data/portfolio-data";

export default function Home() {
  // Get only featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="sb-container text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Professional Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            {personalInfo.bio}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-md"
            >
              Get in touch
            </Button>
          </Link>

          <div className="mt-20">
            <p className="text-gray-500 mb-6">I've worked with amazing clients and companies across different industries</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {/* Placeholder for client logos */}
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="w-32 h-12 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="sb-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From concept to completion</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            A complete suite of professional skills for every step of the development process.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Service cards */}
            {services.map((service) => (
              <Card key={service.title} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 text-pink-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/services">
              <Button
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-50"
              >
                View all services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="sb-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto text-center">
            Some of my best work showcasing different skills and technologies.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-60 bg-gray-300 animate-pulse"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-pink-100 text-pink-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-50"
              >
                View all projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="sb-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What Clients Say</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto text-center">
            Feedback from clients and collaborators on their experience working with me.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="sb-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your next project?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            I'm currently available for freelance work. Let's discuss how I can help you achieve your goals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-6 text-lg rounded-md"
              >
                Contact me
              </Button>
            </Link>
            <Link href="/resume">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md"
              >
                View resume
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
                  {services.slice(0, 3).map((service) => (
                    <li key={service.title}>
                      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
                  <li><a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
                  <li><a href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
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
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. {siteConfig.footerText}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
