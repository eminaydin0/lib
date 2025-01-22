import React from "react";
import Logo from "./Logo";
import HeaderElement from "./HeaderElement";
import "./Header.css";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Header() {
  const menuItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Features", url: "/features" },
    { title: "Life", url: "/Life" },
    { title: "Adventures", url: "/adventures" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="header-main">
          <HeaderElement Element={menuItems} />
        </div>
        <div className="header-right">
          <div className="social-media">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </div>
          <div className="serach">
            <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
