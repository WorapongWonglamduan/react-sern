import React from "react";
import "./LoadingContentAdmin.css";

const LoadingContentAdmin = ({ loading, children }) => {
  return (
    <div
      className={`loading-content-admin ${
        loading ? "loading-content-admin--active" : ""
      }`}
    >
      {loading && (
        <div className="loading-content-admin__content">
          <div className="loading-content-admin__spinner"></div>
          <div className="loading-content-admin__text">Loading...</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default LoadingContentAdmin;
