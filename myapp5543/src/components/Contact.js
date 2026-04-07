import React from "react";
export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p className="muted">
        Questions about schedules, rules or registrations? Reach us here.
      </p>
      <div className="contact-grid">
        <div className="card contact-card">
          <h3>General</h3>
          <p>
            Email:{" "}
            <a href="mailto:admin@bitfest2025.com">admin@bitfest2025.com</a>
          </p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="card contact-card">
          <h3>Follow Us</h3>
          <p>
            Instagram:{" "}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              @computerassociation
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              Computer Association
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
