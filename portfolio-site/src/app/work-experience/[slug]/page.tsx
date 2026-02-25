import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  getWorkExperienceBySlug,
  getWorkExperienceSlugs,
} from "@/data/work-experience";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getWorkExperienceSlugs().map((slug) => ({ slug }));
}

export default async function WorkExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const experience = getWorkExperienceBySlug(slug);
  if (!experience) notFound();

  return (
    <div className="min-h-screen page-gradient">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="-ml-2 mb-8 gap-2"
        >
          <Link href="/#work-experience">
            <ArrowLeft className="size-4" />
            Back to Work Experience
          </Link>
        </Button>

        <article className="overflow-hidden rounded-lg border border-border/60 bg-card">
          <div className="relative aspect-[4/3] w-full bg-muted/30">
            <Image
              src={encodeURI(experience.imageSrc)}
              alt={experience.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          <div className="space-y-4 p-6 sm:p-8">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {experience.title}
            </h1>
            <p className="text-muted-foreground">
              {experience.company} · {experience.location}
            </p>
            <p className="text-sm text-muted-foreground">
              {experience.dateRange}
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              {experience.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
