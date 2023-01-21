import { useEffect } from "react";
import { Articles } from "./Articles";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Blog = () => {
  useEffect(() => {
    fetch(
      "https://medium.com/@pihanakaikenaokauai/the-healing-and-cultural-arts-c7b1aac06c1f"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <Navbar />
      <header className="page-header">BLOG</header>
      <Articles />

      <h3 className="article-header">Blog Posts</h3>
      <div></div>
      <Footer />
    </div>
  );
};
