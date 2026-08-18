import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import ProjectGallery from "../components/ProjectGallery";

const techBadge = "rounded-full bg-[#2A2D32] px-3 py-1 text-xs text-white/70";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#0F1115] px-6 text-center text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/40">404</p>
        <h1 className="mt-3 text-2xl font-bold">Project not found</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#D7292C]"
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0F1115] px-8 py-14 text-white md:px-24 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-3xl"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} className="transition duration-300 group-hover:-translate-x-1" />
          Back to portfolio
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7292C]">
          {project.tag}
        </p>
        <h1 className="mt-2 text-[32px] font-bold leading-tight md:text-[40px]">
          {project.title}
        </h1>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className={techBadge}>
              {t}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl || project.demoUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D7292C]/40 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#D7292C] transition hover:bg-[#D7292C] hover:text-white"
              >
                <ExternalLink size={14} />
                Live Website
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <FaYoutube size={14} />
                Watch Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <FaGithub size={14} />
                View Code
              </a>
            )}
          </div>
        )}

        <div className="mt-10">
          <ProjectGallery images={project.gallery} />
        </div>

        <div className="mt-14">
          <h2 className="text-[20px] font-bold tracking-wide">THE PROBLEM</h2>
          <div className="mt-2 mb-5 h-[1px] w-16 bg-[#D7292C]" />
          <p className="text-[15px] leading-7 text-justify text-white/60">{project.problem}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-bold tracking-wide">PROCESS</h2>
          <div className="mt-2 mb-8 h-[1px] w-16 bg-[#D7292C]" />

          <div className="flex flex-col gap-14">
            {project.process.map((step, i) => {
              const isEven = i % 2 === 1;
              return (
                <div
                  key={step.title}
                  className={`flex flex-col gap-6 md:flex-row md:items-top md:gap-10 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-[20px] md:w-1/2">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>

                  <div className="md:w-1/2">
                    <p className="text-[18px] font-semibold uppercase tracking-[0.15em] text-white/80">
                      {String(i + 1).padStart(2, "0")} — {step.title}
                    </p>
                    <p className="mt-3 text-[15px] text-justify leading-6 text-white/60">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-14 flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm leading-6 text-justify text-white/50">
            Sebagian proses pengembangan project ini dibantu AI untuk mempercepat implementasi dan
            memastikan praktik coding yang lebih aman dan efisien. Meski begitu, saya memahami penuh
            alur pengembangannya — mulai dari alasan pemilihan tech stack, algoritma yang dipakai,
            hingga cara kerja tiap bagian sistem — dan mampu menjelaskan maupun mengembangkannya
            lebih lanjut secara mandiri.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectPage;