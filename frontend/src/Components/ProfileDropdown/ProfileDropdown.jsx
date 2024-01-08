import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import photo from "../assets/photo.jpg";
function ProfileDropdown() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div>
      <img
        onClick={() => setOpenProfile((prev) => !prev)}
        src={photo}
        className="w-16 rounded-full"
        alt="profile"
      />
      {openProfile && (
        <div className="flex flex-col dropDownProfile">
          <ul className="flex flex-col gap-4">
            <Link
              to="/editProfile"
              className="hover:text-blue-500"
              onClick={() => setOpenProfile((prev) => !prev)}
            >
              Edit Profile
            </Link>
            <li>Logout</li>
            <li>Exit</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default ProfileDropdown;
