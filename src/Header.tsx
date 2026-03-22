import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    return(
        <>
            <div className="HeaderContainer">
                <div className="LogoContainer">Student Portal</div>
                <div className="NavContainer">
                    <Link to="/" className={`NavLinks${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                    <Link className={`NavLinks${location.pathname === "/pages/About" ? "active" : ""}`} to="/pages/About">About</Link>
                    <Link className={`NavLinks${location.pathname === "/pages/Services" ? "active" : ""}`} to="/pages/Services">Services</Link>
                    <Link className={`NavLinks${location.pathname === "/pages/Contact" ? "active" : ""}`} to="/pages/Contact">Contact</Link>
                    <Link className={`NavLinks${location.pathname === "/pages/BookRequest" ? "active" : ""}`} to="/pages/BookRequest">Book Request</Link>
                    <Link className={`NavLinks${location.pathname === "/pages/EventFeedback" ? "active" : ""}`} to="/pages/EventFeedback">Event Feeback</Link>
                </div>
            </div>
        </>
    )
}
