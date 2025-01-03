import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "100 bottom",
        end: "center bttom",
        toggleActions: "play none none reverse",
      },
    });

    titleAnimation.to(".animated-word", {
      opacity: 1,
      transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
      ease: "power2.inOut",
      stagger: 0.2,
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className={`animated-title ${containerClass}`} ref={containerRef}>
        {title.split("<b />").map((line, index) => {
          return (
            <div
              key={index}
              className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
            >
              {line.split(" ").map((word, index) => {
                return (
                  <span
                    key={index}
                    className="animated-word"
                    dangerouslySetInnerHTML={{ __html: word }} //
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
