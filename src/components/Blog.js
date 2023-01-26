import { Articles } from "./Articles";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";

export const Blog = () => {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "a9ceee90a3msh1c14f75c023badfp125613jsndb473024403a",
  //     "X-RapidAPI-Host": "medium2.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   fetch("https://medium2.p.rapidapi.com/user/1985b61817c3", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // });

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
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            "https://medium.com/feed/@pihanakaikenaokauai"
          )}`
        );
        const feed = await res.json();
        setRss(feed);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="page-header">BLOG</header>

      {/* <h1 className="article-header">Blog Posts</h1> */}

      <h2>{rss?.feed.title}</h2>
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

      <Articles />
      <Footer />
    </div>
  );
};
