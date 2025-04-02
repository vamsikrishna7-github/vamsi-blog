'use client';

import { useState } from 'react';

async function likePost(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/like_blog/${slug}`, {
        cache: "no-store",
    });
    return res;
}

export default function LikeButton({ postId, initialLikes }) {
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    // console.log("Like Function ", postId, likeCount, liked);
    
    setLiked(true);
    setLikeCount(prevCount => prevCount + 1);
    
    setTimeout(() => {
      setLiked(false);
    }, 1000);
    likePost(postId);
  };

  return (
    <button 
      className="btn btn-link p-0 me-2 text-decoration-none "
      onClick={handleLike}
      aria-label={liked ? 'Unlike this post' : 'Like this post'}
    >
      <i className={`bi ${liked ? 'bi-heart-fill text-danger' : 'bi-heart text-danger'} fs-5 `}></i>
      <span className="ms-2 text-muted">{likeCount}</span>
    </button>
  );
}