import React from "react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const FrontLayout = ({ children }) => {
  return (
    <div className="front__layout">
      <Header />
      <main className="front__layout__main">{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
