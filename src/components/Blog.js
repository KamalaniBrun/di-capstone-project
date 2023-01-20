import { Articles } from "./Articles";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Blog = () => {
  // var container = document.getElementById("retainable-rss-embed");
  // if (container) {
  //   var css = document.createElement("link");
  //   css.href = "/retainable.css";
  //   css.rel = "stylesheet";
  //   document.getElementsByTagName("head")[0].appendChild(css);
  //   var script = document.createElement("script");
  //   script.src = "/retainable.js";
  //   document.getElementsByTagName("body")[0].appendChild(script);
  // }
  return (
    <div>
      <Navbar />
      <header className="page-header">BLOG</header>
      <Articles />

      <h3 className="article-header">Blog Posts</h3>
      <div>
        <iframe
          src="https://medium.com/@pihanakaikenaokauai/the-healing-and-cultural-arts-c7b1aac06c1f"
          title="The Healing and Cultural Arts"
        />
      </div>
      <Footer />
    </div>
  );
};
