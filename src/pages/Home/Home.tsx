import { useState } from "react";

import { ErrorMessage } from "../../components/atoms/ErrorMessage";
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

  return (
    <Layout>
      {loading && <PageLoader />}
      <Header
        data={data}
        searchValue={searchValue}
        onSearch={handleSearch}
        onSearchButtonClick={handleSearchButtonClick}
      />
      {error && <ErrorMessage message={error.message} />}
      {data?.location && <Map data={data.location} />}
    </Layout>
  );
};
