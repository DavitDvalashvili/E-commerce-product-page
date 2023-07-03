import { StyledHeader } from "./StylesComponents";
import { useState } from "react";
import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import close from "../assets/icon-close.svg";
import { navPropsType } from "./Types";
import { StyledNav } from "./StylesComponents";
import { cartType } from "./Types";

const Header = (props: cartType) => {
  const [hideNav, setHideNav] = useState<boolean>(true);

  function handleClick() {
    {
      hideNav ? setHideNav(false) : setHideNav(true);
    }
  }



  return (
    <StyledHeader hideNav={hideNav}>
      <div className="navBox">
        {hideNav && props.innerWidth < 1440 && (
          <img src={menu} className="menu" alt="menu" onClick={handleClick} />
        )}
        <img src={logo} className="logo" alt="logo" />
        {(!hideNav || props.innerWidth >= 1440) && <Nav handleClick={handleClick} />}
      </div>
      <div className="img-box">
        <img
          src={cart}
          className="cart"
          alt="cart"
          onClick={props.handleClick}
        />
        {props.addAmount ? <span className="notice">{props.addAmount}</span> : ""}
        <img src={avatar} className="avatar" alt="avatar" />
      </div>
    </StyledHeader>
  );
};

export default Header;

const Nav = (props: navPropsType) => {
  return (
    <StyledNav>
      {innerWidth < 1440 && (
        <img src={close} alt="close" onClick={props.handleClick} />
      )}
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </StyledNav>
  );
};
