import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="container text-center"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1
        className="text-primary"
        style={{ fontSize: "8rem", fontWeight: "800" }}>
        Oops!
      </h1>
      <h1 style={{ fontWeight: "700" }}>404 - PAGE NOT FOUND</h1>
      <p className="p-3">
        The page you are looking for might have been removed, had it's name
        changed or is temporarily unavailable.
      </p>
      <Link to={"/"}>
        <button
          className=" text-primary"
          style={{ padding: ".7rem 1.3rem", borderRadius: "20px" }}>
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
