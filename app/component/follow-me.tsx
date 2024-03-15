"use client";
import { useState, useEffect } from "react";

const CursorFollow: React.FC = () => {
  const [flipDirection, setFlipDirection] = useState<"left" | "right">("right");
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // const newX = e.clientX - 50; // Adjust for half of the logo's width
    // const newY = e.clientY - 50; // Adjust for half of the logo's height
    // setPosition({ x: newX, y: newY });

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const logoCenterX = rect.width / 2;

    if (clickX < logoCenterX) {
      setFlipDirection("left");
    } else {
      setFlipDirection("right");
    }

    const newX = e.clientX - 50; // Adjust for half of the logo's width
    const newY = e.clientY - 50; // Adjust for half of the logo's height
    setPosition({ x: newX, y: newY });
  };

  return (
    <div className="cursor-container" onClick={handleClick}>
      <video
        className="logo"
        autoPlay
        loop
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          width: "100px",
          height: "100px",
          transform: `scaleX(${flipDirection === "left" ? 1 : -1})`,
        }}
      >
        <source src="/logo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default CursorFollow;
