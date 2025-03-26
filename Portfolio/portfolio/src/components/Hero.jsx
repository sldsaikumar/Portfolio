import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPlay } from 'react-icons/fa';

const Hero = ({ id }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    // 3D tilt effect on mouse move
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const hero = heroRef.current;
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = x / rect.width - 0.5;
      const yPercent = y / rect.height - 0.5;

      const content = hero.querySelector('.hero-content');
      if (content) {
        content.style.transform = `
          perspective(1000px)
          rotateY(${xPercent * 5}deg)
          rotateX(${-yPercent * 5}deg)
          translateZ(20px)
        `;
      }
    };

    const handleMouseLeave = () => {
      if (!heroRef.current) return;

      const content = heroRef.current.querySelector('.hero-content');
      if (content) {
        content.style.transform = `
          perspective(1000px)
          rotateY(0deg)
          rotateX(0deg)
          translateZ(0px)
        `;
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Film frames for decoration
  const filmFrames = Array(6).fill(0);

  return (
    <section id={id} className="hero" ref={heroRef}>
      <div className="hero-bg"></div>

      {/* Letterbox film reel decoration */}
      <div className="film-reel">
        {filmFrames.map((_, index) => (
          <motion.div
            key={index}
            className="film-frame"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 5
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title-container"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2
            }}
            className="letterbox-title"
          >
            SLD
          </motion.h1>
          <motion.div
            className="letterbox-badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <FaPlay />
          </motion.div>
        </motion.div>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Sappa Lakshmi Durga Sai Kumar
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Computer Science Engineering Student specializing in Artificial Intelligence & Machine Learning.
          Passionate about building innovative solutions with Python, React, and more.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://github.com/sldsaikumar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/s-l-d-sai-kumar-a022a8231"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{
              scale: 1.2,
              rotate: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:sldsaikumar2406@gmail.com"
            className="social-link"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        {/* 3D decorative elements */}
        <div className="hero-decorations">
          <motion.div
            className="floating-element elem-1"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="floating-element elem-2"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="floating-element elem-3"
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              rotate: [0, 15, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
