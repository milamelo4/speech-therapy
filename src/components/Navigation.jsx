import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-none backdrop-blur-md shadow-md border-b border-border'
          : 'bg-white/90 backdrop-blur-md shadow-md border-b border-border'
     }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 sm:pt-2 pt-6">
      <div className="flex justify-between items-center py-4">
        {/* Brand */}
        <motion.div
          className="text-lg sm:text-xl font-bold text-foreground hover:text-dark-lavender tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
        <div className="flex items-center gap-2 text-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            className="w-7 h-7 text-[var(--foreground)]"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="100"
          >
            <g transform="translate(0,300) scale(0.1,-0.1)">
              <path
                d="M1320 2931 c-104 -33 -201 -118 -248 -218 -24 -52 -27 -70 -27 -163
                0 -171 -5 -164 388 -557 l331 -333 326 327 c353 356 368 375 391 505 29 163
                -66 345 -218 416 -52 24 -69 27 -168 27 -102 0 -114 -2 -175 -31 -36 -17 -87
                -50 -113 -74 l-48 -43 -37 35 c-89 84 -176 118 -295 117 -45 0 -93 -4 -107 -8z
                m261 -63 c31 -14 82 -47 113 -72 31 -25 60 -46 65 -46 4 0 26 14 47 30 130
                100 195 125 313 118 260 -16 404 -284 280 -518 -22 -41 -105 -132 -329 -355
                -292 -292 -300 -299 -324 -286 -13 8 -155 145 -314 305 -344 347 -347 351
                -347 511 0 86 3 106 24 145 75 141 180 203 336 197 60 -2 94 -10 136 -29z"
              />
              <path
                d="M862 1426 c-29 -8 -87 -30 -129 -51 -69 -34 -106 -66 -392 -345 -174
                -169 -321 -313 -328 -321 -10 -13 42 -69 307 -334 l320 -320 108 108 107 107
                570 0 c348 0 587 4 614 11 118 27 178 76 387 315 49 56 193 217 319 358 127
                142 236 271 243 288 10 23 10 38 2 64 -17 51 -75 78 -165 78 -127 0 -150 -16
                -749 -518 l-80 -66 -284 2 -285 3 -20 27 c-19 25 -19 28 -3 52 l16 26 198 0
                c234 0 280 10 348 72 108 99 84 256 -50 326 -50 26 -56 26 -291 32 -235 5
                -241 6 -305 34 -114 49 -194 66 -304 65 -56 0 -125 -6 -154 -13z m286 -36 c24
                -6 85 -27 135 -47 l92 -37 236 -6 c227 -6 238 -7 285 -31 87 -45 118 -130 78
                -211 -43 -88 -111 -108 -367 -108 l-189 0 -29 -29 c-41 -41 -39 -83 5 -127
                l34 -34 284 0 c258 0 286 2 313 19 17 10 134 105 260 210 327 274 387 317 468
                342 59 18 73 19 117 9 61 -15 105 -52 91 -77 -8 -15 -347 -399 -500 -568 -20
                -22 -90 -100 -155 -172 -106 -120 -125 -137 -194 -170 l-76 -38 -597 -5 -598
                -5 -94 -92 c-52 -51 -98 -93 -103 -93 -13 0 -574 563 -574 575 0 16 538 550
                596 592 60 44 132 77 204 97 64 17 215 20 278 6z"
              />
            </g>
          </svg>
          <a href="#" title='Home'>Cindy Melo Rodgerson, M.S. CCC-SLP</a>
        </div>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {['About', 'Services', 'Rates', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            whileHover={{ y: -2 }}
          >
            {item}
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-foreground hover:text-primary"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
    {/* Mobile Menu (outside row, under header) */}
    {isMenuOpen && (
      <motion.div
        className="md:hidden bg-white border-t border-border px-6 py-4 space-y-4"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        {["About", "Services", "Rates", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block text-foreground hover:text-primary font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </motion.div>
    )}
  </div>
</motion.nav>
  );
}
