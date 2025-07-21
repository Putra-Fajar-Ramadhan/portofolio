import React from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero-section text-center" id="home">
      <div className="container" data-aos="zoom-in">
        <h1 className="display-3 fw-bold neon-heading-scan">
          Hi, I'm Fajar 👋
        </h1>
        <h2 className="lead fs-4 mb-5 text-secondary">
          <Typewriter
            options={{
              strings: [
                "Saya adalah mahasiswa Teknik Informatika di Politeknik Negeri Jakarta yang antusias mengembangkan diri dalam bidang teknologi. Memiliki ketertarikan kuat pada backend engineering serta kecerdasan buatan (AI) dan machine learning. Selain keahlian teknis, saya juga terus mengasah kemampuan kerja sama tim dan komunikasi untuk mendukung profesionalitas di dunia kerja. Saya percaya setiap tantangan adalah kesempatan untuk tumbuh dan menciptakan nilai yang lebih besar.",
              ],
              autoStart: true,
              loop: false,
              delay: 30,
              deleteSpeed: Infinity,
            }}
          />
        </h2>
        <a
          href="/cv_fajar.pdf"
          download
          className="btn btn-download"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Hero;
