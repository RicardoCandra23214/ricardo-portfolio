import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const WHATSAPP_NUMBER = "6283151727739"; // dari +62 831 5172 7739

const EMAILJS_SERVICE_ID = "service_t8m1ns8";
const EMAILJS_TEMPLATE_ID = "template_kq6wpyc";
const EMAILJS_PUBLIC_KEY = "6mIrngO8_fJd8EtLa";

const ContactModal = ({ onClose }) => {
  const [method, setMethod] = useState("whatsapp"); // "email" | "whatsapp"
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSend = async () => {
  if (!nama.trim() || !pesan.trim()) return;
  if (method === "email" && !email.trim()) return;

    if (method === "whatsapp") {
      const text = encodeURIComponent(
     `Halo Ricardo, saya ${nama}.\n\n${pesan}\n\nSaya menghubungi dari portfolio Anda.`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
      onClose();
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: nama,
          reply_to: email,
          message: pesan,
          subject: `Portfolio Contact – dari ${nama}`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setTimeout(() => onClose(), 1500);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1115]/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-auto max-h-[90vh] w-full max-w-[400px] sm:max-w-[435px] flex-col rounded-[24px] sm:rounded-[28px] border border-white/15 bg-[#1B1A1B]/50 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-xl overflow-y-auto"
      >

        {/* Tabs */}
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => setMethod("whatsapp")}
            className="relative pb-2 text-2xl font-bold tracking-wide"
          >
            <span className={method === "whatsapp" ? "text-[#D7292C]" : "text-white/40"}>
              WHATSAPP
            </span>
            {method === "whatsapp" && (
              <motion.span
                layoutId="tab-underline"
                className="absolute -bottom-0 left-0 h-[2px] w-full bg-[#D7292C]"
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMethod("email")}
            className="relative pb-2 text-2xl font-bold tracking-wide"
          >
            <span className={method === "email" ? "text-white" : "text-white/40"}>
              E-MAIL
            </span>
            {method === "email" && (
              <motion.span
                layoutId="tab-underline"
                className="absolute -bottom-0 left-0 h-[2px] w-full bg-[#D7292C]"
              />
            )}
          </button>
        </div>

        {/* Form */}
        <div className="mt-10 flex flex-1 flex-col">
          <label className="text-sm font-medium text-[#D7292C]">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama kamu"
            className="mt-2 rounded-xl bg-white/90 px-4 py-3 text-sm text-[#1B1A1B] outline-none placeholder:text-[#1B1A1B]/40 focus:ring-2 focus:ring-[#D7292C]"
          />

          {method === "email" && (
            <>
              <label className="mt-6 text-sm font-medium text-[#D7292C]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@kamu.com"
                className="mt-2 rounded-xl bg-white/90 px-4 py-3 text-sm text-[#1B1A1B] outline-none placeholder:text-[#1B1A1B]/40 focus:ring-2 focus:ring-[#D7292C]"
              />
            </>
          )}

          <label className="mt-6 text-sm font-medium text-[#D7292C]">Pesan</label>
          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tulis pesan kamu..."
            className="mt-2 flex-1 resize-none rounded-xl bg-white/80 px-4 py-3 text-sm text-[#1B1A1B] outline-none placeholder:text-[#1B1A1B]/40 focus:ring-2 focus:ring-[#D7292C]"
          />

          {method === "email" && status === "sent" && (
            <p className="mt-2 text-xs text-green-400">Pesan terkirim!</p>
          )}
          {method === "email" && status === "error" && (
            <p className="mt-2 text-xs text-red-400">Gagal mengirim, coba lagi.</p>
          )}

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSend}
              disabled={status === "sending"}
              className="rounded-full bg-[#D7292C] px-8 py-2.5 text-sm font-bold uppercase tracking-wide text-[#1B1A1B] transition hover:bg-[#D7292C]/90 disabled:opacity-60"
            >
              {status === "sending" ? "Mengirim..." : "Kirim"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;