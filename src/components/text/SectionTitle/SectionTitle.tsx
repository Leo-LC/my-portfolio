import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./SectionTitle.module.css";

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  const firstLine = useRef<HTMLHeadingElement>(null);
  const secondLine = useRef<HTMLHeadingElement>(null);
  const thirdLine = useRef<HTMLHeadingElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;
  const speed = 0.1;

  //Call animation on mount and handles the reverse animation on scroll
  /* useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "bottom",
        scrub: 0.25,

        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: -300,
    });
  }, []); */

  // Infinite animation of the text
  /* const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstLine.current, { xPercent: xPercent });
    gsap.set(secondLine.current, { xPercent: xPercent });
    gsap.set(thirdLine.current, { xPercent: xPercent });
    xPercent += (speed * direction) / 4;
    requestAnimationFrame(animation);
  }; */

  return (
    <div className="flex relative z-[1] section-title" id="sliderContainer">
      <div
        ref={slider}
        className={`${styles.slider} flex relative bg-transparent z-[1] whitespace-nowrap`}
      >
        <h2
          data-content={title}
          ref={firstLine}
          className="relative uppercase text-[4rem] md:text-[6rem] xl:text-[8rem] leading-none"
        >
          {title}
        </h2>
        <h2
          data-content={title}
          ref={secondLine}
          className="relative uppercase text-[4rem] md:text-[6rem] xl:text-[8rem] leading-none"
        >
          {title}
        </h2>
        <h2
          data-content={title}
          ref={thirdLine}
          className="relative uppercase text-[4rem] md:text-[6rem] xl:text-[8rem] leading-none"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
