import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Articles = () => {
  return (
    <div>
      {/* <Navbar />
      <header className="page-header">ARTICLES</header> */}
      <h3 className="article-header">In the News</h3>
      <div className="articles-container">
        <iframe
          id="overlay"
          className="article"
          src="https://midweekkauai.com/kauai-coverstory/sharing-culture/"
          title="Sharing the Culture"
        />
        {/* <input
          type="button"
          value="New Tab"
          onclick="window.open('https://midweekkauai.com/kauai-coverstory/sharing-culture/')"
        >
          Read More
        </input> */}

        {/* <iframe
          src="https://oiwileaders.com/awardees/sean-chun"
          title="Sean Chun"
        /> */}

        <iframe
          id="overlay"
          className="article"
          src="https://www.thegardenisland.com/2019/03/23/hawaii-news/healing-with-hawaiian-herbs/"
          title="Healing with Hawaiian Herbs"
        />

        <iframe
          id="overlay"
          className="article"
          src="https://issuu.com/savvy360/docs/savvy360-kauai-22v1-?fr=sNjRmNjQwMTU2Mjg"
          title="issuu-Hawaiian Healing"
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
