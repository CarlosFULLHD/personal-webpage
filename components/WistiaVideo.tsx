import React, { useEffect } from "react";

const WistiaVideo: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.net/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="wistia_responsive_padding"
      style={{ padding: "56.25% 0 0 0", position: "relative" }}
    >
      <div
        className="wistia_responsive_wrapper"
        style={{
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <iframe
          src="https://fast.wistia.net/embed/iframe/sg6tq3lvvr?seo=true&videoFoam=true"
          title="Video"
          allow="autoplay; fullscreen"
          frameBorder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </div>
  );
};

export default WistiaVideo;
