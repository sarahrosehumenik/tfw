import { Link } from "react-router-dom";
import "./Nav.css"
import "../App.css"

export default function Nav() {

   
 

    const handleClick = () => {
       
        let body = document.querySelector("body")
      
       body.style.background = 'linear-gradient(rgb(173, 107, 201), rgb(152, 183, 201))'
  

    }




    return (
        <>
            <nav>
                <ul>
                    <li className="title">That Feeling When</li>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link  to="/tfw" onClick={() =>handleClick()}>Draw TFW</Link></li>
                    <li><Link to="/feels">Feel TFW</Link></li>
                </ul>
            </nav>
        </>
    )
}