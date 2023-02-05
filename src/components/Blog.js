import { Articles } from "./Articles";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import { getWithExpiry, setWithExpiry } from "./localstorage-utils";
export const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      let cachedPosts = getWithExpiry("posts");
      if (!cachedPosts?.status) {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pihanakaikenaokauai
          `
        );
        cachedPosts = await res.json();
      }
      setWithExpiry("posts", cachedPosts, 86_400_000);
      setPosts(cachedPosts);
    })();
  }, []);

  // console.log(posts);

  const getDescription = (html) => {
    const el = document.createElement("div");
    el.innerHTML = html;
    const p = el.querySelector("p");
    return p.innerText.split(".").slice(0, 2).join(".");
  };
  return (
    <div className="blog-page">
      <Navbar />
      <header className="page-header">MEDIA</header>
      <h1>BLOG</h1>
      <h2 className="article-header">Stories by Pihana ka`Ikena o Kaua'i</h2>
      <div className="card-container">
        {posts?.items?.map((item) => (
          <div className="card" key={item.guid}>
            <h4 className="item-title">{item.title}</h4>
            <div className="description">
              {getDescription(item.description)}
            </div>
            <a
              className="button"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More &gt;
            </a>
          </div>
        ))}
      </div>
      <Articles />
      <Footer />
    </div>
  );
};
