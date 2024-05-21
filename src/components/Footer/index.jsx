import React from "react";
import Div from "../Div";
import MenuWidget from "../Widget/MenuWidget";
import "./footer.scss";

export default function Footer() {
  const copyrightLinks = [
    {
      title: "Site By Akshay",
      href: "https://www.linkedin.com/in/rawwr/",
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © 2024 Shashank Kumar Harsh Assistant Cinematographer.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant="cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
