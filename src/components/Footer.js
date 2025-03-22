import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${styles.footer} my-5`}>
      <div className="container-md container-fluid">
        <div className="row">
          <div className="col border">
            <h5>Projects</h5>
            <p className={styles.passage}>
              Dynamic Portfolio with Admin Panel & Auto-Emails
            </p>
            <p className={styles.passage}>
              Dynamic Portfolio with Smart Contact System
            </p>
            <p className={styles.passage}>
              Gameon
            </p>
            <p className={styles.passage}>
              Blockchain Certificate Validation
            </p>
          </div>
          <div className="col border">
            <h5>Services</h5>
            <p className={styles.passage}>
              Full-Stack Web Development
            </p>
            <p className={styles.passage}>
              Django Backend Web Development
            </p>
            <p className={styles.passage}>
              Custom Web Applications Development
            </p>
            <p className={styles.passage}>
              Frontend Development
            </p>
            <p className={styles.passage}>
              Portfolio Website Development
            </p>
            <p className={styles.passage}>
              Website Maintenance and Support
            </p>
            <p className={styles.passage}>
              REST API Development
            </p>
          </div>
          <div className="col border">
            <h5>Connect</h5>
            <p className={styles.passage}>
                Share your Ideas
            </p>
            <p className={styles.passage}>
                Join the Team
            </p>
            <p className={styles.passage}>
                <a className={`text-decoration-none ${styles.passage}`} href="https://vamsikrishna.site/#contact">Contact</a>
            </p>
          </div>
          <div className="col border">
            <div className="row row-cols-3 g-3"> {/* 3 columns with gap of 3 */}
                {/* Row 1 */}
                <div className="col">
                <a className="btn bg-dark rounded-3 w-100" href="#">
                    <i className="bi bi-instagram text-white fs-5"></i>
                </a>
                </div>
                <div className="col">
                <a href="#" className="btn bg-dark rounded-3 w-100">
                    <i className="bi bi-linkedin fs-5 text-white"></i>
                </a>
                </div>
                <div className="col">
                <a href="#" className="btn bg-dark rounded-3 w-100">
                    <i className="bi bi-twitter text-white fs-5"></i>
                </a>
                </div>

                {/* Row 2 */}
                <div className="col">
                <a href="#" className="btn bg-dark rounded-3 w-100">
                    <i className="bi bi-whatsapp text-white fs-5"></i>
                </a>
                </div>
                <div className="col">
                <a href="#" className="btn bg-dark rounded-3 w-100">
                    <i className="bi bi-briefcase text-white fs-5"></i>
                </a>
                </div>
                <div className="col">
                <a href="#" className="btn bg-dark rounded-3 w-100">
                    <i className="bi bi-envelope text-white fs-5"></i>
                </a>
                </div>

                {/* Row 3 */}
                <div className="col">
                <a href="#" className="btn bg-dark rounded-3 w-100">
                    <i className="bi bi-threads text-white fs-5"></i>
                </a>
                </div>
                <div className="col">
                <a href="#" className="btn bg-dark rounded-3 w-100">
                    <i className="bi bi-facebook text-white fs-5"></i>
                </a>
                </div>
                <div className="col">
                <a href="#" className="btn bg-dark rounded-3 w-100">
                    <i className="bi bi-telephone text-white fs-5"></i>
                </a>
                </div>
            </div>
        </div>
        </div>
        </div>

    </footer>
  );
};

export default Footer;

