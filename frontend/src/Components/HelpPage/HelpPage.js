import Heading from "../Heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function HelpPage() {
  return (
    <>
      <Heading />
      <p className="text-center mt-20 pt-5 text-sm order-start">
        Start marking your favorites and create your personalized collection!
      </p>
    </>
  );
}
