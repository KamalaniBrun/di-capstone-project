import React from "react";
import ReactPlayer from "react-player";
import { VidCarouselItem } from "./VidCarouselItem";
import { VideoCarousel } from "./VideoCarousel";
// import { useMediaQuery } from "usehooks-ts";

export const VideoSection = () => {
  const playerRef = React.useRef(null);
  // const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <h1 className="video-header">Videos</h1>
      <VideoCarousel>
        <VidCarouselItem>
          <div className="vid-items">
            <div className="vid-item">
              <ReactPlayer
                //   className="thumbnail"
                width="500px"
                height="305px"
                ref={playerRef}
                url="https://www.youtube.com/watch?v=SNgz6su9ZtI&list=PLtn-6HQFUsdVG2oSm7jfkRFxZdmBToa7h"
                //   playing
                controls
                // light={thumbnail}
              />
            </div>

            <div className="vid-item">
              <ReactPlayer
                //   className="thumbnail"
                width="500px"
                height="305px"
                ref={playerRef}
                url="https://www.youtube.com/watch?v=DTLCHAVdM_Q"
                //   playing
                controls
              />
            </div>
          </div>
        </VidCarouselItem>

        <VidCarouselItem>
          <div className="vid-items">
            <div className="vid-item">
              <ReactPlayer
                //   className="thumbnail"
                width="500px"
                height="305px"
                ref={playerRef}
                url="https://www.youtube.com/watch?v=5-FhVczaXEw"
                //   playing
                controls
                // light={thumbnail}
              />
            </div>

            <div className="vid-item">
              <ReactPlayer
                //   className="thumbnail"
                width="500px"
                height="305px"
                ref={playerRef}
                url="https://www.youtube.com/watch?v=zIP6cIsbbZQ"
                //   playing
                controls
              />
            </div>
          </div>
        </VidCarouselItem>
      </VideoCarousel>
    </div>
  );
};
