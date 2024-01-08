import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
function Profile() {
  return (
    <div className="flex flex-col dropDownProfile">
      <ul className="flex flex-col gap-4">
        <Link to="/editProfile">Edit Profile</Link>
        <li>Logout</li>
        <li>Exit</li>
      </ul>
    </div>
  );
}
export default Profile;
