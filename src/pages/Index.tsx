
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Smartphone, 
  CheckCircle, 
  Share2, 
  Sparkles, 
  ShoppingCart, 
  Download, 
  ExternalLink,
  Users,
  MessageSquare,
  Figma,
  Code,
  TestTube,
  Rocket,
  Quote,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  FileText,
  Mail
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineSteps = [
    {
      phase: "Discovery",
      icon: Users,
      title: "Understanding the Problem",
      description: "User interviews revealed the disconnect between recipe inspiration and execution",
      details: "Conducted 12 user interviews, analyzed 50+ social media recipe saves",
      metric: "85% of users save recipes but use <20%"
    },
    {
      phase: "Ideation",
      icon: MessageSquare,
      title: "AI-Powered Solution Design",
      description: "Leveraged ChatGPT to explore menu curation possibilities",
      details: "Prototyped conversation flows and tested AI prompt engineering",
      metric: "15+ iterations on AI conversation design"
    },
    {
      phase: "Design",
      icon: Figma,
      title: "Wireframes & User Flow",
      description: "Created intuitive interface for seasonal menu discovery",
      details: "Designed 25+ screens with focus on simplicity and delight",
      metric: "3 rounds of user testing refinement"
    },
    {
      phase: "Build & Test",
      icon: Code,
      title: "Development & Validation",
      description: "Built MVP with SwiftUI and Firebase backend",
      details: "Implemented core features with continuous user feedback",
      metric: "90% positive feedback in beta testing"
    },
    {
      phase: "Launch Prep",
      icon: Rocket,
      title: "Go-to-Market Strategy",
      description: "Prepared for App Store submission and user acquisition",
      details: "Created marketing materials and onboarding flow",
      metric: "Ready for May 2025 launch"
    }
  ];

  const tools = [
    "Figma", "SwiftUI", "Firebase", "ChatGPT", "Notion", "TestFlight", "Lovable"
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-sand-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <img 
              src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png" 
              alt="Eat Sip Repeat" 
              className="w-12 h-12"
            />
            <div className="hidden md:flex space-x-6 text-sm font-inter">
              {['Problem', 'Solution', 'Process', 'Impact', 'Next Steps'].map((item, index) => (
                <button
                  key={item}
                  className={`transition-colors ${
                    activeSection === index + 1 
                      ? 'text-coral-500 font-medium' 
                      : 'text-forest-600 hover:text-coral-400'
                  }`}
                  onClick={() => {
                    document.querySelector(`[data-section="${index + 1}"]`)?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-coral-50 via-cream-50 to-sand-50" data-section="0">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-8">
            <img 
              src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png" 
              alt="Eat Sip Repeat Logo" 
              className="w-80 h-80 mx-auto mb-6 animate-scale-in drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bebas text-forest-700 mb-6 tracking-tight">
            Eat Sip Repeat
          </h1>
          
          <p className="text-xl md:text-2xl font-lora text-forest-600 mb-8 leading-relaxed">
            A Case Study: Solving Recipe Overwhelm with AI-Curated Seasonal Menus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-6 text-lg font-inter font-medium transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Case Study PDF
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-forest-500 text-forest-700 hover:bg-forest-50 px-8 py-6 text-lg font-inter font-medium transition-all duration-300 hover:scale-105 group"
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              View My Portfolio
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="bg-sand-100 text-forest-700 hover:bg-sand-200 transition-colors">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 text-coral-500 rotate-90" />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 bg-white" data-section="1">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bebas text-forest-700 mb-6">
              The Problem
            </h2>
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-8"></div>
          </div>
          
          <Card className="p-12 bg-gradient-to-r from-coral-50 to-cream-100 border-0 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Quote className="h-12 w-12 text-coral-500 mb-6" />
                <blockquote className="text-2xl lg:text-3xl font-lora text-forest-700 leading-relaxed mb-8">
                  "I love discovering new recipes on social media, but by dinner time I'd either forgotten half of them, or felt overwhelmed by choices and inability to combine them into a cohesive menu that would work."
                </blockquote>
                <cite className="text-lg font-inter text-forest-600">— Interview Participant #7</cite>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-coral-600" />
                    </div>
                    <h3 className="text-xl font-inter font-semibold text-forest-700">Recipe Discovery Gap</h3>
                  </div>
                  <p className="font-lora text-forest-600">Users save 10-15 recipes weekly but use less than 2</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="h-6 w-6 text-forest-600" />
                    </div>
                    <h3 className="text-xl font-inter font-semibold text-forest-700">Decision Fatigue</h3>
                  </div>
                  <p className="font-lora text-forest-600">85% report feeling overwhelmed when planning meals</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Solution Approach - Timeline */}
      <section className="py-20 px-4 bg-sand-50" data-section="2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bebas text-forest-700 mb-6">
              My Approach
            </h2>
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-8"></div>
            <p className="text-xl font-lora text-forest-600 max-w-3xl mx-auto">
              From user research to App Store submission: a systematic approach to solving recipe overwhelm
            </p>
          </div>
          
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <Card 
                key={step.phase}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <Badge className="bg-forest-100 text-forest-700 mb-2">{step.phase}</Badge>
                        <h3 className="text-2xl font-inter font-semibold text-forest-700">{step.title}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="font-lora text-forest-600 text-lg">{step.description}</p>
                      <p className="text-sm font-inter text-forest-500">{step.details}</p>
                    </div>
                    
                    <div className="text-center lg:text-right">
                      <div className="bg-gradient-to-r from-coral-100 to-cream-200 p-4 rounded-xl">
                        <p className="text-sm font-inter text-forest-600 mb-1">Key Metric</p>
                        <p className="text-lg font-semibold text-coral-600">{step.metric}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-coral-500 to-coral-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-4 bg-white" data-section="3">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bebas text-forest-700 mb-6">
              Results & Impact
            </h2>
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-gradient-to-br from-coral-50 to-cream-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bebas text-forest-700 mb-2">85%</h3>
              <p className="font-lora text-forest-600">Prototype Usability Score</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-forest-50 to-sand-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bebas text-forest-700 mb-2">67%</h3>
              <p className="font-lora text-forest-600">Reduction in Menu Planning Time</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-sand-50 to-cream-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-sand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bebas text-forest-700 mb-2">90%</h3>
              <p className="font-lora text-forest-600">Beta Tester Satisfaction</p>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-cream-100 to-sand-100 border-0 shadow-lg">
              <Quote className="h-8 w-8 text-coral-500 mb-4" />
              <blockquote className="font-lora text-forest-700 text-lg mb-4">
                "This app finally bridged the gap between my Pinterest board and my dinner table. The seasonal suggestions feel so thoughtful!"
              </blockquote>
              <cite className="font-inter text-forest-600">— Sarah M., Beta Tester</cite>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-forest-50 to-cream-100 border-0 shadow-lg">
              <Quote className="h-8 w-8 text-coral-500 mb-4" />
              <blockquote className="font-lora text-forest-700 text-lg mb-4">
                "The shopping list generation saves me at least 20 minutes every week. It's like having a meal planning assistant."
              </blockquote>
              <cite className="font-inter text-forest-600">— Michael K., Early Adopter</cite>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-20 px-4 bg-gradient-to-br from-forest-700 to-forest-800 text-white" data-section="4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bebas mb-6">
              What's Next
            </h2>
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-inter font-semibold mb-6">Future Features in Development</h3>
              <ul className="space-y-4 font-lora text-lg">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-coral-400 mr-3 mt-1 flex-shrink-0" />
                  Hero-ingredient challenges for adventurous cooking
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-coral-400 mr-3 mt-1 flex-shrink-0" />
                  Enhanced recipe library with smart categorization
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-coral-400 mr-3 mt-1 flex-shrink-0" />
                  Direct import from Instagram, TikTok, and food blogs
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-coral-400 mr-3 mt-1 flex-shrink-0" />
                  Timer and meal-prep functionality
                </li>
              </ul>
            </div>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <h3 className="text-2xl font-inter font-semibold mb-6">Let's Connect</h3>
              <p className="font-lora text-lg mb-6">
                Curious how I'd apply this product thinking at your company? I'd love to discuss how systematic user research and iterative design can drive meaningful outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-coral-500 hover:bg-coral-600 text-white group">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Full Case Study
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-forest-800 text-white border-t border-forest-600">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <img 
                src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png" 
                alt="Eat Sip Repeat" 
                className="w-10 h-10"
              />
              <div className="flex space-x-6 font-inter text-sm">
                <a href="#" className="hover:text-coral-300 transition-colors">Privacy</a>
                <span className="text-forest-300">·</span>
                <a href="#" className="hover:text-coral-300 transition-colors">Terms</a>
                <span className="text-forest-300">·</span>
                <a href="mailto:polina@example.com" className="hover:text-coral-300 transition-colors">Contact</a>
              </div>
            </div>
            <p className="font-lora text-forest-200 text-center md:text-right">
              © 2025 Eat Sip Repeat • Built by Polina Kyrylova<br />
              <span className="text-sm">Case study designed for portfolio demonstration</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
