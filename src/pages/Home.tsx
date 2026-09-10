import { guitars } from "../data/guitars";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

const statusLabel = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
  "coming-soon": "Coming soon",
} as const;

const statusStyles = {
  available: "text-green-400",
  reserved: "text-amber-400",
  sold: "text-red-400",
  "coming-soon": "text-blue-400",
} as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">

      {/* Brand header */}
      <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center px-5 sm:px-6">
        <img
          src="/FuzzyMonkeyRound_r2.png"
          alt="Fuzzy Logic Logo"
          className="w-32 h-32 mb-5 sm:mb-6 rounded-full border-4 border-yellow-400 shadow-lg"
        />

        <img
          src="/branding/fuzzy-logic-guitars.svg"
          alt="Fuzzy Logic Guitars"
          className="w-full max-w-3xl h-auto"
        />

        <p className="text-gray-300 mt-3 text-lg sm:text-xl font-medium tracking-wide">
          Tone &amp; Attitude
        </p>

        <Link
          to="/about"
          className="mt-5 inline-flex items-center justify-center text-sm sm:text-base font-semibold uppercase tracking-[0.12em] text-gray-400 hover:text-yellow-400 transition-colors"
        >
          About us
        </Link>
      </div>

      {/* Guitar catalogue */}
      <main
        id="guitars"
        className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
      >
        {guitars.map((guitar) => (
          <Link
            key={guitar.id}
            to={`/guitars/${guitar.slug}`}
            className="group bg-gray-800/90 border border-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-200 sm:hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-xl"
          >
            <div className="relative bg-black overflow-hidden">
              <img
                src={guitar.img}
                alt={guitar.name}
                className={`w-full h-64 object-cover transition-opacity duration-200 ${
                  guitar.status === "sold" ? "opacity-75" : ""
                }`}
              />

              <div className="absolute top-3 right-3">
                <span
                  className={`inline-flex items-center rounded-md bg-black/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-sm ${
                    statusStyles[guitar.status]
                  }`}
                >
                  {statusLabel[guitar.status]}
                </span>
              </div>
            </div>

            <div className="p-5 text-center">
              <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors">
                {guitar.name}
              </h2>

              {guitar.subtitle && (
                <p className="text-gray-300 text-base mt-2 leading-6">
                  {guitar.subtitle}
                </p>
              )}

              <p className="text-yellow-400 text-xl font-bold mt-4">
                {formatPrice(guitar.price)}
              </p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}