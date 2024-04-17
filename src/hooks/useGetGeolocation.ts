import { useCallback, useEffect, useState } from "react";

import { getGeolocation } from "../api";
import { Geolocation } from "../types/geolocation";

const useGetGeolocation = () => {
  const [data, setData] = useState<Geolocation>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetch = useCallback((searchTerm?: string) => {
    setLoading(true);
    getGeolocation(searchTerm)
      .then((data) => {
        setError(undefined);
        setData(data);
        setLoading(false);
      })
      .catch((e: Error) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { error, data, loading, fetch };
};

export default useGetGeolocation;
