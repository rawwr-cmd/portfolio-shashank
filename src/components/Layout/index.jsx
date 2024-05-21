import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CustomCursor from "../CustomCursor";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ headerVariant }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check if the current path is '/reels'
  const isReelsPage = location.pathname === "/reels";
  return (
    <>
      <Header variant={headerVariant} />
      <Outlet />
      <CustomCursor />
      {!isReelsPage && <Footer />}
    </>
  );
}
