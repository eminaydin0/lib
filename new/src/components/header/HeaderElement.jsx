import React from "react";
import { Link } from "react-router-dom";

function HeaderElement({ Element }) {
  return (
    <div>
      <ul className="header-ul">
        {Element.map((item, index) => (
          <li className="header-li" key={index}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderElement;
