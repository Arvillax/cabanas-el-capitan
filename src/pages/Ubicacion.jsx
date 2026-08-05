import LocationSection from "../components/ubicacion/LocationSection";
import { attractionsData } from "../../data/attractions.js";

const steps = [
  "Desde Tegucigalpa, toma la carretera hacia Choluteca.",
  "Llega al muelle de Coyolito en la costa.",
  "Toma una lancha hacia la Isla del Tigre.",
  "Llega a Amapala y sigue las señales hacia las cabañas.",
];

const transportStats = [
  { value: "15 min", label: "En lancha desde Coyolito" },
  { value: "3 km", label: "Del muelle a las cabañas" },
  { value: "5 min", label: "En mototaxi" },
];

export default function Ubicacion() {
  return (
    <LocationSection
      steps={steps}
      attractions={attractionsData}
      transportStats={transportStats}
    />
  );
}
