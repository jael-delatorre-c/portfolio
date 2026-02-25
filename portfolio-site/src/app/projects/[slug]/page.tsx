import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/data/projects";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen page-gradient">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-8 gap-2 -ml-2">
          <Link href="/#projects">
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
        </Button>

        <article className="overflow-hidden rounded-lg border border-border/60 bg-card">
          <div className="relative aspect-[4/3] w-full bg-muted/30">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
          <div className="space-y-6 p-6 sm:p-8">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h1>
            {project.detailImageSrc && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border/60 bg-muted/30">
                <Image
                  src={project.detailImageSrc}
                  alt={project.detailImageAlt ?? project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
            )}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {project.description.map((section) => (
                <div key={section.heading} className="space-y-2">
                  <h2 className="font-semibold text-foreground">
                    {section.heading}
                  </h2>
                  <div className="space-y-3">
                    {section.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
