import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Smartphone,
  CheckCircle,
  Users,
  Target,
  Download,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Index = () => {
  const [activeInsight, setActiveInsight] = useState(0);

  const insights = [
    {
      title: "Mobile-First Engagement",
      description:
        "Recognizing the shift towards mobile usage, the design prioritizes a seamless experience on smartphones, ensuring accessibility and engagement for users on the go.",
      icon: <Smartphone size={48} className="text-coral-500 mb-4" />,
    },
    {
      title: "AI-Powered Personalization",
      description:
        "Leveraging AI technologies to tailor content and recommendations, creating a personalized user experience that enhances satisfaction and retention.",
      icon: <CheckCircle size={48} className="text-forest-500 mb-4" />,
    },
    {
      title: "Community-Centric Design",
      description:
        "Building a sense of community through interactive features and social sharing, fostering user loyalty and advocacy.",
      icon: <Users size={48} className="text-sand-500 mb-4" />,
    },
    {
      title: "Data-Driven Optimization",
      description:
        "Employing analytics to track user behavior and optimize the platform's performance, ensuring continuous improvement and alignment with user needs.",
      icon: <Target size={48} className="text-cream-500 mb-4" />,
    },
  ];

  const challenges = [
    "Balancing personalization with user privacy concerns.",
    "Ensuring accessibility for users with varying levels of tech literacy.",
    "Maintaining user engagement in a competitive digital landscape.",
    "Adapting to evolving AI technologies and user expectations.",
  ];

  const downloadCaseStudy = () => {
    html2canvas(document.body).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("case-study.pdf");
    });
  };

  const toolkit = [
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

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Navigation */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            Lovable
          </a>
          <div className="space-x-6">
            <a href="#problem" className="">
              Problem
            </a>
            <a href="#solution" className="">
              Solution
            </a>
            <a href="#insights" className="">
              Insights
            </a>
            <a href="#toolkit" className="">
              Toolkit
            </a>
            <Button onClick={downloadCaseStudy} size="sm">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-8 text-shadow">
            Effortless Dinner Planning with AI
          </h1>
          <p className="text-xl text-slate max-w-2xl mx-auto mb-12">
            Discover how AI-driven solutions can revolutionize meal planning,
            making it simple, efficient, and enjoyable for everyone.
          </p>
          <Button size="lg">Learn More</Button>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-h1 text-charcoal mb-6">
                The Problem: Overwhelmed by Dinner Decisions?
              </h2>
              <p className="text-body text-slate mb-8">
                In today's fast-paced world, deciding what to have for dinner
                can be a daily struggle. From endless scrolling through
                recipes to last-minute grocery runs, the process is often
                stressful and time-consuming.
              </p>
              <ul className="list-disc list-inside text-body text-slate">
                <li>Time wasted on meal planning</li>
                <li>Difficulty finding recipes that match dietary needs</li>
                <li>Grocery shopping inefficiencies</li>
                <li>Lack of inspiration and variety</li>
              </ul>
            </div>
            <div>
              <img
                src="/assets/problem-image.jpg"
                alt="Problem"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-sand-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/assets/solution-image.jpg"
                alt="Solution"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-h1 text-charcoal mb-6">
                The Solution: AI-Powered Meal Planning
              </h2>
              <p className="text-body text-slate mb-8">
                Our AI-driven platform offers a seamless solution to simplify
                dinner planning. By understanding your preferences, dietary
                needs, and available ingredients, we generate personalized meal
                recommendations that eliminate the guesswork.
              </p>
              <ul className="list-disc list-inside text-body text-slate">
                <li>Personalized meal recommendations</li>
                <li>Automated grocery list generation</li>
                <li>Integration with local grocery stores</li>
                <li>Time-saving and stress-free experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section id="insights" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-h1 text-charcoal mb-6">Key Insights</h2>
            <p className="text-body text-slate max-w-3xl mx-auto">
              Key insights that drove the design and development of this
              project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                  activeInsight === index ? "bg-coral-50" : "bg-white"
                }`}
                onClick={() => setActiveInsight(index)}
              >
                {insight.icon}
                <h3 className="font-semibold text-charcoal mb-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-slate">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-h1 text-charcoal mb-6">User Journey</h2>
            <p className="text-body text-slate max-w-3xl mx-auto">
              A step-by-step look at how users interact with the AI Dinner
              Planner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-h2 text-charcoal mb-4">Step 1: Sign Up</h3>
              <p className="text-body text-slate">
                Users create an account and set their dietary preferences.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-h2 text-charcoal mb-4">
                Step 2: Get Recommendations
              </h3>
              <p className="text-body text-slate">
                The AI generates personalized meal suggestions based on user
                input.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-h2 text-charcoal mb-4">Step 3: Enjoy!</h3>
              <p className="text-body text-slate">
                Users prepare and enjoy their AI-planned meals, saving time and
                reducing stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-h1 text-charcoal mb-6">Challenges</h2>
            <p className="text-body text-slate max-w-3xl mx-auto">
              The challenges faced during the development process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md transition-all duration-300"
              >
                <p className="text-body text-slate">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-20 bg-gradient-to-r from-peach-start to-peach-end">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-h1 text-charcoal mb-6">Toolkit</h2>
            <p className="text-body text-slate max-w-3xl mx-auto">
              The essential tools that powered this project from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto mb-12">
            {toolkit.map((tool, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-12 h-12 mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-charcoal mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate">{tool.description}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-charcoal">
                      {tool.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-6">
                    <p className="text-slate text-lg">
                      {tool.description} - Details about how this tool was used in the project workflow.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-h2 text-charcoal mb-6">The Vibe-Coding Journey</h3>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-body text-slate leading-relaxed mb-6">
                This entire project came to life through what I like to call "vibe-coding" – 
                a creative process powered entirely by prompting and AI collaboration. It all 
                started with a simple idea brewing in my head: what if dinner planning could 
                be effortless and delightful?
              </p>
              <p className="text-body text-slate leading-relaxed mb-6">
                That spark was first nurtured and evaluated through deep conversations with 
                <strong> ChatGPT</strong>, which helped me research market demand, analyze competitors, 
                and validate the concept. Every insight and finding was then meticulously 
                documented and organized into a comprehensive project plan using <strong>Notion</strong> – 
                creating a roadmap with clear deliverables and milestones.
              </p>
              <p className="text-body text-slate leading-relaxed mb-6">
                The visual identity took shape in <strong>Figma</strong>, where wireframes evolved 
                into polished designs, color palettes were refined, and user flows were mapped 
                out with precision. The majority of the actual development magic happened with 
                <strong> Windsurf</strong>, an AI-powered coding assistant that transformed design 
                concepts into functional React components through natural language conversations.
              </p>
              <p className="text-body text-slate leading-relaxed">
                Finally, this entire case study was assembled and refined using <strong>Lovable</strong>, 
                bringing together all the pieces into this cohesive narrative. The beauty of this 
                approach? Every step was achieved through prompting – like assembling IKEA furniture, 
                but with words instead of allen keys, and AI as your incredibly patient assistant 
                who never judges your late-night creative bursts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-h1 text-charcoal mb-6">Next Steps</h2>
          <p className="text-body text-slate max-w-3xl mx-auto mb-12">
            Ready to revolutionize your dinner planning? Here's how to get
            started
          </p>
          <Button size="lg">Explore the Platform</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Transform Your Dinner Routine Today!
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Join thousands of users who are already enjoying stress-free meal
            planning with our AI-powered platform.
          </p>
          <Button variant="secondary" size="lg">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; 2024 AI Dinner Planner. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-coral-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-coral-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
