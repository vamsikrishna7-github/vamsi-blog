"use client";
import { motion } from "framer-motion";

const AlwaysLoadingButton = ({ text = "Unsubscribe", className = ""}) => {
  return (
    <button
      disabled
      className={`btn btn-dark text-white d-flex align-items-center justify-content-center ${className}`}
      // style={{ minWidth: "120px", height: "40px", position: "relative" }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="spinner-border spinner-border-sm text-white position-absolute"
        role="status"
      ></motion.div>
      <span className="opacity-0">{text}</span> 
    </button>
  );
};

export default AlwaysLoadingButton;
