
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Clock, Star, CheckCircle } from "lucide-react";

const WellnessPrograms = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Stress Management for Students",
      description: "Learn CBT techniques specifically designed for academic pressure",
      duration: "7 days",
      difficulty: "Beginner",
      lessons: [
        "Understanding Academic Stress",
        "Breathing Techniques for Exam Anxiety",
        "Time Management Strategies",
        "Positive Self-Talk",
        "Study Break Mindfulness",
        "Dealing with Failure",
        "Creating Healthy Study Habits"
      ],
      completed: 3,
      rating: 4.8,
      cultural: "Includes Indian family dynamics"
    },
    {
      id: 2,
      title: "Mindfulness with Yoga",
      description: "Combine traditional yoga practices with modern mindfulness",
      duration: "10 days",
      difficulty: "Beginner",
      lessons: [
        "Introduction to Mindful Yoga",
        "Morning Sun Salutation",
        "Pranayama for Mental Clarity",
        "Yoga Nidra for Stress Relief",
        "Chakra Meditation",
        "Asanas for Anxiety",
        "Evening Relaxation Sequence",
        "Mindful Walking",
        "Gratitude Practice",
        "Integration into Daily Life"
      ],
      completed: 0,
      rating: 4.9,
      cultural: "Rooted in Indian traditions"
    },
    {
      id: 3,
      title: "Career Anxiety Management",
      description: "Navigate job market pressure and career expectations",
      duration: "5 days",
      difficulty: "Intermediate",
      lessons: [
        "Understanding Career Anxiety",
        "Managing Family Expectations",
        "Building Confidence",
        "Interview Stress Techniques",
        "Long-term Career Planning"
      ],
      completed: 5,
      rating: 4.7,
      cultural: "Indian job market focused"
    },
    {
      id: 4,
      title: "Social Anxiety & Relationships",
      description: "Build confidence in social situations and relationships",
      duration: "14 days",
      difficulty: "Intermediate",
      lessons: [
        "Understanding Social Anxiety",
        "Communication Skills",
        "Boundary Setting",
        "Dealing with Peer Pressure",
        "Building Self-Confidence",
        "Managing Social Media",
        "Dating and Relationships",
        "Family Communication",
        "Workplace Relationships",
        "Making Friends",
        "Conflict Resolution",
        "Assertiveness Training",
        "Public Speaking",
        "Maintaining Relationships"
      ],
      completed: 0,
      rating: 4.6,
      cultural: "Cultural sensitivity included"
    }
  ];

  const startProgram = (programId: number) => {
    setActiveProgram(programId);
    // In a real app, this would start the program and track progress
    alert('Program started! Check your dashboard for daily lessons.');
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {programs.map((program) => (
          <Card key={program.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="flex items-center space-x-2">
                    <span>{program.title}</span>
                    {program.completed > 0 && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {program.completed}/{program.lessons.length} completed
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="mt-2">{program.description}</CardDescription>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {program.rating}
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {program.difficulty}
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                      {program.cultural}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  {program.completed > 0 && program.completed < program.lessons.length ? (
                    <Button onClick={() => startProgram(program.id)}>
                      Continue
                    </Button>
                  ) : program.completed === program.lessons.length ? (
                    <Button variant="outline" disabled>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </Button>
                  ) : (
                    <Button onClick={() => startProgram(program.id)}>
                      <Play className="h-4 w-4 mr-2" />
                      Start Program
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h4 className="font-medium">Program Outline:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {program.lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 p-2 rounded text-sm ${
                        index < program.completed
                          ? 'bg-green-50 text-green-800'
                          : index === program.completed
                          ? 'bg-blue-50 text-blue-800'
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      {index < program.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : index === program.completed ? (
                        <Play className="h-4 w-4 text-blue-600" />
                      ) : (
                        <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                      )}
                      <span className="text-xs">{index + 1}. {lesson}</span>
                    </div>
                  ))}
                </div>
                
                {program.completed > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{Math.round((program.completed / program.lessons.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(program.completed / program.lessons.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Program Recommendations</CardTitle>
          <CardDescription>
            Based on your assessment and recent activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Recommended for You</h4>
              <p className="text-sm text-blue-700 mb-3">
                Based on your stress level (7/10) and concerns about academic pressure, we recommend starting with "Stress Management for Students".
              </p>
              <Button size="sm" onClick={() => startProgram(1)}>
                Start Recommended Program
              </Button>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-2">Cultural Integration</h4>
              <p className="text-sm text-purple-700">
                All our programs are designed with Indian cultural context in mind, incorporating traditional practices like yoga and meditation alongside evidence-based Western techniques.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WellnessPrograms;
