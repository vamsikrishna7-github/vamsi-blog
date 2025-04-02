"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <motion.section 
      className="container text-center mt-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-danger display-1 fw-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        404
      </motion.h1>

      <motion.p 
        className="text-muted fs-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        The blog post you are looking for does not exist.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link href="/">
          <motion.button 
            className="btn btn-dark text-white px-4 py-2 mt-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Go Back to Blog
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default NotFoundPage;
