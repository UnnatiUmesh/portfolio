import './Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';
import { useEffect } from 'react';
import { useThemeStore } from '../store/useThemeStore'; // adjust the path if needed

const Footer = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <footer className="footer">
      <div className="footer-left">
        <span>Copyright © 2024 - All rights reserved by Unnati Umesh Kulkarni</span>
      </div>

      <div className="footer-center">
        <a href="#">Attributions</a>
        <a href="#">Shout Outs</a>
        <a href="#">Affiliates</a>
      </div>

      <div className="footer-right">
        <FiMoon className="footer-icon" onClick={toggleDarkMode} />
        <a href="https://www.linkedin.com/in/unnati-kulkarni-ba9355241/"><FaLinkedin className="footer-icon" /></a>
        <a href="https://www.instagram.com/unnati_umesh_kulkarni/?utm_source=qr&igsh=MWt5bTRwZWZkdmZlbw%3D%3D"><FaInstagram className="footer-icon" /></a>
        <a href="https://github.com/UnnatiUmesh"><FaGithub className="footer-icon" /></a>
      </div>
    </footer>
  );
};

export default Footer;
