//Framer Motion

import styles from "./ContactForm.module.css";
import FormInput from "./FormInput";

const ContactForm = () => {
  const formAction =
    "https://public.herotofu.com/v1/84da5320-74b4-11ee-80c8-136eb968d513";

  return (
    <form
      className=" text-base text-center md:text-left flex flex-col w-[70%] gap-[4rem] "
      id="contact-form"
      action={formAction}
      method="post"
      acceptCharset="UTF-8"
    >
      <FormInput type="text" id="name" label="Your Name&#42;" />
      <FormInput type="email" id="email" label="Your Email&#42;" />
      <FormInput type="textarea" id="message" label="Your Message&#42;" />

      <div className={styles.button}>
        <input type="submit" value="Send your message" />

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
