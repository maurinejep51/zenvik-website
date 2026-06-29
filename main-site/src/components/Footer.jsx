import { siteConfig } from "../constants/site"

function SocialIcon({ name }) {
  const commonProps = {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  }

  if (name === "Instagram") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === "Facebook") {
    return (
      <svg {...commonProps}>
        <path d="M14 8h2V4h-2c-2.8 0-5 2.2-5 5v2H7v4h2v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    )
  }

  if (name === "TikTok") {
    return (
      <svg {...commonProps}>
        <path d="M14 4v10.5a4.5 4.5 0 1 1-4.5-4.5" />
        <path d="M14 4c.6 3 2.5 4.8 5 5" />
      </svg>
    )
  }

  if (name === "X") {
    return (
      <svg {...commonProps}>
        <path d="m4 4 16 16" />
        <path d="M20 4 4 20" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M6.5 10V20" />
      <path d="M10.5 20v-5.4c0-2.8 1.8-4.6 4.2-4.6 2.3 0 3.8 1.6 3.8 4.5V20" />
      <path d="M6.5 6.5h.01" />
    </svg>
  )
}

function Footer() {
  const footerLinkClass = "transition hover:text-[#dfa408]"
  const socialLinks = [
    ["Instagram", siteConfig.socials.instagram],
    ["Facebook", siteConfig.socials.facebook],
    ["TikTok", siteConfig.socials.tiktok],
    ["X", siteConfig.socials.x],
    ["LinkedIn", siteConfig.socials.linkedin],
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,0.82fr)_minmax(0,0.82fr)_minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <img
              src="/logo.png"
              alt="Zenvik Technologies"
              className="h-16 w-auto rounded-2xl bg-white px-3 py-2 shadow-md"
            />

            <p className="mt-5 leading-relaxed text-slate-400">
              {siteConfig.positioning}
            </p>

            <div className="mt-6 text-slate-400">
              <h4 className="text-lg font-bold text-white">Location</h4>
              <p className="mt-3 flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>Nairobi, Kenya</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="mt-5 space-y-3 text-slate-400">
              <li><a href="#hosting" className={footerLinkClass}>Hosting & Cloud</a></li>
              <li><a href="#software" className={footerLinkClass}>Software Development</a></li>
              <li><a href="#services" className={footerLinkClass}>Website Development</a></li>
              <li><a href="#services" className={footerLinkClass}>Marketing & Branding</a></li>
              <li><a href="#services" className={footerLinkClass}>ICT Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="mt-5 space-y-3 text-slate-400">
              <li><a href="#" className={footerLinkClass}>Home</a></li>
              <li><a href="#services" className={footerLinkClass}>Our Services</a></li>
              <li><a href="#portfolio" className={footerLinkClass}>Portfolio</a></li>
              <li><a href="/blog" className={footerLinkClass}>Blog</a></li>
              <li><a href={siteConfig.portalUrl} className={footerLinkClass}>Client Portal</a></li>
              <li><a href="#contact" className={footerLinkClass}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Legal</h4>
            <ul className="mt-5 space-y-3 text-slate-400">
              <li><a href={siteConfig.legal.center} className={footerLinkClass}>Legal Center</a></li>
              <li><a href={siteConfig.legal.terms} className={footerLinkClass}>Terms & Conditions</a></li>
              <li><a href={siteConfig.legal.privacy} className={footerLinkClass}>Privacy Policy</a></li>
              <li><a href={siteConfig.legal.refund} className={footerLinkClass}>Refund Policy</a></li>
              <li><a href={siteConfig.legal.aup} className={footerLinkClass}>Acceptable Use Policy (AUP)</a></li>
              <li><a href={siteConfig.legal.sla} className={footerLinkClass}>Service Level Agreement (SLA)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Get In Touch</h4>
            <ul className="mt-5 space-y-3 text-slate-400">
              <li><a href={`tel:${siteConfig.whatsapp}`} className={footerLinkClass}>+254 717 990 272</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className={footerLinkClass}>{siteConfig.email}</a></li>
              <li><a href={`mailto:${siteConfig.supportEmail}`} className={footerLinkClass}>{siteConfig.supportEmail}</a></li>
              <li><a href={`mailto:${siteConfig.hostingEmail}`} className={footerLinkClass}>{siteConfig.hostingEmail}</a></li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className={footerLinkClass}
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {siteConfig.copyrightYear} Zenvik Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-3 text-slate-400">
            {socialLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#dfa408]/60 hover:bg-[#dfa408]/10 hover:text-[#dfa408]"
              >
                <SocialIcon name={label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
