import styles from "./Footer.module.css";
import Link from "next/link";
import Views from "@/components/Views";
import SubscribeBtn from "@/components/Subscribe";


const Footer = () => {
  return (
    <footer className={`${styles.footer} my-5`}>
        <div className="container-md container-fluid px-3 px-md-0">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                <div className="col p-3">
                    <h5>Projects</h5>
                    <p className={styles.passage}>
                    Vamsi-Blog: SEO-Friendly Next.js React Tech Blog with Django DRF
                    </p>
                    <p className={styles.passage}>
                    Dynamic Portfolio with Admin Panel & Auto-Emails
                    </p>
                    <p className={styles.passage}>
                    Dynamic Portfolio with Smart Contact System
                    </p>
                    <p className={styles.passage}>Gameon</p>
                    <p className={styles.passage}>
                    Blockchain Certificate Validation
                    </p>
                </div>
            
                <div className="col p-3">
                    <h5>Services</h5>
                    <p className={styles.passage}>Full-Stack Web Development</p>
                    <p className={styles.passage}>Django Backend Web Development</p>
                    <p className={styles.passage}>Custom Web Applications Development</p>
                    <p className={styles.passage}>Frontend Development</p>
                    <p className={styles.passage}>Portfolio Website Development</p>
                    <p className={styles.passage}>Website Maintenance and Support</p>
                    <p className={styles.passage}>REST API Development</p>
                </div>
            
                <div className="col p-3">
                    <h5>Site Map</h5>
                    <p className={styles.passage}>                    
                        <a className={`text-decoration-none ${styles.passage}`} href="/">
                            Home
                        </a>
                    </p>
                    <p className={styles.passage}>
                        <a className={`text-decoration-none ${styles.passage}`} href="/Search">
                            Search
                        </a>
                    </p>
                    <p className={styles.passage}>
                        <a className={`text-decoration-none ${styles.passage}`} href="https://vamsikrishna.site">
                            Portfolio
                        </a>
                    </p>
                    <p className={styles.passage}>
                        <a className={`text-decoration-none ${styles.passage}`} href="https://vamsikrishna.site/#contact">
                            Contact
                        </a>
                    </p>
                    <div className={`${styles.passage} d-inline-block mb-2`}>
                        <SubscribeBtn />
                    </div>
                    <p className={styles.passage}>
                        <a className={`text-decoration-none ${styles.passage}`} href="/unsubscribe">
                            Unsubscribe
                        </a>
                    </p>
                </div>
            
                <div className="col p-3">
                    <h5 className="mb-3">Follow Us</h5>
                    <div className="row row-cols-3 row-cols-md-3 g-2 g-md-3">
                    <div className="col">
                        <a target="_blank" className="btn bg-dark rounded-3 w-100" href="https://www.instagram.com/orewa_mr_x/">
                        <i className="bi bi-instagram text-white fs-5"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a target="_blank" href="https://www.linkedin.com/in/vamsi-krishna-nagidi-742314233/" className="btn bg-dark rounded-3 w-100">
                        <i className="bi bi-linkedin fs-5 text-white"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a target="_blank" href="https://x.com/TheNagidi?t=Yl7NUehaqonyl6NbxI0EXg&s=09" className="btn bg-dark rounded-3 w-100">
                        <i className="bi bi-twitter text-white fs-5"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a target="_blank" href="https://wa.me/916302682957" className="btn bg-dark rounded-3 w-100">
                        <i className="bi bi-whatsapp text-white fs-5"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a target="_blank" href="https://vamsikrishna.site/#contact" className="btn bg-dark rounded-3 w-100">
                        <i className="bi bi-briefcase text-white fs-5"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a target="_blank" href="mailto:contact@vamsikrishna.site" className="btn bg-dark rounded-3 w-100">
                        <i className="bi bi-envelope text-white fs-5"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a target="_blank" href="https://www.threads.net/@orewa_mr_x" className="btn bg-dark rounded-3 w-100">
                        <i className="bi bi-threads text-white fs-5"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a target="_blank" href="https://www.facebook.com/vamsikrishna.nagidi" className="btn bg-dark rounded-3 w-100">
                        <i className="bi bi-facebook text-white fs-5"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a target="_blank" href="tel:+916302682957" className="btn bg-dark rounded-3 w-100">
                        <i className="bi bi-telephone text-white fs-5"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Views />
    </footer>
  );
};

export default Footer;

