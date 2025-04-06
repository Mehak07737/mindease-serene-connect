
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Trash2, Edit, Calendar as CalendarIcon } from "lucide-react";
import { Helmet } from "react-helmet";

interface WellnessActivity {
  id: string;
  title: string;
  description?: string;
  category: string;
  duration: string;
  time?: string;
  completed: boolean;
}

const categories = [
  "Meditation",
  "Exercise",
  "Journaling",
  "Reading",
  "Social Connection",
  "Healthy Eating",
  "Sleep Hygiene",
  "Gratitude",
  "Other"
];

const WellnessPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [activities, setActivities] = useState<WellnessActivity[]>([
    {
      id: "1",
      title: "Morning Meditation",
      description: "10-minute mindfulness practice",
      category: "Meditation",
      duration: "10 minutes",
      time: "08:00",
      completed: false
    },
    {
      id: "2",
      title: "Gratitude Journal",
      description: "Write 3 things I'm grateful for",
      category: "Journaling",
      duration: "5 minutes",
      time: "21:00",
      completed: false
    }
  ]);
  const [newActivity, setNewActivity] = useState<Omit<WellnessActivity, "id" | "completed">>({
    title: "",
    category: "Meditation",
    duration: "15 minutes",
  });

  const handleActivityAdd = () => {
    if (!newActivity.title) return;
    
    const activity: WellnessActivity = {
      ...newActivity,
      id: Date.now().toString(),
      completed: false
    };
    
    setActivities([...activities, activity]);
    setNewActivity({
      title: "",
      category: "Meditation",
      duration: "15 minutes",
    });
  };

  const handleActivityDelete = (id: string) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  const toggleActivityCompletion = (id: string) => {
    setActivities(activities.map(activity => 
      activity.id === id ? { ...activity, completed: !activity.completed } : activity
    ));
  };

  return (
    <Layout>
      <Helmet>
        <title>Wellness Timetable - MindEase</title>
        <meta name="description" content="Create and follow a personalized mental wellness routine with MindEase's interactive planner." />
      </Helmet>

      <section className="py-12 bg-mindease-mint/20">
        <div className="mindease-container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
            Your Wellness Timetable
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a personalized routine to support your mental health journey. Track your progress and build healthy habits.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mindease-container">
          <Tabs defaultValue="timetable">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="timetable">My Timetable</TabsTrigger>
              <TabsTrigger value="add">Add Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="timetable" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Select Date</CardTitle>
                      <CardDescription>View or schedule activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Activities for {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</CardTitle>
                          <CardDescription>Check off completed activities</CardDescription>
                        </div>
                        <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      {activities.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                          <p>No activities scheduled for this day.</p>
                          <p className="text-sm">Switch to the "Add Activity" tab to create one.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {activities.map((activity) => (
                            <div 
                              key={activity.id} 
                              className={`p-4 rounded-lg border ${
                                activity.completed ? 'bg-mindease-mint/10 border-mindease-mint' : 'bg-white'
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="flex items-center gap-3">
                                    <input
                                      type="checkbox" 
                                      checked={activity.completed}
                                      onChange={() => toggleActivityCompletion(activity.id)}
                                      className="h-5 w-5 rounded border-gray-300 text-primary"
                                    />
                                    <h3 className={`font-medium ${activity.completed ? 'line-through text-gray-500' : ''}`}>
                                      {activity.title}
                                    </h3>
                                  </div>
                                  <div className="ml-8 mt-1">
                                    {activity.description && (
                                      <p className="text-sm text-gray-600">{activity.description}</p>
                                    )}
                                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
                                      <span className="bg-mindease-lavender/20 px-2 py-0.5 rounded">
                                        {activity.category}
                                      </span>
                                      <span>{activity.duration}</span>
                                      {activity.time && <span>at {activity.time}</span>}
                                    </div>
                                  </div>
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleActivityDelete(activity.id)}
                                >
                                  <Trash2 className="h-4 w-4 text-gray-500" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="add">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Wellness Activity</CardTitle>
                  <CardDescription>Create activities for your wellness routine</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Activity Title</Label>
                      <Input 
                        id="title" 
                        placeholder="e.g., Morning Meditation"
                        value={newActivity.title}
                        onChange={(e) => setNewActivity({...newActivity, title: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select 
                        value={newActivity.category} 
                        onValueChange={(value) => setNewActivity({...newActivity, category: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Select 
                        value={newActivity.duration} 
                        onValueChange={(value) => setNewActivity({...newActivity, duration: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5 minutes">5 minutes</SelectItem>
                          <SelectItem value="10 minutes">10 minutes</SelectItem>
                          <SelectItem value="15 minutes">15 minutes</SelectItem>
                          <SelectItem value="20 minutes">20 minutes</SelectItem>
                          <SelectItem value="30 minutes">30 minutes</SelectItem>
                          <SelectItem value="45 minutes">45 minutes</SelectItem>
                          <SelectItem value="1 hour">1 hour</SelectItem>
                          <SelectItem value="Custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Time (Optional)</Label>
                      <Input 
                        id="time" 
                        type="time"
                        value={newActivity.time || ''}
                        onChange={(e) => setNewActivity({...newActivity, time: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description">Description (Optional)</Label>
                      <Input 
                        id="description" 
                        placeholder="Brief description of the activity"
                        value={newActivity.description || ''}
                        onChange={(e) => setNewActivity({...newActivity, description: e.target.value})}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleActivityAdd} 
                    disabled={!newActivity.title}
                    className="w-full sm:w-auto"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default WellnessPage;
