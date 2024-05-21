import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.scss";
import Div from "../Div";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggle = () => {
    setMobileToggle(false);
  };

  const hideHeader = location.pathname === "/reels";

  return (
    <>
      {!hideHeader && (
        <header
          className={`cs-site_header cs-style1 text-uppercase ${
            variant ? variant : ""
          } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
        >
          <Div className="cs-main_header">
            <Div className="container">
              <Div className="cs-main_header_in">
                <Div className="cs-main_header_left">
                  <Link className="cs-site_branding" to="/">
                    <img src="/images/logo.svg" alt="Logo" />
                  </Link>
                </Div>
                <Div className="cs-main_header_center">
                  <Div className="cs-nav cs-primary_font cs-medium">
                    <ul
                      className="cs-nav_list"
                      style={{ display: `${mobileToggle ? "block" : "none"}` }}
                    >
                      <li>
                        <Link
                          to="/#home"
                          onClick={() => {
                            handleScroll("home");
                            handleToggle();
                          }}
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/#gallery"
                          onClick={() => {
                            handleScroll("gallery");
                            handleToggle();
                          }}
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#about"
                          onClick={() => {
                            handleScroll("about");
                            handleToggle();
                          }}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#contact "
                          onClick={() => {
                            handleScroll("contact");
                            handleToggle();
                          }}
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/reels"
                          onClick={() => {
                            handleToggle();
                          }}
                        >
                          Fullscreen-Reels
                        </Link>
                      </li>
                    </ul>
                    <span
                      className={
                        mobileToggle
                          ? "cs-munu_toggle cs-toggle_active"
                          : "cs-munu_toggle"
                      }
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                  </Div>
                </Div>
                <Div className="cs-main_header_right">
                  <Div className="cs-toolbox">
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </header>
      )}
    </>
  );
}
