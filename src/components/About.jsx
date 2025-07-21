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
              Halo! Saya Fajar, Saya adalah mahasiswa Teknik Informatika di Politeknik Negeri Jakarta yang antusias mengembangkan diri dalam bidang teknologi. Memiliki ketertarikan kuat pada backend engineering serta kecerdasan buatan (AI) dan machine learning. Selain keahlian teknis, saya juga terus mengasah kemampuan kerja sama tim dan komunikasi untuk mendukung profesionalitas di dunia kerja. Saya percaya setiap tantangan adalah kesempatan untuk tumbuh dan menciptakan nilai yang lebih besar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
