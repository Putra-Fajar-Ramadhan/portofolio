import React from 'react';
import './About.css'; // Import CSS

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="neon-title">Tentang Saya</h2>
        <div className="row align-items-center animate__animated animate__fadeInUp">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <div className="about-img-wrapper">
              <img src="/pp.jpg" alt="Tentang Saya" className="about-img" />
              <div className="scan-light"></div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="about-text">
              Halo! Saya Fajar, seorang Web Developer. Saya memiliki ketertarikan yang mendalam dalam membangun website yang responsif, dan user friendly. Setiap proyek yang saya kerjakan selalu berfokus pada desain yang modern dan pengalaman pengguna yang optimal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
