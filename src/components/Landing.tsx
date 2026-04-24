import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hi, I'm</h2>
            <h1>
              KEVIN
              <br />
              <span>BIJU</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Data Science &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Machine</div>
              <div className="landing-h2-2">Frontend</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Learning</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
