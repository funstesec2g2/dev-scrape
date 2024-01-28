import React from "react";
import profile from "../assets/photo.jpg";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MemberCards({ memInfo }) {
  console.log(memInfo.github);
  return (
    <div className=" flex flex-col items-center w-3/6 md:w-1/6">
      <img
        alt="profile"
        className="w-48 rounded-full"
        src={memInfo.profile_pic || profile}
      ></img>
      <h3>{memInfo.name}</h3>
      <p className="text-yellow-600">developer</p>
      <p className="text-center">{memInfo.discription}</p>
      <div className="flex gap-2">
        <a href={`${memInfo.instagram}`}>
          <FontAwesomeIcon className="hover:text-white" icon={faInstagram} />
        </a>
        <a href={`${memInfo.github}`}>
          <FontAwesomeIcon className="hover:text-white" icon={faGithub} />
        </a>
        <a href={`${memInfo.linkedin}`}>
          <FontAwesomeIcon className="hover:text-white" icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
