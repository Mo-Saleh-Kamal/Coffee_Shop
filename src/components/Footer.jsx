import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { navLinks } from "../data/menuData";

const Footer = ({ onNavigate }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h3>☕ Brew Haven</h3>
          <p>قهوة مختارة بعناية، تحميص يومي، ومذاق لا يُنسى في كل رشفة.</p>
          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div>
          <h3>روابط سريعة</h3>
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => onNavigate(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <div>
          <h3>تواصل معنا</h3>
          <p>
            <FaPhone style={{ marginLeft: 8, display: "inline" }} /> 0100 000
            0000
          </p>
          <p>
            <FaEnvelope style={{ marginLeft: 8, display: "inline" }} />{" "}
            info@brewhaven.com
          </p>
          <p>
            <FaMapMarkerAlt style={{ marginLeft: 8, display: "inline" }} />{" "}
            القاهرة، مصر
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Brew Haven — جميع الحقوق محفوظة
      </div>
    </div>
  </footer>
);

export default Footer;
