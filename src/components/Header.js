import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnn,setbtnn] = useState("Login");
    const onlineStatus =useOnlineStatus();
    return(
        <div className="header"> 
            <div className="logo-container"> 
            <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>

                    <li>{
                         onlineStatus===false?
                            "Offline🔴":
                        
                        "Online✅"
                    }</li>
                    <li> <Link to="/" > Home</Link></li>
                    <li>
                       <Link to="/about" > About Us</Link>
                       </li>
                    <li>Cart</li>
                    <button className="login"
                        onClick ={()=>{

                            btnn==="login" ? setbtnn("Logout"):
                             setbtnn("login");
                        }}
                        >
                            {btnn};
                    </button>
                </ul>

            </div>

        </div>
    )
}

export default Header;