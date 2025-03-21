import { useEffect } from "react";
// @ts-ignore
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    const map = L.map("map").setView([40.712776, -74.005974], 20);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
  }, []);

  return <div id="map" />;
};

export default MapComponent;
