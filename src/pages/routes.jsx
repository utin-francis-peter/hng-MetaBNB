import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from ".";
import ErrorPage from "../components/shared/ErrorPage";
import PlaceToStay from "./place-to-stay";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
        <Route path="/nfts" element={<ErrorPage />} />
        <Route path="/community" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
