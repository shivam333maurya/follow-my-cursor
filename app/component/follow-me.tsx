"use client";
import { useState, useEffect } from "react";

const CursorFollow: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-container">
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
        }}
      >
        <source src="/logo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default CursorFollow;
