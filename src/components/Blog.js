import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Blog = () => {
  var container = document.getElementById("retainable-rss-embed");
  if (container) {
    var css = document.createElement("link");
    css.href = "/retainable.css";
    css.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(css);
    var script = document.createElement("script");
    script.src = "/retainable.js";
    document.getElementsByTagName("body")[0].appendChild(script);
  }
  return (
    <div>
      <Navbar />
      <header className="page-header">BLOG</header>
      <div
        id="retainable-rss-embed"
        data-rss="https://barackobama.medium.com/my-2022-end-of-year-lists-ba76b6278801,
https://medium.com/feed/vue-mastery"
        data-maxcols="3"
        data-layout="grid"
        data-poststyle="inline"
        data-readmore="Read the rest"
        data-buttonclass="btn btn-primary"
        data-offset="-100"
      ></div>
      <Footer />
    </div>
  );
};
