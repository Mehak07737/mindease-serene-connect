
import { useState } from "react";
import Layout from "@/components/Layout";
import PsychiatristCard, { Psychiatrist } from "@/components/PsychiatristCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Helmet } from "react-helmet";
import { Search } from "lucide-react";

// Mock data for psychiatrists
const psychiatristData: Psychiatrist[] = [
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
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    specialties: ["Addiction", "Depression", "Grief Counseling"],
    experience: "8 Years"
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    specialties: ["Anxiety Disorders", "Trauma", "LGBTQ+ Mental Health"],
    experience: "11 Years"
  },
  {
    id: 6,
    name: "Dr. David Kim",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    specialties: ["Relationship Counseling", "Depression", "Work-Life Balance"],
    experience: "14 Years"
  }
];

// List of all specialties for filtering
const allSpecialties = Array.from(
  new Set(
    psychiatristData.flatMap(psych => psych.specialties)
  )
).sort();

const PsychiatristsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  // Filter psychiatrists based on search term and selected specialties
  const filteredPsychiatrists = psychiatristData.filter(psych => {
    const matchesSearch = psych.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialties = selectedSpecialties.length === 0 || 
      psych.specialties.some(spec => selectedSpecialties.includes(spec));
    
    return matchesSearch && matchesSpecialties;
  });

  // Toggle specialty selection
  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Meet Our Psychiatrists - MindEase</title>
        <meta name="description" content="Browse our team of licensed psychiatrists and mental health professionals. Find the right specialist for your needs." />
      </Helmet>

      {/* Header Section */}
      <section className="py-20 bg-mindease-lavender/20">
        <div className="mindease-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
            Meet Our Psychiatrists
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of licensed mental health professionals is here to support you on your journey to better mental health.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 bg-white border-b">
        <div className="mindease-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Search Box */}
            <div className="lg:col-span-3">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search psychiatrists by name..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Toggle on Mobile */}
            <div className="lg:hidden">
              <details className="bg-mindease-gray/30 rounded-lg p-4">
                <summary className="font-heading font-medium text-gray-800 cursor-pointer">
                  Filter by Specialty
                </summary>
                <div className="mt-4 space-y-3">
                  {allSpecialties.map(specialty => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`mobile-${specialty}`} 
                        checked={selectedSpecialties.includes(specialty)}
                        onCheckedChange={() => toggleSpecialty(specialty)} 
                      />
                      <Label htmlFor={`mobile-${specialty}`} className="text-gray-700">{specialty}</Label>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Psychiatrists Listing */}
      <section className="py-16 bg-gray-50">
        <div className="mindease-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                <h3 className="font-heading font-semibold text-xl mb-4 text-gray-800">Filter by Specialty</h3>
                <div className="space-y-3">
                  {allSpecialties.map(specialty => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <Checkbox 
                        id={specialty} 
                        checked={selectedSpecialties.includes(specialty)}
                        onCheckedChange={() => toggleSpecialty(specialty)} 
                      />
                      <Label htmlFor={specialty} className="text-gray-700">{specialty}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Psychiatrists Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPsychiatrists.map(psychiatrist => (
                  <PsychiatristCard key={psychiatrist.id} psychiatrist={psychiatrist} />
                ))}
              </div>

              {/* Empty state */}
              {filteredPsychiatrists.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-gray-800">No Matches Found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters to find a psychiatrist.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PsychiatristsPage;
