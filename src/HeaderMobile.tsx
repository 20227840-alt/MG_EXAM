import { Link, useLocation } from "react-router-dom";
import mobileMenu from "../src/assets/Group 1.svg"
import { useState } from "react";
export default function HeaderMobile(){
    const [mobileDisplaymenu,setMobileDisplayMenu] = useState("none")
    const location = useLocation();
    
    const hideNavContainer = () => {
        setMobileDisplayMenu("none");
    }

    return(
        <>
            <div className="MobileHeaderContainer">
                <div className="MobileLogoandIcon"><div className="LogoContainer">Student Portal</div> <div><img className="MobileMenuIcon" onClick={()=>( mobileDisplaymenu === "none" ? setMobileDisplayMenu("flex") : setMobileDisplayMenu("none") )} src={mobileMenu}/></div> </div>
                <div className="NavContainerMobile" style={{display:mobileDisplaymenu}}>
                    <Link onClick={hideNavContainer} to="/" className={`NavLinks${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/pages/About" ? "active" : ""}`} to="/pages/About">About</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/pages/Services" ? "active" : ""}`} to="/pages/Services">Services</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/pages/Contact" ? "active" : ""}`} to="/pages/Contact">Contact</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/pages/BookRequest" ? "active" : ""}`} to="/pages/BookRequest">Book Request</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/pages/EventFeedback" ? "active" : ""}`} to="/pages/EventFeedback">Event Feeback</Link>
                </div>
            </div>

        </>
    )
}