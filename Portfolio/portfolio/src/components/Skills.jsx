import { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  languages: ["Python", "C", "HTML", "CSS", "JavaScript", "SQL", "MongoDB"],
  frameworks: ["Bootstrap", "Node.js", "React.js", "Flask", "Django"],
  tools: ["Git", "GitHub", "Postman", "Context API", "VS Code"],
  others: ["Machine Learning", "TensorFlow", "Pandas", "NumPy", "scikit-learn"]
};

const SkillTag = ({ skill, index }) => {
  return (
    <motion.span
      className="skill-tag"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {skill}
    </motion.span>
  );
};

const SkillCategory = ({ title, skills }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="skill-category"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.h3
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = ({ id }) => {
  return (
    <section id={id} className="skills">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Abilities
        </motion.h2>

        <motion.div
          className="skills-container grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SkillCategory title="Programming Languages" skills={skillsData.languages} />
          <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
          <SkillCategory title="Developer Tools" skills={skillsData.tools} />
          <SkillCategory title="Machine Learning & Data Science" skills={skillsData.others} />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
