import React, { useState } from "react";

import { Container } from "./Nav.styles";

import logo from "../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = (props) => {
  const [icon, setIcon] = useState(false);
  return (
    <Container>
      <div className="desktop">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="links desktop">{props.children}</div>
      <nav className="navbar mobile">
        <img src={logo} alt="logo" className="logo-mobile" />
        <div className="content">
          <ul className={`menu-list ${icon ? "active" : null} `}>
            <div>{props.children}</div>
          </ul>

          {!icon && (
            <div className="show" onClick={() => setIcon(true)}>
              <GiHamburgerMenu />
            </div>
          )}

          {icon && (
            <div className="icon menu-btn" onClick={() => setIcon(false)}>
              {" "}
              <AiOutlineClose />
            </div>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
