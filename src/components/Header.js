import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnn,setbtnn] = useState("login");
    const onlineStatus =useOnlineStatus();

//subscribing to store
    const cartItems =useSelector((store)=>store.cart.items);
    return(
        <div className="flex justify-between   bg-pink-50 shadow-lg m-2"> 
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
                       <Link to="/about poppins-thin" > About Us</Link>
                       </li>
                    <li className="px-4">
                        <Link to="/cart">Cart(({cartItems.length}) items)
                        </Link></li>



                    <button className= "px-4"
                        onClick ={()=>{
                            console.log("LOGIN");
                            // if btnn === "login"
                            // setbtnn ("Logout");
                            // else 
                            // 
                            if(btnn === "login")
                            setbtnn("logout")
                        else if(btnn == "logout")
                        setbtnn("login")

                        }}
                        >
                            {btnn}
                    </button>
                </ul>

            </div>

        </div>
    )
}

export default Header;






