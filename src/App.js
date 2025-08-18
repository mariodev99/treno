import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const images = ["/ticket.jpg", "/ticket-2.jpg", "/ticket-3.jpg"];
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="pulse-container">
        <div className="point pulse-effect"></div>
      </div>
    </div>
  );
}

export default App;
