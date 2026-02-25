export type WorkExperience = {
  slug: string;
  title: string;
  company: string;
  location: string;
  dateRange: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
};

export const workExperiences: WorkExperience[] = [
  {
    slug: "delatorre-landscaping",
    title: "Crew Member and Team Lead",
    company: "Delatorre Landscaping",
    location: "Dutchess County, New York",
    dateRange: "2022 to Present",
    imageSrc: "/ChatGPT Image Feb 19, 2026, 06_42_36 PM.png",
    imageAlt: "Landscaping tools and equipment",
    bullets: [
      "Work on crews to complete mowing, garden work, clearing, and seasonal cleanup.",
      "Direct crew members and coordinate tasks so jobs stay on track and done right.",
      "Communicate with customers about scope, timing, and any issues.",
      "Help price jobs by the hour, by project, or on weekly maintenance plans.",
      "Prioritize doing the work well over rushing to avoid mistakes.",
      "Developed leadership, reliability, and attention to detail through hands-on work.",
    ],
  },
];

export function getWorkExperienceBySlug(
  slug: string
): WorkExperience | undefined {
  return workExperiences.find((e) => e.slug === slug);
}

export function getWorkExperienceSlugs(): string[] {
  return workExperiences.map((e) => e.slug);
}
