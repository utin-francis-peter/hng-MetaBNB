import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner container">
        <section className="footer__column1">
          <div className="logo mb-5">
            <Link to={"/"}>
              <img src="./assets/images/logo-footer.svg" alt="metabnb logo" />
            </Link>
          </div>
          <div className="socials gap-3 mb-4">
            <a href="">
              <img src="./assets/images/socials/fb_icon.svg" alt="facebook" />
            </a>
            <a href="">
              <img src="./assets/images/socials/ig_icon.svg" alt="ig" />
            </a>
            <a href="">
              <img
                src="./assets/images/socials/twitter_icon.svg"
                alt="twitter"
              />
            </a>
          </div>
          <p>&copy; 2022 metabnb</p>
        </section>
        <section>
          <h5 className="mb-4">Community</h5>
          <p>
            <a href="">NFT</a>
          </p>
          <p>
            <a href="">Tokens</a>
          </p>
          <p>
            <a href="">Landlords</a>
          </p>
          <p>
            <a href="">Discord</a>
          </p>
        </section>
        <section>
          <h5 className="mb-4">Places</h5>
          <p>
            <a href="">Castle</a>
          </p>
          <p>
            <a href="">Farms</a>
          </p>
          <p>
            <a href="">Beach</a>
          </p>
          <p>
            <a href="">Learn more</a>
          </p>
        </section>
        <section>
          <h5 className="mb-4">About us</h5>
          <p>
            <a href="">Roadmap</a>
          </p>
          <p>
            <a href="">Creators</a>
          </p>
          <p>
            <a href="">Career</a>
          </p>
          <p>
            <a href="">Contact us</a>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

// const FooterNavs = [
//   {
//     name: "NFT",
//     link: "",
//   },
//   {
//     name: "Tokens",
//     link: "",
//   },
//   {
//     name: "Landlords",
//     link: "",
//   },
//   {
//     name: "Discord",
//     link: "",
//   },
//   {
//     name: "Castle",
//     link: "",
//   },
//   {
//     name: "Farms",
//     link: "",
//   },
//   {
//     name: "Beach",
//     link: "",
//   },
//   {
//     name: "Learn more",
//     link: "",
//   },
//   {
//     name: "Roadmap",
//     link: "",
//   },
//   {
//     name: "Creators",
//     link: "",
//   },
//   {
//     name: "Career",
//     link: "",
//   },
//   {
//     name: "Contact us",
//     link: "",
//   },
// ];
