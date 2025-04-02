import React from 'react'


const getpostsurl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/view-count/`;

const fetchPosts = async () => {
  const response = await fetch(getpostsurl, { cache: "no-store" });
  return response.json();
};
async function Views() {
  const data = await fetchPosts();
  return (
    <p className="text-center mb-1"><i className="bi bi-eye"></i> Total Views: { data.views }
    </p>
    )
}

export default Views;