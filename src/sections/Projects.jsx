import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Certisat Website",
    description:
      "A student information portal that enables quick verification of certificates, graduation status, and PTN eligibility using NIS or student name. Designed with a clean, responsive interface and focused on data accuracy and security.",
    image: "/projects/certisat.png",
    tags: ["Laravel", "Typescript", "JavaScript", "MySQL"],
    link: "https://sertifikat.smkpesat.id/",
    github: "https://github.com/Nyno1/project_3bulan.git",
  },
  {
    title: "Gallery Website",
    description:
      "A personal aesthetic website designed as a digital gallery, showcasing moments, visuals, and stories in a warm and emotional atmosphere with a soft, modern UI.",
    image: "/projects/gallery.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
    link: "https://delynn-world.vercel.app/",
    github: "https://github.com/Chavall315/WebGallery-Delynn.git",
  },
  {
    title: "UMKM Website",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/motor.png",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Laravel", "SQLite"],
    link: "#",
    github: "https://github.com/pierrmm/baherindo.motor-.git",
  },
  {
    title: "Pendaftaran Beasiswa Website",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/bnsp.png",
    tags: ["PHP", "Tailwind CSS", "JavaScript", "Laravel", "MySQL"],
    link: "#",
    github: "https://github.com/Chavall315/bnsp-beasiswa.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Karya Unggulan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Karya
            <span className="font-serif italic font-normal text-white">
              {" "}
              Terbaik Saya.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Pilihan proyek terbaru yang pernah saya kerjakan, mulai dari aplikasi web kompleks 
            hingga berbagai tools yang dirancang untuk menyelesaikan masalah nyata.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <a href="https://github.com/Chavall315?tab=repositories">
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        </a>
      </div>
    </section>
  );
};