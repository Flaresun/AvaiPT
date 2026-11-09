"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import logo from "../../../public/logo.png";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const aboutLinks = [
  { label: "For Agencies", href: "/#agencies" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Only the homepage has a dark hero behind the bar to sit on.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  /** Small delay so the pointer can cross the gap into the panel. */
  const open = (which: "services" | "about") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(which === "services");
    setAboutOpen(which === "about");
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setAboutOpen(false);
    }, 120);
  };

  const linkColor = overHero
    ? "text-white/90 hover:text-white"
    : "text-brand-muted hover:text-brand-teal";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overHero
          ? "bg-transparent"
          : "bg-brand-cream/95 backdrop-blur-md border-b border-brand-line"
      }`}
    >
      <nav className="mx-auto flex max-w-[82rem] items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image src={logo} alt={`${site.shortName} logo`} width={42} priority />
          <span
            className={`text-lg font-extrabold tracking-tight ${
              overHero ? "text-white" : "text-brand-teal-dark"
            }`}
          >
            {site.name}
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => open("services")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex cursor-pointer items-center gap-1.5 text-base font-medium ${linkColor}`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute right-1/2 top-full w-[21rem] translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-brand-line bg-white p-2 shadow-xl">
                  {services.map(({ href, title, Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeAll}
                      className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-left text-[0.95rem] leading-snug text-brand-ink hover:bg-brand-sage-pale"
                    >
                      <Icon
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-teal"
                        aria-hidden
                      />
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => open("about")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-expanded={aboutOpen}
              onClick={() => setAboutOpen((v) => !v)}
              className={`flex cursor-pointer items-center gap-1.5 text-base font-medium ${linkColor}`}
            >
              About
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {aboutOpen && (
              <div className="absolute right-1/2 top-full w-56 translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-brand-line bg-white p-2 shadow-xl">
                  {aboutLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-brand-ink hover:bg-brand-sage-pale"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`text-base font-medium ${linkColor}`}
          >
            Contact
          </Link>

          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className={`flex min-h-11 items-center gap-2 rounded-full border px-5 text-base font-semibold transition-colors ${
              overHero
                ? "border-white/50 text-white hover:bg-white/10"
                : "border-brand-teal bg-brand-teal text-white hover:bg-brand-teal-dark"
            }`}
          >
            <Phone size={16} aria-hidden />
            {site.phone}
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={`flex size-11 cursor-pointer items-center justify-center rounded-lg lg:hidden ${
            overHero ? "text-white" : "text-brand-ink"
          }`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="border-t border-brand-line bg-brand-cream px-5 pb-6 pt-2 lg:hidden">
          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className="mb-4 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-teal px-5 text-lg font-semibold text-white"
          >
            <Phone size={18} aria-hidden />
            {site.phone}
          </a>

          <p className="px-1 pb-1 pt-2 text-xs font-bold uppercase tracking-widest text-brand-muted">
            Services
          </p>
          {services.map(({ href, shortTitle, Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={closeAll}
              className="flex min-h-12 items-center gap-3 rounded-lg px-1 text-base text-brand-ink"
            >
              <Icon size={18} className="text-brand-teal" aria-hidden />
              {shortTitle}
            </Link>
          ))}

          <p className="px-1 pb-1 pt-4 text-xs font-bold uppercase tracking-widest text-brand-muted">
            More
          </p>
          {[...aboutLinks, { label: "Contact", href: "/contact" }].map(
            ({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={closeAll}
                className="flex min-h-12 items-center rounded-lg px-1 text-base text-brand-ink"
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
