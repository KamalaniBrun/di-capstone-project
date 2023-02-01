import { Articles } from "./Articles";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";

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
      // const writeToCache = (url, data) =>
      //   localStorage.setItem(url, JSON.stringify(data));
    })();
  }, []);

  // function getWithExpiry(key) {
  //   const itemStr = localStorage.getItem(key);
  //   // if the item doesn't exist, return null
  //   if (!itemStr) {
  //     return null;
  //   }
  //   const item = JSON.parse(itemStr);
  //   const now = new Date();
  //   // compare the expiry time of the item with the current time
  //   if (now.getTime() > item.expiry) {
  //     // If the item is expired, delete the item from storage
  //     // and return null
  //     localStorage.removeItem(key);
  //     return null;
  //   }
  //   return item.value;
  // }

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
            <h3>{item.title}</h3>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
            <div className="button-bg">
              <a
                className="button"
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
