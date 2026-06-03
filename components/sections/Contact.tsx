"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Calendar, Copy, Check } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { PERSONAL } from "@/lib/constants/personal";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./Contact.module.css";

type CopiedKey = string | null;

/**
 * Contact section with tabbed message/scheduling panel and info cards.
 */
export default function Contact() {
  const { t } = useTranslation("contact");

  const [activeTab, setActiveTab] = useState<"message" | "schedule">("message");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [copied, setCopied] = useState<CopiedKey>(null);

  const info = t("info") as unknown as Record<
    string,
    { label: string; value: string; href?: string }
  >;
  const social = t("social") as unknown as {
    heading: string;
    linkedin: string;
    github: string;
    email: string;
  };
  const tabs = t("tabs") as unknown as { message: string; schedule: string };
  const availability = t("availability") as unknown as {
    fulltime: string;
    contract: string;
    freelance: string;
  };
  const message = t("message") as unknown as {
    description: string;
    fields: Record<string, string>;
    button: string;
    sending: string;
    success: string;
    error: string;
  };

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      {/* TOP */}
      <motion.div
        className={styles.top}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className={styles.sectionLabel}>
          {t("section_number") as string} — {t("section_label") as string}
        </p>
        <h2 className={styles.heading}>
          {t("heading") as string} <span className={styles.headingAccent}>Connect</span>
        </h2>
        <p className={styles.subtext}>{t("subtext") as string}</p>
        <div className={styles.availability}>
          <span className={styles.availabilityPill}>
            <span className={styles.availabilityDot} />
            {availability.fulltime}
          </span>
          <span className={styles.availabilityPill}>
            <span className={styles.availabilityDot} />
            {availability.contract}
          </span>
          <span className={styles.availabilityPill}>
            <span className={styles.availabilityDot} />
            {availability.freelance}
          </span>
        </div>
      </motion.div>

      {/* MAIN GRID */}
      <div className={styles.grid}>
        {/* LEFT — tabbed panel */}
        <motion.div
          className={`${styles.leftPanel} ${styles.accentCard}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Tab bar */}
          <div className={styles.tabBar}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === "message" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("message")}
            >
              <Send size={14} className={styles.tabIcon} />
              {tabs.message}
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === "schedule" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("schedule")}
            >
              <Calendar size={14} className={styles.tabIcon} />
              {tabs.schedule}
            </button>
          </div>

          {/* Tab content */}
          <motion.div
            className={styles.tabContent}
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "message" ? (
              <>
                <div className={styles.formHeader}>
                  <h3 className={styles.formHeading}>{tabs.message}</h3>
                </div>
                <p className={styles.formDescription}>{message.description}</p>

                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>{message.fields.name}</label>
                      <input
                        className={styles.fieldInput}
                        type="text"
                        placeholder={message.fields.name_placeholder}
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>{message.fields.email}</label>
                      <input
                        className={styles.fieldInput}
                        type="email"
                        placeholder={message.fields.email_placeholder}
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>{message.fields.message}</label>
                    <textarea
                      className={styles.fieldTextarea}
                      placeholder={message.fields.message_placeholder}
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === "sending"}
                  >
                    <Send size={14} />
                    {status === "sending" ? message.sending : message.button}
                  </button>

                  {status === "success" && (
                    <p className={`${styles.formStatus} ${styles.formStatusSuccess}`}>
                      {message.success}
                    </p>
                  )}
                  {status === "error" && (
                    <p className={`${styles.formStatus} ${styles.formStatusError}`}>
                      {message.error}
                    </p>
                  )}
                </form>
              </>
            ) : (
              <div className={styles.calWrap}>
                <iframe
                  src={`https://cal.com/${PERSONAL.calLink}?embed=true&theme=dark`}
                  width="100%"
                  frameBorder="0"
                  title="Schedule a call"
                />
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* RIGHT — info cards */}
        <motion.div
          className={styles.rightPanel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Email */}
          <a
            href={info.email.href}
            className={`${styles.infoCard} ${styles.accentCard}`}
          >
            <div className={styles.infoIconBox}>
              <Mail size={18} />
            </div>
            <div className={styles.infoText}>
              <span className={styles.infoLabel}>{info.email.label}</span>
              <span className={styles.infoValue}>{info.email.value}</span>
            </div>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={(e) => {
                e.preventDefault();
                handleCopy("email", info.email.value);
              }}
              title="Copy email"
            >
              {copied === "email" ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </a>

          {/* Phone */}
          <a
            href={info.phone.href}
            className={`${styles.infoCard} ${styles.accentCard}`}
          >
            <div className={styles.infoIconBox}>
              <Phone size={18} />
            </div>
            <div className={styles.infoText}>
              <span className={styles.infoLabel}>{info.phone.label}</span>
              <span className={styles.infoValue}>{info.phone.value}</span>
            </div>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={(e) => {
                e.preventDefault();
                handleCopy("phone", info.phone.value);
              }}
              title="Copy phone"
            >
              {copied === "phone" ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </a>

          {/* Location */}
          <div
            className={`${styles.infoCard} ${styles.accentCard}`}
          >
            <div className={styles.infoIconBox}>
              <MapPin size={18} />
            </div>
            <div className={styles.infoText}>
              <span className={styles.infoLabel}>{info.location.label}</span>
              <span className={styles.infoValue}>{info.location.value}</span>
            </div>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={() => handleCopy("location", info.location.value)}
              title="Copy location"
            >
              {copied === "location" ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>

          {/* Availability */}
          <div
            className={`${styles.availabilityCard} ${styles.accentCard}`}
          >
            <div className={styles.availabilityHeader}>
              <Clock size={16} className={styles.tabIcon} />
              <span className={styles.availabilityTitle}>{info.availability.label}</span>
            </div>
            <p className={styles.availabilityText}>{info.availability.value}</p>
          </div>

          {/* Social */}
          <div
            className={`${styles.socialCard} ${styles.accentCard}`}
          >
            <p className={styles.socialHeading}>{social.heading}</p>
            <div className={styles.socialIcons}>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                title="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                title="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <button
                type="button"
                className={styles.socialIcon}
                onClick={() => {
                  navigator.clipboard.writeText(PERSONAL.email);
                  window.location.href = `mailto:${PERSONAL.email}`;
                }}
                title="Email"
              >
                <Mail size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
