import React, { useEffect } from "react";
import Hero from "../Hero";
import Div from "../Div";
import Spacing from "../Spacing";
import MovingText from "../MovingText";
import { Icon } from "@iconify/react";
import Hero3 from "../Hero/Hero3";
import SectionHeading from "../SectionHeading";
import { pageTitle } from "../../helper";
import MasonryGallery from "../Gallery/MasonryGallery";
import SocialWidget from "../Widget/SocialWidget";
import PortfolioSlider from "../Slider/PortfolioSlider";

export default function CreativePortfolioHome() {
  pageTitle("Shashank Kumar Harsh");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  return (
    <>
      {/* Start Hero Section */}
      <section id="home">
        <Spacing lg="20" md="40" />
        <Hero3
          title="SKH <br />Studio"
          btnLink="/reels"
          btnText={`Enjoy Reels in Full Screen Mode`}
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="./images/hero_bg_4.jpeg"
        />
      </section>
      {/* End Hero Section */}
      {/* <PortfolioSlider /> */}

      {/* Start Portfolio Section */}
      <section id="gallery">
        <Spacing lg="100" md="80" />
        <MasonryGallery />
      </section>
      {/* End Portfolio Section */}

      {/* Start ABOUT ME Section */}

      <section id="about">
        <Spacing lg="100" md="80" />
        <Div className="container">
          <SectionHeading
            title="Crafting Visual Stories Frame by Frame"
            subtitle="About"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="80" />
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/shashank.jpeg"
                  alt="Member"
                  className="w-100"
                />
              </Div>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Spacing lg="0" md="45" />
              <Div className="cs-section_heading cs-style1">
                <h2 className="cs-section_title">Shashank Kumar Harsh</h2>
                <Div className="cs-height_10 cs-height_lg_10" />
                <h3 className="cs-section_subtitle">Cinematographer</h3>
                <Div className="cs-height_5 cs-height_lg_5" />
                <Div className="cs-separator cs-accent_bg" />
                <Div className="cs-height_45 cs-height_lg_25" />
                <p className="cs-m0">
                  As a dedicated assistant cinematographer, I believe that each
                  story demands a unique style and approach. I enjoy
                  collaborating closely with directors and production designers
                  to develop visual narratives, allowing for improvisation and
                  creative play. My goal is to bring positive energy to every
                  project and immerse myself deeply in the storytelling process.
                </p>
                <Div className="cs-height_25 cs-height_lg_20" />
                <p className="cs-m0">
                  From 2018 to 2023, I have honed my skills in various roles
                  across the industry. My journey began at AAFT University,
                  where I earned my Bachelor's in Cinema in 2018. Since then, I
                  have gained extensive experience working with prestigious
                  productions and brands, including PS Productions, Mango Music,
                  Sony Music South, JIO Sunrisers Hyderabad, THUMBS UP, Ariel,
                  Malabar Gold & Diamonds, My11 Circle, and many others.
                </p>
                <Div className="cs-height_45 cs-height_lg_30" />
                <SocialWidget />
              </Div>
            </Div>
          </Div>
        </Div>
      </section>
      {/* End ABOUT ME Section */}

      {/* Start MovingText Section */}
      <Spacing lg="60" md="80" />
      <MovingText text="SKH STUDIO" />

      <section id="contact">
        <Spacing lg="100" md="80" />
        {/* End MovingText Section */}

        {/* Start Contact Section */}

        <Div className="container">
          <SectionHeading
            title="Getting in Touch with Us"
            subtitle="Contact Us"
            variant="cs-style1 text-center"
          />
          <Spacing lg="60" md="80" />
        </Div>
        <Div className="cs-gradient_bg_1">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-5 col-lg-6">
                <Spacing lg="145" md="80" />
                <form action="#" className="row">
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Full Name*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Email*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Project Type*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Mobile*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-12">
                    <label className="cs-primary_color">Mobile*</label>
                    <textarea
                      cols="30"
                      rows="7"
                      className="cs-form_field"
                    ></textarea>
                    <Spacing lg="25" md="25" />
                  </Div>
                  <Div className="col-sm-12">
                    <button className="cs-btn cs-style1">
                      <span>Send Message</span>
                      <Icon icon="bi:arrow-right" />
                    </button>
                  </Div>
                </form>
                <Spacing lg="80" md="80" />
              </Div>
              <Div className="col-lg-6 offset-xl-1">
                <Div
                  className="cs-google_map cs-type1 cs-bg"
                  data-src="assets/img/map_img_1.jpeg"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15081.37891993806!2d72.8335898!3d19.2076561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b60e2a69f54f%3A0x469c62c50c43ad3c!2sKandivali%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691184645423!5m2!1sen!2sin"
                    allowFullScreen
                    title="Google Map"
                  />
                </Div>
              </Div>
              <Spacing lg="80" md="80" />
            </Div>
          </Div>
        </Div>
      </section>
    </>
  );
}
