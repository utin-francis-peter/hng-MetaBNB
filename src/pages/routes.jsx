import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from ".";
import ComingSoon from "../components/shared/ComingSoon";
import ErrorPage from "../components/shared/ErrorPage";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import PlaceToStay from "./place-to-stay";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
        <Route path="/nfts" element={<ComingSoon />} />
        <Route path="/community" element={<ComingSoon />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
