import React from "react";
import "./customcursor.scss";

const CustomCursor = () => {
  const cursorSm = React.useRef(null);
  const cursorLg = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
  });

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      positionRef.current.mouseX = clientX - cursorSm.current.clientWidth / 2;
      positionRef.current.mouseY = clientY - cursorSm.current.clientHeight / 2;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (destinationX === undefined || destinationY === undefined) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (Math.abs(distanceX) + Math.abs(distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (cursorSm.current) {
        cursorSm.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
      if (cursorLg.current) {
        cursorLg.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }

      requestAnimationFrame(followMouse);
    };

    followMouse();

    return () => {
      cancelAnimationFrame(followMouse);
    };
  }, []);

  return (
    <>
      <div className="cs-cursor_lg" ref={cursorLg}></div>
      <div className="cs-cursor_sm" ref={cursorSm}></div>
    </>
  );
};

export default CustomCursor;
