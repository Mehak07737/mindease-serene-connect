
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";
import { CalendarIcon, Clock, ArrowRight, Check } from "lucide-react";

// Mock psychiatrist data
const psychiatrists = [
  { id: 1, name: "Dr. Amanda Miller" },
  { id: 2, name: "Dr. Michael Chen" },
  { id: 3, name: "Dr. Sarah Johnson" },
  { id: 4, name: "Dr. James Wilson" },
  { id: 5, name: "Dr. Priya Sharma" },
  { id: 6, name: "Dr. David Kim" },
];

// Mock time slots
const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedPsychiatrist, setSelectedPsychiatrist] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Scheduled",
      description: `Your appointment with ${selectedPsychiatrist} has been booked for ${selectedDate?.toLocaleDateString()} at ${selectedTime}`,
    });
    // In a real app, this would send the booking request to the backend
  };

  const goToNextStep = () => {
    if (step === 1 && !selectedPsychiatrist) {
      toast({
        title: "Please select a psychiatrist",
        variant: "destructive",
      });
      return;
    }
    if (step === 2 && !selectedDate) {
      toast({
        title: "Please select a date",
        variant: "destructive",
      });
      return;
    }
    if (step === 3 && !selectedTime) {
      toast({
        title: "Please select a time slot",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <Layout>
      <Helmet>
        <title>Book a Session - MindEase</title>
        <meta name="description" content="Schedule a consultation with one of our mental health professionals. Choose a psychiatrist, select a date and time that works for you." />
      </Helmet>

      {/* Header Section */}
      <section className="py-20 bg-mindease-lavender/20">
        <div className="mindease-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
            Book a Session
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a consultation with one of our mental health professionals and take the first step towards better mental wellness.
          </p>
        </div>
      </section>

      {/* Booking Flow */}
      <section className="py-20 bg-white">
        <div className="mindease-container">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step > 1 ? <Check className="h-5 w-5" /> : 1}
                  </div>
                  <span className={`text-sm mt-2 ${step >= 1 ? 'text-primary' : 'text-gray-500'}`}>Select Psychiatrist</span>
                </div>
                <div className="flex-1 flex items-center">
                  <div className={`h-1 w-full ${step > 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step > 2 ? <Check className="h-5 w-5" /> : 2}
                  </div>
                  <span className={`text-sm mt-2 ${step >= 2 ? 'text-primary' : 'text-gray-500'}`}>Choose Date</span>
                </div>
                <div className="flex-1 flex items-center">
                  <div className={`h-1 w-full ${step > 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step > 3 ? <Check className="h-5 w-5" /> : 3}
                  </div>
                  <span className={`text-sm mt-2 ${step >= 3 ? 'text-primary' : 'text-gray-500'}`}>Select Time</span>
                </div>
                <div className="flex-1 flex items-center">
                  <div className={`h-1 w-full ${step > 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step > 4 ? <Check className="h-5 w-5" /> : 4}
                  </div>
                  <span className={`text-sm mt-2 ${step >= 4 ? 'text-primary' : 'text-gray-500'}`}>Complete</span>
                </div>
              </div>
            </div>

            {/* Step Content */}
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Select Psychiatrist */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-semibold text-gray-800">Select a Psychiatrist</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {psychiatrists.map((psych) => (
                          <div
                            key={psych.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              selectedPsychiatrist === psych.name
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                            onClick={() => setSelectedPsychiatrist(psych.name)}
                          >
                            <div className="flex items-center">
                              <div className={`w-5 h-5 rounded-full border ${
                                selectedPsychiatrist === psych.name
                                  ? "border-primary"
                                  : "border-gray-300"
                              } mr-3 flex items-center justify-center`}>
                                {selectedPsychiatrist === psych.name && (
                                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                                )}
                              </div>
                              <span className="font-medium text-gray-800">{psych.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Select Date */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-semibold text-gray-800">Choose a Date</h2>
                      <div className="flex items-start gap-4">
                        <div className="p-4 border rounded-lg bg-white">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => {
                              // Disable past dates and weekends
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              const day = date.getDay();
                              return date < today || day === 0 || day === 6;
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="bg-mindease-gray/30 p-4 rounded-lg">
                            <div className="flex items-center text-gray-600 mb-2">
                              <CalendarIcon className="w-5 h-5 mr-2" />
                              <span>Selected Date</span>
                            </div>
                            <p className="font-heading font-medium text-lg text-gray-800">
                              {selectedDate
                                ? selectedDate.toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })
                                : "Please select a date"}
                            </p>
                          </div>
                          <div className="mt-4">
                            <p className="text-gray-600">
                              <span className="text-primary">Note:</span> Weekend appointments are not available. Please select a weekday for your session.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Select Time */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-semibold text-gray-800">Choose a Time Slot</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <div
                            key={time}
                            className={`p-3 border rounded-lg cursor-pointer transition-all text-center ${
                              selectedTime === time
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                            onClick={() => setSelectedTime(time)}
                          >
                            <Clock className="h-5 w-5 mx-auto mb-1 text-gray-600" />
                            <span className={`${selectedTime === time ? "text-primary font-medium" : "text-gray-700"}`}>
                              {time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Personal Details */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-semibold text-gray-800">Complete Your Booking</h2>
                      
                      <div className="bg-mindease-gray/30 p-4 rounded-lg mb-6">
                        <h3 className="font-heading font-medium mb-3 text-gray-800">Booking Summary</h3>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>Psychiatrist:</strong> {selectedPsychiatrist}</p>
                          <p>
                            <strong>Date:</strong>{" "}
                            {selectedDate?.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          <p><strong>Time:</strong> {selectedTime}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label htmlFor="name">Your Full Name</Label>
                            <Input id="name" placeholder="Enter your full name" required />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" placeholder="your@email.com" required />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" placeholder="(123) 456-7890" required />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="reason">Reason for Visit</Label>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a reason" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="anxiety">Anxiety</SelectItem>
                                <SelectItem value="depression">Depression</SelectItem>
                                <SelectItem value="stress">Stress</SelectItem>
                                <SelectItem value="relationship">Relationship Issues</SelectItem>
                                <SelectItem value="grief">Grief & Loss</SelectItem>
                                <SelectItem value="trauma">Trauma</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="notes">Additional Notes (Optional)</Label>
                            <Textarea id="notes" placeholder="Is there anything else you'd like the psychiatrist to know before your session?" className="resize-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-8 flex justify-between">
                    {step > 1 && (
                      <Button type="button" variant="outline" onClick={goToPreviousStep}>
                        Back
                      </Button>
                    )}
                    <div className="flex-1"></div>
                    {step < 4 ? (
                      <Button type="button" onClick={goToNextStep}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-primary hover:bg-primary/90">
                        Complete Booking
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
