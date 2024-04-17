import { useState } from "react";

import { Header } from "../../components/Header";
import { Map } from "../../components/Map";
import useGetGeolocation from "../../hooks/useGetGeolocation";
import { Layout } from "../../templates/Layout";

export const Home: React.FC = () => {
  const { data, error, loading, fetch } = useGetGeolocation();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSearchButtonClick = () => {
    fetch(searchValue);
  };

  return (
    <Layout>
      <Header
        data={data}
        searchValue={searchValue}
        onSearch={handleSearch}
        onSearchButtonClick={handleSearchButtonClick}
      />
      <Map data={data} />
    </Layout>
  );
};
