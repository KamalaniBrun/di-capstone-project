import { Articles } from "./Articles";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
// import { format } from "date-fns";
import { getWithExpiry, setWithExpiry } from "./localstorage-utils";

export const Blog = () => {
  const [rss, setRss] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        /* Uses https://rss2json.com/docs which is free for a certain
         * amount of requests per day & hour. You'll want to cache the
         * results in local storage so that you don't make too many calls
         * and then invalidate the local storage after a set amount of time
         * here is an example of how to do that
         * https://www.sohamkamani.com/javascript/localstorage-with-ttl-expiry/
         */
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pihanakaikenaokauai
          `
        );
        const feed = await res.json();
        setRss(feed);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

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

  return (
    <div className="App">
      <Navbar />
      <header className="page-header">BLOG</header>

      {/* <h1 className="article-header">Blog Posts</h1> */}

      {/* <h2 className="article-header">{rss?.feed.title}</h2> */}
      <h3 className="article-header">Stories by Pihana Ka`Ikena o Kaua'i</h3>

      <div className="card-container">
        {rss?.items.map((item) => (
          <div className="card" key={item.guid}>
            <h3 className="item-title">{item.title}</h3>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
            <div className="button-bg">
              <a
                className="button-2"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
      <Articles />
      <Footer />
    </div>
  );
};
