import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  FileText, 
  ChevronRight, 
  Menu, 
  X,
  Target,
  Rocket,
  Users,
  Search,
  BarChart3,
  Megaphone,
  Layout,
  ArrowUpRight,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Project {
  title: string;
  description: string;
  overview: string;
  whatIDid: string[];
  keyLearnings: string[];
  toolsUsed: string[];
  tags: string[];
  link: string;
  pdf: string;
  image: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  image: string;
}

interface Skill {
  name: string;
  category: 'Marketing' | 'Business' | 'Tools';
  icon: React.ReactNode;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "AI Integration in Business Operations",
    description: "I conducted a comprehensive research study on AI's role in reshaping business operations for ASBIC 2025.",
    overview: "I conducted this research study to understand how artificial intelligence is reshaping business operations, supply chains, and decision-making. This project was presented at ASBIC 2025 and involved an extensive literature review of academic journals, case studies, and industry reports.",
    whatIDid: [
      "Conducted an extensive literature review of academic journals and industry reports (2015-2025)",
      "Analyzed the impact of AI on predictive analytics, supply chain optimization, and personalized marketing",
      "Identified key challenges such as data privacy, ethical implications, and the need for employee training",
      "Developed a conceptual framework integrating AI adoption metrics with business operations decision systems",
      "Evaluated organizational readiness across technological, organizational, and human dimensions"
    ],
    keyLearnings: [
      "Deep understanding of how AI improves productivity, cost savings, and competitive advantage",
      "Insights into the ethical and interpretability challenges of AI deployment",
      "Knowledge of theoretical models like TAM, TOE, and Resource-Based View",
      "Understanding the importance of cultural adaptation and leadership commitment for successful AI integration"
    ],
    toolsUsed: ["Research", "Analytical Thinking", "Strategic Planning", "Literature Review"],
    tags: ["AI", "Business Operations", "Research", "ASBIC 2025"],
    link: "#",
    pdf: "https://drive.google.com/drive/folders/1wPWjefLAZAd2kLViYGi2RfnMzj9AEkQ6",
    image: "https://i.postimg.cc/PJjFD6jz/image.png"
  },
  {
    title: "PMC Bank Fraud Case Analysis",
    description: "This project was developed as part of my participation in CaseCraft 2.0, a case analysis competition organized by the School of Business, Noida. It focuses on analyzing the PMC Bank fraud case, highlighting financial irregularities, governance failure, and risk management issues.",
    overview: "This project was developed as part of my participation in CaseCraft 2.0, a case analysis competition organized by the School of Business, Noida. It focuses on analyzing the PMC Bank fraud case, highlighting financial irregularities, governance failure, and risk management issues. The study helped me gain practical insights into banking fraud mechanisms, corporate governance, and financial transparency.",
    whatIDid: [
      "Analyzed financial irregularities and governance failure in the PMC Bank case",
      "Studied risk management issues and their impact on stakeholders",
      "Investigated banking fraud mechanisms and corporate governance lapses"
    ],
    keyLearnings: [
      "Understanding of banking fraud mechanisms",
      "Importance of corporate governance",
      "Risk management practices",
      "Financial transparency issues"
    ],
    toolsUsed: ["Analytical Thinking", "Financial Analysis", "Research Skills", "Case Study Approach", "Strategic Evaluation"],
    tags: ["Finance", "Case Study", "Analysis"],
    link: "#",
    pdf: "https://drive.google.com/file/d/1DRCfEo0zWW5ZMuyLajeVexiexJ_eyOPC/view?usp=drivesdk",
    image: "https://i.postimg.cc/LXdydyn4/image.png"
  },
  {
    title: "Divinity India Business Case Study",
    description: "I conducted a detailed analysis of Diviniti's journey since 1956, focusing on its innovation, prestige, and post-pandemic transformation.",
    overview: "I worked on this comprehensive case study to analyze how Diviniti transformed the gifting industry through innovation and prestige. Founded in 1956, Diviniti has grown into India's most trusted brand for corporate, spiritual, and personal gifting. My research explored its core business areas, success factors, and strategic adaptation to global challenges.",
    whatIDid: [
      "Analyzed core business areas: Corporate & Government Gifting and Luxury Automobile Accessories",
      "Researched the impact of the COVID-19 pandemic on retail sales and supply chain operations",
      "Evaluated the strategic shift to domestic manufacturing under the 'Make in India' initiative",
      "Studied high-profile collaborations, including designing the Bharat Ratna with Kolkata Mint",
      "Investigated strategies for maintaining brand identity against counterfeit products and market competition",
      "Conducted an interview-based analysis to gather internal insights on the company's journey"
    ],
    keyLearnings: [
      "Understanding the power of strong government partnerships in building brand prestige",
      "Insights into the importance of self-reliance and domestic manufacturing for supply chain resilience",
      "Knowledge of how continuous innovation and Swiss technology integration maintain a competitive edge",
      "Improved ability to conduct real-world business scenario analysis and strategic problem-solving"
    ],
    toolsUsed: ["Case Analysis", "Research", "Strategic Thinking", "Interviewing", "Market Analysis"],
    tags: ["Marketing", "Strategy", "Case Study", "Innovation"],
    link: "#",
    pdf: "https://drive.google.com/drive/folders/1iojFFR9C9Jg1N4Ok6zgy7t4JA6dbY2kS",
    image: "https://i.postimg.cc/6pyz8sZw/image.png"
  },
  {
    title: "Union Budget 2026 Analysis",
    description: "I analyzed the Union Budget 2026 and its impact on the economy in an IIM competition.",
    overview: "I participated in a competition organized by IIM, where I analyzed the Union Budget 2026 and its impact on the economy and business environment.",
    whatIDid: [
      "Studied key highlights of the budget",
      "Analyzed impact on different sectors",
      "Interpreted economic policies and decisions"
    ],
    keyLearnings: [
      "Better understanding of economic policies",
      "Improved analytical and presentation skills",
      "Insights into government budgeting and its implications"
    ],
    toolsUsed: ["Analysis", "Research", "Economic Understanding"],
    tags: ["Economics", "Policy", "Analysis"],
    link: "#",
    pdf: "https://drive.google.com/file/d/16Em7Snqv7R6dUZU5QRVm_ZhRpq55dFYP/view?usp=drivesdk",
    image: "https://i.postimg.cc/FFpxGFgh/image.png"
  },
  {
    title: "Reliance Endoscopy Strategy",
    description: "I analyzed the business strategy and market positioning of Reliance Endoscopy.",
    overview: "This was a class project where I analyzed the business strategy of Reliance Endoscopy and its market positioning.",
    whatIDid: [
      "Studied business model and strategy",
      "Analyzed market approach and growth potential",
      "Evaluated competitive positioning"
    ],
    keyLearnings: [
      "Understanding of strategic planning",
      "Improved business analysis skills",
      "Insights into healthcare/business integration"
    ],
    toolsUsed: ["Strategy Analysis", "Research"],
    tags: ["Corporate Strategy", "Analysis", "Business"],
    link: "#",
    pdf: "https://drive.google.com/file/d/1sLEX46FLJwVUK7fSgR8HKw9UmgPg8DDy/view?usp=drivesdk",
    image: "https://i.postimg.cc/26wnHTWZ/image.png"
  },
  {
    title: "AmoraNest",
    description: "Create, Curate, Celebrate Your Home. An AR-based home decor app concept.",
    overview: "AmoraNest is an AR-based home decor application concept developed for an Ideathon at Asian School of Business. It allows users to visualize furniture and decor in their own space before making a purchase, bridging the gap between imagination and reality.",
    whatIDid: [
      "Built the concept and value proposition",
      "Identified target audience and use case",
      "Designed the basic business idea and model"
    ],
    keyLearnings: [
      "Understanding of startup development",
      "Improved creativity and problem-solving",
      "Insights into AR-based innovation"
    ],
    toolsUsed: ["Ideation", "Creativity", "Strategic Thinking"],
    tags: ["Startup", "AR", "Entrepreneurship"],
    link: "#",
    pdf: "https://drive.google.com/file/d/1ChtwYusHWsKlijCCw7GG_bk6Fq3OwSVp/view?usp=drivesdk",
    image: "https://i.postimg.cc/L8v1vkX2/Screenshot-2026-04-04-053927.png"
  },
  {
    title: "Help A Child Reach 5 – Campaign Analysis",
    description: "I analyzed the 'Help A Child Reach 5' campaign, focusing on its marketing strategy and social impact.",
    overview: "This project involved a detailed analysis of the 'Help A Child Reach 5' campaign. I explored its marketing objectives, target audience engagement, and the overall effectiveness of its social messaging.",
    whatIDid: [
      "Analyzed campaign marketing strategy",
      "Evaluated social impact and engagement",
      "Studied brand positioning and messaging"
    ],
    keyLearnings: [
      "Understanding of social marketing",
      "Insights into campaign effectiveness",
      "Improved analytical skills"
    ],
    toolsUsed: ["Analysis", "Research"],
    tags: ["Marketing", "Campaign Analysis"],
    link: "#",
    pdf: "https://drive.google.com/file/d/14EmV57pXhG4mZPl6GSuU5_M3x1R9Z8hO/view?usp=drivesdk",
    image: "https://i.postimg.cc/4dBhvyCq/image.png"
  }
];

const SKILLS: Skill[] = [
  { name: "Social Media Marketing", category: "Marketing", icon: <Megaphone className="w-5 h-5" /> },
  { name: "SEO (Basics)", category: "Marketing", icon: <Search className="w-5 h-5" /> },
  { name: "Content Creation", category: "Marketing", icon: <Layout className="w-5 h-5" /> },
  { name: "Digital Marketing Fundamentals", category: "Marketing", icon: <Target className="w-5 h-5" /> },
  { name: "Market Research", category: "Business", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Consumer Behaviour Analysis", category: "Business", icon: <Users className="w-5 h-5" /> },
  { name: "Business Strategy", category: "Business", icon: <Rocket className="w-5 h-5" /> },
  { name: "MS Excel", category: "Tools", icon: <FileText className="w-5 h-5" /> },
  { name: "Communication", category: "Tools", icon: <Users className="w-5 h-5" /> },
  { name: "Team Collaboration", category: "Tools", icon: <Users className="w-5 h-5" /> },
  { name: "Event Coordination", category: "Tools", icon: <Award className="w-5 h-5" /> }
];

const ACHIEVEMENTS: Achievement[] = [
  { 
    title: "Tug of War Winner – Sportify 4.0", 
    description: "Organized by Asian School of Business, Noida.", 
    date: "2024", 
    icon: <Award />,
    image: "https://i.postimg.cc/bYgfZ6pX/Whats-App-Image-2026-04-18-at-3-16-43-PM.jpg"
  },
  { 
    title: "Startup Idea of the Year", 
    description: "I was a Top 6 Finalist for the MindEase Startup Idea Competition.", 
    date: "2024", 
    icon: <Rocket />,
    image: "https://i.postimg.cc/pVJnJ9ZW/Whats-App-Image-2026-04-04-at-12-40-58-AM.jpg"
  },
  { 
    title: "Student of the Month", 
    description: "I was recognized for academic excellence and leadership in Feb 2026.", 
    date: "Feb 2026", 
    icon: <Award />,
    image: "https://i.postimg.cc/brg8Sf1f/stom2.jpg"
  },
  { 
    title: "IIT Bombay NEC", 
    description: "I participated in the National Entrepreneurship Challenge by IIT Bombay.", 
    date: "2025", 
    icon: <Target />,
    image: "https://i.postimg.cc/bwTCXNp2/Whats-App-Image-2026-04-03-at-11-16-40-PM.jpg"
  },
  { 
    title: "Secretary – IIC × EDIC (in collaboration)", 
    description: "I lead innovation initiatives and coordinate events to foster entrepreneurial spirit.", 
    date: "Present", 
    icon: <Users />,
    image: "https://i.postimg.cc/FzctBMTN/IMG-20260412-WA0016.jpg"
  },
  { 
    title: "Page to Stage Competition", 
    description: "I was the Runner Up in the Nukkad Natak (Street Play) competition.", 
    date: "2025", 
    icon: <Award />,
    image: "https://i.postimg.cc/W3gjwkLQ/Whats-App-Image-2026-04-04-at-12-59-09-AM.jpg"
  }
];

const GALLERY = [
  {
    title: "Student of the Month",
    image: "https://i.postimg.cc/c4G8QRY2/stom1.jpg",
    category: "Academic"
  },
  {
    title: "IIT Bombay NEC Challenge",
    image: "https://i.postimg.cc/bwTCXNp2/Whats-App-Image-2026-04-03-at-11-16-40-PM.jpg",
    category: "Competition"
  },
  {
    title: "IIC Leadership",
    image: "https://i.postimg.cc/FzctBMTN/IMG-20260412-WA0016.jpg",
    category: "Leadership"
  },
  {
    title: "Student of the Month",
    image: "https://i.postimg.cc/brg8Sf1f/stom2.jpg",
    category: "Academic"
  },
  {
    title: "Voice of Mexico at MUN- UNHRC",
    image: "https://i.postimg.cc/MG1yk9yG/Screenshot-2026-04-03-231811.png",
    category: "Competition"
  },
  {
    title: "Page to Stage Competition",
    image: "https://i.postimg.cc/W3gjwkLQ/Whats-App-Image-2026-04-04-at-12-59-09-AM.jpg",
    category: "Competition"
  },
  {
    title: "ASBIC 2025 Research Paper Competition",
    image: "https://i.postimg.cc/R0bQLWL5/Whats-App-Image-2026-04-04-at-12-59-08-AM.jpg",
    category: "Academic"
  },
  {
    title: "Visited – United Nations Headquarters (Delhi)",
    image: "https://i.postimg.cc/XvGgFS1H/image.png",
    category: "Visit"
  },
  {
    title: "Industrial Visit – Haier",
    image: "https://i.postimg.cc/Wb5mHbQX/image.png",
    category: "Visit"
  },
  {
    title: "CaseCraft 1.0",
    image: "https://i.postimg.cc/DZc44xhC/image.png",
    category: "Competition"
  },
  {
    title: "Attended Workshop on Mental Health – IIT Delhi",
    image: "https://i.postimg.cc/DyPpyTR1/image.png",
    category: "Workshop"
  }
];

const CERTIFICATIONS = [
  "Advanced Techniques in Social Media Marketing – Reliance Foundation Skilling Academy",
  "Social Media Marketing – Reliance Foundation Skilling Academy",
  "Business Communications – HP Life",
  "Customer Relationship Management – HP Life",
  "AI IN DIGITAL MARKETING - IIDE-THE DIGITAL SCHOOL",
  "Essentials of English Communication – TIMESPRO",
  "Digital Marketing Fundamentals – IIDE – The Digital School",
  "AI Tools Workshop – be10x",
  "Prompt Engineering: How to Talk to the AIs – LinkedIn Learning",
  "How to Speak So Others Will Listen – Nano Tips with Lorraine K. Lee – LinkedIn Learning",
  "Five Digital Marketing Strategies to Drive Conversions – LinkedIn Learning"
];

const ADDITIONAL_ACTIVITIES = [
  "Participated in a Generative AI Webinar organized by IEEE EDS at Maharaja Agrasen Institute of Technology",
  "Manthan – IIM Trichy",
  "Questopia – IIM Kashipur",
  "Annual Quiz – IIM Trichy",
  "VaidyaRx Quiz",
  "Ecothon – Delhi University",
  "AI Marketing Workshop – MarkHub",
  "Blockchain Workshop – BlockseBlock",
  "Nerds AI Quest – VGI",
  "OpScape 2.0 – IIM Trichy",
  "FinMania – IIM Rohtak",
  "ArthNiti – IIM Lucknow",
  "Binary Brains – IIM Rohtak",
  "Financial Literacy Quiz – NISM",
  "Budget Quest – MY Bharat",
  "Product Management Workshop – Jobaaj"
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Academic Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-8",
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-6" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#" 
          className="text-3xl font-display font-black tracking-tighter flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white text-xl">M</div>
          <span className="hidden sm:block uppercase">Mukul<span className="text-orange-600">.</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name} 
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <motion.a 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://drive.google.com/file/d/1ZMlw8jnt2WNWr2XfH8J_4ybmpb6IsHoL/view?usp=drivesdk" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-orange-600 text-orange-400 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-orange-600 hover:text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]"
            >
              View Resume
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href="#contact" 
              className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-orange-600 hover:text-white transition-all"
            >
              Contact
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/5 overflow-hidden md:hidden"
          >
            <div className="p-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-4xl font-display font-black text-white hover:text-orange-600 transition-colors uppercase tracking-tighter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4">
                <a 
                  href="https://drive.google.com/file/d/1ZMlw8jnt2WNWr2XfH8J_4ybmpb6IsHoL/view?usp=drivesdk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-6 border border-orange-600 text-orange-400 text-center font-black uppercase tracking-widest rounded-2xl text-lg hover:bg-orange-600 hover:text-white transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View Resume
                </a>
                <a 
                  href="#contact" 
                  className="w-full py-6 bg-orange-600 text-white text-center font-black uppercase tracking-widest rounded-2xl text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="https://res.cloudinary.com/dxx3kytmw/video/upload/v1775990539/main_bxcbfo.mp4" type="video/mp4" />
      </video>
      
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 pointer-events-none">
        {/* Step 1: Mukul Ahuja (Stacked, Top-Left, Orange) - 0s to 2s */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            times: [0, 0.2, 0.8, 1],
            duration: 2,
            delay: 0
          }}
          className="absolute top-24 left-12 text-left"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black text-orange-600 leading-[0.9] uppercase tracking-tighter">
            Mukul<br />Ahuja
          </h2>
        </motion.div>

        {/* Step 2: BBA Batch (Left, White) - 2s to 4s */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            times: [0, 0.2, 0.8, 1],
            duration: 2,
            delay: 2
          }}
          className="absolute top-64 left-12 text-left"
        >
          <p className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
            BBA Batch<br />2024–2027
          </p>
        </motion.div>

        {/* Step 3: Tagline (Right, Light Grey) - 4s to 7s (3s duration) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            x: [20, 0, 0, -10]
          }}
          transition={{ 
            opacity: { times: [0, 0.15, 0.85, 1], duration: 3, delay: 4 },
            x: { times: [0, 0.15, 0.85, 1], duration: 3, delay: 4 }
          }}
          className="absolute top-1/2 right-12 -translate-y-1/2 text-right max-w-md md:max-w-xl"
        >
          <p className="text-2xl md:text-4xl font-display font-bold text-zinc-300 leading-tight uppercase tracking-tight">
            Crafting digital strategies that turn attention into action.
          </p>
        </motion.div>

        {/* Step 4: Location (Right, Soft Grey) - 7s to 9s */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            times: [0, 0.2, 0.8, 1],
            duration: 2,
            delay: 7
          }}
          className="absolute top-[65%] right-12 text-right"
        >
          <p className="text-2xl md:text-4xl font-display font-medium text-zinc-300 uppercase tracking-widest">
            Based in Delhi NCR
          </p>
        </motion.div>

        {/* Final Step: Mukul Ahuja (Lower Bottom, White, Permanent) - 9s+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9, duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center w-full px-6"
        >
          <h1 className="text-6xl md:text-[110px] font-display font-black leading-[0.8] tracking-tighter uppercase drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] text-[#EAEAEA]">
            Mukul<br />Ahuja
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 9.5, duration: 1.5 }}
            className="mt-8 text-sm md:text-xl font-semibold tracking-wide whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-zinc-400"
          >
            Crafting digital strategies that turn attention into action - Aspiring Digital Marketing Professional
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-16 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Profile Overview</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            ABOUT<br />
            <span className="text-white">ME</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-12 text-zinc-400 text-xl leading-relaxed">
              <p className="text-white font-display font-black text-4xl md:text-5xl leading-[1.1] mb-12 tracking-tighter uppercase">
                Driven by innovation and strategy, I transform complex insights into impactful business narratives.
              </p>
              <p>
                I’m a BBA student (2024–2027) at Asian School of Business, Noida, with a strong interest in marketing and digital marketing. I actively engage in research, case studies, competitions, and leadership roles, which help me develop strong analytical thinking and problem-solving skills.
              </p>
              <p>
                I have gained hands-on exposure to business strategy, consumer behavior, and market analysis through academic projects and national-level participation. With a proactive mindset and a continuous learning approach, I aim to build a strong foundation in marketing and apply my skills in real-world business environments.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { label: 'GPA', value: '70% + Academic Excellence', icon: <GraduationCap className="w-8 h-8" />, color: 'orange' },
              { label: 'Leadership', value: 'Secretary IIC', icon: <Users className="w-8 h-8" />, color: 'white' },
              { label: 'Projects', value: 'Research Works', icon: <Briefcase className="w-8 h-8" />, color: 'orange' },
              { label: 'Training', value: 'ASB × NIIT Certified', icon: <Award className="w-8 h-8" />, color: 'white' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 card-rounded bg-white/5 border border-white/10 hover:border-orange-600/50 transition-all group"
              >
                <div className={cn(
                  "mb-8 p-5 rounded-2xl w-fit transition-transform group-hover:scale-110",
                  item.color === 'orange' ? 'bg-orange-600 text-white' : 'bg-white/10 text-white'
                )}>
                  {item.icon}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">{item.label}</div>
                <div className="text-2xl font-display font-black text-white leading-tight uppercase tracking-tighter">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Secretary – IIC × EDIC (in collaboration)",
      org: "Institution Innovation Council (IIC)",
      desc: "I lead innovation initiatives and coordinate events to foster entrepreneurial spirit among students.",
      type: "Leadership",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      role: "Member",
      org: "Entrepreneurship Development and Incubation Center (EDIC)",
      desc: "I actively participate in startup workshops and business planning sessions.",
      type: "Leadership",
      icon: <Target className="w-8 h-8" />
    },
    {
      role: "Member",
      org: "National Service Scheme (NSS)",
      desc: "I am engaged in community service and social welfare projects.",
      type: "Social Service",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-16 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Professional Path</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            EXPERIENCE<br />
            <span className="text-white">JOURNEY</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 card-rounded bg-white/5 border border-white/10 hover:border-orange-600/50 transition-all group"
            >
              <div className="mb-10 p-6 bg-white/10 rounded-[32px] w-fit group-hover:bg-orange-600 group-hover:text-white transition-all">
                {exp.icon}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-6">{exp.type}</div>
              <h4 className="text-3xl font-display font-black mb-4 leading-tight uppercase tracking-tighter">{exp.role}</h4>
              <div className="text-[10px] font-black text-zinc-500 mb-8 uppercase tracking-widest">{exp.org}</div>
              <p className="text-zinc-400 leading-relaxed font-medium text-lg">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const categories = ['Marketing', 'Business', 'Tools'];
  
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-24">
          <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            Expertise
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            SKILLS &<br />
            <span className="text-white">EXPERTISE</span>
          </motion.h2>
          <p className="text-zinc-500 text-2xl font-medium max-w-2xl leading-tight">
            A blend of marketing intuition, business strategy, and technical proficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-600 font-display font-black text-xl">
                  0{i + 1}
                </div>
                <h3 className="text-3xl font-display font-black tracking-tighter uppercase">{cat}</h3>
              </div>
              
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === cat).map((skill, j) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.1) + (j * 0.05) }}
                    className="flex items-center gap-6 p-6 card-rounded bg-white/5 border border-white/10 hover:border-orange-600/50 transition-all group"
                  >
                    <div className="text-zinc-500 group-hover:text-orange-600 transition-colors group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-zinc-300 font-bold uppercase tracking-tighter text-lg">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const education = [
    {
      degree: "BBA",
      school: "Asian School of Business, Noida (affiliated with Chaudhary Charan Singh University, Meerut)",
      duration: "2024–2027",
      desc: "I am focusing on Marketing and Business Strategy. I have scored more than 70% till now in my academic program."
    },
    {
      degree: "Senior Secondary",
      school: "Viaan International School, Delhi",
      duration: "2023–2024",
      desc: "I completed my studies with strong academic performance."
    },
    {
      degree: "Secondary",
      school: "Preet Public Sr. Sec. School, Delhi",
      duration: "2021–2022",
      desc: "I received my foundational education with a focus on core subjects."
    }
  ];

  return (
    <section id="education" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-16 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Academic Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            EDUCATION<br />
            <span className="text-white">HISTORY</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 max-w-5xl">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 card-rounded bg-white/5 border border-white/10 hover:border-orange-600/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-10">
                <div>
                  <h4 className="text-4xl font-display font-black mb-4 group-hover:text-orange-600 transition-colors uppercase tracking-tighter leading-none">{edu.degree}</h4>
                  <div className="text-zinc-400 font-bold text-xl mb-6 uppercase tracking-tight">{edu.school}</div>
                  <p className="text-zinc-500 leading-relaxed font-medium text-lg">{edu.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-4xl font-display font-black text-white tracking-tighter">{edu.duration}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mt-2">Academic Period</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Training = () => {
  return (
    <section id="training" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 md:p-24 card-rounded bg-white/5 border border-white/10 relative overflow-hidden group"
        >
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-6 mb-10"
              >
                <div className="h-[2px] w-16 bg-orange-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Specialization</span>
              </motion.div>
              <h3 className="text-5xl md:text-7xl font-display font-black mb-12 tracking-tighter uppercase leading-none">
                SOCIAL MEDIA<br />
                <span className="text-white">MARKETING</span>
              </h3>
              <div className="flex items-center gap-8 p-8 bg-white/10 rounded-[32px] border border-white/10 w-fit">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-display font-black text-white uppercase tracking-tighter">ASB × NIIT Certified</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-2">Professional Training</div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6">
              {[
                "SEO (on-page & off-page)",
                "Meta Ads & Google Ads",
                "Content planning",
                "Audience analytics",
                "Traffic understanding"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/5 rounded-[24px] border border-white/5 flex items-center justify-between group/item hover:bg-white/10 transition-all"
                >
                  <span className="text-white font-bold text-xl uppercase tracking-tighter">{item}</span>
                  <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-600 group-hover/item:bg-orange-600 group-hover/item:text-white transition-all">
                    <ChevronRight size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="h-[2px] w-16 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Validation</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading text-white"
          >
            CREDENTIALS &<br />
            CERTIFICATIONS
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex items-center gap-8 hover:border-orange-600/50 transition-all group"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shrink-0 shadow-xl">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-xl font-bold text-zinc-400 group-hover:text-white transition-colors leading-tight uppercase tracking-tighter">
                {cert}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdditionalActivities = () => {
  return (
    <section className="py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="h-[2px] w-16 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Engagement</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            BEYOND THE<br />
            <span className="text-white">ACADEMICS</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap gap-6">
          {ADDITIONAL_ACTIVITIES.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="px-10 py-5 card-rounded bg-white/5 border border-white/10 text-zinc-400 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all cursor-default shadow-xl"
            >
              {activity}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-16 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Portfolio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            ACADEMIC PROJECTS
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[16/10] card-rounded overflow-hidden mb-10 border border-white/10 shadow-2xl bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-8 left-8 flex flex-wrap gap-3">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-5 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-orange-600 hover:text-white transition-all"
                  >
                    View Details
                  </button>
                  <a 
                    href={project.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-xl"
                  >
                    <FileText size={24} />
                  </a>
                </div>
              </div>

              <div className="px-4">
                <h4 className="text-4xl font-display font-black mb-8 group-hover:text-orange-600 transition-colors uppercase tracking-tighter leading-none">{project.title}</h4>
                <p className="text-zinc-500 font-medium text-lg line-clamp-2 mb-8 leading-tight">{project.description}</p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-3 text-orange-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-6 transition-all"
                >
                  Explore Case Study <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-zinc-950 w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden border border-zinc-800 relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-zinc-900 hover:bg-zinc-800 rounded-full flex items-center justify-center text-white z-10 transition-all"
              >
                <X size={20} />
              </button>

              <div className="grid lg:grid-cols-2 h-full overflow-y-auto">
                <div className="relative h-[300px] lg:h-full shrink-0">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-10 lg:p-16">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-orange-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{selectedProject.title}</h3>
                  
                  <div className="space-y-10">
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">Overview</h5>
                      <p className="text-zinc-400 leading-relaxed font-medium">{selectedProject.overview}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-10">
                      <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">What I Did</h5>
                        <ul className="space-y-3">
                          {selectedProject.whatIDid.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                              <div className="w-1.5 h-1.5 bg-accent-orange rounded-full mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-4">Key Learnings</h5>
                        <ul className="space-y-3">
                          {selectedProject.keyLearnings.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                              <div className="w-1.5 h-1.5 bg-accent-orange rounded-full mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-wrap gap-6 items-center">
                      <a 
                        href={selectedProject.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-10 py-5 bg-accent-orange text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-xl"
                      >
                        View Full PDF
                        <ExternalLink size={18} />
                      </a>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.toolsUsed.map(tool => (
                          <span key={tool} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-bold text-gray-400">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="h-[2px] w-16 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Milestones</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            KEY<br />
            <span className="text-white">ACHIEVEMENTS</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-rounded bg-white/5 border border-white/10 overflow-hidden hover:border-orange-600/50 transition-all shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={cn(
                    "w-full h-full transition-transform duration-1000 group-hover:scale-110",
                    item.image.includes('FzctBMTN') ? "object-contain bg-zinc-950 p-4" : "object-cover"
                  )}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white group-hover:bg-orange-600 transition-all shadow-xl">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                </div>
              </div>
              <div className="p-10">
                <div className="text-orange-600 font-black text-[10px] uppercase tracking-widest mb-4">{item.date}</div>
                <h4 className="text-3xl font-display font-black mb-4 group-hover:text-orange-600 transition-colors uppercase tracking-tighter leading-none">{item.title}</h4>
                <p className="text-zinc-400 text-lg font-medium leading-tight line-clamp-3">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="h-[2px] w-16 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Visual Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            MOMENTS IN<br />
            <span className="text-white">MOTION</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {GALLERY.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative card-rounded overflow-hidden group border border-white/10 shadow-2xl ${[0, 1, 2, 3].includes(i) ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className={cn(
                  "w-full h-full transition-transform duration-1000 group-hover:scale-110",
                  item.image.includes('FzctBMTN') ? "object-contain bg-zinc-950 p-6" : "object-cover"
                )}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="px-6 py-2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6 inline-block w-fit">
                  {item.category}
                </span>
                <h4 className="text-4xl font-display font-black text-white tracking-tighter uppercase leading-none">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 card-rounded p-12 md:p-24 overflow-hidden relative border border-white/10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-6 mb-10"
              >
                <div className="h-[2px] w-16 bg-orange-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Get in Touch</span>
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-display font-black mb-12 tracking-tighter uppercase leading-none">
                LET'S <span className="text-orange-600">CONNECT</span>.
              </h2>
              <p className="text-2xl text-zinc-400 mb-20 max-w-md font-medium leading-tight">
                I'm currently looking for internships in Marketing and Business Development. Let's connect and discuss how I can add value to your team.
              </p>
              
              <div className="space-y-10">
                {[
                  { label: 'Academic Email', value: 'mukul.ahuja.bba-2024@asb.edu.in', href: 'mailto:mukul.ahuja.bba-2024@asb.edu.in', icon: <Mail /> },
                  { label: 'Professional Email', value: 'mukulahujaprofessional@gmail.com', href: 'mailto:mukulahujaprofessional@gmail.com', icon: <Mail /> },
                  { label: 'LinkedIn', value: 'linkedin.com/in/mukul-ahuja-342112334', href: 'https://www.linkedin.com/in/mukul-ahuja-342112334', icon: <Linkedin /> },
                  { label: 'Mobile Number', value: '+91 9871826563 (India)', href: 'tel:+919871826563', icon: <Phone /> }
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-10 group">
                    <div className="w-20 h-20 bg-white/5 rounded-[24px] flex items-center justify-center transition-all duration-500 border border-white/10 group-hover:bg-orange-600 group-hover:text-white shadow-xl">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-2">{item.label}</div>
                      <div className="text-2xl font-display font-black text-white group-hover:text-orange-600 transition-colors tracking-tighter uppercase">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <form className="space-y-10 p-12 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-orange-600 transition-all font-black text-white placeholder:text-zinc-700 uppercase tracking-widest text-xs" placeholder="John Doe" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-orange-600 transition-all font-black text-white placeholder:text-zinc-700 uppercase tracking-widest text-xs" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-orange-600 transition-all font-black text-white placeholder:text-zinc-700 uppercase tracking-widest text-xs" placeholder="Internship Opportunity" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-orange-600 transition-all font-black text-white placeholder:text-zinc-700 resize-none uppercase tracking-widest text-xs" placeholder="Hello Mukul, we'd like to..." />
              </div>
              <button className="w-full py-8 bg-orange-600 text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white hover:text-black transition-all shadow-2xl text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
          <div className="max-w-xl">
            <div className="text-6xl font-display font-black tracking-tighter mb-10 uppercase">
              Mukul<span className="text-orange-600">.</span>
            </div>
            <p className="text-2xl text-zinc-500 font-medium leading-tight uppercase tracking-tighter">
              Driven by innovation and strategy, I transform complex insights into impactful business narratives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-24">
            <div className="space-y-10">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Navigation</div>
              <div className="flex flex-col gap-6">
                {['About', 'Experience', 'Skills', 'Academic Projects', 'Contact'].map(item => (
                  <a 
                    key={item} 
                    href={`#${item === 'Academic Projects' ? 'projects' : item.toLowerCase()}`} 
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Social</div>
              <div className="flex flex-col gap-6">
                <a href="https://www.linkedin.com/in/mukul-ahuja-342112334" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-orange-600 transition-colors">LinkedIn</a>
                <a href="mailto:mukulahujaprofessional@gmail.com" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-orange-600 transition-colors">Email</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-10">
          <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Mukul Ahuja. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Training />
        <Certifications />
        <SkillsSection />
        <Projects />
        <Achievements />
        <AdditionalActivities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-2xl hover:scale-110 hover:bg-white hover:text-black transition-all z-40"
      >
        <ArrowUpRight className="w-6 h-6" />
      </button>
    </div>
  );
}
