import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container animate__animated animate__zoomIn">
        <h2 className="text-center mb-4 neon-title">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="glass-form p-4 rounded">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control neon-input"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control neon-input"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control neon-input"
                    id="message"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-purple w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
