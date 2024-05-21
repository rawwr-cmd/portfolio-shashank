import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ModalImage from "react-modal-image";
import VideoModal from "../VideoModal";
export default function MasonryGallery() {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(10);

  const portfolioData = [
    {
      type: "video", // Video entry
      title: "THUMBS UP | TVC Add",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=6QYzPiwKdUE", // Video URL
      src: "/images/thumbnail_1.jpg", // Video poster image
      category: "portrait",
      height: 299,
    },
    {
      type: "video", // Video entry
      title: "Spinny | TVC Add | Mumbai ",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=vHcuVGszs1Q", // Video URL
      src: "/images/thumbnail_2.jpg", // Video poster image
      category: "portrait",
      height: 622,
    },
    {
      type: "video", // Video entry
      title: "LG OLED evo | TVC Add",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=mWkmI9RfxrI", // Video URL
      src: "/images/thumbnail_3.jpeg", // Video poster image
      category: "portrait",
      height: 299,
    },
    {
      type: "video", // Video entry
      title: "Rigi | TVC Add l Mumbai",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=7P-hVRfOLPY", // Video URL
      src: "/images/thumbnail_4.jpeg", // Video poster image
      category: "portrait",
      height: 622,
    },
    {
      type: "video", // Video entry
      title: "Rungta Steel 1 | TVC Add",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=RdOnP6PVuM4", // Video URL
      src: "/images/thumbnail_5.jpeg", // Video poster image
      category: "portrait",
      height: 299,
    },
    {
      type: "video", // Video entry
      title: "Rungta Steel 2 | TVC Add | Mumbai",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=v4Ht_nA6v1w", // Video URL
      src: "/images/thumbnail_6.jpeg", // Video poster image
      category: "portrait",
      height: 622,
    },
    {
      type: "video", // Video entry
      title: "Malabar Gold & Diamonds| TVC Add",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=73jbdiksIzg", // Video URL
      src: "/images/thumbnail_7.jpeg", // Video poster image
      category: "portrait",
      height: 299,
    },
    {
      type: "video", // Video entry
      title: "Spotify Premium | TVC Add | Mumbai",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=jxoH_QZnmAI", // Video URL
      src: "/images/thumbnail_8.jpeg", // Video poster image
      category: "portrait",
      height: 622,
    },
    {
      type: "video", // Video entry
      title: "Ariel | TVC Add | Mumbai",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=youeaZyavg0", // Video URL
      src: "/images/thumbnail_9.jpeg", // Video poster image
      category: "portrait",
      height: 299,
    },
    {
      type: "video", // Video entry
      title: "My11 Circle | TVC Add | Mumbai",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=Gio2mmaryi8", // Video URL
      src: "/images/thumbnail_10.jpeg", // Video poster image
      category: "portrait",
      height: 622,
    },
    {
      type: "video", // Video entry
      title: "JIO SRH | TVC Add ",
      subtitle: "Watch Video",
      href: "/portfolio/portfolio-details",
      videoSrc: "https://www.youtube.com/watch?v=4WK1apNfs6E", // Video URL
      src: "/images/thumbnail_11.jpeg", // Video poster image
      category: "portrait",
      height: 299,
    },
  ];
  const categoryMenu = [
    {
      title: "Wedding",
      category: "wedding",
    },
    {
      title: "Portrait",
      category: "portrait",
    },
    {
      title: "Fashion",
      category: "fashion",
    },
    {
      title: "Commercial",
      category: "commercial",
    },
    {
      title: "Landscape",
      category: "landscape",
    },
    {
      title: "Short film",
      category: "shortfilm",
    },
  ];
  return (
    <>
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>
      <Spacing lg="90" md="45" />
      <Div className="cs-masonry_4_col">
        {portfolioData.slice(0, itemShow).map((item, index) => (
          <Div
            className={`${
              active === "all"
                ? ""
                : !(active === item.category)
                ? "d-none"
                : ""
            }`}
            key={index}
          >
            <Div
              className="cs-portfolio cs-style1 cs-type2"
              style={{ height: `${item.height}px` }}
            >
              {item.type === "image" ? (
                <>
                  <Div className="cs-lightbox_item">
                    <ModalImage
                      small={item.src}
                      large={item.srcLg}
                      alt={item.title}
                    />
                  </Div>
                  <Div className="cs-portfolio_hover" />
                  <span className="cs-plus" />
                  <Div
                    className="cs-portfolio_bg cs-bg"
                    style={{ backgroundImage: `url("${item.src}")` }}
                  />
                </>
              ) : (
                <>
                  <Div className="cs-lightbox_item">
                    <VideoModal videoSrc={item.videoSrc} bgUrl={item.src} />
                  </Div>
                  <Div className="cs-portfolio_hover" />
                  <Div
                    className="cs-portfolio_bg cs-bg"
                    style={{ backgroundImage: `url("${item.src}")` }}
                  />
                </>
              )}
              <Div className="cs-portfolio_info">
                <Div className="cs-portfolio_info_bg cs-accent_bg" />
                <h2 className="cs-portfolio_title">{item.title}</h2>
                <Div className="cs-portfolio_subtitle">{item.subtitle}</Div>
              </Div>
            </Div>
          </Div>
        ))}
      </Div>
      <Div className="container">
        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
    </>
  );
}
