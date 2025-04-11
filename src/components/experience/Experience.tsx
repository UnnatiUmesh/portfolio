import "./Experience.css"
const Experience = (): React.ReactNode => {
    return (
        <div className="experience-container">
          {/* Left Section */}
          <div className="section-title">
            <h2>Work Experience</h2>
          </div>
    
          {/* Right Section */}
          <div className="experience-card">
            <div className="card-header">
              <h3>Full Stack AI Developer</h3>
              <a href="https:stack-lane.slack.com"><span className="company-badge">StackLane</span></a>
              <span className="date-badge">March 2025</span>
            </div>
            <p>
            Contributed to backend deployment and frontend development at Stacklane while learning key concepts in full-stack engineering.
            </p>
          </div>
        </div>
      );
};
export default Experience;
