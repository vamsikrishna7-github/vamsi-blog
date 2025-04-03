import Image from "next/image";
import styles from "./post.module.css";
import LikeButton from "@/components/LikeBtn";
import ShareBtn from "@/components/ShareBtn";
import SubscribeBtn from "@/components/Subscribe";
import BlogNotFound from "@/components/Blog-not-found";
import Link from "next/link";
import {getAppMode, setAppMode} from "../../../../utils/globalState";
import CodeBlock from "@/components/CodeBlock";


const getPostDetails = async (slug) => {
  if (!slug) return null; 


  try {
    setAppMode(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_blog_post_full_by_slug/${slug}/`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null; 
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }finally{
    setAppMode(false);
  }
};

const BlogPost = async ({ params }) => {
  if (!params || !params.slug) {
    return <p className="text-center text-danger">Invalid request.</p>;
  }

  console.log(params.slug)
  const post = await getPostDetails(params.slug);

  if (!post) {
    return (
      <BlogNotFound />
    );
  }

  const postedDate = new Date(post.posted_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const cleanContent = (content) => {
    if (!content) return [];
    return content.replace(/<[^>]*>?/gm, "").split("\n").filter(para => para.trim() !== "");
  };

  const contentParagraphs = cleanContent(post.content);

  const isVideo = /\.(mp4|webm|ogg)$/i.test(post.main_image);

  return (
    <section className={`${styles.section} container-fluid`}>
      <h1 className={`${styles.h1} text-dark`}>{post.title}</h1>
      <div className="text-secondary d-flex border-top border-bottom my-3 py-2">
        <a href="/" className={`${styles.navText} me-3 text-decoration-none`}>Home</a>
        <a className={`${styles.navText} me-3 text-decoration-none`}><SubscribeBtn /></a>
        <a href="https://vamsikrishna.site/" className={`${styles.navText} text-decoration-none`}>Portfolio</a>
        <ShareBtn />
      </div>

      <div className="card text-white rounded-0 mt-2 border-0">
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
       
        <h5 className="text-dark">{post.subtitle}</h5>
        <div className={`${styles.body} text-dark`}>
          {contentParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-3">{paragraph}</p>
          ))}
        </div>
        
        {/* section 1 */}
        <div className="text-dark">
          {post.sec1_title && <h5 className="text-dark">{post.sec1_title}<br/></h5>}
          {post.sec1_content && <p>{post.sec1_content}</p>}
          {post.sec1_lang_title && post.sec1_lang && (
          <>
            <h6 className="text-dark">{post.sec1_lang_title}</h6>
            <CodeBlock language={post.sec1_lang_title.toLowerCase()} code={post.sec1_lang.replace(/\\n/g, "\n")}/>
            <br />
          </>
          )}
          {post.sec1_image && (
            <>
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${post.sec1_image}`}
                alt={post.title}
                width={600}
                height={300}
                className="img-fluid rounded-0 w-100 my-2 border border-1 my-3"
                
              />
              <br />
            </>  
          )}
        </div>

        

        {/* section 2 */}
        <div className="text-dark">
          {post.sec2_title && <h5 className="text-dark">{post.sec2_title}</h5>}
          {post.sec2_content && <p>{post.sec2_content}</p>}
          {post.sec2_lang_title && post.sec2_lang && (
          <>
            <h6 className="text-dark">{post.sec2_lang_title}</h6>
            <CodeBlock language={post.sec2_lang_title.toLowerCase()} code={post.sec2_lang.replace(/\\n/g, "\n")}/>
            <br />
          </>
          )}
          {post.sec2_image && (
            <>
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${post.sec2_image}`}
                alt={post.title}
                width={600}
                height={300}
                className="img-fluid rounded-0 w-100 my-2 border border-1 my-3"
                
              />
              <br />
            </>  
          )}
        </div>

        {/* section 3 */}
        <div className="text-dark">
          {post.sec3_title && <h5 className="text-dark">{post.sec3_title}</h5>}
          {post.sec3_content && <p>{post.sec3_content}</p>}
          {post.sec3_lang_title && post.sec3_lang && (
          <>
            <h6 className="text-dark">{post.sec3_lang_title}</h6>
            <CodeBlock language={post.sec3_lang_title.toLowerCase()} code={post.sec3_lang.replace(/\\n/g, "\n")}/>
            <br />
          </>
          )}
          {post.sec3_image && (
            <>
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${post.sec3_image}`}
                alt={post.title}
                width={600}
                height={300}
                className="img-fluid rounded-0 w-100 my-2 border border-1 my-3"
                
              />
              <br />
            </>  
          )}
        </div>

        {/* section 4 */}
        <div className="text-dark">
          {post.sec4_title && <h5 className="text-dark">{post.sec4_title}</h5>}
          {post.sec4_content && <p>{post.sec4_content}</p>}
          {post.sec4_lang_title && post.sec4_lang && (
          <>
            <h6 className="text-dark">{post.sec4_lang_title}</h6>
            <CodeBlock language={post.sec4_lang_title.toLowerCase()} code={post.sec4_lang.replace(/\\n/g, "\n")}/>
            <br />
          </>
          )}
          {post.sec4_image && (
            <>
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${post.sec4_image}`}
                alt={post.title}
                width={600}
                height={300}
                className="img-fluid rounded-0 w-100 my-2 border border-1 my-3"
                
              />
              <br />
            </>  
          )}
        </div>

        {/* section 5 */}
        <div className="text-dark">
          {post.sec5_title && <h5 className="text-dark">{post.sec5_title}</h5>}
          {post.sec5_content && <p>{post.sec5_content}</p>}
          {post.sec5_lang_title && post.sec5_lang && (
          <>
            <h6 className="text-dark">{post.sec5_lang_title}</h6>
            <CodeBlock language={post.sec5_lang_title.toLowerCase()} code={post.sec5_lang.replace(/\\n/g, "\n")}/>
            <br />
          </>
          )}
          {post.sec5_image && (
            <>
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${post.sec5_image}`}
                alt={post.title}
                width={600}
                height={300}
                className="img-fluid rounded-0 w-100 my-2 border border-1 my-3"
                
              />
              <br />
            </>  
          )}
        </div>

        {(post.link1_text && post.link1_url) || 
        (post.link2_text && post.link2_url) || 
        (post.link3_text && post.link3_url) ? (
        <div className="text-dark">
          <h5>Resources</h5>
          {post.link1_text && post.link1_url && (
            <p>
              <i className="bi bi-link-45deg"></i> {post.link1_text} : 
              <a className="text-decoration-none" target="_blank" href={post.link1_url}>
                {post.link1_url}
              </a>
            </p>
          )}
          {post.link2_text && post.link2_url && (
            <p>
              <i className="bi bi-link-45deg"></i> {post.link2_text} : 
              <a className="text-decoration-none" target="_blank" href={post.link2_url}>
                {post.link2_url}
              </a>
            </p>
          )}
          {post.link3_text && post.link3_url && (
            <p>
              <i className="bi bi-link-45deg"></i> {post.link3_text} : 
              <a className="text-decoration-none" target="_blank" href={post.link3_url}>
                {post.link3_url}
              </a>
            </p>
          )}
        <br />
        </div>
        ) : null}

        {post.conclusion_title && post.conclusion_content && (
         <>
          <h5 className="text-dark">{post.conclusion_title}</h5>
          <p className="text-dark">{post.conclusion_content}</p>
          {post.linkconclusion_text && post.linkconclusion_url &&(
          <p className="text-dark">
              <i className="bi bi-link-45deg"></i> {post.linkconclusion_text} : 
              <a className="text-decoration-none" target="_blank" href={post.linkconclusion_url}>
                {post.linkconclusion_url}
              </a>
            </p>
          )}
         </>
        )}
        <br />
        <div className="mt-3 text-secondary">
          <p className="text-muted ms-2">
            <LikeButton postId={post.slug} initialLikes={post.likes} />
            Likes • {post.views} Views • {postedDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
