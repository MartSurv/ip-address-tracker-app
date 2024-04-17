import { useCallback, useEffect, useState } from "react";

import { getGeolocation } from "../api";
import { Geolocation } from "../types/geolocation";

const useGetGeolocation = () => {
  const [data, setData] = useState<Geolocation>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const fetch = useCallback((searchTerm?: string) => {
    getGeolocation(searchTerm)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e: Error) => {
        setLoading(false);
        setError(e);
      });
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { error, data, loading, fetch };
};

export default useGetGeolocation;
