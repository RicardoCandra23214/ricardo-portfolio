import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RutePreview from "../assets/images/rute.webp";
import LaundryPreview from "../assets/images/laundry.webp";
import PortfolioPreview from "../assets/images/portfolio.webp";

const techBadge = "rounded-full bg-[#2A2D32] px-3 py-1 text-xs text-white/70";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Semua project (nanti tinggal tambah di sini kalau ada project baru)
const allProjects = [
  {
    number: "01",
    title: "Courier Route\nOptimization",
    tag: "Thesis Project",
    desc: "Web-based system to optimize delivery routes using the Nearest Neighbor Algorithm and OSRM API.",
    image: RutePreview,
    tech: ["React", "TypeScript", "Node.js", "Leaflet", "OSRM"],
    link: "/projects/courier-route",
  },
  {
    number: "02",
    title: "Laundry\nManagement",
    tag: "CRUD Web Application",
    desc: "Management system for laundry services including order, customer, and transaction history.",
    image: LaundryPreview,
    tech: ["React", "Express.js", "MySQL", "Tailwind CSS"],
    link: "/projects/laundry-management",
  },
  {
    number: "03",
    title: "Personal\nPortfolio",
    tag: "Personal Project",
    desc: "Responsive portfolio website with premium interface and smooth user experience.",
    image: PortfolioPreview,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "/projects/personal-portfolio",
  },
];

const AllProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-[#0F1115] px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-20 text-white">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} className="transition duration-300 group-hover:-translate-x-1" />
          Back to portfolio
        </Link>

        <h1 className="mt-6 text-[24px] md:text-[36px] font-bold tracking-wide">
          ALL PROJECTS
        </h1>
        <div className="mt-2 h-[1px] w-16 md:w-24 bg-[#D7292C]" />
        <p className="mt-3 text-sm text-white/50">
          A collection of projects I&apos;ve built and worked on.
        </p>
      </div>

      {/* Grid Card — format sama seperti di home */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {allProjects.map((project) => (
          <motion.div
            variants={fadeUp}
            key={project.number}
            className="group rounded-[20px] md:rounded-[24px] border border-white/10 bg-white/[0.03] p-5 md:p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D7292C]/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-4xl md:text-5xl font-bold text-[#D7292C]/70">
                  {project.number}
                </span>
                <h3 className="mt-2 whitespace-pre-line text-[18px] md:text-[22px] font-semibold leading-tight">
                  {project.title}
                </h3>
              </div>
              <div className="h-[80px] w-[95px] md:h-[90px] md:w-[110px] shrink-0 overflow-hidden rounded-xl bg-white/90">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title.replace("\n", " ")}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-neutral-700" />
                )}
              </div>
            </div>

            <p className="mt-4 text-[12px] md:text-sm leading-6 text-white/60">
              {project.desc}
            </p>

            <div className="mt-5 md:mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className={techBadge}>
                  {t}
                </span>
              ))}
            </div>

            <Link
              to={project.link}
              className="mt-5 md:mt-6 inline-flex items-center gap-2 rounded-full border border-[#D7292C]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#D7292C] transition duration-300 group-hover:bg-[#D7292C] group-hover:text-white"
            >
              Review Project
              <ArrowRight
                size={14}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AllProjectsPage;