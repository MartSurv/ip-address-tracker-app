import { useState } from "react";

import { Map } from "../../components/atoms/Map";
import { PageLoader } from "../../components/atoms/PageLoader";
import { Header } from "../../components/molecules/Header";
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

  console.log(loading);

  return (
    <Layout>
      {loading && <PageLoader />}
      <Header
        data={data}
        errorMessage={error?.message}
        searchValue={searchValue}
        onSearch={handleSearch}
        onSearchButtonClick={handleSearchButtonClick}
      />
      {data?.location && !error && <Map data={data.location} />}
    </Layout>
  );
};
