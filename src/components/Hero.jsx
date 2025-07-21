import React from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero-section text-center" id="home">
      <div className="container" data-aos="zoom-in">
        <h1 className="display-3 fw-bold neon-heading-scan">
          Hi, I'm Jay Jo 👋
        </h1>
        <h2 className="lead fs-4 mb-5 text-secondary">
          <Typewriter
            options={{
              strings: [
                "Saya adalah seorang Web Developer yang berdedikasi dari Indonesia. Saya memiliki minat besar dalam membangun website yang modern, responsif, dan user-friendly. Dengan pengalaman dalam mengembangkan berbagai proyek, saya selalu berusaha menciptakan solusi digital yang inovatif serta memberikan pengalaman pengguna terbaik. Saya menikmati proses belajar teknologi baru dan menggabungkannya untuk menghasilkan produk yang fungsional dan estetis.",
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
