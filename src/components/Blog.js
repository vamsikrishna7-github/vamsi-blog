import styles from './Blog.module.css';
import Image from "next/image";
import Link from "next/link";
import LikeButton from "@/components/LikeBtn";

const getPostsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_blog_posts_full/`;

const fetchPosts = async () => {
  const response = await fetch(getPostsUrl, { cache: "no-store" });
  return response.json();
};

const Blog = async () => {
  const data = await fetchPosts();

  return (
    <section className={`${styles.section} p-3`}>
      <div className="text-white mb-4">
        <h4 className="text-dark">RECENTLY PUBLISHED</h4>
      </div>
      <div className="container-fluid px-0">
        <div className="row g-4">
          {data.map((post) => {
            const postedDate = new Date(post.posted_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });

            // video or image
            const mediaUrl = `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${post.main_image}`;
            const isVideo = /\.(mp4|webm|ogg)$/i.test(post.main_image); // Check file extension

            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={post.id}>
                <div className="h-100">
                  <div className={`${styles.card} card h-100 shadow-sm rounded-0 border-0`}>
                    <div className="ratio ratio-16x9">
                      {post.main_image && (
                        <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                          {isVideo ? (
                            <video width="100%" height="auto" controls className="object-cover rounded-0">
                              <source src={mediaUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <Image
                              priority
                              src={mediaUrl}
                              alt={post.title}
                              fill
                              className="object-cover rounded-0"
                            />
                          )}
                        </Link>
                      )}
                    </div>
                    <div className="card-body d-flex flex-column">
                      {post.title && (
                        <Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                          <h5 className="card-title mb-2">{post.title}</h5>
                        </Link>
                      )}
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
    </section>
  );
};

export default Blog;
