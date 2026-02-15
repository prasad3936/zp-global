import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-black/70 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-gray-400">
        {/* Company Info */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">
            ZP Global Systems
          </h2>
          <p className="text-sm leading-relaxed">
            Engineering scalable digital infrastructure platforms across
            healthcare, governance, retail and financial ecosystems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/technology" className="hover:text-white">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Platforms</h3>
          <ul className="space-y-2 text-sm">
            <li>MediSync</li>
            <li>Matdar</li>
            <li>Stock8Ease</li>
            <li>Ledger</li>
          </ul>
        </div>

        {/* Social / Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/prasad-zungare/"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@zpglobalsystems.com"
                className="hover:text-white"
              >
                contact@zpglobalsystems.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ZP Global Systems. All rights reserved.{" "}
        <br />
        <span className="text-gray-600">Company registration in progress.</span>
      </div>
    </footer>
  );
}
