import React from 'react';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Contact Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="sb-container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get in Touch</h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            I'm currently available for freelance work and interesting projects.
            Let's build something amazing together.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg rounded-md"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 px-4 bg-white">
        <div className="sb-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Or Reach Out Directly</h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">contact@example.com</p>
              <Link href="mailto:contact@example.com" className="text-pink-500 hover:text-pink-600">
                Send an email
              </Link>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">+1 (123) 456-7890</p>
              <Link href="tel:+11234567890" className="text-pink-500 hover:text-pink-600">
                Call me
              </Link>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-gray-600 mb-4">Connect on social platforms</p>
              <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
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
