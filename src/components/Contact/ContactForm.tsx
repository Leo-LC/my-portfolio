//Framer Motion

import styles from "./ContactForm.module.css";

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
      /*       onSubmit={handleSubmit} */
    >
      <div className="flex flex-col content-center w-full ">
        <label htmlFor="name">Your Name&#42;</label>
        <input name="Name" id="name" type="text" required />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email">Your Email&#42;</label>
        <input name="Email" id="email" type="email" required />
      </div>
      <div className="flex flex-col grow w-full">
        <label htmlFor="message">Your Message&#42;</label>

        <textarea
          name="Message"
          id="message"
          required
          className="grow"
        ></textarea>
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
