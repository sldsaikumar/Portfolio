import { FaAward, FaCertificate, FaMedal } from 'react-icons/fa';

const certificationsData = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure Generative AI",
    organization: "Oracle",
    year: "2024",
    icon: <FaAward />
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure Architect",
    organization: "Oracle",
    year: "2023",
    icon: <FaCertificate />
  },
  {
    id: 3,
    title: "ELITE badge in Privacy and Security in Online Social Media",
    organization: "NPTEL",
    year: "2023",
    icon: <FaMedal />
  },
  {
    id: 4,
    title: "Cryptography",
    organization: "Stanford University",
    year: "2022",
    icon: <FaCertificate />
  }
];

const achievementsData = [
  {
    id: 1,
    title: "IIIT Hackathon 2024",
    description: "Participated in the IIIT Hackathon 2024, developing innovative solutions to real-world problems."
  }
];

const Certifications = ({ id }) => {
  return (
    <section id={id} className="certifications">
      <div className="container">
        <h2 className="section-heading">Certifications & Achievements</h2>

        <div className="certs-container">
          <h3>Certifications</h3>
          <div className="grid">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="card cert-card">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h4>{cert.title}</h4>
                  <div className="cert-org">{cert.organization}</div>
                  <div className="cert-year">{cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-container">
          <h3>Achievements</h3>
          <div className="timeline">
            {achievementsData.map((achievement) => (
              <div key={achievement.id} className="timeline-item">
                <h4 className="timeline-title">{achievement.title}</h4>
                <div className="timeline-content">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
