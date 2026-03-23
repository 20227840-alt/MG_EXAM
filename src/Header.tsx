import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    return(
        <>
            <div className="HeaderContainer">
                <div className="LogoContainer">Student Portal</div>
                <div className="NavContainer">
                    <Link to="/MG_EXAM/" className={`NavLinks${location.pathname === "/MG_EXAM/" ? "active" : ""}`}>Home</Link>
                    <Link className={`NavLinks${location.pathname === "/MG_EXAM/pages/About" ? "active" : ""}`} to="/MG_EXAM/pages/About">About</Link>
                    <Link className={`NavLinks${location.pathname === "/MG_EXAM/pages/Services" ? "active" : ""}`} to="/MG_EXAM/pages/Services">Services</Link>
                    <Link className={`NavLinks${location.pathname === "/MG_EXAM/pages/Contact" ? "active" : ""}`} to="/MG_EXAM/pages/Contact">Contact</Link>
                    <Link className={`NavLinks${location.pathname === "/MG_EXAM/pages/BookRequest" ? "active" : ""}`} to="/MG_EXAM/pages/BookRequest">Book Request</Link>
                    <Link className={`NavLinks${location.pathname === "/MG_EXAM/pages/EventFeedback" ? "active" : ""}`} to="/MG_EXAM/pages/EventFeedback">Event Feeback</Link>
                </div>
            </div>
        </>
    )
}
