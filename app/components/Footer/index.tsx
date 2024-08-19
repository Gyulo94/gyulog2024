import { FaGithubSquare } from "react-icons/fa";
import "./style.css";
export default function Footer() {
  return (
    <header id="footer-wrapper">
      <div className="footer-container">
        <div className="footer-left-box">
          <img src="" alt="" />
          <p>Gyulog</p>
          <div className="footer-copyright">나만의 공간</div>
        </div>
        <div className="footer-right-box">
          <FaGithubSquare size={25} />
        </div>
      </div>
    </header>
  );
}
