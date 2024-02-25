import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";

const Header = ()=>
{
   const[btnNameText, setbtnNameText] = useState('Login');

    return(<div className="header_Container">
        <div className="imgContainer">
           <img className="headerLogo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
           <ul>
              <li>Home</li>
              <li>About US</li>
              <li>Contact Us</li>
              <button className="btn-Login" onClick={()=>{
                 btnNameText==="Login" ? setbtnNameText('Logout') : setbtnNameText('Login');
              }}>{btnNameText}</button>
           </ul>
        </div>
    </div>);
}

export default Header;