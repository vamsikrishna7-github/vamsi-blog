"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar bg-white position-sticky top-0 z-3 w-100 ${styles.navbarTransition} ${
        isVisible ? styles.show : styles.hide
      }`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand mb-1" href="/">
          <strong>Vamsi Krishna</strong> <span className={styles.small}>| Blog</span>
        </a>

       
        <ul className={`${styles.portfolio} navbar-nav mx-aut mb-2 mb-lg-0`}>
          <li className="nav-item">
            <a
              href="https://vamsikrishna.site/"
              target="_blank"
              className={`${styles.button} btn btn-outline-dark rounded-5`}
            >
              My Portfolio
            </a>
          </li>
        </ul>

          <a href="/Search" className={`${styles.searchbtn} btn btn-outline-dark rounded-5`} type="submit">
            <i className={`${styles.search} bi bi-search`}></i>
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
