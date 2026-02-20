import Image from "next/image";
import { cn } from "@/lib/utils";

export type WorkExperienceEntry = {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
  imageSrc?: string;
};

const defaultExperiences: WorkExperienceEntry[] = [
  {
    title: "Crew Member and Team Lead",
    company: "Delatorre Landscaping",
    location: "Dutchess County, New York",
    dateRange: "2022 to Present",
    imageSrc: "/ChatGPT Image Feb 19, 2026, 06_42_36 PM.png",
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

type WorkExperienceSectionProps = {
  entries?: WorkExperienceEntry[];
  showHeading?: boolean;
  className?: string;
};

export function WorkExperienceSection({
  entries = defaultExperiences,
  showHeading = true,
  className,
}: WorkExperienceSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {showHeading && (
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          Work Experience
        </h3>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <div
            key={`${entry.company}-${entry.title}`}
            className="overflow-hidden rounded-lg border border-border/60 bg-card"
          >
            <div className="relative aspect-[4/3] w-full bg-muted/30">
              {entry.imageSrc ? (
                <Image
                  src={encodeURI(entry.imageSrc)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
                  No image
                </div>
              )}
            </div>
            <div className="space-y-2 p-4">
              <p className="font-semibold text-foreground">{entry.title}</p>
              <p className="text-sm text-muted-foreground">
                {entry.company} · {entry.location}
              </p>
              <p className="text-sm text-muted-foreground">{entry.dateRange}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground leading-relaxed">
                {entry.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
