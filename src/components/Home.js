import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import homePic from "../images/home-pic.png";
import React from "react";
import ReactPlayer from "react-player/youtube";
import thumbnail from "../images/thumbnail.png";

export const Home = () => {
  const playerRef = React.useRef(null);

  return (
    <div>
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
        </div>
      </div>

      <div className="section-1">
        <div className="section-1-left">
          <h3 className="section-header">Sean Chun</h3>
          <div className="section-body">
            Sean Chun is a traditionally trained native Hawaiian cultural
            practitioner. He practices multiple traditional healing arts
            including ho`oponopono (conflict resolution), la`au lapa`au (plant
            medicine), and lomilomi (massage). He is also the po`o of the Kaua`i
            Kupuna Council of Traditional Hawaiian Healing Arts and sit on the
            `Aha Kukakuka Ho`oponopono Board.
          </div>
        </div>

        <div className="section-1-right">
          <ReactPlayer
            className="thumbnail"
            width="500px"
            height="305px"
            ref={playerRef}
            url="https://www.youtube.com/embed/CgVrCkRdbK4"
            controls
            light={thumbnail}
          />
          {/* <div className="thumbnail-container">
            <img
              className="thumbnail"
              src="../images/thumbnail.png"
              alt="thumbnail"
            />
            <iframe
              width="450"
              height="305"
              src="https://www.youtube.com/embed/CgVrCkRdbK4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          {/* <video
            src="https://www.youtube.com/embed/CgVrCkRdbK4"
            width="450"
            height="305"
            poster="../images/thumbnail.png"
            controls
          > */}
          {/* <source
              src="https://www.youtube.com/embed/CgVrCkRdbK4"
              type="video"
            /> */}
          {/* </video> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
