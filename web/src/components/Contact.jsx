import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="section">
      <div className="section-inner">
        <h1 className="section-title">Contact</h1>

        <form
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="6" placeholder="Message" />

          <button
            style={{
              padding: "0.75rem",
              backgroundColor: "#001b5e",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
