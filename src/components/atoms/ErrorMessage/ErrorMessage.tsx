import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={styles.messageWrapper}>
    <h2>Error {message}: failed to fetch data. Try again later.</h2>
  </div>
);
