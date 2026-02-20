import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { SectionTransition } from "@/components/section-transition";
import { WorkExperienceSection } from "@/components/work-experience-section";
export default function Home() {
  return (
    <div className="min-h-screen page-gradient">
      <Header />
      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
          <p className="mb-4 text-sm font-medium tracking-wider text-muted-foreground uppercase">
            Electrical Engineering Student
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <h1 className="font-display max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Jael Angel Delatorre-Cruz
            </h1>
            <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-muted/30 sm:h-64 sm:w-64">
              <Image
                src="/F98D5ED6-B278-4F21-86CB-6E9FEFE15342.png"
                alt="Jael Angel Delatorre-Cruz"
                fill
                className="object-cover"
                sizes="256px"
                priority
              />
            </div>
          </div>
          <p className="mt-0 max-w-xl text-lg leading-relaxed text-muted-foreground">
            University of Vermont · B.S. Electrical Engineering (Expected 2029).
            Focused on hands-on lab work and practical problem-solving, with
            strengths in leadership, teamwork, Python, AutoCAD, and SolidWorks.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">
                View Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </section>

        {/* About */}
        <SectionTransition
          id="about"
          className="scroll-mt-24 border-t border-border/40 py-20"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            About
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              I am an Electrical Engineering student at the University of Vermont
              working toward my B.S. expected 2029. I like learning by doing,
              especially through labs where I can build something real, test it,
              and fix what is not working. I work well with others and I am
              comfortable taking the lead when it is needed, but I also listen
              and stay easy to work with.
            </p>
            <p className="leading-relaxed">
              On the technical side, I have experience with Python and I use
              AutoCAD and SolidWorks to design and model ideas before they get
              built. Outside of school, I stay consistent with the gym and I help
              out a lot with my dad&apos;s landscaping business. That has helped me
              build a strong work ethic, better communication, and attention to
              detail. I want my work to be clear, organized, and dependable, and
              I keep pushing myself to improve with every lab and project.
            </p>
          </div>
        </SectionTransition>

        {/* Work Experience */}
        <SectionTransition
          id="work-experience"
          className="scroll-mt-24 border-t border-border/40 py-20"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Work Experience
          </h2>
          <div className="mt-8">
            <WorkExperienceSection showHeading={false} />
          </div>
        </SectionTransition>

        {/* Projects */}
        <SectionTransition
          id="projects"
          className="scroll-mt-24 border-t border-border/40 py-20"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Projects
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border border-border/60 bg-card">
              <div className="relative aspect-[4/3] w-full bg-muted/30">
                <Image
                  src="/IMG_1149.webp"
                  alt="Fire alarm style circuit with LED and buzzer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-2 p-4">
                <p className="font-semibold text-foreground">
                  Fire Alarm Style Circuit
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a fire alarm style circuit that flashes an LED and pulses
                  a buzzer when triggered. I used two 555 timers so the light and
                  sound run at different frequencies, then tested it first with
                  two LEDs before swapping one for the buzzer. I kept it on a 5V
                  supply and used a 1k resistor to protect the LED, focusing on
                  making the timing stable and consistent.
                </p>
              </div>
            </div>
            <div
              className="border-border/60 flex aspect-square min-h-[200px] items-center justify-center rounded-lg border border-dashed bg-muted/30 text-muted-foreground sm:min-h-0"
              aria-hidden
            >
              Project coming soon
            </div>
          </div>
        </SectionTransition>

        {/* Contact */}
        <SectionTransition
          id="contact"
          className="scroll-mt-24 border-t border-border/40 py-20"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Contact
          </h2>
          <p className="mt-2 text-muted-foreground">
            Open to collaborations and new opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="mailto:jael.delatorre.c@gmail.com">
                <Mail className="size-4" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </SectionTransition>

        {/* Footer */}
        <footer className="border-t border-border/40 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
