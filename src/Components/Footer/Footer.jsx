import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col1">
        <h3>USEFUL LINKS</h3>
        <div className="footerLinks">
          <Link to={"/"} className="link">
            <p>Home</p>
          </Link>
          <Link className="link" to={`/categories/sports`}>
            <p>Sports</p>
          </Link>
          <Link className="link" to={`/categories/business`}>
            <p>Business</p>
          </Link>
          <Link className="link" to={`/categories/entertainment`}>
            <p>Entertainment</p>
          </Link>
          <Link className="link" to={`/faviourites`}>
            <p>Faviourites</p>
          </Link>
        </div>
      </div>
      <div className="col2">
        <h3>NewsLetter</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter your Email "
            className="footerInput"
          />
          <br />
          <button className="footerButton">subscribe</button>
        </form>
      </div>
      <div className="col3">
        <h3>Contact Us</h3>
        <p>
          Kalka ji <br />
          Delhi, India
        </p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <p className="footerWeb">
        © 2024 - 2025 Vaibhav's NewsToday.com. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
