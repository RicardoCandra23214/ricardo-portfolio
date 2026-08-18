import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Code2,
  Bug,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Globe,
  Download,
  Plus,
  Award,
  X,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import RutePreview from "../../assets/images/rute.webp";
import LaundryPreview from "../../assets/images/laundry.webp";
import PortfolioPreview from "../../assets/images/portfolio.webp";
import kiaSertifikat from "../../assets/images/kia.webp";
import oraganizationSertifikat from "../../assets/images/sertifikat1.webp";
import CvPdf from "../../assets/files/cv.pdf";



const techBadge = "rounded-full bg-[#2A2D32] px-3 py-1 text-xs text-white/70";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const projects = [
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

const workProcess = [
  { number: "01", icon: Search, title: "RESEARCH", desc: "Understand the problem, user needs, and requirements." },
  { number: "02", icon: Lightbulb, title: "DESIGN", desc: "Plan the system architecture, database, and UI/UX." },
  { number: "03", icon: Code2, title: "DEVELOP", desc: "Build the application with clean and scalable code." },
  { number: "04", icon: Bug, title: "TEST", desc: "Test the features and fix bugs to ensure best quality." },
  { number: "05", icon: Rocket, title: "DEPLOY", desc: "Deploy the application and make it accessible." },
];

const certificates = [
  {
    title: "Kursus Komputer",
    issuer: "KIA (Komputer Informasi Indonesia)",
    year: "2021",
    website: "https://www.kiaindonesia.net/",
    image: kiaSertifikat,
  },
  {
    title: "Organization Certificate",
    issuer: "BEM STMIK Pontianak",
    year: "2023",
    website: null,
    image: oraganizationSertifikat,
  },
];

const SecondPage = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <>
      <section className="w-full bg-[#0F1115] px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-20 text-white border-t-0">
        {/* SELECTED PROJECTS */}
        <div className="mb-6 md:mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-[24px] md:text-[24px] font-bold tracking-wide">
              SELECTED PROJECTS
            </h2>
            <div className="mt-1.5 md:mt-2 h-[1px] w-14 md:w-20 bg-[#D7292C]" />
          </div>
          <Link
            to="/projects"
            className="group hidden md:flex items-center gap-1.5 text-[12px] md:text-sm uppercase tracking-[0.12em] text-white/80 transition hover:text-white"
          >
            View All Projects
            <ArrowRight
              size={14}
              className="text-[#D7292C] transition group-hover:translate-x-1"
            />
          </Link>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16 md:mb-24 grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-3"
        >
          {projects.map((project) => (
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
                      loading="lazy"
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
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 md:mt-6 inline-flex items-center gap-2 rounded-full border border-[#D7292C]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#D7292C] transition duration-300 group-hover:bg-[#D7292C] group-hover:text-white"
              >
                View Project
                <ArrowRight
                  size={14}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects - Mobile only */}
        <div className="mb-16 flex justify-center md:hidden">
          <div className="mb-16 flex justify-center md:hidden">
          <Link
            to="/projects"
            className="group flex items-center gap-1.5 text-[12px] uppercase tracking-[0.12em] text-white/80 transition hover:text-white"
          >
            View All Projects
            <ArrowRight
              size={14}
              className="text-[#D7292C] transition group-hover:translate-x-1"
            />
          </Link>
        </div>
        </div>


        {/* EDUCATION, WORK PROCESS, QUOTE */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {/* Education & Skills */}
          <motion.div variants={fadeUp}>
            <h2 className="text-[24px] font-bold tracking-wide">EDUCATION & SKILLS</h2>
            <div className="mt-2 mb-8 h-[1px] w-20 bg-[#D7292C]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7292C]">
              Education
            </p>
            <div className="mt-3 flex items-start justify-between">
              <div>
                <p className="font-semibold">Bachelor of Informatics Engineering</p>
                <p className="text-sm text-white/50">STMIK PONTIANAK</p>
              </div>
              <span className="text-sm text-white/40">2022 - 2026</span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7292C]">
              Certificates
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {certificates.map((cert) => (
                <button
                  key={cert.title}
                  type="button"
                  onClick={() => setActiveCertificate(cert)}
                  className="flex items-center gap-3 rounded-lg border border-white/10 px-3 py-2 text-left transition hover:border-[#D7292C]/50 hover:bg-white/[0.03]"
                >
                  <Award size={18} className="shrink-0 text-[#D7292C]" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{cert.title}</p>
                    <p className="text-xs text-white/40">
                      {cert.issuer} — {cert.year}
                    </p>
                  </div>
                  <ArrowRight size={14} className="shrink-0 text-[#D7292C]" />
                </button>
              ))}
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7292C]">
              Skills
            </p>

            <div className="mt-4">
              <p className="text-xs uppercase text-white/40">Frontend</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"].map(
                  (s) => (
                    <span key={s} className={techBadge}>
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase text-white/40">Backend</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MySQL", "REST API", "Cyber Security"].map(
                  (s) => (
                    <span key={s} className={techBadge}>
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase text-white/40">Tools & Others</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Linux", "GitHub", "VS Code", "Postman", "Vercel", "Figma"].map((s) => (
                  <span key={s} className={techBadge}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Work Process */}
          <motion.div variants={fadeUp}>
            <h2 className="text-[24px] font-bold tracking-wide">WORK PROCESS</h2>
            <div className="mt-2 mb-8 h-[1px] w-20 bg-[#D7292C]" />

            <div className="flex flex-col">
              {workProcess.map((step, i) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20">
                      <step.icon size={18} className="text-white/80" />
                    </div>
                    {i !== workProcess.length - 1 && (
                      <div className="my-1 w-px flex-1 border-l border-dashed border-white/15" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="font-mono text-xl text-[#D7292C]">{step.number}</span>
                    <p className="text-sm font-semibold tracking-wide">{step.title}</p>
                    <p className="mt-1 text-sm text-white/50">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div variants={fadeUp} className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.03] p-8">
            <div>
              <span className="font-serif text-6xl leading-none text-[#D7292C]">&ldquo;</span>
              <p className="mt-4 text-xl leading-8">
                Kesuksesan bukan milik mereka yang paling berbakat, tetapi milik mereka yang
                tidak berhenti mencoba.
              </p>
              <p className="mt-4 font-['Caveat'] text-2xl text-[#D7292C]">
                Ricardo Candra Sulebaganti
              </p>
            </div>
            <div className="mt-10">
              <p className="text-lg font-bold uppercase leading-snug">
                Let&apos;s build something great together.
              </p>
              <Plus size={22} className="mt-3 text-[#D7292C]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Contact / Footer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:pt-12 md:pt-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <h2 className="text-[24px] font-bold leading-tight">
              LET&apos;S <span className="font-black">WORK</span>
              <br />
              TOGETHER
            </h2>
            <Plus size={20} className="mt-3 text-[#D7292C]" />
            <p className="mt-4 max-w-xs text-sm text-white/50">
              I&apos;m open to new opportunities, collaborations, and exciting projects.
              Let&apos;s connect!
            </p>
          </div>

         <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-3 text-white/70">
              <Mail size={16} className="text-[#D7292C]" />
              ricardocandrasulebaganti@gmail.com
            </div>
            <a
              href="https://wa.me/6283151727739"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 transition hover:text-white"
            >
              <Phone size={16} className="shrink-0 text-[#D7292C]" />
              +62 831 5172 7739
            </a>
            <div className="flex items-center gap-3 text-white/70">
              <MapPin size={16} className="shrink-0 text-[#D7292C]" />
              Kota Pontianak, Indonesia
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <a
              href="https://instagram.com/rcdo_lek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 transition hover:text-white"
            >
              <FaInstagram size={16} className="shrink-0 text-[#D7292C]" />
              instagram.com/rcdo_lek
            </a>
            <a
              href="https://github.com/RicardoCandra23214"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 transition hover:text-white"
            >
              <FaGithub size={16} className="shrink-0 text-[#D7292C]" />
              github.com/RicardoCandra23214
            </a>
            <a
              href="https://tiktok.com/@ricrdo_lek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 transition hover:text-white"
            >
              <FaTiktok size={16} className="shrink-0 text-[#D7292C]" />
              tiktok.com/@ricrdo_lek
            </a>
          </div>

          <a
          href={CvPdf}
            download="Ricardo_Candra_Sulebaganti_CV.pdf"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:bg-white/[0.06]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D7292C]">
                Download CV
              </p>
              <p className="mt-1 text-xs text-white/50">
                Get my complete resume in PDF format.
              </p>
            </div>
            <Download size={18} className="shrink-0 text-white/70" />
          </a>
        </motion.div>
      </section>

      {/* Modal Certificate */}
      {activeCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0F1115] p-8 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold leading-snug">
                  {activeCertificate.title}
                </p>
                <p className="mt-1 text-sm text-white/40">
                  {activeCertificate.issuer} — {activeCertificate.year}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="shrink-0 rounded-full p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Gambar Sertifikat */}
            <div className="mt-6 flex h-[320px]  items-center justify-center overflow-hidden rounded-xl bg-white/5">
              {activeCertificate.image ? (
                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-white/30">
                  <Award size={48} />
                  <span className="text-sm">Gambar sertifikat belum diunggah</span>
                </div>
              )}
            </div>

            {/* Link Lembaga */}
            {activeCertificate.website && (
              <a
                href={activeCertificate.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#D7292C] transition hover:underline"
              >
                Lihat lembaga penerbit
                <ArrowRight size={14} />
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SecondPage;