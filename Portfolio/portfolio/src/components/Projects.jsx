import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Lung Cancer Detection",
    image: "/projects/lung-cancer.jpg",
    category: "Machine Learning",
    description: "ML model for lung carcinoma detection using TensorFlow.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "NumPy", "pandas"],
    rating: 4.5,
    links: {
      github: "https://github.com/sldsaikumar/lung-cancer-detection",
      live: null
    }
  },
  {
    id: 2,
    title: "Weather App",
    image: "/projects/weather-app.jpg",
    category: "Web Development",
    description: "Responsive weather app with OpenWeatherMap API integration.",
    technologies: ["React", "JavaScript", "API", "CSS", "Axios"],
    rating: 4.5,
    links: {
      github: "https://github.com/sldsaikumar/weather-app",
      live: "https://weather-app-sldsaikumar.netlify.app"
    }
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    image: "/projects/tic-tac-toe.jpg",
    category: "Game Development",
    description: "Interactive game with win detection and scoring system.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "React Hooks"],
    rating: 4,
    links: {
      github: "https://github.com/sldsaikumar/tic-tac-toe",
      live: "https://tic-tac-toe-sldsaikumar.netlify.app"
    }
  },
  {
    id: 4,
    title: "Movie Database",
    image: "/projects/movie-db.jpg",
    category: "Web Development",
    description: "Dynamic movie database with search and filter functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    rating: 4,
    links: {
      github: "https://github.com/sldsaikumar/movie-database",
      live: "https://sample-movie-db.netlify.app"
    }
  },
  {
    id: 5,
    title: "Notes App",
    image: "/projects/notes-app.jpg",
    category: "Full Stack",
    description: "Full-stack note-taking app with CRUD operations.",
    technologies: ["React", "Python", "Django", "Render"],
    rating: 5,
    links: {
      github: "https://github.com/sldsaikumar/notes-app",
      live: "https://notes-app-demo.vercel.app"
    }
  }
];

const renderRating = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="star" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half-star" className="star" />);
  }

  return <div className="rating">{stars}</div>;
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="film-card"
      whileHover={{
        scale: 1.05,
        rotate: [0, -1, 1, -1, 0],
        transition: { duration: 0.4 }
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick(project)}
    >
      <img src={project.image} alt={project.title} />
      <div className="film-card-info">
        <h3>{project.title}</h3>
        {renderRating(project.rating)}
        <p className="film-card-category">{project.category}</p>
        <motion.div
          className="view-details"
          whileHover={{ scale: 1.1 }}
        >
          View Details
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ scale: 0.5, y: 100, rotateX: 30 }}
        animate={{
          scale: 1,
          y: 0,
          rotateX: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
        exit={{ scale: 0.5, y: 100, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-modal" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {renderRating(project.rating)}
          </motion.div>
        </div>

        <div className="modal-content">
          <motion.div
            className="modal-image"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img src={project.image} alt={project.title} />
          </motion.div>

          <div className="modal-details">
            <motion.div
              className="modal-category"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="label">Category:</span> {project.category}
            </motion.div>

            <motion.p
              className="modal-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="modal-tech"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="label">Technologies:</span>
              <div className="tech-container">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="tech-tag"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="modal-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="modal-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id={id} className="projects">
      <div className="container" ref={containerRef}>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="project-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
