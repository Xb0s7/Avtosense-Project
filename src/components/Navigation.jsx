import { useState } from "react";
import { NAVIGATION_ITEMS } from "../config/navigation-config";
import useCheckWidthScreen from "../utils/checkScreenSize";
import logo from "../assets/transperant-logo.png";
import Link from "react-scroll/modules/components/Link";
import { FaCar, FaFacebook } from "react-icons/fa";

export const Navigation = () => {
    const [mobileOpened, setMobileOpened] = useState(false);

    const closeMenuOnClick = () => {
        setMobileOpened(!mobileOpened);
    };

    const isBiggerThanTablet = useCheckWidthScreen(1024);
    return (
        <nav className="section-navigation">
            <div className="navbar-container">
                <div id="mySidebar" className="navbar">
                    <a href="#home" className="logo-link">
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                    <ul className={`menu-items ${mobileOpened ? "opened" : ""}`}>
                        {NAVIGATION_ITEMS.map(({ id, icon, tooltip }, index) => (
                            <li key={index}>
                                <Link
                                    className={`${id === "home" ? "active" : ""} navigation-link`}
                                    duration={500}
                                    delay={0}
                                    to={id}
                                    smooth={true}
                                    onClick={closeMenuOnClick}
                                    spyThrottle={0}

                                >
                                    <div className="nav-icon-container">{icon()}</div>
                                    {isBiggerThanTablet && (
                                        <span className="tooltiptext">{tooltip}</span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="external-links">
                        <a href="https://www.facebook.com/avtosense" className="link">
                            <FaFacebook size={20}></FaFacebook>
                        </a>
                        <a
                            href="https://motointegrator.com/bg/bg/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D0%B7/%D0%B2%D0%B0%D1%80%D0%BD%D0%B0/7jegb38p-avtosense"
                            className="link"
                        >
                            <FaCar size={20}></FaCar>
                        </a>
                    </div>
                    <button
                        className={`hamburger-btn ${mobileOpened ? "opened" : ""}`}
                        onClick={closeMenuOnClick}
                    >
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};
