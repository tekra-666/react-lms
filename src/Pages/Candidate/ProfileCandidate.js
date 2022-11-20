import React from "react";

import './ProfileCandidate.css';

import ProfilePhoto from '../../Assets/photo.jpg';

const ProfileCandidate = () => {
  return (
    <div className="profile-candidate">
      
      {/* Candidate Personal Information */}
      <div className="card-info-personal card-style">
        <div className="profile-photo">
          <img src={ProfilePhoto} alt="profile photo" />
        </div>
        <div className="info-personal">
          <div>Name</div>
          <div>Email</div>
          <div>Mobile</div>
          <div>City</div>
          <div>Program</div>
          <div>Course</div>
        </div>
      </div>

      {/* Candidate Educational Information */}
      <div className="card-style card">
        <div className="card-title">Educational Information</div>
        <div>
          <div className="card-body card-info-title info-education">
            <div>COURSE</div>
            <div>PERCENTAGE</div>
            <div>GRADE</div>
            <div>COLLEGE</div>
            <div>UNIVERSITY</div>
            <div>PASSING YEAR</div>
          </div>
          <div className="card-body info-education">
            <div>BJMC</div>
            <div>82%</div>
            <div>A</div>
            <div>Asian School of Media Studies (ASMS)</div>
            <div>Mewar University</div>
            <div>2016</div>
          </div>
        </div>
        
      </div>
      
      {/* Candidate Professional Information */}
      <div className="card-style card">
        <div className="card-title">Professional  Information</div>
        <div>
          <div className="card-body card-info-title info-education">
            <div>COMPANY NAME</div>
            <div>DESIGNATION</div>
            <div>INDUSTRY</div>
            <div>START DATE</div>
            <div>END DATE</div>
            <div>LOCATION</div>
          </div>
          <div className="card-body info-education">
            <div>Skillible.io</div>
            <div>Digital Marketing Manager</div>
            <div>EdTech</div>
            <div>1-Aug-2021</div>
            <div>Ongoing</div>
            <div>Noida, India</div>
          </div>
          </div>
      </div>

      {/* Candidate Journey Information */}
      <div className="card-style card">
        <div className="card-title">Learner Jouney</div>
        <div>
          <div className="card-body candidate-journey">
            <div className="card-info-title ques">How did you discover our course?</div>
            <div className="ans">I was searching for a job and also adopting new technology at the same time. So, I got to know about Skillible, and was highly impressed with their virtual platform to help mothers restart their career and get back on their feet again.
            </div>
            <div className="card-info-title ques">What was the most interesting thing about the course that compelled you to join us as a learner?
            </div>
            <div>Since it was my first, I was excited to attend a virtual-based program but I was amazed at the technical skills and knowledge being imparted such as Java, HTML, SQL, Salesforce development & admin too. After the completion, I am pretty much confident about my career restart. Equally, I was glad about zero fees until placement.
            </div>
            <div className="card-info-title ques">Tell us in detail about your professional background?</div>
            <div>Basically, my prior experience was from a non-technical background but I was trying to get entry as a Developer. Unfortunately, I didn't receive any opportunities but I was not discouraged and didn’t give up. But, now with the opportunity, I have received through Skillible, I am confident to create a benchmark in Salesforce Development and explore my newly achieved skills to the maximum.
            </div>
            <div className="card-info-title ques">Discuss your career goals</div>
            <div>To be honest, I am aiming towards my short-term goal i.e., to kick-start my career as a Salesforce developer. And to turn my dream into reality, I am adopting all the necessary skills necessary to achieve it.
            </div>
            <div className="card-info-title ques">What were your thoughts/feelings after joining this program?</div>
            <div>Initially, I was confused about the course but slowly and steadily, as I was exposed to a fresh set of skills, I was confident in my decision to restart my career with Skillible.  And, after a while I was able to solve the tasks assigned to me by the trainers.
            </div>
            <div className="card-info-title ques">Share your experiences on learner engagement</div>
            <div>My favorite was the doubt-clearing sessions where each of our questions was addressed through a satisfactory answer. Not just that, but even if we missed any sessions due to an emergency, they were gracious enough to arrange an alternate session for us.
            </div>
            <div className="card-info-title ques">What do you hope to gain after the completion of this course?</div>
            <div>My gain has been absolute because after attending Skillible’s online classes, I want to enrol for more online classes.  The Salesforce development course has helped me a lot in restarting my career in the right direction.
            </div>
            <div className="card-info-title ques">How has Skillible & Salesforce supported you in becoming a technological professional?</div>
            <div>
            Skillible and Salesforce provide a perfect blend of technical and conceptual knowledge. I got a chance to learn skills like HTM, java, CSS, Salesforce, and SQL. Proper attention was paid to clear individual doubts & conceptual understanding was built to develop learning opportunities for me.
            </div>
            <div className="card-info-title ques">Discuss in detail the dream role/job you expect from Skillible</div>
            <div>As discussed earlier, I want to see myself as a successful Salesforce developer and utilize all my skills to demonstrate my caliber.  I am sure by learning these technical skills like apex trigger, SOQL query, Apex coding, and Governor limit will help me in enhancing my technical aptitude. Last but not the least, I have immense faith in Skillible, which will help me in achieving my dream job goal.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCandidate;