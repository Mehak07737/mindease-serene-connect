
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PsychiatristCard, { Psychiatrist } from "./PsychiatristCard";

const featuredPsychiatrists: Psychiatrist[] = [
  {
    id: 1,
    name: "Dr. Amanda Miller",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
    specialties: ["Anxiety", "Depression", "PTSD"],
    experience: "12 Years"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    specialties: ["Bipolar Disorder", "OCD", "Stress Management"],
    experience: "9 Years"
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    specialties: ["Family Therapy", "Adolescent Mental Health", "Trauma"],
    experience: "15 Years"
  }
];

const TeamPreviewSection = () => {
  return (
    <section className="py-20 bg-mindease-gray/30">
      <div className="mindease-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Meet Our Psychiatrists</h2>
          <p className="text-lg text-gray-600">
            Our team of licensed mental health professionals is here to support you on your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPsychiatrists.map((psychiatrist) => (
            <PsychiatristCard key={psychiatrist.id} psychiatrist={psychiatrist} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/psychiatrists">
            <Button className="bg-gradient-to-r from-mindease-lavender to-mindease-blue text-white hover:opacity-90 transition-opacity px-8">
              View All Psychiatrists
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreviewSection;
