import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ServiceBlock.css";

const ServiceBlock = ({ icon, color, title, description, linkTo }) => (
  <div className="service-block col-lg-4 col-md-6 col-sm-12">
    <div className="inner-box">
      <div className="icon box">
        <FontAwesomeIcon
          icon={icon}
          className="fa fa-bold"
          color={color}
          size="lg"
        />
      </div>
      <h3 className="poppins-font">{title}</h3>
      <div className="text">{description}</div>
      <div className="link-box">
        <Link to={linkTo} className="btn col-md-6 col-sm-6">
          <span>hire Me</span>
        </Link>
      </div>
    </div>
  </div>
);

export default ServiceBlock;
