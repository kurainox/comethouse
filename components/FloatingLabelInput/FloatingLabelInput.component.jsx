// components/FloatingLabelInput.js
import styles from "./FloatingLabelInput.module.css";

const FloatingLabelInput = ({
  label,
  defaultValue,
  value,
  onChange,
  type = "text",
  id,
  error,
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      {type === "textarea" ? (
        <textarea
          id={id}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          className={`${styles.input} ${styles.textarea} ${
            error ? styles.error : ""
          }`}
          placeholder=""
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          className={`${styles.input} ${error ? styles.error : ""}`}
          placeholder=""
          {...props}
        />
      )}
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default FloatingLabelInput;
