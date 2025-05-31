import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Smartphone,
  CheckCircle,
  Share2,
  Lightbulb,
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
  Globe,
  Wrench,
  Award,
  BookOpen,
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineSteps = [
    {
      phase: "Discovery",
      icon: Users,
      title: "Understanding the Problem",
      description:
        "User interviews revealed the disconnect between recipe inspiration and execution",
      details:
        "Conducted 18 user interviews, analyzed 50+ social media recipe saves",
      metric: "85% of users save recipes but use <20%",
      gradient: "from-sage-500 to-sage-600",
      modalContent:
        "Through comprehensive user research, I discovered that people love collecting recipes on social media but struggle to actually use them. The gap between inspiration and execution was clear - users needed a bridge between discovery and cooking.",
    },
    {
      phase: "Ideation",
      icon: MessageSquare,
      title: "AI-Powered Solution Design",
      description: "Leveraged ChatGPT to explore menu curation possibilities",
      details: "Prototyped conversation flows and tested AI prompt engineering",
      metric: "15+ iterations on AI conversation design",
      gradient: "from-terracotta-500 to-terracotta-600",
      modalContent:
        "I used ChatGPT extensively to prototype how AI could curate seasonal menus. This involved testing different prompt strategies, conversation flows, and ensuring the AI could create cohesive dinner experiences rather than just random recipe collections.",
    },
    {
      phase: "Design",
      icon: Globe,
      title: "Wireframes & User Flow",
      description: "Created intuitive interface for seasonal menu discovery",
      details: "Designed 25+ screens with focus on simplicity and delight",
      metric: "3 rounds of user testing refinement",
      gradient: "from-dusty-blue-500 to-dusty-blue-600",
      modalContent:
        "The design process focused on creating an interface that felt magical yet simple. I wireframed flows that would make discovering seasonal menus feel effortless, with careful attention to visual hierarchy and user delight moments.",
    },
    {
      phase: "Build & Test",
      icon: Code,
      title: "Development & Validation",
      description: "Built MVP with SwiftUI and Firebase backend",
      details: "Implemented core features with continuous user feedback",
      metric: "90% positive feedback in beta testing",
      gradient: "from-warm-gray-500 to-warm-gray-600",
      modalContent:
        "Development was iterative, with constant user feedback shaping features. I built the core menu curation engine, shopping list generation, and social saving features while maintaining a clean, native iOS experience.",
    },
    {
      phase: "Launch Prep",
      icon: Rocket,
      title: "Go-to-Market Strategy",
      description: "Prepared for App Store submission and user acquisition",
      details: "Created marketing materials and onboarding flow",
      metric: "Ready for May 2025 launch",
      gradient: "from-slate-500 to-slate-600",
      modalContent:
        "The launch strategy focused on building anticipation through social media and targeting food enthusiasts who already struggle with meal planning. I created onboarding flows that would quickly demonstrate value.",
    },
  ];

  const tools = [
    {
      name: "Figma",
      icon: "/lovable-uploads/f998696d-19ad-4cc2-9c18-5a9ef8ae6f24.png",
      description: "UI/UX Design & Wireframing",
    },
    {
      name: "ChatGPT",
      icon: "/lovable-uploads/download.png",
      description: "AI-Powered Research & Ideation",
    },
    {
      name: "Notion",
      icon: "/lovable-uploads/63d0820a-ab80-47af-bb12-40354d9f20dd.png",
      description: "Project Planning & Documentation",
    },
    {
      name: "Windsurf",
      icon: "/lovable-uploads/download (1).png",
      description: "AI-Assisted Development",
    },
    {
      name: "Lovable",
      icon: "/lovable-uploads/65e23c88-75a5-4f21-9be1-e74049cda5af.png",
      description: "Case Study Creation",
    },
  ];

  const scrollToSection = (sectionIndex: number) => {
    document.querySelector(`[data-section="${sectionIndex}"]`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const downloadCaseStudy = () => {
    // Show loading state
    const downloadButton = document.querySelector(
      ".download-button"
    ) as HTMLButtonElement;
    const originalButtonContent = downloadButton?.innerHTML;

    if (downloadButton) {
      downloadButton.disabled = true;
      downloadButton.innerHTML = "Preparing PDF...";
    }

    // Small delay to ensure UI updates
    setTimeout(() => {
      try {
        // Open print dialog
        window.print();
      } catch (error) {
        console.error("Error opening print dialog:", error);
        // Fallback to simple text download
        const caseStudyContent = `EAT SIP REPEAT - PRODUCT CASE STUDY\n\nA Case Study: Solving Recipe Overwhelm with AI-Curated Seasonal Menus`;
        const blob = new Blob([caseStudyContent], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Eat-Sip-Repeat-Case-Study.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } finally {
        // Restore button state
        if (downloadButton && originalButtonContent) {
          downloadButton.disabled = false;
          downloadButton.innerHTML = originalButtonContent;
        }
      }
    }, 100);
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/polinakyrylova/", "_blank");
  };

  const openPortfolio = () => {
    window.open("https://polina-kyrylova-portfolio.lovable.app/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-cream-50">
      {/* Modern Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-offwhite z-50 shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <img
              src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png"
              alt="Eat Sip Repeat"
              className="w-12 h-12"
            />
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Problem", section: 1 },
                { name: "Solution", section: 2 },
                { name: "Toolkit", section: 2.5 },
                { name: "Process", section: 3 },
                { name: "Impact", section: 4 },
                { name: "Next Steps", section: 5 },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`text-base font-semibold text-charcoal px-2 py-1 transition-all duration-200 ${
                    activeSection === item.section
                      ? 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-burntsienna after:rounded-full'
                      : "hover:text-burntsienna/80"
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
      <section
        className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden hero"
        style={{
          padding: "120px 1rem 80px",
          minHeight: "auto",
        }}
        data-section="0"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Subtle organic shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#D85A3F"
                d="M37.4,-66.4C49.3,-52.9,60.3,-42.3,71.8,-29.2C83.4,-16.1,95.5,-0.6,96.5,16.1C97.5,32.9,87.5,50.9,72.4,61.3C57.3,71.7,37.1,74.5,18.5,80.9C-0.1,87.3,-16.1,97.4,-28.7,93.6C-41.3,89.8,-50.4,72.2,-62.5,55.3C-74.7,38.5,-89.8,22.5,-94.6,3.2C-99.4,-16.2,-93.8,-38.9,-79.5,-52.8C-65.2,-66.7,-42.2,-71.9,-23.8,-66.8C-5.4,-61.8,8.4,-46.5,18.3,-35.6C28.1,-24.7,34,-18.2,37.4,-11.6C40.8,-5,41.7,1.7,45.4,12.8C49,23.9,55.5,39.4,53.4,49.2C51.2,59,40.5,63.1,31.3,65.2C22.1,67.3,14.4,67.4,4.3,60.3C-5.9,53.2,-18.6,38.9,-30.5,30.2C-42.4,21.5,-53.5,18.5,-60.4,11.3C-67.3,4.1,-70.1,-7.4,-64.8,-13.8C-59.5,-20.3,-46.1,-21.8,-39.1,-31.8C-32.1,-41.8,-31.5,-60.4,-24.1,-76.4C-16.7,-92.5,-2.5,-106,7.6,-112.7C17.7,-119.4,25.5,-119.2,37.4,-66.4Z"
                transform="translate(250 250)"
              />
            </svg>
          </div>
        </div>

        <div
          className={`text-center max-w-6xl mx-auto w-full transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-[84px] font-bold text-charcoal mb-6 leading-tight font-['Druk_Wide_Bold']">
            Eat Sip Repeat
          </h1>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-normal">
            A Case Study: Solving Recipe Overwhelm with AI-Curated Seasonal
            Menus
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={downloadCaseStudy}
              className="download-button bg-burntsienna hover:bg-[#e06b57] text-white px-8 py-3 rounded-md transition-colors duration-200 group"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              Download Case Study
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={openPortfolio}
              className="border-[1.5px] border-forest text-forest hover:bg-forest/10 px-8 py-3 rounded-md transition-colors duration-200 group"
            >
              <ExternalLink className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              View My Portfolio
            </Button>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/assets/wave-divider.svg')] bg-cover bg-no-repeat bg-center"></div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-6 bg-offwhite" data-section="1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-burntsienna rounded-2xl mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-charcoal mb-6">
              The Problem
            </h2>
            <div className="w-24 h-1 bg-burntsienna mx-auto mb-8 rounded-full"></div>
          </div>

          <Card className="relative overflow-hidden bg-white border-0 shadow-2xl rounded-3xl mb-16">
            <div className="relative p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Quote className="h-16 w-16 text-burntsienna mb-8" />
                  <blockquote className="text-2xl lg:text-3xl font-light text-charcoal leading-relaxed mb-8 italic">
                    "I love discovering new recipes on social media, but by
                    dinner time I'd either forgotten half of them, or felt
                    overwhelmed by choices and inability to combine them into a
                    cohesive menu that would work"
                  </blockquote>
                  <cite className="text-lg text-slate font-medium">
                    — Interview Participant
                  </cite>
                </div>

                <div className="space-y-8">
                  <div className="bg-offwhite p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-forest rounded-2xl flex items-center justify-center mr-6">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">
                        Recipe Discovery Gap
                      </h3>
                    </div>
                    <p className="text-slate text-lg">
                      Users save 10-15 recipes weekly but use less than 2
                    </p>
                  </div>

                  <div className="bg-offwhite p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-burntsienna rounded-2xl flex items-center justify-center mr-6">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">
                        Decision Fatigue
                      </h3>
                    </div>
                    <p className="text-slate text-lg">
                      85% report feeling overwhelmed when planning meals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Market Research Section */}
          <Card className="relative overflow-hidden bg-white border-0 shadow-2xl rounded-3xl">
            <div className="relative p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-charcoal mb-8 text-center">
                Market Research Analysis
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-forest rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">
                    7M+ Users
                  </h4>
                  <p className="text-slate">
                    Mealime has 7+ million users seeking meal planning solutions
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-burntsienna rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">
                    12.9% CAGR
                  </h4>
                  <p className="text-slate">
                    Meal planning app market growing rapidly to $223M by 2031
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-forest/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">
                    Decision Fatigue
                  </h4>
                  <p className="text-slate">
                    Modern consumers feel "inundated with choices" in meal
                    planning
                  </p>
                </div>
              </div>

              <div className="bg-offwhite p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-bold text-charcoal mb-4">
                  Key Market Insights
                </h4>
                <ul className="space-y-3 text-slate">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-burntsienna mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Strong demand exists</strong> for solutions that
                      simplify "What's for dinner?" decisions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-burntsienna mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Gap in market:</strong> No major app dedicated to
                      curated multi-course seasonal dinner menus
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-burntsienna mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Monetization proven:</strong> Users pay $3-5/month
                      for meal planning convenience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-burntsienna mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Seasonal content trending:</strong> Guardian Feast
                      and similar apps show demand for curated seasonal recipes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-offwhite" data-section="2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-burntsienna rounded-2xl mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              The Solution
            </h2>
            <div className="w-24 h-1 bg-burntsienna mx-auto mb-12 rounded-full"></div>
          </div>

          <Card className="relative overflow-hidden bg-white border-0 shadow-2xl rounded-3xl max-w-4xl mx-auto">
            <div className="relative p-12 lg:p-16 text-center">
              <img
                src="/lovable-uploads/36267982-a5c3-40f8-92b7-fad86a147f86.png"
                alt="Eat Sip Repeat App"
                className="w-32 h-32 mx-auto mb-8 drop-shadow-lg"
              />
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                An AI-powered mobile app that transforms recipe discovery into
                curated seasonal dinner experiences.
              </p>
              <div className="mt-8">
                <a
                  href="https://apps.apple.com/app/eat-sip-repeat/id6746393318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  <span>Download on the</span>
                  <span className="ml-2 font-bold">App Store</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-24 px-6 bg-offwhite" data-section="2.5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-burntsienna rounded-2xl mb-6 shadow-lg">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-charcoal mb-6">
              Toolkit
            </h2>
            <div className="w-24 h-1 bg-burntsienna mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="flex justify-center px-4 mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl w-full">
              {tools.map((tool) => (
                <div key={tool.name} className="group relative bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-burntsienna/30 hover:-translate-y-1 flex flex-col items-center justify-center aspect-square">
                  <div className="w-16 h-16 flex items-center justify-center mb-3 p-2">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-full h-full object-contain max-w-[80%] max-h-[80%]"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = document.createElement("div");
                        fallback.className = "text-2xl text-charcoal";
                        fallback.textContent = tool.name.charAt(0);
                        target.parentNode?.insertBefore(
                          fallback,
                          target.nextSibling
                        );
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate text-center">
                    {tool.name}
                  </span>
                  <span className="text-xs text-slate/70 text-center mt-1">
                    {tool.description}
                  </span>
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-burntsienna/20 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Vibe-Coding Journey Description */}
          <Card className="relative overflow-hidden bg-white border-0 shadow-xl rounded-3xl max-w-4xl mx-auto">
            <div className="relative p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  The Vibe-Coding Journey: From Idea to Reality
                </h3>
                <div className="w-16 h-0.5 bg-burntsienna mx-auto rounded-full"></div>
              </div>
              
              <div className="prose prose-slate max-w-none text-center">
                <p className="text-lg text-slate leading-relaxed mb-6">
                  What started as a simple idea floating around in my head – <em>"What if there was an app that just told you what to cook for dinner?"</em> – evolved into a comprehensive product through the power of AI-assisted development and thoughtful prompting.
                </p>
                
                <p className="text-lg text-slate leading-relaxed mb-6">
                  The entire journey was orchestrated like assembling IKEA furniture, but instead of cryptic diagrams and allen keys, I had AI tools and strategic prompts. <strong>ChatGPT</strong> became my research partner, helping me validate market demand and explore user pain points through structured analysis. Every insight was carefully documented and organized in <strong>Notion</strong>, creating a detailed project roadmap with clear deliverables and milestones.
                </p>
                
                <p className="text-lg text-slate leading-relaxed mb-6">
                  The visual identity came to life in <strong>Figma</strong>, where I prototyped user flows and designed a cohesive brand system that would feel both approachable and sophisticated. Each screen was thoughtfully crafted to solve the core problem: decision fatigue in meal planning.
                </p>
                
                <p className="text-lg text-slate leading-relaxed mb-6">
                  The magic happened in <strong>Windsurf</strong>, where the majority of the iOS app was coded through intelligent collaboration between human creativity and AI capability. SwiftUI components, data models, and user interfaces emerged through iterative prompting and refinement – proving that great products can be built when you know how to communicate effectively with AI.
                </p>
                
                <p className="text-lg text-slate leading-relaxed">
                  And finally, this very case study was assembled in <strong>Lovable</strong>, transforming technical documentation into a compelling narrative that showcases not just the final product, but the thoughtful process behind it. Each tool played its part in a symphony of AI-assisted creation, demonstrating that the future of product development isn't about replacing human creativity – it's about amplifying it.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Process/My Approach */}
      <section className="py-24 px-6 bg-offwhite" data-section="3">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-forest rounded-2xl mb-6">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-charcoal mb-6">
              My Approach
            </h2>
            <div className="w-24 h-1 bg-forest mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card
                    key={index}
                    className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white border-0 shadow-xl rounded-3xl"
                  >
                    <div className="p-8">
                      <div className="grid lg:grid-cols-3 gap-10 items-center">
                        <div className="flex items-center space-x-6">
                          <div
                            className={`w-20 h-20 ${
                              index % 2 === 0 ? "bg-forest" : "bg-burntsienna"
                            } rounded-3xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <step.icon className="h-10 w-10" />
                          </div>
                          <div>
                            <Badge className="bg-offwhite text-charcoal mb-3 px-3 py-1 font-medium border border-slate-200">
                              {step.phase}
                            </Badge>
                            <h3 className="text-2xl font-bold text-charcoal">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <p className="text-slate font-medium">
                            {step.description}
                          </p>
                          <p className="text-slate/80">{step.details}</p>
                        </div>

                        <div className="text-center lg:text-right">
                          <div className="bg-offwhite p-6 rounded-2xl border border-slate-200">
                            <p className="text-sm text-slate mb-2 font-medium">
                              Key Metric
                            </p>
                            <p className="text-lg font-bold text-charcoal">
                              {step.metric}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute left-0 top-0 bottom-0 w-2 ${
                          index % 2 === 0 ? "bg-forest" : "bg-burntsienna"
                        } transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 rounded-r-full`}
                      ></div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-charcoal">
                      {step.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-6">
                    <p className="text-slate text-lg">{step.modalContent}</p>
                    <div className="mt-8 p-6 bg-offwhite rounded-2xl border border-slate-200">
                      <p className="text-sm text-slate font-medium mb-2">
                        Process Details
                      </p>
                      <p className="text-charcoal">{step.details}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 px-6 bg-offwhite/50" data-section="4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-forest rounded-2xl mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-charcoal mb-6">
              Results & Impact
            </h2>
            <div className="w-24 h-1 bg-forest mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="relative overflow-hidden bg-white border-0 shadow-xl rounded-3xl">
              <div className="relative p-10 text-center">
                <div className="w-20 h-20 bg-burntsienna rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-charcoal mb-3">85%</h3>
                <p className="text-slate font-medium">
                  Prototype Usability Score
                </p>
              </div>
            </Card>

            <Card className="relative overflow-hidden bg-white border-0 shadow-xl rounded-3xl">
              <div className="relative p-10 text-center">
                <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-charcoal mb-3">67%</h3>
                <p className="text-slate font-medium">
                  Time Saved on Meal Planning
                </p>
              </div>
            </Card>

            <Card className="relative overflow-hidden bg-white border-0 shadow-xl rounded-3xl">
              <div className="relative p-10 text-center">
                <div className="w-20 h-20 bg-burntsienna rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-charcoal mb-3">92%</h3>
                <p className="text-slate font-medium">User Satisfaction Rate</p>
              </div>
            </Card>
          </div>

          <Card className="relative overflow-hidden bg-white border-0 shadow-2xl rounded-3xl">
            <div className="relative p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-charcoal mb-12 text-center">
                Key Achievements
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* User Interview Insights */}
                <Card className="p-6 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-forest" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-charcoal mb-3">
                        User Interview Insights
                      </h4>
                      <p className="text-slate italic mb-4">
                        "I love the idea of a single tap to get a full, seasonal
                        dinner menu – no more bouncing between a dozen
                        bookmarks."
                      </p>
                      <ul className="space-y-2 text-slate">
                        <li className="flex items-start">
                          <span className="text-forest mr-2">•</span>
                          <span>
                            18 home cooks interviewed: 90% said they save
                            multiple recipes but struggle to assemble them into
                            a cohesive menu.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-forest mr-2">•</span>
                          <span>
                            75% expressed a strong desire to "save" and revisit
                            entire menus, not just individual dishes.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Early Tester Feedback */}
                <Card className="p-6 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-burntsienna/10 rounded-xl flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-burntsienna" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-charcoal mb-3">
                        Early Tester Feedback
                      </h4>
                      <p className="text-slate italic mb-4">
                        "Being able to bookmark a whole menu gave me confidence
                        to try new recipes."
                      </p>
                      <ul className="space-y-2 text-slate">
                        <li className="flex items-start">
                          <span className="text-burntsienna mr-2">•</span>
                          <span>
                            5 beta testers: 100% used the "Save Menu" button to
                            revisit curated seasonal menus.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-burntsienna mr-2">•</span>
                          <span>
                            Every tester described the generator's picks as
                            "inspired" and "on-point" for what's in season.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* MVP Delivery Highlights */}
                <Card className="p-6 border border-slate-100 hover:shadow-md transition-shadow md:col-span-2">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-forest" />
                    </div>
                    <div className="w-full">
                      <h4 className="text-xl font-bold text-charcoal mb-4">
                        MVP Delivery Highlights
                      </h4>
                      <ul className="space-y-3 text-slate">
                        <li className="flex items-start">
                          <span className="text-forest mr-2">•</span>
                          <span>
                            AI-driven seasonal menu generator and recipe &
                            menu-saving flows shipped in just 4 weeks.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-forest mr-2">•</span>
                          <span>
                            All UI mockups (Figma) and SwiftUI code were
                            prototyped, refined, and produced via LLM prompts,
                            no manual design hand-offs.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-slate-600 italic">
                  Based on interviews and tester requests, next up were
                  identified and are currently in progress.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-24 px-6 bg-offwhite" data-section="5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-burntsienna rounded-2xl mb-6">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-charcoal mb-6">
              What's Next
            </h2>
            <div className="w-24 h-1 bg-burntsienna mx-auto mb-12 rounded-full"></div>

            <h3 className="text-3xl font-bold mb-8 text-charcoal text-center">
              Future Features in Development
            </h3>

            <div className="flex justify-center">
              <ul className="space-y-6 text-lg text-slate max-w-2xl w-full text-center">
                <li className="flex justify-center items-start">
                  <Award className="h-5 w-5 text-burntsienna mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Hero-ingredient challenges for adventurous cooking
                  </span>
                </li>
                <li className="flex justify-center items-start">
                  <BookOpen className="h-5 w-5 text-burntsienna mr-3 mt-1 flex-shrink-0" />
                  <span>Enhanced recipe library with smart categorization</span>
                </li>
                <li className="flex justify-center items-start">
                  <Download className="h-5 w-5 text-burntsienna mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Direct import from Instagram, TikTok, and food blogs
                  </span>
                </li>
                <li className="flex justify-center items-start">
                  <Clock className="h-5 w-5 text-burntsienna mr-3 mt-1 flex-shrink-0" />
                  <span>Timer and meal-prep functionality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="py-24 px-6 bg-offwhite" data-section="6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-forest rounded-2xl mb-6 mx-auto">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-forest mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl mb-12 text-slate-600 font-light leading-relaxed">
              Curious how I'd apply this product thinking at your company? I'd
              love to discuss how systematic user research and iterative design
              can drive meaningful outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-charcoal border-charcoal/30 hover:bg-charcoal/5 hover:border-charcoal/60 hover:text-charcoal px-8 py-3 transition-all duration-200"
                onClick={openLinkedIn}
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-white font-light mb-2">
            &copy; 2025 Eat Sip Repeat • Built by Polina Kyrylova
          </p>
          <p className="text-sm text-slate-300 font-light">
            Case study designed for portfolio demonstration
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
