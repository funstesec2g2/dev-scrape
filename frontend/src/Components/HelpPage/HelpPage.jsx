import Heading from "../Heading/Heading.jsx";
import "./HelpPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function HelpPage() {
  return (
    <>
      {/* <Heading /> */}
      <main className="flex flex-wrap justify-center items-center flex-col md:flex-row">
        <div className="max-w-4xl">
          <h1 className="text-white text-center text-2xl font-bold my-3">
            Contact Us
          </h1>
          <p className="text-white text-center px-8 text-sm">
            Here you can forward some question to one of our helper. Just fill
            in the form with the right information and we will contact you
            through your Email, or you can use the phone number we have
            attached, to reach out to us directly.
          </p>
        </div>

        <div className="my-4 w-full md:w-1/2 grid justify-center gap-8 mt-8">
          <div className="flex gap-4">
            <div className="bg-white rounded-full min-w-10 flex justify-center items-center h-10">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <h3 className="text-green-500 text-xl ">Address</h3>
              <a
                href="https://aait.edu.et/contact-us"
                target="_blank"
                className="text-blue-300 hover:text-blue-500 active:text-blue-700"
              >
                AAiT 3rd year software department
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-white rounded-full min-w-10 flex justify-center items-center h-10">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <h3 className="text-green-500 text-xl ">Phone Number</h3>
              <p className="text-white ">09......4</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white rounded-full min-w-10 flex justify-center items-center h-10">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <h3 className="text-green-500 text-xl ">Email</h3>
              <a
                href="mailto:est.....@.....com"
                className="text-blue-300 hover:text-blue-500 active:text-blue-700"
              >
                est.....@.....com
              </a>
            </div>
          </div>
        </div>

        <form className="md:mb-4 md:mx-10 w-full max-w-lg md:w-2/5 grid justify-center mb-5 mt-3 md:mt-8 bg-white py-3">
          <h2 className="text-gray-600 text-center text-xl font-bold pb-3">
            Send Your Message
          </h2>
          <div className="w-full mt-2">
            <input
              type="text"
              name="full-name"
              required="required"
              className="w-full py-2 my-2 outline-none border-slate-900 border-b-2 border-b-solid"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full mt-2 ">
            <input
              type="email"
              name="email"
              required="required"
              className="w-full py-2 my-2 outline-none border-slate-900 border-b-2 border-b-solid"
              placeholder="Email"
            />
          </div>
          <div className="w-full mt-2 ">
            <textarea
              required="required"
              className="w-full py-2 my-2 outline-none border-slate-900 border-b-2 border-b-solid resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="send"
              className="md:bg-slate-900 text-white bg-blue-900 hover:bg-blue-700 active:bg-blue-500  px-4 rounded transition-colors duration-300 ease-in-out py-1 mt-4 w-full"
            />
          </div>
        </form>
      </main>
    </>
  );
}
