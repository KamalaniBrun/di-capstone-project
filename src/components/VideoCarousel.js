import React, { useState } from "react";
// import leftArrow from "../images/icons8-chevron-left-50.png";
// import rightArrow from "../images/icons8-chevron-right-50.png";

export const VideoCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex2 = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="vid-indicators">
        <button
          className="arrow"
          onClick={() => {
            updateIndex2(activeIndex - 1);
          }}
        >
          {/* <img src={leftArrow} alt="left-arrow" /> */}
          &larr;
        </button>

        <button
          className="arrow"
          onClick={() => {
            updateIndex2(activeIndex + 1);
          }}
        >
          {/* <img src={rightArrow} alt="right-arrow" /> */}
          &rarr;
        </button>
      </div>
    </div>
  );
};
