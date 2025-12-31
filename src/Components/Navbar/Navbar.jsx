import {  useEffect, useRef , useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Navbar/Navbar.css";
import { Offcanvas } from "bootstrap"
function Navbar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);
    const offcanvasRef = useRef(null);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

  function closeOffcanvas(){
    const offcanvasElement = offcanvasRef.current;
    const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }

}
    return (
        <div className='navbarSection py-3'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='leftSection'>
                        <Link className='nameLink' to="/">
                            <span>
                                Z
                            </span>
                            aid &nbsp;
                            <span>
                                M
                            </span>
                            ahmood
                        </Link>
                    </div>

                    <div className="rightSection text-end align-content-center">
                        <ul className="menus list-unstyled m-0">
                            <Link className={`pagesLinks mx-3 ${activeTab === "/" && "activate"}`} to="/"
                                onClick={() => setActiveTab("/")}>Home</Link>
                            <Link className={`pagesLinks mx-3 ${activeTab === "/about" && "activate"}`} to="/about"
                                onClick={() => setActiveTab("/about")}>About</Link>
                            <Link className={`pagesLinks mx-3 ${activeTab === "/portfolio" && "activate"}`} to="/portfolio" onClick={() => setActiveTab("/portfolio")}>Portfolio</Link>

                            <Link className={`pagesLinks mx-3 ${activeTab === "/contact" && "activate"}`} to="/contact" onClick={() => setActiveTab("/contact")}>Contact</Link>
                        </ul>
                    </div>

                    {/* off canvas */}
                    <div  className='smallScreenNav'>
                        <button
                            className="menuBtn"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            <i className="bi bi-list fw-bolder fs-2"></i>
                        </button>

                        <div ref={offcanvasRef} onClick={closeOffcanvas} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
                            <div   className="offcanvas-content h-100">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-white" id="offcanvasRightLabel">MenuBar</h5>
                                    <button type="button" className="btn-close btn-close-white menuBtn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body py-0">
                                    <ul className="navbar-nav align-items-start smallScreens">

                                        <li className="nav-item ms-2">
                                            <Link className={`pagesLinks mx-3 ${activeTab === "/" && "activate"}`} to="/"
                                            >Home</Link>
                                        </li>
                                        <li className="nav-item ms-2">
                                            <Link className={`pagesLinks mx-3 ${activeTab === "/about" && "activate"}`} to="/about"
                                            >About</Link>
                                        </li>
                                        <li className="nav-item ms-2">
                                            <Link className={`pagesLinks mx-3 ${activeTab === "/portfolio" && "activate"}`} to="/portfolio"
                                            >Portfolio</Link>
                                        </li>
                                        <li className="nav-item ms-2">
                                            <Link className={`pagesLinks mx-3 ${activeTab === "/contact" && "activate"}`} to="/contact"
                                            >Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
