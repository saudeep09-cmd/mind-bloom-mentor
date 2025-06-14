
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    location: "",
    stressLevel: "",
    primaryConcerns: [],
    previousTherapy: "",
    culturalBackground: "",
    preferredLanguage: "English"
  });
  
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete assessment and navigate to dashboard
      localStorage.setItem('userAssessment', JSON.stringify(formData));
      navigate('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Enter your full name" 
              />
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age" 
                type="number"
                value={formData.age}
                onChange={(e) => updateFormData('age', e.target.value)}
                placeholder="Enter your age" 
              />
            </div>
            <div>
              <Label htmlFor="occupation">Occupation</Label>
              <Input 
                id="occupation" 
                value={formData.occupation}
                onChange={(e) => updateFormData('occupation', e.target.value)}
                placeholder="Student, Software Engineer, etc." 
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                placeholder="City, State" 
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label>Current Stress Level (1-10)</Label>
              <div className="flex gap-2 mt-2">
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <Button
                    key={num}
                    variant={formData.stressLevel === num.toString() ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateFormData('stressLevel', num.toString())}
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label>Primary Concerns (Select all that apply)</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {['Academic Pressure', 'Career Anxiety', 'Family Expectations', 'Social Anxiety', 'Depression', 'Sleep Issues', 'Relationship Problems', 'Financial Stress'].map(concern => (
                  <Button
                    key={concern}
                    variant={formData.primaryConcerns.includes(concern) ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      const concerns = formData.primaryConcerns.includes(concern)
                        ? formData.primaryConcerns.filter(c => c !== concern)
                        : [...formData.primaryConcerns, concern];
                      updateFormData('primaryConcerns', concerns);
                    }}
                  >
                    {concern}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label>Have you tried therapy before?</Label>
              <div className="flex gap-2 mt-2">
                {['Yes', 'No', 'Considering'].map(option => (
                  <Button
                    key={option}
                    variant={formData.previousTherapy === option ? "default" : "outline"}
                    onClick={() => updateFormData('previousTherapy', option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="culturalBackground">Cultural Background</Label>
              <Input 
                id="culturalBackground" 
                value={formData.culturalBackground}
                onChange={(e) => updateFormData('culturalBackground', e.target.value)}
                placeholder="e.g., North Indian, South Indian, Bengali, etc." 
              />
            </div>
            <div>
              <Label>Preferred Language</Label>
              <div className="flex gap-2 mt-2">
                {['English', 'Hindi', 'Both'].map(lang => (
                  <Button
                    key={lang}
                    variant={formData.preferredLanguage === lang ? "default" : "outline"}
                    onClick={() => updateFormData('preferredLanguage', lang)}
                  >
                    {lang}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Assessment Summary</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Age:</strong> {formData.age}</p>
              <p><strong>Occupation:</strong> {formData.occupation}</p>
              <p><strong>Stress Level:</strong> {formData.stressLevel}/10</p>
              <p><strong>Primary Concerns:</strong> {formData.primaryConcerns.join(', ')}</p>
              <p><strong>Preferred Language:</strong> {formData.preferredLanguage}</p>
            </div>
            <p className="text-sm text-gray-600">
              Based on your responses, we'll create a personalized mental health program just for you.
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Brain className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Mental Health Assessment</h1>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Step {currentStep} of 4</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Mental Health Assessment"}
              {currentStep === 3 && "Background & Preferences"}
              {currentStep === 4 && "Review & Complete"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "Help us understand your current state"}
              {currentStep === 3 && "Cultural context and preferences"}
              {currentStep === 4 && "Review your information before proceeding"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button onClick={handleNext}>
                {currentStep === 4 ? 'Complete Assessment' : 'Next'}
                {currentStep < 4 && <ArrowRight className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;
