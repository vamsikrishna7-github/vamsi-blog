"use client";
import Link from "next/link";
import Button from "./ui/Button"; // Import reusable Button component
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-md bg-white position-sticky top-0">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://vamsikrishna.site/" target="_blank">
      Vamsi Krishna <span className={styles.small}>| Blog</span>
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a href="https://vamsikrishna.site/" target="_blank" className={`${styles.button} btn btn-outline-dark rounded-5`} type="submit">
            My Portfolio
          </a>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input
          className={`${styles.input} form-control me-2 rounded-5`}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className={`${styles.button} btn btn-outline-dark rounded-5`} type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
