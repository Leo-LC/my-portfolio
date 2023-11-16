import styles from "./FormInput.module.css";

interface FormInputProps {
  type: string;
  id: string;
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type }) => {
  const numberOfLines = 5;

  /*   const resize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
  }; */

  return (
    <div className={styles.inputWrapper}>
      {type === "text" || type === "email" ? (
        <input
          type={type}
          id={id}
          className={styles.input}
          placeholder=" "
          required
        />
      ) : type === "textarea" ? (
        <textarea
          name="Message"
          id={id}
          rows={numberOfLines}
          className={styles.textarea}
          placeholder=" "
          /*  onChange={resize} */
          required
        />
      ) : null}

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
