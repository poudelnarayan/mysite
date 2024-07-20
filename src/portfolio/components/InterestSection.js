import { Link } from "react-router-dom";

const InterestSection = () => (
  <div
    className="interest"
    style={{ marginTop: "120px", marginBottom: "120px" }}
  >
    <div className="col-md-12">
      <div className="work col-md-7">
        <h3>Interested to work?</h3>
        <p className="work">
          You can make me work either by involving me in some projects or hire
          me as a full-time or part-time developer.
        </p>
        <Link to="/contact" className="btn col-md-6 col-sm-6">
          <span> Contact Me</span>
        </Link>
      </div>
    </div>
  </div>
);

export default InterestSection;
