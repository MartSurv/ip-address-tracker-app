import styles from "./SearchInput.module.css";
import arrowRightSrc from "../../assets/images/arrow-right.svg";

type SearchInputProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onButtonClick,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder="Search for any IP address or domain"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button className={styles.button} type="button" onClick={onButtonClick}>
        <img src={arrowRightSrc} alt="arrow right icon" />
      </button>
    </div>
  );
};
