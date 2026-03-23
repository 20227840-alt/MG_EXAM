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
                    <Link onClick={hideNavContainer} to="/MG_EXAM/" className={`NavLinks${location.pathname === "/MG_EXAM/" ? "active" : ""}`}>Home</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/MG_EXAM/pages/About" ? "active" : ""}`} to="/MG_EXAM/pages/About">About</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/MG_EXAM/pages/Services" ? "active" : ""}`} to="/MG_EXAM/pages/Services">Services</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/MG_EXAM/pages/Contact" ? "active" : ""}`} to="/MG_EXAM/pages/Contact">Contact</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/MG_EXAM/pages/BookRequest" ? "active" : ""}`} to="/MG_EXAM/pages/BookRequest">Book Request</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/MG_EXAM/pages/EventFeedback" ? "active" : ""}`} to="/MG_EXAM/pages/EventFeedback">Event Feeback</Link>
                </div>
            </div>

        </>
    )
}