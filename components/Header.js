import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
        <div className="head">
           <img className="image" src={LOGO_URL}/>
           <div className="nav-items"><ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
            <li>CART</li>
           </ul>
           </div>
        </div>
    )
};


export default Header;