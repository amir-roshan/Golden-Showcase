import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { AnimatedTitle } from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5, // smooth scrubbing, takes 0.5 seconds to "catch up" to the scrollbar
        pin: true, // pin the trigger element while active
        pinSpacing: true, // moves the spacer element to the end of the trigger element
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>
        <AnimatedTitle
          title={
            "Disc<b>o</b>ver the world&apos;s <b /> l<b>a</b>rgest shared advanture"
          }
          containerClass={"mt-5 !text-black text-center"}
        >
          <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]"></div>
        </AnimatedTitle>
        <div className="sub-text">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
