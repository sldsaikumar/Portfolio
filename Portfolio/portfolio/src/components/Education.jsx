const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    institution: "Seshadri Rao Gudlavalleru Engineering College",
    period: "2021 - 2025",
    gpa: "7.77 CGPA",
    details: "Pursuing Bachelor's degree in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning."
  }
];

const Education = ({ id }) => {
  return (
    <section id={id} className="education">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <div className="timeline">
          {educationData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-date">{item.period}</div>
              <h3 className="timeline-title">{item.degree}</h3>
              <div className="timeline-subtitle">{item.institution}</div>
              <div className="timeline-content">
                <p><strong>GPA:</strong> {item.gpa}</p>
                <p>{item.details}</p>
                <ul className="education-highlights">
                  <li>Attended workshop on Ethical Hacking</li>
                  <li>Participated in AWS workshops</li>
                  <li>Attended GitHub workshops</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
