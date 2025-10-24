import { guitars } from "../data/guitars";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <img
          src="/FuzzyMonkeyRound_r2.png"
          alt="Fuzzy Logic Logo"
          className="w-32 h-32 mb-6 rounded-full border-4 border-yellow-400 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide">
          Fuzzy Logic Guitars
        </h1>
        <p className="text-gray-300 mt-2 text-lg">
          Tone for the bold and fearless
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {guitars.map((g) => (
          <Link
            key={g.id}
            to={`/guitar/${g.id}`}
            className="relative bg-gray-800 border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={g.img}
              alt={g.name}
              className={`w-full h-60 object-cover ${g.sold ? "opacity-60" : ""}`}
            />
            {g.sold && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="text-3xl font-extrabold text-red-500 rotate-[-12deg]">
                  SOLD
                </span>
              </div>
            )}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{g.name}</h3>
              <p className="text-yellow-400 text-lg mt-1">{g.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
