import React from "react";
import "./LoadingOverLay.css";

const LoadingOverlay = ({ loading, children }) => {
  return (
    <div
      className={`loading-overlay ${loading ? "loading-overlay--active" : ""}`}
    >
      {loading && (
        <div className="loading-overlay__content">
          <div className="loading-overlay__spinner"></div>
          <div className="loading-overlay__text">Loading...</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default LoadingOverlay;
