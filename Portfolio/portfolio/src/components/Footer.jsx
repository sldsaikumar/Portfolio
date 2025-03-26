import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/sldsaikumar" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/s-l-d-sai-kumar-a022a8231" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="mailto:sldsaikumar2406@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
        <div className="contact-info">
          <p>Vijayawada, Andhra Pradesh, 520008</p>
          <p>+91 9603502005 | sldsaikumar2406@gmail.com</p>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} Sappa Lakshmi Durga Sai Kumar. All rights reserved.</p>
          <p>Made with ❤️ using React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
