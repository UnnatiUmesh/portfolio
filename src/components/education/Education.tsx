import './Education.css';

const Education = ():React.ReactNode=>{
  return (
    <div className="education-container">
      <div className="education-label"><h2>Education</h2></div>
      <div className="education-card">
        <div className="education-title">
          Bachelor of Engineering
          <span className="badge">Computer Science</span>
          <span className="badge">2016–2020</span>
        </div>
        <div className="education-institute">Siddaganga Institute Of Technology</div>
        <div className="education-grade">9.32 CGPA</div>
      </div>
    </div>
  );
};

export default Education;
