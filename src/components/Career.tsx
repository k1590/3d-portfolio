import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Data Science</h4>
                <h5>Acharya Institute of Technology</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Engineering in Data Science.
              Expected graduation: September 2027. CGPA: 7.7. Focused on
              machine learning, data analysis, NLP, and web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
