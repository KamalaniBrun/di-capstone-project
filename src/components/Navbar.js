import { Link, NavLink } from "react-router-dom";
import { Burger } from "./Burger";
import clsx from "clsx";
// import { useState } from "react";
// import { Dropdown } from "./Dropdown";

export const Navbar = () => {
  // const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="nav-container">
      <div className="navbar">
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

          <div
            className="dropdown"
            // {({ isActive }) =>
            //   clsx("dropdown", { "dropdown-btn-active": isActive })
            // }
          >
            <NavLink
              className={({ isActive }) =>
                clsx("dropdown-btn", {
                  "dropdown-btn-active": isActive,
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

              {/* <Link className="submenu-item" to="/gallery">
                GALLERY
              </Link> */}
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

          {/* <div className="dropdown"> */}
          <NavLink
            className={({ isActive }) =>
              clsx("nav-link", { "nav-link-active": isActive })
            }
            to="/blog"
          >
            MEDIA
          </NavLink>

          {/* <div className="dropdown-content">
              <Link className="submenu-item" to="/articles">
                ARTICLES
              </Link>
            </div>
          </div> */}

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
  );
};
