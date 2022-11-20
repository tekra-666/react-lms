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

      <div className="card-info-education card-style">
        <div className="card-title">Educational Information</div>
        <div>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </div>
      </div>
      
      <div>Professional Information</div>
      
      <div>Your Journey</div>

    </div>
  )
}

export default ProfileCandidate;