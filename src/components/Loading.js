"use client";
import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => {
  return (
    <div className="position-fixed top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100 bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
