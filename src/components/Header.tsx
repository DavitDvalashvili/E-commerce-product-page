import { StyledHeader } from "./StylesComponents";
import {useState} from "react"
import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import close from "../assets/icon-close.svg";
import { navPropsType } from "./Types";
import { StyledNav } from "./StylesComponents";

const Header = () => {
    const [hideNav, setHideNav] = useState<boolean>(true)

    function handleClick() {
        {hideNav ? setHideNav(false) : setHideNav(true)}
    }

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
    })



  return (
    <StyledHeader>
      <div className="navBox">
        {(hideNav && innerWidth < 1440) && <img src={menu} className="menu" alt="menu" onClick={handleClick}/>}
        <img src={logo} className="logo" alt="logo" />
        {(!hideNav || innerWidth >= 1440)&& <Nav handleClick={handleClick}/>}
      </div>
      <div>
        <img src={cart} className="cart" alt="cart" />
        <img src={avatar} className="avatar" alt="avatar" />
      </div>
    </StyledHeader>
  );
};

export default Header;


const Nav = (props:navPropsType) => {
    return (
        <StyledNav>
            {innerWidth<1440 && <img src={close} alt="close" onClick={props.handleClick}/>}
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </StyledNav>
    )
}