
import './profile.css'; // Make sure the path is correct
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import thiruImg from '../assets/thiru.jpg';


function HeroSection() {
  return (
    <div className="hero-container">
      <nav className="hero-nav">
        <h1 className="hero-title">Thirumani Raja</h1>
        <ul className="hero-menu">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Testimonials</li>
        </ul>
        <button className="contact-button">Contact Me</button>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-name">
            Hi I'm <span className="gradient-name">Thirumani</span><br />
            Raja
          </h2>
          <p className="hero-description">
            I'm a tech enthusiast who always looks into new tech stacks. A single word to represent me is adaptability.
          </p>
          <div className="flex gap-4">
            <button className="hire-button">Hire Me</button>
            <div className="social-icons">
              <FaInstagram />
              <FaGithub />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={thiruImg} alt="Thirumani" className="hero-img-tag" />

          <div className="hero-badge">
            <span className="text-yellow-500">🏅</span> Level 2 Seller
          </div>

          <div className="hero-bottom-left">
            ❤️ Projects <br />
            <strong>300+ Done</strong>
          </div>

          <div className="hero-bottom-right">
            ⭐ Active GitHub Contributor
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
