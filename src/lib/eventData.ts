import type { ComponentType, SVGProps } from "react";
import { Brain, Code, Cpu, Gamepad2, HelpCircle, Users } from "lucide-react";

export type EventItem = {
  slug: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  prize: string;
  teamSize: string;
  duration: string;
  color: string;
  description: string;
  overview: string;
  rules: string[];
  criteria: string[];
};

export const events: EventItem[] = [
  {
    slug: "hackathon",
    icon: Cpu,
    title: "Hackathon",
    prize: "₹35,000",
    teamSize: "2-4",
    duration: "10 Hours - Day 1",
    color: "from-primary to-neon-cyan",
    description: "Build innovative software from scratch.",
    overview:
      "A thrilling 10-hour hackathon where teams must design and develop a functional prototype.",
    rules: [
      "Teams of 2-4 members",
      "Any tech stack allowed",
      "Must be built during the event",
      "Assets can be pre-made",
    ],
    criteria: ["Innovation", "Technical Execution", "Impact", "Presentation Quality"],
  },
  {
    slug: "gaming-tournament",
    icon: Gamepad2,
    title: "Gaming Tournament",
    prize: "₹30,000",
    teamSize: "1-5",
    duration: "Day 2",
    color: "from-neon-cyan to-secondary",
    description: "Compete in intense esports battles.",
    overview: "The ultimate gaming showdown featuring popular esports titles.",
    rules: [
      "Own devices for mobile games",
      "PCs provided for PC games",
      "Standard tournament bracket",
      "Fair play policy enforced",
    ],
    criteria: ["Tournament Placement", "Sportsmanship"],
  },
  {
    slug: "guess-who",
    icon: HelpCircle,
    title: "Guess Who",
    prize: "₹10,000",
    teamSize: "2-4",
    duration: "Day 2",
    color: "from-secondary to-neon-pink",
    description: "A mystery event full of surprises.",
    overview:
      "A mysterious event that blends puzzles, riddles, and unexpected challenges.",
    rules: [
      "Teams of 2-4",
      "Clues are provided at each stage",
      "No internet usage allowed",
      "Time-based scoring",
    ],
    criteria: ["Problem Solving", "Teamwork", "Creative Thinking"],
  },
  {
    slug: "blind-coding",
    icon: Code,
    title: "Blind Coding",
    prize: "₹15,000",
    teamSize: "1",
    duration: "Day 2",
    color: "from-neon-pink to-primary",
    description: "Code without screen visibility.",
    overview:
      "Test your coding muscle memory and logical flow by programming with the monitor turned off.",
    rules: [
      "Individual participation",
      "Standard IDE provided",
      "Monitor is turned off",
      "Syntax must be exact",
    ],
    criteria: ["Correctness", "Syntax Accuracy", "Logic", "Speed"],
  },
  {
    slug: "debates",
    icon: Users,
    title: "Debates",
    prize: "₹15,000",
    teamSize: "2",
    duration: "Day 1",
    color: "from-primary to-secondary",
    description: "Argue for or against trending tech topics.",
    overview:
      "A passionate battle of words focusing on modern technology ethics and progress.",
    rules: [
      "Teams of 2",
      "Topics assigned 15 mins prior",
      "Time strictly enforced",
      "Respectful conduct required",
    ],
    criteria: ["Argument Quality", "Rebuttal", "Confidence", "Relevance"],
  },
  {
    slug: "quiz",
    icon: Brain,
    title: "Quiz",
    prize: "₹15,000",
    teamSize: "2-3",
    duration: "Day 1",
    color: "from-neon-cyan to-neon-pink",
    description: "Test your knowledge across tech, science, pop culture.",
    overview:
      "A multi-round quiz spanning technology, science, current affairs, and general knowledge.",
    rules: [
      "Teams of 2-3 members",
      "Multiple elimination rounds",
      "No electronic devices",
      "Time-limited answers",
    ],
    criteria: ["Accuracy", "Speed", "Team Coordination"],
  },
];
