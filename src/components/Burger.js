import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

export const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />

      {isOpen && (
        <div className={clsx(`mbl-nav ${isOpen ? "page-burger-open" : ""}`)}>
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
            to="/kupuna"
          >
            KUPUNA
          </NavLink>
          {/* <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/gallery"
        >
          GALLERY
        </NavLink> */}

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
            MEDIA
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx("nav-link", { "nav-link-active": isActive })
            }
            to="/events"
          >
            EVENTS
          </NavLink>
          <a
            className="btn2-burger"
            href="https://www.paypal.com/donate/?hosted_button_id=L3793XZHGCMAU"
          >
            DONATE
          </a>
        </div>
      )}
    </div>
  );
};
