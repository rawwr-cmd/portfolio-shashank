import React from "react";
import Hero12 from "../Hero/Hero12";
const heroSocialLinks = [
  {
    name: "Behance",
    links: "https://www.behance.net/shashankumarh",
  },
  {
    name: "Instagram",
    links: "https://www.instagram.com/shashankkumarharsh",
  },
];

const showcaseData = [
  {
    introTitle: "Video Direction (Sep, 2023)",
    title: "TV commercial ad",
    videoUrl: "video/video-1.mp4",
    href: "/case-study/case-study-details",
  },
];

export default function VideoShowcaseHome() {
  return (
    <>
      <Hero12
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Follow Us"
        showcaseData={showcaseData}
      />
    </>
  );
}
