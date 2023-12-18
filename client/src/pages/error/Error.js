import React from "react";
import "./error.css";

function Error() {
  return (
    <div className="error-container">
      <span className="error-icon">⚠️</span>
      <h1 className="error-heading">Oops, Something Went Wrong!</h1>
      <p className="error-message">Sorry, this page doesn't exist. </p>
    </div>
  );
}

export default Error;
