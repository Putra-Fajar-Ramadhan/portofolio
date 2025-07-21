import React from 'react';
import './Projects.css'; // Neon styling
const Projects = () => {
  const projectList = [
    { title: "Berkolaborasi dengan Lapis AI sebagai mitra perusahaan dalam pengembangan chatbot", 
      desc: "Membangun chatbot berbasis website dengan Next js untuk customer support menggunakan platform N8N, bertujuan meningkatkan interaksi pelanggan secara otomatis dan efisien.", 
      link: "https://drive.google.com/file/d/1INqkSupFhi4LeFyTnDXDmav-SHIxRM85/view?usp=sharing"},
    { title: "Membangun website landing page untuk pengenalan jurusan", 
      desc: "Menggunakan React.js dan Tailwind CSS untuk membuat halaman landing page interaktif pada proyek akhir mata kuliah Pemrograman Web Dasar. Fokus pada desain responsif dan user experience yang modern", 
      link: "https://web-uas-final.vercel.app/"},
    { title: "Mengembangkan model AI untuk klasifikasi kematangan pisang", 
      desc: "Mengimplementasikan model VGG-19 untuk mendeteksi tingkat kematangan pisang pada tugas akhir mata kuliah Pengolahan Citra Digital. Proyek ini menggunakan teknik deep learning untuk klasifikasi citra dengan akurasi tinggi", 
      link: "https://github.com/RandyAnanda2003/Banana_Ripness_predict"}
  ];

  return (
   <section id="projects" className="py-5 projects-section">
  <div className="container">
    <h2 className="text-center mb-4 neon-title">My Projects</h2>
    <div className="row animate__animated animate__fadeIn">
      {projectList.map((project, idx) => (
        <div key={idx} className="col-md-4 mb-4">
          <div className="card glass-card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-purple">{project.title}</h5>
              <p className="card-text text-secondary">{project.desc}</p>
            </div>
            <div className="card-footer border-top-0">
             <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-purple w-100"
                  >
                    View Details
                  </a>


            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Projects;
