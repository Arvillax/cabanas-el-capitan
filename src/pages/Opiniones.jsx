import ReviewsSection from "../components/opiniones/ReviewsSection";
import { reviews, ratingSummary } from "../../data/reviews.js";

export default function Opiniones() {
  return <ReviewsSection reviews={reviews} ratingSummary={ratingSummary} />;
}
