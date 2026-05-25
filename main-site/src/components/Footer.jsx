function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black">
              Zenvik<span className="text-accent">.</span>
            </h3>

            <p className="mt-5 leading-relaxed text-slate-400">
              Modern hosting, software, branding, marketing,
              and enterprise ICT solutions for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold">Services</h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>Hosting & Cloud</li>
              <li>Software Development</li>
              <li>Website Development</li>
              <li>Marketing & Branding</li>
              <li>ICT Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Company</h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Portfolio</li>
              <li>Client Portal</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Get In Touch</h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>info@zenviktechnologies.com</li>
              <li>support@zenviktechnologies.com</li>
              <li>portal.zenviktechnologies.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © 2026 Zenvik Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
