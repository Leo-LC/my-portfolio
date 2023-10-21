//Framer Motion

import s from "./ContactForm.module.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  //BASIC ANIMATION
  useEffect(() => {
    gsap.from("#contactForm", {
      scrollTrigger: {
        id: "contactForm",
        trigger: "#contactForm",
        start: "top center",
        end: "top top",
        scrub: 2,
        markers: {
          startColor: "white",
          endColor: "white",
          fontSize: "18px",
          fontWeight: "bold",
          indent: 20,
        },
      },
      scale: 2,
      opacity: 0,
      border: "1px solid transparent",
    });
  }, []);

  // SNAPPED ANIMATION
  /*  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contactForm",
        start: "top center",
        end: "top top",
        scrub: 2,
        markers: true,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 0.5 },
          delay: 0.2,
          ease: "power2.inOut",
        },
      },
    });

    tl.addLabel("scale")
      .from("#contactForm", {
        scale: 2,
      })
      .addLabel("opacity")
      .from("#contactForm", {
        opacity: 0,
      })
      .addLabel("border")
      .from("#contactForm", {
        border: "1px solid transparent",
      });
  }, []); */

  return (
    <div className={s.wrapper} id="contactForm">
      Hello World
    </div>
  );

  /* <div className={s.wrapper}>
      <h3>Let's connect</h3>
      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div>
            <input
              type="text"
              name="name"
              id="firstName"
              placeholder="Your First Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              id="lastName"
              placeholder="Your Last Name"
            />
          </div>
        </div>

        <div>
          <input
            className="w-full"
            type="email"
            name="mail"
            id="mail"
            placeholder="Your email"
          />
        </div>

        <div>
          <textarea
            className="w-full"
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your message"
          ></textarea>
        </div>

        <div>
          <button className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none">
            Send
          </button>
        </div>

        <p>Available from XX</p>
      </form>
    </div> */
  /*   ); */
};

export default ContactForm;
