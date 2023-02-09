import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-header">
          <Link className="title" to="/">
            Pihanaka`ikena o Kaua`i
          </Link>
        </div>

        <div className="footer-body">
          Pihana ka`Ikena is a non-profit corporation that perpetuates
          traditional Hawaiian healing arts and culture through education and
          practical application. This is dedicated to all Traditional Hawaiian
          Healers that have come into our lives.
        </div>
      </div>
      <script src="https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
      {/* <div className="footer-links">
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/contact"
        >
          CONTACT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/blog"
        >
          BLOG
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/events"
        >
          EVENTS
        </NavLink>
      </div> */}

      <div className="footer-made">Made by Dev-Island</div>
    </footer>
  );
};
