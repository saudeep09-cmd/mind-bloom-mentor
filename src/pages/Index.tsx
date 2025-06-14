
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Shield, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-12 w-12 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">MindBloom Mentor</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered mental health companion providing personalized therapy exercises and progress tracking for Indian students and young professionals.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/assessment">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Brain className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <CardTitle className="text-lg">AI Mental Health Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Culturally-adapted screening and personalized recommendations
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Daily Wellness Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI-generated exercises combining CBT, mindfulness, and Indian practices
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Visual dashboards with insights and pattern recognition
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Crisis Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Immediate resources and escalation to human support when needed
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Free Plan</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-900">₹0<span className="text-sm font-normal">/month</span></CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="space-y-2">
                  <li>✓ Basic mood tracking</li>
                  <li>✓ 3 AI sessions per month</li>
                  <li>✓ Community access</li>
                  <li>✓ Crisis resources</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Get Started Free</Button>
              </CardContent>
            </Card>

            <Card className="relative border-indigo-500 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Premium Plan</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-900">₹299<span className="text-sm font-normal">/month</span></CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="space-y-2">
                  <li>✓ Unlimited AI sessions</li>
                  <li>✓ Personalized programs</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Priority crisis support</li>
                  <li>✓ Family features</li>
                </ul>
                <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">Start Premium Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">350M+</div>
              <div className="text-gray-600">Potential users in India</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">0.75</div>
              <div className="text-gray-600">Psychiatrists per 100K people</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">₹2000-5000</div>
              <div className="text-gray-600">Cost per therapy session</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
