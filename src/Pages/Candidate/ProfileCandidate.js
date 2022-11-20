import React from "react";

import './ProfileCandidate.css';

import ProfilePhoto from '../../Assets/photo.jpg';

const ProfileCandidate = () => {
  return (
    <div className="profile-candidate">
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

      <div className="card-style card">
        <div className="card-title">Educational Information</div>
        <div className="card-body">
          <div className="card-body info-education">
            <div>Course</div>
            <div>Percentage</div>
            <div>Grade</div>
            <div>College Name</div>
            <div>University Name</div>
            <div>Passing Year</div>
          </div>
          <div className="card-body info-education">
            <div>B.Tech</div>
            <div>80%</div>
            <div>A</div>
            <div>ITS College of Engineering</div>
            <div>Uttar Pradesh Technical University (UPTU)</div>
            <div>Passing Year</div>
          </div>
        </div>
        
      </div>
      
      <div>Professional Information</div>
      
      <div>Your Journey</div>

    </div>
  )
}

export default ProfileCandidate;