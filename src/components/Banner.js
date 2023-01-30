import { Link } from "react-router-dom";
// import bannerVid from "../images/website-banner.mp4";
import { Carousel } from "./Carousel";
import { CarouselItem } from "./CarouselItem";

export const Banner = () => {
  return (
    <Carousel>
      <CarouselItem>
        <div className="item3">
          <div className="item-body">
            Pihana Ka `Ikena is a non-profit that perpetuates traditional
            Hawaiian healing arts through education and practical application.
            The hui's mission is to address health, social, and economic
            disparities afflicting Native Hawaiians through education of
            cultural practices.
          </div>

          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </CarouselItem>

      <CarouselItem>
        <div className="item1">
          <div className="item-body">
            Pihana ka `Ikena means the gathering of knowledge through mind,
            body, and spirit. This is dedicated to all Traditional Hawaiian
            Healers that have come into our lives. This non-profit perpetuates
            traditional Hawaiian healing arts through education and practical
            application.
          </div>

          <Link to="/about" className="btn">
            About Us
          </Link>
        </div>
      </CarouselItem>

      <CarouselItem>
        <div className="item2">
          <div className="item-body">
            La`au lapa`au is the traditional Hawaiian practice of plant
            medicine. There are over 150 native plants used in la`au lapa`au for
            treating ailments ranging from a sore throat and brain fog to more
            serious conditions such as high blood pressure, gout and even
            cancer.
          </div>

          <Link to="/blog" className="btn">
            Read More
          </Link>
        </div>
      </CarouselItem>
    </Carousel>
  );
};
