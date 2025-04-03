'use client';
import Image from "next/image";
import Link from "next/link";
import LikeButton from "@/components/LikeBtn";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const getPostsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_blogs_search/`;


function Search() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  // console.log(getPostsUrl);

  const handleSearch = async () => {
    if (!query) return;
    
    try {
      setLoading(true);
      const response = await fetch(`${getPostsUrl}?search=${query}`,{credentials: "include",});
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }finally {
      setLoading(false);
    }
  };


  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5 mb-4">
        <div className="input-group">
          <button 
            className="btn btn-white d-flex align-items-center border rounded-5"
            onClick={handleSearch}
          >
            <i className="bi bi-search"></i>
            <input
              type="text"
              className={`${styles.input} form-control border-0 bg-transparent text-black`}
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            //   onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              onKeyDown={() => handleSearch()}
            />
          </button>
        </div>
      </div>
      <h4 className={styles.h1}>Results for <span className="text-dark h4">{query}</span></h4>
      {loading ?       
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
     :
      <div className="container-fluid px-0">
        <div className="row g-4">
          {results.map((post) => {
            const postedDate = new Date(post.posted_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });
            const isVideo = /\.(mp4|webm|ogg)$/i.test(post.main_image);

            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={post.slug}>
                <div className="h-100">
                    <div className={`${styles.card} card h-100 shadow-sm rounded-0 border-0`}>
                      <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                      <div className="ratio ratio-16x9">
                        {post.main_image && ( isVideo ?
                            <>
                                <video width="100%" height="auto" controls className="object-cover rounded-0 mb-3">
                                    <source src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${post.main_image}`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </> :
                            <Image
                              src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${post.main_image}`}
                              alt={post.title}
                              width={600}
                              height={300}
                              className="img-fluid rounded-0 w-100 my-3 border border-1 mb-3"
                            />
                          )}
                      </div>
                      </Link>
                      <div className="card-body d-flex flex-column">  
                        {post.title && (<Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark"><h5 className="card-title mb-2">{post.title}</h5></Link>)}
                        {post.content && (
                        <p className="card-text flex-grow-1"> 
                          {post.content.length > 100 ? (
                            <Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                              {post.content.substring(0, 100)}...
                              <span className="text-primary ms-1">Read More</span>
                            </Link>
                          ) : (
                            post.content
                          )}
                        </p>
                        )}
                        
                        
                        <div className="card-footer bg-transparent border-0 px-0 pb-0 mt-auto">  
                          <div className="d-flex align-items-center">
                            <LikeButton postId={post.slug} initialLikes={post.likes} />
                            <small className="text-muted">
                              Likes • {post.views} Views • {postedDate}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      }

    </div>
  );
}

export default Search;
