import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <div className="container text-center">
        <p className="footer-text mb-3">
          © {new Date().getFullYear()} Jay Jo | Built with ❤️ using React & Neon UI
        </p>
        <div className="social-icons">
          <a
            href="https://wa.me/628978172183"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=putrafajarramadhan123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/putra.fajar.ramadhan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
