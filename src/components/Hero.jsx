import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const nextVideoRef = useRef(null);

  const getVideoSource = (index) => `videos/hero-${index}.mp4`;

  const handleMiniVideoClick = () => {
    setHasClicked((prev) => !prev);
    setCurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVideoClick}
            className="origin-center scale-50 opacity-0  transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSource(upcomingVideoIndex)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            ></video>
          </div>
        </div>
        <video
          ref={nextVideoRef}
          src={getVideoSource(currentIndex)}
          loop
          muted
          id="next-video"
          className="abolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
        ></video>
        <video
          src={getVideoSource(
            currentIndex === totalVideos - 1 ? 1 : currentIndex,
          )}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        ></video>
      </div>
    </div>
  );
};

export default Hero;
