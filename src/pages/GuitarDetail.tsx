import { useParams, Link } from "react-router-dom";
import { guitars } from "../data/guitars";

export default function GuitarDetail() {
  const { id } = useParams();
  const guitar = guitars.find((g) => g.id === id);

  if (!guitar) {
    return (
      <div className="text-center text-white mt-20">
        <h2 className="text-2xl">Guitar not found.</h2>
        <Link to="/" className="text-yellow-400 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto py-12 px-6">

        {/* 🔹 Clickable logo linking to homepage */}
        <div className="flex justify-center mb-10">
          <Link to="/" className="inline-block">
            <img
              src="/FuzzyMonkeyRound_r2.png"
              alt="Fuzzy Logic Guitars Logo"
              className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Title + price */}
        <h1 className="text-4xl font-bold mb-4 text-center">{guitar.name}</h1>
        <p className="text-yellow-400 text-lg mb-6 text-center">{guitar.price}</p>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {guitar.gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${guitar.name} detail ${i + 1}`}
              className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* Info section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
            About this guitar
          </h2>
          <p className="text-gray-300 leading-relaxed">{guitar.description}</p>
        </div>
      </div>
    </div>
  );
}
