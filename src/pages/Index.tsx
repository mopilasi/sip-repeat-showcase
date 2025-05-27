
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, CheckCircle, Share2, Sparkles, ShoppingCart, Download, ExternalLink } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-coral-50 to-cream-50">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png" 
              alt="Eat Sip Repeat Logo" 
              className="w-80 h-80 mx-auto mb-6 animate-scale-in"
            />
          </div>
          
          {/* Tagline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-lora text-forest-700 mb-12 leading-relaxed">
            Seasonal Menus Curated by AI & You
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-6 text-lg font-inter font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download on the App Store
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-forest-500 text-forest-700 hover:bg-forest-50 px-8 py-6 text-lg font-inter font-medium transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* About / Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: App Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-coral-100 to-cream-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="aspect-[9/16] bg-gradient-to-b from-coral-50 to-cream-50 rounded-xl border border-gray-200 flex items-center justify-center">
                    <Smartphone className="h-32 w-32 text-coral-300" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-forest-500 text-white p-3 rounded-full shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            
            {/* Right: Story Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bebas text-forest-700 mb-6">
                My Story
              </h2>
              <div className="prose prose-lg font-lora text-forest-600 space-y-4">
                <p>
                  Like many home cooks, I found myself stuck in dinner ruts, making the same meals week after week. 
                  Despite saving countless recipes from Instagram and food blogs, I rarely used them when it came time to plan meals.
                </p>
                <p>
                  The disconnect between inspiration and execution was frustrating. I wanted to cook seasonally and try new things, 
                  but translating scattered recipe bookmarks into cohesive meal plans felt overwhelming.
                </p>
                <p className="font-medium text-coral-600">
                  That's when I envisioned Eat Sip Repeat—an AI-powered companion that transforms your saved recipes 
                  into thoughtful, seasonal menu suggestions while handling the practical details like shopping lists.
                </p>
                <p>
                  The result is an app that bridges the gap between culinary inspiration and everyday cooking, 
                  making seasonal eating both accessible and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4 bg-sand-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bebas text-center text-forest-700 mb-16">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="h-8 w-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-inter font-semibold text-forest-700">
                  Seasonal Menu Magic
                </h3>
                <p className="font-lora text-forest-600">
                  AI-curated dinner plans based on what's fresh and in season.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingCart className="h-8 w-8 text-forest-600" />
                </div>
                <h3 className="text-xl font-inter font-semibold text-forest-700">
                  One-Tap Shopping List
                </h3>
                <p className="font-lora text-forest-600">
                  Auto-generate grocery lists to save time at the market.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-cream-200 rounded-full flex items-center justify-center mx-auto">
                  <Share2 className="h-8 w-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-inter font-semibold text-forest-700">
                  Save & Share
                </h3>
                <p className="font-lora text-forest-600">
                  Bookmark recipes from Instagram, TikTok, blogs—and share your menus.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-forest-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 font-inter">
              <a href="#" className="hover:text-coral-300 transition-colors">Privacy</a>
              <span className="text-forest-300">·</span>
              <a href="#" className="hover:text-coral-300 transition-colors">Terms</a>
              <span className="text-forest-300">·</span>
              <a href="mailto:contact@eatsiprepeat.com" className="hover:text-coral-300 transition-colors">Contact</a>
            </div>
            <p className="font-lora text-forest-200">
              © 2025 Eat Sip Repeat • Built by Polina Kyrylova
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
