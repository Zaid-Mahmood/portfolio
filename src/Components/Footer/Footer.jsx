import "../Footer/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className='footerSection my-2'>
            <div className='followText text-center'>
                <h2>Follow Me</h2>

                    <Link to="https://www.linkedin.com/in/zaid-mahmood-web-developer" target="_blank" rel="noopener noreferrer">
                        <i className="icons bi bi-linkedin"></i>
                    </Link>
                    <Link to="https://github.com/Zaid-Mahmood" target="_blank" rel="noopener noreferrer">
                        <i className="icons bi bi-github"></i>
                    </Link>

                    <Link to="mailto:mahmoodzaid603@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="icons bi bi-envelope"></i>
                    </Link>
            </div>

        </div>
    )
}

export default Footer
