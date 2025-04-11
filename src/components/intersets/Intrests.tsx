import "./Intrests.css"
const Intrests=():React.ReactNode=>{
    return (
        <div className="interest-container">
        <div className="interest-label"><h2>Interest</h2></div>
        <div className="interest-list">
          <div className="interest-item">
            <span>📚</span> Reading Books
          </div>
          <div className="interest-item">
            <span>🏸</span> Playing Badminton
          </div>
          <div className="interest-item">
            <span>✈️</span> Travel
          </div>
          <div className="interest-item">
            <span>💻</span> Web Design
          </div>
        </div>
      </div>
      
    );
}

export default Intrests;