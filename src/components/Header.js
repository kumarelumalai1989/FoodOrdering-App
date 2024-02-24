import { LOGO_URL } from "../utils/Constants";

const Header = ()=>
{
    return(<div className="header_Container">
        <div className="imgContainer">
           <img className="headerLogo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
           <ul>
              <li>Home</li>
              <li>About US</li>
              <li>Contact Us</li>
           </ul>
        </div>
    </div>);
}

export default Header;