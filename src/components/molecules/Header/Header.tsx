import styles from "./Header.module.css";
import { Geolocation } from "../../../types/geolocation";
import { DetailsCard } from "../../atoms/DetailsCard";
import { SearchInput } from "../../atoms/SearchInput";

type HeaderProps = {
  data?: Geolocation;
  searchValue?: string;
  onSearch?: React.ChangeEventHandler<HTMLInputElement>;
  onSearchButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Header: React.FC<HeaderProps> = ({
  data,
  searchValue,
  onSearch,
  onSearchButtonClick,
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <SearchInput
        value={searchValue}
        onChange={onSearch}
        onButtonClick={onSearchButtonClick}
      />
      <div className={styles.detailsCardWrapper}>
        <DetailsCard data={data} />
      </div>
    </header>
  );
};
