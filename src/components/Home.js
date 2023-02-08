import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import homePic from "../images/home-pic.png";
import React from "react";
import ReactPlayer from "react-player/youtube";
import thumbnail from "../images/youtube-thumbnail.png";
// import { VideoCarousel } from "./VideoCarousel";
import { Link } from "react-router-dom";
// import { VideoSection } from "./VideoSection";

export const Home = () => {
  const playerRef = React.useRef(null);

  return (
    <div className="home-page">
      <Navbar />
      <Banner />

      <div className="section-2">
        <div className="section-2-left">
          <img src={homePic} alt="homePic" className="home-pic" />
          <p>By: Mike Teruya (2022)</p>
        </div>

        <div className="section-2-right">
          <h3 className="section-header">Traditional Healing</h3>
          <div className="section-body">
            Traditional Hawaiian healing involves a wholistic approach to
            treating ailments. It is believed that spiritual and emotional
            ailments can manifest in the physical body, so physical treatment is
            often planned and paired with spiritual and emotional cleansing and
            prayer. The Pihana ka `Ikena mission is to address the various
            health, social, and economic disparities afflicting Native Hawaiians
            through education of Hawaiian cultural practices.
          </div>
          <div className="btn-2-container">
            <Link to="/blog" className="btn-2">
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div className="section-1">
        <div className="section-1-left">
          <h3 className="section-header">Sean Chun</h3>
          <div className="section-body">
            Sean Chun is a traditionally trained native Hawaiian cultural
            practitioner. He practices multiple traditional healing arts
            including <em>ho`oponopono</em> (conflict resolution),{" "}
            <em>la`au lapa`au</em> (plant medicine), and <em> lomilomi</em>{" "}
            (massage). He is also the
            <em> po`o</em> of the Kaua`i Kupuna Council of Traditional Hawaiian
            Healing Arts and sit on the `Aha Kukakuka Ho`oponopono Board.
          </div>
        </div>

        <div className="section-1-right">
          <ReactPlayer
            className="thumbnail"
            width="500px"
            height="305px"
            ref={playerRef}
            url="https://www.youtube.com/embed/CgVrCkRdbK4"
            playing
            controls
            light={thumbnail}
          />
        </div>
      </div>

      {/* <div>
        <VideoSection />
      </div> */}
      <Footer />
    </div>
  );
};
