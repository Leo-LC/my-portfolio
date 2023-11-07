//Framer Motion

import styles from "./ContactForm.module.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useForm } from "react-hook-form";
import type { InputType } from "zlib";

const ContactForm = () => {
  //BASIC ANIMATION
  /*  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#contact-wrapper", {
      scrollTrigger: {
        id: "contact-wrapper",
        trigger: "#contact-wrapper",
        start: "top center",
        end: "+=1000",
        scrub: 1,

        markers: true,
      },
      scale: 2,
      opacity: 0,
      border: "1px solid transparent",
    });
  }, []); */

  /*   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data); */
  /*   console.log(errors); */

  const formAction =
    "https://public.herotofu.com/v1/84da5320-74b4-11ee-80c8-136eb968d513";

  return (
    <form
      id="contact-form"
      action={formAction}
      method="post"
      acceptCharset="UTF-8"
      /*       onSubmit={handleSubmit} */
    >
      <div className="flex flex-col items-start">
        <label htmlFor="name">Your Name</label>
        <input name="Name" id="name" type="text" required />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="email">Your Email</label>
        <input name="Email" id="email" type="email" required />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="message">Your Message</label>

        <textarea name="Message" id="message" required rows={4}></textarea>
      </div>
      <div className={styles.button}>
        <input type="submit" value="Send your message" />
        {/* Bot protection */}
        <div
          style={{
            textIndent: "-99999px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "absolute",
          }}
          aria-hidden="true"
        >
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
