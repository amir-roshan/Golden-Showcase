import gsap from "gsap";
import { AnimatedTitle } from "./AnimatedTitle";
import { useRef } from "react";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeve = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 500, // perspective for 3d effect
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left; // x position within the element.
    const y = clientY - rect.top; // y position within the element.

    const centerX = rect.width / 2; // center of the element
    const centerY = rect.height / 2;

    const rotatetX = ((y - centerY) / centerY) * -10;
    const rotatetY = ((x - centerY) / centerX) * -10;

    gsap.to(
      element,
      {
        duration: 0.3,
        rotateX: rotatetX,
        rotateY: rotatetY,
        transformPerspective: 500, // perspective for 3d effect
        ease: "power1.inOut",
      },
      { rotationY: rotatetY, rotationX: rotatetX }
    );
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of a hidden real<b>m</b>"
            containerClass={
              "mt-5 pointer-events-none mix-blend-difference relative z-10"
            }
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  onMouseLeave={handleMouseLeve}
                  onMouseUp={handleMouseLeve}
                  onMouseEnter={handleMouseLeve}
                  onMouseMove={handleMouseMove}
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              The Open IP Universe The story of a hidden realm Where realms
              converge, lies Zentry and the boundless pillar. Discover its
              secrets and shape your fate amidst infinite opportunities.
            </p>
            <Button
              id={"realm-button"}
              title={"discover prologue"}
              containerClass={"mt-5"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
