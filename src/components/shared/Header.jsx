import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMobNav, setShowMobNav] = useState(false);
  console.log(showMobNav);
  return (
    <header className="container d-flex-between pt-3">
      <div className="logo">
        <Link to={"/"}>
          <img src="./assets/images/logo.svg" alt="metabnb logo" />
        </Link>
      </div>

      <nav>
        <ul className={`nav ${showMobNav ? "mobile__nav" : ""}`}>
          <div className="text-end">
            <button
              className="close__mob__nav d-md-none fs-2"
              onClick={() => setShowMobNav(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          {HeaderNavs.map((nav) => (
            <li key={nav.name}>
              <a href={nav.link} className="nav__link">
                {nav.name}
              </a>
            </li>
          ))}

          <button className="btn-md bg-primary text-light d-block d-md-none m-auto">
            Connect wallet
          </button>
        </ul>
      </nav>

      <button className="btn-md bg-primary text-light d-none d-lg-block">
        Connect wallet
      </button>

      <button
        className="hamburger d-block d-lg-none fs-2"
        onClick={() => setShowMobNav(true)}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;

const HeaderNavs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Place to Stay",
    link: "/place-to-stay",
  },
  {
    name: "NFTs",
    link: "/nfts",
  },
  {
    name: "Community",
    link: "/community",
  },
];
