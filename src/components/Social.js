import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faGithub, faTiktok, faMedium } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
    return (
        <div className="social">
            <h2>Socials</h2>

            <a href="mailto:info@alexanderstahl.at" className="socialbutton">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://twitter.com/AStahlTCH/" className="socialbutton">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/alexander-s-b800b6205/" className="socialbutton">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/alexanderstahl93" className="socialbutton">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.tiktok.com/@manofsteelde" className="socialbutton">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://medium.com/@stahl950" className="socialbutton">
                <FontAwesomeIcon icon={faMedium} />
            </a>
        </div>
    );
}

export default Social;