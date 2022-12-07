import { Link } from "react-router-dom";
import "./Nav.css"
import "../App.css"

export default function Nav() {

   return (
        <>
            <nav>
                <ul>
                    <li className="title">That Feeling When</li>
                    <li><Link to="/">HOME</Link></li>
                    <li> <Link  to="/tfw">DRAW TFW</Link></li>
                    <li><Link to="/feels">FEEL TFW</Link></li>
                </ul>
            </nav>
        </>
    )
}