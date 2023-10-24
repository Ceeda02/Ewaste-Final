import React from "react";

export function Contact() {
  return (
    <>
      <div className="container contact-container">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Feel free to get in touch with us using
          the contact information below.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="contact-item">  
              <h3>Address:</h3>
              <p>123 Main Street</p>
              <p>City, Country</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-item">
              <h3>Email:</h3>
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-item">
              <h3>Phone:</h3>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
