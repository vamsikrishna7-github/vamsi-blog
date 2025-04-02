"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const ShareButton = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const currentURL = typeof window !== "undefined" ? window.location.href : "";

  const encodedURL = encodeURIComponent(currentURL);
 

  const handleNativeShare = async () => {
    setClicked(true);
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this blog!",
          url: currentURL,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
      <button onClick={handleNativeShare} className="ms-auto border-0 bg-transparent">
        {!clicked ? <Image src="/blog_share.png" alt="share" width={25} height={25} /> :
        <Image src="/blog_share_fill.png" alt="share" width={25} height={25} /> }
      </button>
  );
};

export default ShareButton;
