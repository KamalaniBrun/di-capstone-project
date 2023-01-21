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
        <div className="article-card">
          <h4 className="article">Sharing Culture</h4>

          <p>
            Sean Chun uses traditional Hawaiian practices to help others heal
            mind, body and spirit, and he is on a mission to share this ancient
            knowledge with a select few so that they, too, can assist others in
            achieving well-being.
          </p>

          <a
            className="btn"
            href="https://midweekkauai.com/kauai-coverstory/sharing-culture/"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>

        <div className="article-card">
          <h4 className="article">Sean Chun</h4>

          <p>
            I am traditional healer on the island of Kaua`i. I am also employed
            by Ho`ola Lahui Hawai`i, a Native Hawaiian Health Care Agency as the
            traditional healer. I have a degree in Hawaiian studies...
          </p>

          <a
            className="btn"
            href="https://oiwileaders.com/awardees/sean-chun"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>

        <div className="article-card">
          <h4 className="article">Healing with Traditional Herbs</h4>

          <p>
            Traditional medicine, herbs for healing and authentic Hawaiian
            practices are infiltrating the Lawai International Center Saturday,
            March 30.
          </p>

          <a
            className="btn"
            href="https://www.thegardenisland.com/2019/03/23/hawaii-news/healing-with-hawaiian-herbs/"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>

        <div className="article-card">
          <h4 className="article">Savvy 360</h4>

          <p>
            Traditional hawaiian healing (la`au lapa`au) goes back over a
            thousand years. Legendary stories of this practice feature a kahuna
            (priest), Kamakanui`aha`ilono, who had healing powers.
          </p>

          <a
            className="btn"
            href="https://issuu.com/savvy360/docs/savvy360-kauai-22v1-?fr=sNjRmNjQwMTU2Mjg"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
