import React from "react";

const Header = () => {
  return (
    <nav>
      <p className="text-primary">hello</p>
    </nav>
  );
};

export default Header;

const Navs = [
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
