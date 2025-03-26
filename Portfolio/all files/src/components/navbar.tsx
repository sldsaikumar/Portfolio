"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for dropdown menus
const featuresItems = [
  { name: 'Design', href: '/services/design' },
  { name: 'Development', href: '/services/development' },
  { name: 'Consulting', href: '/services/consulting' },
  { name: 'UI/UX', href: '/services/ui-ux' },
  { name: 'Mobile Apps', href: '/services/mobile-apps' },
];

const projectsItems = [
  { name: 'Web Development', href: '/projects/web' },
  { name: 'Mobile Apps', href: '/projects/mobile' },
  { name: 'UI/UX Design', href: '/projects/ui-ux' },
];

const blogItems = [
  { name: 'All Posts', href: '/blog' },
  { name: 'Design', href: '/blog/category/design' },
  { name: 'Development', href: '/blog/category/development' },
  { name: 'Tech Insights', href: '/blog/category/tech-insights' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="sb-container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAll}>
            <div className="relative h-10 w-40">
              <svg viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
                <path
                  d="M77 35.5C77 45.717 68.717 54 58.5 54H18.5C8.283 54 0 45.717 0 35.5C0 25.283 8.283 17 18.5 17H58.5C68.717 17 77 25.283 77 35.5Z"
                  fill="#C85380"
                  fillOpacity="0.1"
                />
                <path
                  d="M33.525 21.87C29.331 21.87 25.935 25.266 25.935 29.46V37.05H33.525V51.12H51.705C55.899 51.12 59.295 47.724 59.295 43.53V43.53V29.46H41.115C36.921 29.46 33.525 25.2555 33.525 21.87Z"
                  fill="#C85380"
                />
                <path
                  d="M78.585 23.532C80.325 23.532 81.825 23.802 83.085 24.342C84.345 24.882 85.305 25.662 85.965 26.682C86.625 27.702 86.955 28.902 86.955 30.282C86.955 31.662 86.625 32.862 85.965 33.882C85.305 34.902 84.345 35.682 83.085 36.222C81.825 36.762 80.325 37.032 78.585 37.032H74.955V42H71.055V23.532H78.585ZM78.405 33.792C80.085 33.792 81.345 33.462 82.185 32.802C83.025 32.142 83.445 31.362 83.445 29.982C83.445 28.602 83.025 27.612 82.185 27.012C81.345 26.412 80.085 26.082 78.405 26.082H74.955V33.792H78.405Z"
                  fill="#C85380"
                />
                <text x="90" y="36" className="text-2xl font-bold" fill="#C85380">Portfolio</text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Features Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-pink-500"
                onClick={() => toggleDropdown('features')}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'features' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg p-4 z-20">
                  <div className="grid gap-2">
                    {featuresItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm text-gray-700 hover:text-pink-500"
                        onClick={closeAll}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-pink-500"
                onClick={() => toggleDropdown('projects')}
              >
                Projects <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'projects' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg p-4 z-20">
                  <div className="grid gap-2">
                    {projectsItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm text-gray-700 hover:text-pink-500"
                        onClick={closeAll}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-pink-500"
                onClick={() => toggleDropdown('blog')}
              >
                Blog <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'blog' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg p-4 z-20">
                  <div className="grid gap-2">
                    {blogItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm text-gray-700 hover:text-pink-500"
                        onClick={closeAll}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-pink-500">
              About
            </Link>

            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-pink-500">
              Contact
            </Link>

            <Link href="/contact">
              <Button
                size="sm"
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md"
              >
                Hire Me
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {/* Features Dropdown */}
              <div>
                <button
                  className="flex items-center w-full text-left text-sm font-medium text-gray-700 hover:text-pink-500"
                  onClick={() => toggleDropdown('features-mobile')}
                >
                  Services <ChevronDown className={`ml-1 h-4 w-4 ${openDropdown === 'features-mobile' ? 'transform rotate-180' : ''}`} />
                </button>
                {openDropdown === 'features-mobile' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {featuresItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-700 hover:text-pink-500"
                        onClick={closeAll}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div>
                <button
                  className="flex items-center w-full text-left text-sm font-medium text-gray-700 hover:text-pink-500"
                  onClick={() => toggleDropdown('projects-mobile')}
                >
                  Projects <ChevronDown className={`ml-1 h-4 w-4 ${openDropdown === 'projects-mobile' ? 'transform rotate-180' : ''}`} />
                </button>
                {openDropdown === 'projects-mobile' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {projectsItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-700 hover:text-pink-500"
                        onClick={closeAll}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog Dropdown */}
              <div>
                <button
                  className="flex items-center w-full text-left text-sm font-medium text-gray-700 hover:text-pink-500"
                  onClick={() => toggleDropdown('blog-mobile')}
                >
                  Blog <ChevronDown className={`ml-1 h-4 w-4 ${openDropdown === 'blog-mobile' ? 'transform rotate-180' : ''}`} />
                </button>
                {openDropdown === 'blog-mobile' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {blogItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-700 hover:text-pink-500"
                        onClick={closeAll}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-pink-500" onClick={closeAll}>
                About
              </Link>

              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-pink-500" onClick={closeAll}>
                Contact
              </Link>

              <Link href="/contact" onClick={closeAll}>
                <Button
                  size="sm"
                  className="bg-pink-500 hover:bg-pink-600 text-white w-full"
                >
                  Hire Me
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
