import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Blog from "@/components/Blog";


export const metadata = {
  title: "Vamsi's Tech Blog",
  description: "Explore in-depth articles on Django, Next.js, React, HTML, CSS, JavaScript, Bootstrap, Linux, and databases like SQLite, MySQL, and PostgreSQL. Stay updated with the latest in full-stack development!",
  keywords: "Django, Next.js, React, JavaScript, HTML, CSS, Bootstrap, Linux, SQLite, MySQL, PostgreSQL, Full Stack Development, REST API, Web Development, Tech Blog",
  author: "Vamsi Krishna",
  robots: "index, follow",
  ogTitle: "Vamsi's Tech Blog - Learn Django, React, Next.js, and More",
  ogDescription: "Deep dive into full-stack development with articles on Django, Next.js, React, Linux, and databases. Stay ahead in web development!",
  ogImage: "https://vamsikrishna.site/static/images/tech-blog-cover.png",
  ogUrl: "https://vamsikrishna.site/blog",
  twitterCard: "summary_large_image",
  twitterTitle: "Vamsi's Tech Blog - Django, Next.js, React & More",
  twitterDescription: "A full-stack developer's blog covering Django, React, Linux, databases, and modern web technologies.",
  twitterImage: "https://vamsikrishna.site/static/images/tech-blog-cover.png",
};



export default function Home() {
  return (
   <>
   <Blog />
   </>
  );
}
