import React from "react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const FrontLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default FrontLayout;
