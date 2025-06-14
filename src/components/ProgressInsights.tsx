
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Target, Award } from "lucide-react";

const ProgressInsights = () => {
  const weeklyMoodData = [
    { week: 'Week 1', average: 2.8 },
    { week: 'Week 2', average: 3.2 },
    { week: 'Week 3', average: 3.6 },
    { week: 'Week 4', average: 3.9 },
  ];

  const achievements = [
    { title: "7-Day Streak", description: "Completed daily check-ins for a week", icon: "🔥", unlocked: true },
    { title: "Mindful Warrior", description: "Completed 10 mindfulness exercises", icon: "🧘", unlocked: true },
    { title: "Chat Master", description: "Had 20 AI mentor conversations", icon: "💬", unlocked: false },
    { title: "Stress Buster", description: "Completed stress management program", icon: "⭐", unlocked: false },
  ];

  const insights = [
    {
      type: "positive",
      title: "Mood Improvement",
      description: "Your average mood has improved by 39% over the last month. Keep up the great work!",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      type: "neutral",
      title: "Consistency Pattern",
      description: "You're most active on weekends. Try setting reminders for weekday check-ins.",
      icon: Target,
      color: "text-blue-600"
    },
    {
      type: "recommendation",
      title: "Sleep & Mood Connection",
      description: "Your mood tends to be lower on days when you sleep less than 6 hours. Consider a sleep routine.",
      icon: TrendingDown,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">73/100</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/30</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Programs Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1/4</div>
            <p className="text-xs text-muted-foreground">25% completion rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">AI Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Mood Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Mood Trend</CardTitle>
          <CardDescription>
            Your mood progression over the past month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyMoodData.map((week, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{week.week}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      style={{ width: `${(week.average / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{week.average}/5</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
          <CardDescription>
            AI-powered analysis of your mental health journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Icon className={`h-5 w-5 mt-0.5 ${insight.color}`} />
                <div>
                  <h4 className="font-medium">{insight.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Achievements
          </CardTitle>
          <CardDescription>
            Milestones you've reached on your wellness journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  achievement.unlocked
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div>
                    <h4 className={`font-medium ${
                      achievement.unlocked ? 'text-green-800' : 'text-gray-500'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${
                      achievement.unlocked ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.unlocked && (
                    <div className="ml-auto">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Summary */}
      <Card>
        <CardHeader>
          <CardTitle>This Week's Summary</CardTitle>
          <CardDescription>
            Your mental health activities and progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">5</div>
              <p className="text-sm text-blue-700">Mood Check-ins</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <p className="text-sm text-purple-700">AI Chat Sessions</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">7</div>
              <p className="text-sm text-green-700">Wellness Exercises</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-medium text-indigo-800 mb-2">Personal Recommendation</h4>
            <p className="text-sm text-indigo-700">
              You've been consistently tracking your mood and engaging with the AI mentor. 
              Consider starting the "Social Anxiety & Relationships" program to build on your progress.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressInsights;
