
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Anxiety Management",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    testimonial: "MindEase has been transformative for me. The video sessions with Dr. Patel helped me develop coping mechanisms for my anxiety that actually work in my daily life.",
  },
  {
    name: "Marcus Chen",
    role: "Depression Recovery",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    testimonial: "The AI chatbot was there for me at 2 AM when I was feeling my lowest. It guided me through a calming exercise and helped me make it through the night.",
  },
  {
    name: "Priya Sharma",
    role: "Work-Life Balance",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    testimonial: "The wellness planner completely changed how I structure my days. I'm finally making time for self-care and seeing improvements in both my work and personal life.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mindease-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Real stories from people who've experienced the benefits of our mental health support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-mindease-lavender" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{testimonial.testimonial}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-heading font-medium text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
