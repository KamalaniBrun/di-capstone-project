import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Events = () => {
  return (
    <div className="events-page">
      <Navbar />
      <header className="page-header">Events</header>

      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Pacific%2FHonolulu&src=cGloYW5ha2Fpa2VuYW9rYXVhaUBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          title="calendar"
          className="calendar"
          width="1200"
          height="1000"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};
