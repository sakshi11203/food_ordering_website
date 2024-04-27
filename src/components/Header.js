import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnn,setbtnn] = useState("Login");
    const onlineStatus =useOnlineStatus();
    return(
        <div className="flex justify-between bg-pink-50 shadow-lg m-2"> 
            <div className="logo-container"> 
            <img className="w-28 h-full" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4" >

                    <li className="px-4">{
                         onlineStatus===false?
                            "Offline🔴":
                        
                        "Online✅"
                    }</li>
                    <li className="px-4"> <Link to="/" > Home</Link></li>
                    <li className="px-4">
                       <Link to="/about" > About Us</Link>
                       </li>
                    <li className="px-4">Cart</li>
                    <button className= "px-4"
                        onClick ={()=>{

                            btnn==="login " ? setbtnn("Logout"):
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