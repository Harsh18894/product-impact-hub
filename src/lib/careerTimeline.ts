export interface TimelineRole {
  title: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  subtitle?: string;
  progression?: string;
  description: string;
}

export const timelineRoles: TimelineRole[] = [
  {
    title: "Senior Product Manager",
    org: "Internshala",
    location: "Gurugram, India",
    start: "Jun 2020",
    end: "Present",
    progression: "PM-I → PM-II → Senior PM",
    description:
      "Owned product lines contributing 60% of company revenue, from Specializations to Placement Guarantee Courses to Career Launchpad.",
  },
  {
    title: "Senior Content Manager & Educator",
    org: "Internshala",
    location: "Gurugram, India",
    start: "Oct 2017",
    end: "Jun 2020",
    description:
      "Validated 137 learning categories and launched 90+ courses generating ~19% of company revenue at an average 4.4/5 rating. Built technical curriculum (Android, Java, Python) for 5,000+ learners per year; contributed to a new LMS; led and mentored 12 teaching assistants.",
  },
  {
    title: "Innovator",
    org: "Digital Impact Square (TCS Foundation)",
    location: "Nashik, India",
    start: "Jan 2017",
    end: "Oct 2017",
    subtitle: "MIT Media Lab Emerging Worlds fellowship",
    description:
      "Co-founded FARMSS — Android + OpenCV soil nutrient analysis that cut soil testing from days to ~20 minutes, piloted with farmers. Founded VIKRELA, a street-vendor marketplace targeting ~80% opex reduction; paused.",
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "KIET, Ghaziabad (AKTU Lucknow)",
  years: "2013–2017",
  description: "Founded Neuron (developer club) and Colloquy (debating club).",
};

export const timelineFraming =
  "Nine years in edtech, six of them in product. One company for most of it — long enough to launch a product, watch it get shut down, and build the thing that replaced it.";
