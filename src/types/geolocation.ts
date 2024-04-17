type As = {
  asn: string;
  name: string;
  route: string;
  domain: string;
  type: string;
};

type Location = {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
};

type Geolocation = {
  ip: string;
  location: Location;
  as: As;
  isp: string;
};

export type { Geolocation, Location };
