
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User } from "lucide-react";

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI mental health mentor. I'm here to provide support, coping strategies, and a listening ear. How are you feeling today?",
      timestamp: new Date().toISOString(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const lowercaseInput = userInput.toLowerCase();
    
    if (lowercaseInput.includes('stress') || lowercaseInput.includes('anxious')) {
      return "I understand you're feeling stressed. Let's try a quick breathing exercise: Breathe in for 4 counts, hold for 4, then exhale for 6. This activates your parasympathetic nervous system and can help reduce anxiety. Would you like me to guide you through some other stress management techniques?";
    }
    
    if (lowercaseInput.includes('sad') || lowercaseInput.includes('depressed')) {
      return "I hear that you're going through a difficult time. It's important to acknowledge these feelings. Have you been able to maintain your daily routine? Sometimes small accomplishments like getting dressed or having a meal can be meaningful steps. Would you like to talk about what might be contributing to these feelings?";
    }
    
    if (lowercaseInput.includes('family') || lowercaseInput.includes('parents')) {
      return "Family dynamics can be complex, especially in Indian culture where expectations can be high. It's normal to feel pressure from family while also wanting to honor your own path. Have you been able to communicate your feelings with your family? Sometimes setting gentle boundaries while showing respect can help.";
    }
    
    if (lowercaseInput.includes('work') || lowercaseInput.includes('job') || lowercaseInput.includes('career')) {
      return "Career concerns are very common, especially for young professionals in India's competitive environment. Remember that career paths aren't always linear, and it's okay to take time to figure things out. What specific aspect of work is causing you the most concern right now?";
    }
    
    if (lowercaseInput.includes('sleep') || lowercaseInput.includes('tired')) {
      return "Sleep is crucial for mental health. Poor sleep can significantly impact mood and stress levels. Try to maintain a consistent sleep schedule, avoid screens 1 hour before bed, and create a calming bedtime routine. Have you noticed any patterns in what might be affecting your sleep?";
    }
    
    return "Thank you for sharing that with me. It sounds like you're dealing with something important. Remember that seeking support is a sign of strength, not weakness. I'm here to listen and help you work through whatever you're facing. Can you tell me more about what you're experiencing?";
  };

  const quickResponses = [
    "I'm feeling anxious about exams",
    "Family pressure is overwhelming",
    "I can't sleep well lately",
    "Work stress is affecting me",
    "I feel lonely and isolated"
  ];

  return (
    <div className="space-y-6">
      <Card className="h-96">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            AI Mental Health Mentor
          </CardTitle>
          <CardDescription>
            Get personalized support and coping strategies. Remember, this is a supportive tool and not a replacement for professional therapy.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col h-80">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'ai' ? 'bg-indigo-100' : 'bg-gray-100'
                }`}>
                  {message.type === 'ai' ? (
                    <Bot className="h-4 w-4 text-indigo-600" />
                  ) : (
                    <User className="h-4 w-4 text-gray-600" />
                  )}
                </div>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'ai' 
                    ? 'bg-indigo-100 text-indigo-900' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-indigo-600" />
                </div>
                <div className="bg-indigo-100 text-indigo-900 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Response Options</CardTitle>
          <CardDescription>
            Click on any of these common concerns to start the conversation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {quickResponses.map((response, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => setInputMessage(response)}
                className="text-left justify-start h-auto p-3"
              >
                {response}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-red-50 border-red-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <div>
              <h4 className="font-medium text-red-800 mb-1">Crisis Support</h4>
              <p className="text-sm text-red-700">
                If you're having thoughts of self-harm or suicide, please reach out for immediate help:
                <br />
                • KIRAN Helpline: <strong>1800-599-0019</strong>
                <br />
                • Vandrevala Foundation: <strong>9999 666 555</strong>
                <br />
                • Sneha India: <strong>044-24640050</strong>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChat;
