import { useState, useRef, useEffect } from "react"
import { locations } from "../data/locations"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Hosting", href: "#hosting" },
  { label: "Software", href: "#software" },
  { label: "Contact", href: "#contact" },
]

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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#043a7e]/95 shadow-[0_18px_45px_rgba(4,58,126,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight text-white" onClick={closeMenu}>
          Zenvik<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/85 transition duration-200 hover:text-[#dfa408]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="relative" ref={locationDropdownRef}>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition duration-200 hover:border-white/40 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#dfa408] focus:ring-offset-2 focus:ring-offset-[#043a7e]"
              onClick={() =>
                setIsLocationDropdownOpen((open) => !open)
              }
              aria-label="Select country and currency"
              aria-expanded={isLocationDropdownOpen}
              aria-controls="location-dropdown-menu"
            >
              <span>{selectedLocation.flag}</span>
              <span className="hidden sm:inline">
                {selectedLocation.currency}
              </span>
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
                className="absolute right-0 top-full z-50 mt-2 min-w-56 overflow-hidden rounded-2xl border border-white/20 bg-[#032550] shadow-2xl backdrop-blur-xl"
              >
                <div className="p-2">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      type="button"
                      className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition duration-200 ${
                        selectedLocation.id === location.id
                          ? "bg-[#dfa408] text-[#043a7e]"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      } focus:outline-none focus:ring-2 focus:ring-[#dfa408]`}
                      onClick={() => {
                        setSelectedLocation(location)
                        setIsLocationDropdownOpen(false)
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-3">
                          <span className="text-lg">{location.flag}</span>
                          <span>
                            {location.country} ·{" "}
                            <span className="font-bold">
                              {location.currency}
                            </span>
                          </span>
                        </span>
                        {selectedLocation.id === location.id && (
                          <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="https://portal.zenviktechnologies.com"
            className="rounded-full bg-[#dfa408] px-5 py-2.5 text-sm font-semibold text-[#043a7e] shadow-sm shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:bg-[#f0b21a] focus:outline-none focus:ring-2 focus:ring-[#dfa408] focus:ring-offset-2 focus:ring-offset-[#043a7e]"
          >
            Client Portal
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition duration-200 hover:border-[#dfa408]/70 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#dfa408] focus:ring-offset-2 focus:ring-offset-[#043a7e] md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}</span>
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
        className={`overflow-hidden border-t border-white/10 bg-[#043a7e]/98 transition-all duration-300 ease-out md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/90 transition duration-200 hover:bg-white/10 hover:text-[#dfa408] focus:outline-none focus:ring-2 focus:ring-[#dfa408] focus:ring-offset-2 focus:ring-offset-[#043a7e]"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/70">
              Location & Currency
            </p>
            <div className="space-y-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition duration-200 ${
                    selectedLocation.id === location.id
                      ? "bg-[#dfa408] text-[#043a7e]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  } focus:outline-none focus:ring-2 focus:ring-[#dfa408] focus:ring-offset-2 focus:ring-offset-[#043a7e]`}
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
            href="https://portal.zenviktechnologies.com"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#dfa408] px-5 py-3 text-sm font-semibold text-[#043a7e] transition duration-200 hover:bg-[#f0b21a] focus:outline-none focus:ring-2 focus:ring-[#dfa408] focus:ring-offset-2 focus:ring-offset-[#043a7e]"
          >
            Client Portal
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
