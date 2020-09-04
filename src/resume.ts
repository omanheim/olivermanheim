export interface ResumeItem {
  key: string;
  company: string;
  position: string;
  location: string;
  timeframe: string;
  description: string[];
}

export const resumeItems: ResumeItem[] = [
  {
    key: "wanderlog",
    company: "Wanderlog",
    location: "San Francisco, CA",
    timeframe: "2019 - Present",
    position: "Senior Software Engineer",
    description: [
      "Hired as employee #1 of VC-funded startup (YC W19), designing and building consumer travel app for trip planning and itinerary collaboration.",
      "Critical in design, implementation, and launch of mobile app; naming and branding of product, and fullstack engineering across product surfaces.",
      "Active in interviewing, hiring, and mentoring of new employees; currently managing 2 engineers on the team",
    ],
  },
  {
    key: "youtube-ux",
    company: "YouTube",
    location: "San Bruno, CA",
    timeframe: "2017 - 2019",
    position: "Senior UX Engineer • YouTube Music",
    description: [
      "Led UX for music subteam focused on fan engagement, designing features and defining team vision for artist presence, social sharing, and user profiles across the product.",
      "Developed high-fidelity iOS prototype of mobile app as part of major redesign and relaunch of YouTube Music product, working closely with UX and product team to establish final designs.",
    ],
  },
  {
    key: "youtube-eng",
    company: "YouTube",
    location: "San Bruno, CA",
    timeframe: "2015 - 2017",
    position: "Software Engineer • YouTube Music",
    description: [
      "Owned numerous projects on growth and iOS teams, working across mobile and backend codebase to drive features for onboarding, user engagement, and core functionality.",
      "Promoted twice throughout tenure at YouTube, receiving over 20 bonuses from peers and managers and touching the design and implementation of nearly every surface in the mobile music app.",
    ],
  },
  {
    key: "penn",
    company: "University of Pennsylvania",
    location: "Philadelphia, PA",
    timeframe: "2013 - 2015",
    position: "Teaching Assistant, Intro to Computer Science",
    description: [
      "Worked in instructional role for 350-student introductory Computer Science 110 course, leading 15-student recitation sections and holding semiweekly office hours.",
    ],
  },
  {
    key: "goldman-sachs",
    company: "Goldman Sachs",
    location: "New York, NY",
    timeframe: "Summer 2014",
    position: "Summer Analyst, Technology",
    description: [
      "Designed and developed rapid, user-friendly search engine over multiple large sources of reference data, speeding up search capability over 100x for cross-divisional internal users.",
    ],
  },
  {
    key: "chatsports",
    company: "Chat Sports",
    location: "San Francisco, CA",
    timeframe: "Summer 2013",
    position: "Software Engineering Intern",
    description: [
      "Designed and built website features using Facebook, Twitter, and Sendgrid APIs; engineered CRM tool for 15k-user database; refactored and revised PHP codebase for rapidly-growing sports media website and social network.",
    ],
  },
];
