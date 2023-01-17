import React, { useEffect, useState } from "react";
// import leftArrow from "../images/icons8-chevron-left-50.png";
// import rightArrow from "../images/icons8-chevron-right-50.png";

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 4000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="indicators">
        {/* <button
          className="arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          {" "}
          &#8678;
          {/* <img src={leftArrow} alt="left-arrow" /> */}
        {/* </button>  */}

        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {/* {index + 1} */}
            </button>
          );
        })}

        {/* <button
          className="arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          &#8680; */}
        {/* &#10132; */}
        {/* <img src={rightArrow} alt="right-arrow" /> */}
        {/* </button> */}
      </div>
    </div>
  );
};
