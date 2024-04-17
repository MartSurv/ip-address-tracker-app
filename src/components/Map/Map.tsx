import {
  map as leafletMap,
  tileLayer,
  marker,
  Map as LeafletMap,
} from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

import styles from "./Map.module.css";
import { Geolocation } from "../../types/geolocation";

type MapProps = {
  data?: Geolocation;
};

export const Map: React.FC<MapProps> = ({ data }) => {
  const [map, setMap] = useState<LeafletMap>();

  useEffect(() => {
    setMap(leafletMap("map"));
  }, []);

  useEffect(() => {
    if (data && map) {
      const {
        location: { lat, lng },
      } = data;

      map.setView([lat, lng], 13);

      tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      marker([lat, lng]).addTo(map);
    }
  }, [data, map]);

  return <div id="map" className={styles.map} />;
};
