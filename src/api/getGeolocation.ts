import queryString from "query-string";

import { Geolocation } from "../types/geolocation";

const ipAddressRegex =
  /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

export const getGeolocation = async (
  searchTerm?: string
): Promise<Geolocation> => {
  const isIpAddress = ipAddressRegex.test(searchTerm ?? "");

  const query = queryString.stringify({
    apiKey: import.meta.env.VITE_GEOLOCATION_API_KEY,
    ipAddress: isIpAddress ? searchTerm : undefined,
    domain: !isIpAddress ? searchTerm : undefined,
  });

  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?${query}`
  );

  return response.json();
};
