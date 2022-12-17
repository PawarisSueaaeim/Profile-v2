import React from "react";
import "../Content.css";

export default function Experience(props) {
  return (
    <div className="content-bg">
      <h1>Experience</h1>
      <div className="content-box">
        <div className="timeline">
          <div className="container-exp left">
            <div className="content">
              <h3>Bachelor's degree of computer engineering</h3>
              <h4>August 2017 - May 2021</h4>
              <p>Computer engineering</p>
              <p>• Basic engineering - Drawing/Calculus/Physics</p>
              <p>• Basic automation - Programming/Mechatronics</p>
              <p>
                • Manage plan and tasks of programming project or network
                project
              </p>
              <p>• Design/Develop hardwere and softwere</p>
              <p>
                • Learn to new thing of technology such as image processing,
                computer visions
              </p>
            </div>
          </div>
          <div className="container-exp right">
            <div className="content">
              <h3>System Engineer/IT Support</h3>
              <h4>October 2021 - Current</h4>
              <p>Responsibility for Admin & Support.</p>
              <p>
                • Maintain and monitoring IT regulation regarding IT security
              </p>
              <p>
                • IT vendor management for project and maintenance.
                Responsibility for Network
              </p>
              <p>
                • Manage plan and tasks of network and IT infrastructure team
              </p>
            </div>
          </div><div className="container-exp left">
            <div className="content">
              <h3>Software Tester</h3>
              <h4>Sep 2022 - Present</h4>
              <p>Create test case and Support customer</p>
              <p>• Create test case</p>
              <p>• Test and report issue</p>
              <p>
                • Fix problems with users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
