import logo from "../assets/logo.png";
import profile from "../assets/photo.jpg";
// import Heading from "../Heading/Heading";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AboutPage() {
  return (
    <>
      {/* <Heading /> */}
      <div className=" p-10 text-white">
        <div className=" flex flex-col md:flex-row justify-center align-center lg:grid lg:grid-cols-2 mb-28 md:px-28">
          <div className="text-justify p-10">
            <h1 className="pb-7 text-2xl">About US</h1>Welcome to Dev Scraper,
            your ultimate source for software engineering-related data scraped
            directly from GitHub! At Dev Scraper, we are passionate about
            providing developers, tech enthusiasts, and businesses with a wealth
            of valuable information to enhance their software development
            endeavors. Our cutting-edge scraping technology meticulously
            retrieves data, such as trending repositories, developer profiles,
            and code snippets, giving you unparalleled insights into the
            ever-evolving world of coding. Whether you're a seasoned developer
            looking for inspiration, a business seeking to identify top talent,
            or a curious mind exploring the vast GitHub ecosystem, Dev Scraper
            is your trusted companion. Join us on this exciting journey as we
            empower you with the latest and most relevant data from the world's
            largest developer community.
          </div>
          <img className="w-8/12 m-auto flex-shrink-0" src={logo}></img>
        </div>

        <div className="text-slate-400">
          <div className="text-center text-slate-400 my-16 justify-center items-center">
            <h1 className=" text-3xl font-bold">
              MEET <i className="font-thin">the</i> TEAM
            </h1>
            <p className="text-sm">responsible for making devscarpe</p>
            <div className="w-28 bg-slate-400 h-0.5 mr-auto ml-auto mt-3"></div>
          </div>

          {/* meet the team section */}

          <div className="flex flex-col gap-20">
            {/* first row */}

            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className=" flex flex-col items-center w-3/6 md:w-1/6">
                <img className="w-48 rounded-full" src={profile}></img>
                <h3>Full Name here</h3>
                <p className="text-yellow-600">developer</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, at aliquam nunc ultricies. Nulla
                  facilisi. Nullam tempor mauris a felis malesuada, eget
                  tincidunt odio elementum.{" "}
                </p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faLinkedin}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center w-3/6 md:w-1/6">
                <img className="w-48 rounded-full" src={profile}></img>
                <h3>Full Name here</h3>
                <p className="text-yellow-600">developer</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, at aliquam nunc ultricies. Nulla
                  facilisi. Nullam tempor mauris a felis malesuada, eget
                  tincidunt odio elementum.{" "}
                </p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faLinkedin}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center w-3/6 md:w-1/6">
                <img className="w-48 rounded-full" src={profile}></img>
                <h3>Full Name here</h3>
                <p className="text-yellow-600">developer</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, at aliquam nunc ultricies. Nulla
                  facilisi. Nullam tempor mauris a felis malesuada, eget
                  tincidunt odio elementum.
                </p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faLinkedin}
                  />
                </div>
              </div>
            </div>

            {/* second row */}

            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="flex flex-col items-center w-3/6 md:w-1/6">
                <img className="w-48 rounded-full" src={profile}></img>
                <h3>Full Name here</h3>
                <p className="text-yellow-600">developer</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, at aliquam nunc ultricies. Nulla
                  facilisi. Nullam tempor mauris a felis malesuada, eget
                  tincidunt odio elementum.
                </p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faLinkedin}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center w-3/6 md:w-1/6">
                <img className="w-48 rounded-full" src={profile}></img>
                <h3>Full Name here</h3>
                <p className="text-yellow-600">developer</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, , at aliquam nunc ultricies. Nulla
                  facilisi. Nullam tempor mauris a felis malesuada, eget
                  tincidunt odio elementum.{" "}
                </p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faLinkedin}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center w-3/6 md:w-1/6">
                <img className="w-48 rounded-full" src={profile}></img>
                <h3>Full Name here</h3>
                <p className="text-yellow-600">developer</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, at aliquam nunc ultricies. Nulla
                  facilisi. Nullam tempor mauris a felis malesuada, eget
                  tincidunt odio elementum.{" "}
                </p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faLinkedin}
                  />
                </div>
              </div>
            </div>

            {/* third row */}

            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="flex flex-col items-center w-3/6 md:w-1/6">
                <img className="w-48 rounded-full" src={profile}></img>
                <h3>Full Name here</h3>
                <p className="text-yellow-600">developer</p>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, at aliquam nunc ultricies. Nulla
                  facilisi. Nullam tempor mauris a felis malesuada, eget
                  tincidunt odio elementum.{" "}
                </p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="hover:text-white"
                    icon={faLinkedin}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
