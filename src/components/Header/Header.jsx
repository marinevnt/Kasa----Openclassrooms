import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {

    const classNameFunc = ({ isActive }) => (isActive ? "active-link" : "");

    return (
      <div className={"header"}>
        <img src={props.img} className={"logo--header"} alt="logo" />
        <ul>
            {props.navItems.map((navItem, index) => {
              return <li key={index}>
                        <NavLink to={`${navItem.link}`} className={classNameFunc}>
                          {navItem.name}
                        </NavLink>
                      </li>;
            })}
        </ul>
      </div>
    );
  }

  export default Header;