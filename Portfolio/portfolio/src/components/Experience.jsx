const experienceData = [
  {
    id: 1,
    title: "Machine Learning Intern",
    company: "SmartBridge",
    period: "Summer 2023",
    description: "Completed a summer internship focused on machine learning, developing and implementing algorithms and models to solve real-world problems."
  }
];

const Experience = ({ id }) => {
  return (
    <section id={id} className="experience">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        <div className="timeline">
          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-date">{item.period}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-subtitle">{item.company}</div>
              <div className="timeline-content">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
