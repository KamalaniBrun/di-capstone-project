import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { Burger } from "./Burger";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Contact = () => {
  return (
    <div className="contact-page">
      <nav className="nav-container">
        <div className="navbar-contact">
          <div className="title-header">
            <Link className="title" to="/">
              Pihanaka`ikena o Kaua`i
            </Link>
          </div>

          <div className="nav-desktop">
            <NavLink
              className={({ isActive }) =>
                clsx("nav-link", { "nav-link-active": isActive })
              }
              to="/"
            >
              HOME
            </NavLink>

            <div className="dropdown">
              <NavLink
                className={({ isActive }) =>
                  clsx("dropdown-btn", {
                    "nav-link-active": isActive,
                  })
                }
                // onMouseOver={() => setDropdown(true)}
                to="/about"
              >
                ABOUT
              </NavLink>

              <div className="dropdown-content">
                <Link className="submenu-item" to="/kupuna">
                  KUPUNA
                </Link>

                <Link className="submenu-item" to="/gallery">
                  GALLERY
                </Link>
              </div>
            </div>

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
          </div>

          <Burger />
        </div>
      </nav>
      <header className="page-header">CONTACT US</header>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScSmuwWdPkScEQj1SgNaOIObzWLHa5jdbhehGfCT0jjGscqow/viewform?embedded=true"
        title="Contact Form"
        width="640"
        height="812"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
      <Footer />
    </div>
  );
};
