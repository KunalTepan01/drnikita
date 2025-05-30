import DentalCareSection from "@/components/DentalCareSection";
import Hero from "../components/Hero";
import DentalServices from "@/components/DentalServices";
import DentalFAQ from "@/components/DentalFaq";
import PatientReviews from "@/components/PatientReviews";
// import DentalCareSection from "@/components/DentalCareSection";


export default function Home() {
  return (
    <div>
      <Hero />
     <DentalCareSection/>
     <DentalServices/>
     <DentalFAQ/>
     <PatientReviews/>
    </div>
  );
}
