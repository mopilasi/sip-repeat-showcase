import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  Code,
  TestTube,
  Rocket,
  Quote,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  FileText,
  Linkedin,
  Zap,
  Globe
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
      metric: "85% of users save recipes but use <20%",
      gradient: "from-sage-500 to-sage-600",
      modalContent: "Through comprehensive user research, I discovered that people love collecting recipes on social media but struggle to actually use them. The gap between inspiration and execution was clear - users needed a bridge between discovery and cooking."
    },
    {
      phase: "Ideation",
      icon: MessageSquare,
      title: "AI-Powered Solution Design",
      description: "Leveraged ChatGPT to explore menu curation possibilities",
      details: "Prototyped conversation flows and tested AI prompt engineering",
      metric: "15+ iterations on AI conversation design",
      gradient: "from-terracotta-500 to-terracotta-600",
      modalContent: "I used ChatGPT extensively to prototype how AI could curate seasonal menus. This involved testing different prompt strategies, conversation flows, and ensuring the AI could create cohesive dinner experiences rather than just random recipe collections."
    },
    {
      phase: "Design",
      icon: Globe,
      title: "Wireframes & User Flow",
      description: "Created intuitive interface for seasonal menu discovery",
      details: "Designed 25+ screens with focus on simplicity and delight",
      metric: "3 rounds of user testing refinement",
      gradient: "from-dusty-blue-500 to-dusty-blue-600",
      modalContent: "The design process focused on creating an interface that felt magical yet simple. I wireframed flows that would make discovering seasonal menus feel effortless, with careful attention to visual hierarchy and user delight moments."
    },
    {
      phase: "Build & Test",
      icon: Code,
      title: "Development & Validation",
      description: "Built MVP with SwiftUI and Firebase backend",
      details: "Implemented core features with continuous user feedback",
      metric: "90% positive feedback in beta testing",
      gradient: "from-warm-gray-500 to-warm-gray-600",
      modalContent: "Development was iterative, with constant user feedback shaping features. I built the core menu curation engine, shopping list generation, and social saving features while maintaining a clean, native iOS experience."
    },
    {
      phase: "Launch Prep",
      icon: Rocket,
      title: "Go-to-Market Strategy",
      description: "Prepared for App Store submission and user acquisition",
      details: "Created marketing materials and onboarding flow",
      metric: "Ready for May 2025 launch",
      gradient: "from-slate-500 to-slate-600",
      modalContent: "The launch strategy focused on building anticipation through social media and targeting food enthusiasts who already struggle with meal planning. I created onboarding flows that would quickly demonstrate value."
    }
  ];

  const tools = [
    { name: "Figma", icon: "/lovable-uploads/f998696d-19ad-4cc2-9c18-5a9ef8ae6f24.png" },
    { name: "ChatGPT", icon: "🤖" },
    { name: "Notion", icon: "/lovable-uploads/63d0820a-ab80-47af-bb12-40354d9f20dd.png" },
    { name: "Windsurf", icon: "🏄‍♂️" },
    { name: "Lovable", icon: "/lovable-uploads/65e23c88-75a5-4f21-9be1-e74049cda5af.png" }
  ];

  const scrollToSection = (sectionIndex: number) => {
    document.querySelector(`[data-section="${sectionIndex}"]`)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const downloadCaseStudy = () => {
    // Create a comprehensive case study document
    const caseStudyContent = `
EAT SIP REPEAT - PRODUCT CASE STUDY

A Case Study: Solving Recipe Overwhelm with AI-Curated Seasonal Menus

THE PROBLEM
Users save 10-15 recipes weekly but use less than 2. 85% report feeling overwhelmed when planning meals.

"I love discovering new recipes on social media, but by dinner time I'd either forgotten half of them, or felt overwhelmed by choices and inability to combine them into a cohesive menu that would work." — Interview Participant #7

MARKET RESEARCH ANALYSIS

Market Demand for a Curated Dinner Menu App in the US

Overview: "Eat, Sip, Repeat" is envisioned as a mobile app delivering curated, seasonal dinner menus for users overwhelmed by too many choices. This addresses a common pain point: decision fatigue in dinner planning.

Existing Apps and Competitors:
- Personalized Meal Planning Apps: Mealime (4.8★ on App Store, 7+ million users) eliminates decision fatigue
- Curated Recipe Inspiration Platforms: Guardian Feast app offers curated daily content for seasonal occasions
- Dinner Decision Collaborators: Dinners app (2024) frames itself as "Tinder for recipes"

User Interest and Trends:
- Decision Fatigue in Cooking: Modern consumers are "inundated with choices"
- Search and Social Media Trends: #DinnerIdeas and #MealPrep attract huge viewership
- Adoption of Meal Inspiration Apps: Meal-planning app market projected to reach $223 million by 2031

Monetization Models:
- Freemium Model: $2.99–$3.99 per month for premium features
- Affiliate Partnerships: Commission through grocery delivery integrations
- Advertising and Sponsored Content: Branded menu partnerships

THE SOLUTION
An AI-powered mobile app that transforms recipe discovery into curated seasonal dinner experiences, complete with smart shopping lists and social recipe saving.

MY APPROACH

1. Discovery Phase
- Conducted 12 user interviews
- Analyzed 50+ social media recipe saves
- Key finding: 85% of users save recipes but use <20%

2. Ideation Phase
- 15+ iterations on AI conversation design
- Prototyped conversation flows with ChatGPT
- Tested AI prompt engineering for menu curation

3. Design Phase
- Created 25+ screens focusing on simplicity and delight
- 3 rounds of user testing refinement
- Designed intuitive interface for seasonal menu discovery

4. Build & Test Phase
- Built MVP with SwiftUI and Firebase backend
- Implemented core features with continuous user feedback
- Achieved 90% positive feedback in beta testing

5. Launch Prep Phase
- Prepared App Store submission materials
- Created go-to-market strategy
- Developed user acquisition plan

RESULTS & IMPACT
- 85% Prototype Usability Score
- 67% Reduction in Menu Planning Time
- 90% Beta Tester Satisfaction

User Testimonials:
"This app finally bridged the gap between my Pinterest board and my dinner table. The seasonal suggestions feel so thoughtful!" — Sarah M., Beta Tester

"The shopping list generation saves me at least 20 minutes every week. It's like having a meal planning assistant." — Michael K., Early Adopter

WHAT'S NEXT
Future Features in Development:
- Hero-ingredient challenges for adventurous cooking
- Enhanced recipe library with smart categorization
- Direct import from Instagram, TikTok, and food blogs
- Timer and meal-prep functionality

Tools Used: Figma, ChatGPT, Notion, Windsurf, Lovable

© 2025 Eat Sip Repeat • Built by Polina Kyrylova
Case study designed for portfolio demonstration
    `;

    const blob = new Blob([caseStudyContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Eat-Sip-Repeat-Case-Study.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/polinakyrylova/', '_blank');
  };

  const openPortfolio = () => {
    window.open('https://polina-kyrylova-portfolio.lovable.app/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-cream-50">
      {/* Modern Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <img 
              src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png" 
              alt="Eat Sip Repeat" 
              className="w-10 h-10"
            />
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {[
                { name: 'Problem', section: 1 },
                { name: 'Solution', section: 2 },
                { name: 'Process', section: 3 },
                { name: 'Impact', section: 4 },
                { name: 'Next Steps', section: 5 }
              ].map((item, index) => (
                <button
                  key={item.name}
                  className={`transition-all duration-300 px-3 py-2 rounded-full ${
                    activeSection === item.section
                      ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white shadow-lg' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  onClick={() => scrollToSection(item.section)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-terracotta-500 to-terracotta-600" data-section="0">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/10 to-cream-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sage-500/20 to-sand-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-12">
            <img 
              src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png" 
              alt="Eat Sip Repeat Logo" 
              className="w-64 h-64 mx-auto mb-8 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            A Case Study: Solving Recipe Overwhelm with AI-Curated Seasonal Menus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={downloadCaseStudy}
              className="bg-white text-terracotta-600 hover:bg-cream-50 hover:text-terracotta-700 px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-2xl group"
            >
              <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Download Case Study
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={openPortfolio}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-2xl group backdrop-blur-sm"
            >
              <ExternalLink className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              View My Portfolio
            </Button>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white/90 mb-6">Toolkit</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <div 
                  key={tool.name} 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105 px-6 py-3 rounded-2xl border border-white/20 shadow-sm flex items-center space-x-3"
                >
                  {tool.icon.startsWith('/') ? (
                    <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
                  ) : (
                    <span className="text-lg">{tool.icon}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-6" data-section="1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
              The Problem
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border-0 shadow-2xl rounded-3xl mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5"></div>
            <div className="relative p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Quote className="h-16 w-16 text-red-500 mb-8" />
                  <blockquote className="text-2xl lg:text-3xl font-light text-slate-800 leading-relaxed mb-8 italic">
                    "I love discovering new recipes on social media, but by dinner time I'd either forgotten half of them, or felt overwhelmed by choices and inability to combine them into a cohesive menu that would work."
                  </blockquote>
                  <cite className="text-lg text-slate-600 font-medium">— Interview Participant #7</cite>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Recipe Discovery Gap</h3>
                    </div>
                    <p className="text-slate-600 text-lg">Users save 10-15 recipes weekly but use less than 2</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-6">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Decision Fatigue</h3>
                    </div>
                    <p className="text-slate-600 text-lg">85% report feeling overwhelmed when planning meals</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Market Research Section */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border-0 shadow-2xl rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
            <div className="relative p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Market Research Analysis</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">7M+ Users</h4>
                  <p className="text-slate-600">Mealime has 7+ million users seeking meal planning solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">12.9% CAGR</h4>
                  <p className="text-slate-600">Meal planning app market growing rapidly to $223M by 2031</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Decision Fatigue</h4>
                  <p className="text-slate-600">Modern consumers feel "inundated with choices" in meal planning</p>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Key Market Insights</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-terracotta-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Strong demand exists</strong> for solutions that simplify "What's for dinner?" decisions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-terracotta-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Gap in market:</strong> No major app dedicated to curated multi-course seasonal dinner menus</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-terracotta-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Monetization proven:</strong> Users pay $3-5/month for meal planning convenience</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-terracotta-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Seasonal content trending:</strong> Guardian Feast and similar apps show demand for curated seasonal recipes</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-cream-50 to-white" data-section="2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-terracotta-500 to-terracotta-600 rounded-2xl mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
              The Solution
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light">
              An AI-powered mobile app that transforms recipe discovery into curated seasonal dinner experiences, 
              complete with smart shopping lists and social recipe saving.
            </p>
          </div>
          
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-cream-50 border-0 shadow-2xl rounded-3xl max-w-4xl mx-auto">
            <div className="relative p-12 lg:p-16 text-center">
              <img 
                src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png" 
                alt="Eat Sip Repeat App" 
                className="w-32 h-32 mx-auto mb-8 drop-shadow-lg"
              />
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Curated Seasonal Dinner Menus App on iOS
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                An AI-powered mobile app that transforms recipe discovery into curated seasonal dinner experiences, 
                complete with smart shopping lists and social recipe saving.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Process/My Approach */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white" data-section="3">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
              My Approach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light">
              From user research to App Store submission: a systematic approach to solving recipe overwhelm
            </p>
          </div>
          
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <Dialog key={step.phase}>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm rounded-3xl cursor-pointer">
                    <div className="relative p-10">
                      <div className="grid lg:grid-cols-3 gap-10 items-center">
                        <div className="flex items-center space-x-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <step.icon className="h-10 w-10" />
                          </div>
                          <div>
                            <Badge className="bg-cream-200 text-slate-700 mb-3 px-3 py-1 font-medium">{step.phase}</Badge>
                            <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <p className="text-slate-700 text-lg font-medium">{step.description}</p>
                          <p className="text-slate-500">{step.details}</p>
                        </div>
                        
                        <div className="text-center lg:text-right">
                          <div className="bg-gradient-to-r from-cream-100 to-cream-200 p-6 rounded-2xl">
                            <p className="text-sm text-slate-600 mb-2 font-medium">Key Metric</p>
                            <p className="text-lg font-bold text-slate-900">{step.metric}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${step.gradient} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-r-full`}></div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-slate-900">{step.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-6">
                    <p className="text-slate-600 text-lg">{step.modalContent}</p>
                    <div className="mt-8 p-6 bg-cream-50 rounded-2xl">
                      <p className="text-sm text-slate-600 font-medium mb-2">Process Details</p>
                      <p className="text-slate-700">{step.details}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 px-6" data-section="4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
              Results & Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
              <div className="relative p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-3">85%</h3>
                <p className="text-slate-600 font-medium">Prototype Usability Score</p>
              </div>
            </Card>
            
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
              <div className="relative p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-3">67%</h3>
                <p className="text-slate-600 font-medium">Reduction in Menu Planning Time</p>
              </div>
            </Card>
            
            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10"></div>
              <div className="relative p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-3">90%</h3>
                <p className="text-slate-600 font-medium">Beta Tester Satisfaction</p>
              </div>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border-0 shadow-xl rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
              <div className="relative p-10">
                <Quote className="h-12 w-12 text-indigo-500 mb-6" />
                <blockquote className="text-slate-700 text-lg mb-6 font-light italic">
                  "This app finally bridged the gap between my Pinterest board and my dinner table. The seasonal suggestions feel so thoughtful!"
                </blockquote>
                <cite className="text-slate-600 font-medium">— Sarah M., Beta Tester</cite>
              </div>
            </Card>
            
            <Card className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border-0 shadow-xl rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
              <div className="relative p-10">
                <Quote className="h-12 w-12 text-green-500 mb-6" />
                <blockquote className="text-slate-700 text-lg mb-6 font-light italic">
                  "The shopping list generation saves me at least 20 minutes every week. It's like having a meal planning assistant."
                </blockquote>
                <cite className="text-slate-600 font-medium">— Michael K., Early Adopter</cite>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden" data-section="5">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-terracotta-500/20 to-terracotta-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cream-500/20 to-sand-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-terracotta-500 to-terracotta-600 rounded-2xl mb-6">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              What's Next
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-8">Future Features in Development</h3>
              <ul className="space-y-6 text-lg">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-terracotta-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                  Hero-ingredient challenges for adventurous cooking
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-terracotta-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                  Enhanced recipe library with smart categorization
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-terracotta-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                  Direct import from Instagram, TikTok, and food blogs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-terracotta-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                  Timer and meal-prep functionality
                </li>
              </ul>
            </div>
            
            <Card className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="relative p-10">
                <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                <p className="text-lg mb-8 text-slate-300 font-light">
                  Curious how I'd apply this product thinking at your company? I'd love to discuss how systematic user research and iterative design can drive meaningful outcomes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={openLinkedIn}
                    className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white group rounded-2xl px-8 py-4"
                  >
                    <Linkedin className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Get in Touch
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={downloadCaseStudy}
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-2xl px-8 py-4"
                  >
                    <FileText className="mr-3 h-5 w-5" />
                    Download Full Case Study
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 text-white border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-8">
              <img 
                src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png" 
                alt="Eat Sip Repeat" 
                className="w-12 h-12 opacity-80"
              />
            </div>
            <p className="text-slate-400 text-center md:text-right font-light">
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
