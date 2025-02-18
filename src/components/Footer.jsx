import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-prefix">Coded By:</div>
            <a href="https://github.com/clouded-afk">clouded-afk</a>
            <FontAwesomeIcon icon={faGithub}/>
        </div>  
    )
}