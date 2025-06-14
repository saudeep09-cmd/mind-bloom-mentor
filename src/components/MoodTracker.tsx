
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrendingUp } from "lucide-react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [note, setNote] = useState('');

  const moods = [
    { emoji: '😁', label: 'Excellent', value: 5, color: 'bg-green-500' },
    { emoji: '😊', label: 'Good', value: 4, color: 'bg-blue-500' },
    { emoji: '😐', label: 'Okay', value: 3, color: 'bg-yellow-500' },
    { emoji: '😔', label: 'Not Great', value: 2, color: 'bg-orange-500' },
    { emoji: '😢', label: 'Terrible', value: 1, color: 'bg-red-500' },
  ];

  const weeklyData = [
    { day: 'Mon', mood: 4 },
    { day: 'Tue', mood: 3 },
    { day: 'Wed', mood: 4 },
    { day: 'Thu', mood: 2 },
    { day: 'Fri', mood: 3 },
    { day: 'Sat', mood: 5 },
    { day: 'Sun', mood: 4 },
  ];

  const handleSubmit = () => {
    if (selectedMood) {
      const moodEntry = {
        mood: selectedMood,
        note,
        timestamp: new Date().toISOString(),
      };
      
      const existingEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
      existingEntries.push(moodEntry);
      localStorage.setItem('moodEntries', JSON.stringify(existingEntries));
      
      setSelectedMood('');
      setNote('');
      alert('Mood tracked successfully!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Mood Entry */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              How are you feeling today?
            </CardTitle>
            <CardDescription>
              Track your daily mood to identify patterns and triggers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-5 gap-2">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.label)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedMood === mood.label
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{mood.emoji}</div>
                  <div className="text-xs font-medium">{mood.label}</div>
                </button>
              ))}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Add a note (optional)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What's on your mind today?"
                className="w-full p-3 border border-gray-300 rounded-md resize-none"
                rows={3}
              />
            </div>
            
            <Button onClick={handleSubmit} className="w-full" disabled={!selectedMood}>
              Track Mood
            </Button>
          </CardContent>
        </Card>

        {/* Weekly Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              This Week's Overview
            </CardTitle>
            <CardDescription>
              Your mood patterns over the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{day.day}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          day.mood >= 4 ? 'bg-green-500' :
                          day.mood >= 3 ? 'bg-blue-500' :
                          day.mood >= 2 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${(day.mood / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{day.mood}/5</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Weekly Average:</strong> 3.6/5<br />
                Your mood has been improving! Keep up the good work.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mood Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Mood Insights & Recommendations</CardTitle>
          <CardDescription>
            AI-powered insights based on your mood patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Positive Pattern</h4>
              <p className="text-sm text-green-700">
                Your mood tends to improve on weekends. Consider incorporating more leisure activities during weekdays.
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">Watch Out</h4>
              <p className="text-sm text-yellow-700">
                Thursdays seem challenging. This might be related to mid-week stress. Try scheduling lighter activities on Thursdays.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Suggestion</h4>
              <p className="text-sm text-blue-700">
                Your notes mention work stress frequently. Consider practicing the breathing exercises in your wellness program.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodTracker;
