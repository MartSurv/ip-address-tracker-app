import styles from "./PageLoader.module.css";

export const PageLoader: React.FC = () => (
  <div className={styles.loaderContainer}>
    <span className={styles.loader}></span>
  </div>
);
