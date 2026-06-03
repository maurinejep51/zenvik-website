import { useState, useRef, useEffect } from "react"
import { locations } from "../data/locations"
import { navigationLinks } from "../data/navigation"
import { siteConfig } from "../constants/site"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)
  const locationDropdownRef = useRef(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(e.target)
      ) {
        setIsLocationDropdownOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white shadow-soft">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#" onClick={closeMenu} className="flex items-center">
          <img
            src="/logo.png"
            alt="Zenvik Technologies"
            className="h-14 w-auto max-w-[210px] object-contain xl:h-16 xl:max-w-[260px]"
          />
        </a>

        <nav className="hidden min-w-0 items-center gap-5 xl:flex 2xl:gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold text-slate-700 transition duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-4">
          <div className="relative" ref={locationDropdownRef}>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:border-accent/60 hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => setIsLocationDropdownOpen((open) => !open)}
              aria-label="Select country and currency"
              aria-expanded={isLocationDropdownOpen}
              aria-controls="location-dropdown-menu"
            >
              <span>{selectedLocation.flag}</span>
              <span className="hidden sm:inline">{selectedLocation.currency}</span>
              <svg
                className={`h-4 w-4 transition duration-200 ${
                  isLocationDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            {isLocationDropdownOpen && (
              <div
                id="location-dropdown-menu"
                className="absolute right-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft"
              >
                <div className="p-2">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      type="button"
                      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition duration-200 ${
                        selectedLocation.id === location.id
                          ? "bg-accent text-primary"
                          : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                      }`}
                      onClick={() => {
                        setSelectedLocation(location)
                        setIsLocationDropdownOpen(false)
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-lg">{location.flag}</span>
                        <span>
                          {location.country} ·{" "}
                          <span className="font-bold">{location.currency}</span>
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href={siteConfig.portalUrl}
            className="whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-primary shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Client Portal
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-primary transition duration-200 hover:border-accent hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-accent xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="relative h-5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 block h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-out xl:hidden ${
          isMenuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[1280px] flex-col gap-1 px-5 py-4 sm:px-6">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-base font-semibold text-slate-700 transition duration-200 hover:bg-slate-50 hover:text-accent"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
              Location & Currency
            </p>

            <div className="space-y-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition duration-200 ${
                    selectedLocation.id === location.id
                      ? "bg-accent text-primary"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                  }`}
                  onClick={() => {
                    setSelectedLocation(location)
                    closeMenu()
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{location.flag}</span>
                    <span>
                      {location.country} ·{" "}
                      <span className="font-bold">{location.currency}</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <a
            href={siteConfig.portalUrl}
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-bold text-primary transition duration-200 hover:bg-accent/90"
          >
            Client Portal
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
