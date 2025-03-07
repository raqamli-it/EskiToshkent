import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCircleChevronRight } from "react-icons/fa6";

import videoHome from "../assets/COMMENT.mp4";

gsap.registerPlugin(ScrollTrigger);

const VideoCard = () => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        className="video-card__video"
        src={videoHome} // Video yo'lini to'g'ri kiriting
        type="video/mp4"
        muted
        autoPlay
        loop
        playsInline
      />
      <div className="video-card__overlay">
        {/* <div className="video-card__content" ref={cardRef}>
          <h1 className="video_card_title">
            Toshkent Arxeologiya Saytiga Xush Kelibsiz
          </h1>
          <p style={{ letterSpacing: "1px" }}>
            Bu yerdan o'tmish sirlari sari ilk qadam tashlaysiz. Toshkent va
            uning atrofidagi arxeologik boyliklar, qadimiy yodgorliklar, va
            tarixdan so'zlovchi topilmalar sizni kutmoqda.
          </p>
          <button className="video-card__button">
            <span>Batafsil</span>
            <span>
              <FaCircleChevronRight />
            </span>
          </button>
        </div> */}
        <button
          onClick={handlePlayPause}
          className="video-card__play-pause-button"
        >
          {isPaused ? "▷" : "| |"}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
