import React from "react";
import { Icon } from "@iconify/react";
import Div from "../Div";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a
        href="https://www.linkedin.com/in/shashank-kumar-harsh-841b03284"
        className="cs-center"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      <a
        href="https://www.instagram.com/shashankkumarharsh"
        className="cs-center"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="fa6-brands:instagram" />
      </a>
      <a
        href="https://www.behance.net/shashankumarh/"
        className="cs-center"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="fa6-brands:behance" />
      </a>
    </Div>
  );
}
