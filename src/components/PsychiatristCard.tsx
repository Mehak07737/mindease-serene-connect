
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Psychiatrist {
  id: number;
  name: string;
  image: string;
  specialties: string[];
  experience: string;
}

interface PsychiatristCardProps {
  psychiatrist: Psychiatrist;
}

const PsychiatristCard = ({ psychiatrist }: PsychiatristCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img 
          src={psychiatrist.image} 
          alt={psychiatrist.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2 text-gray-800">{psychiatrist.name}</h3>
        <p className="text-gray-500 mb-3">{psychiatrist.experience} Experience</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {psychiatrist.specialties.map((specialty, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mindease-lavender/20 text-primary"
            >
              {specialty}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <Link to={`/psychiatrists/${psychiatrist.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-gray-700 border-gray-300">
              View Profile
            </Button>
          </Link>
          <Link to="/booking" className="flex-1">
            <Button size="sm" className="w-full bg-primary text-white hover:bg-primary/90">
              Book Session
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PsychiatristCard;
