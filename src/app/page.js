import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Vamsi's Blog",
  description: "Welcome to Vamsi Krishna's Blog – Full Stack Developer & Freelancer.",
};


export default function Home() {
  return (
   <>
   <Navbar />

   <div className={`${styles["post-section"]} container-fluid vh-100`}>
   <h1 className="text-white">Hello bootstrap and js and html and css and react</h1>
   </div>

   <Footer />
   </>
  );
}
