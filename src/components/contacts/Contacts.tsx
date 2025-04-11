import "./Contacts.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-label"><h2>Contact</h2></div>
      <div className="contact-card">
        <div className="contact-row">
          <span className="contact-type">📧 Email:</span>
          <a href="mailto:your.email@example.com" className="contact-link">
           unnatiuk.2003@gmail.com
          </a>
        </div>
        <div className="contact-row">
          <span className="contact-type">🔗 LinkedIn:</span>
          <a href="https://linkedin.com/in/yourprofile" className="contact-link" target="_blank" rel="noreferrer">
            linkedin.com/in/unnati-kulkarni-ba9355241/
          </a>
        </div>
        <div className="contact-row">
          <span className="contact-type">🐙 GitHub:</span>
          <a href="https://github.com/yourhandle" className="contact-link" target="_blank" rel="noreferrer">
            github.com/UnnatiUmesh
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
