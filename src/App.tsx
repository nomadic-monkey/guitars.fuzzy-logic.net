import React from "react";
import logo from "/FuzzyMonkeyRound_r2.png";

// Helper for guaranteed placeholder images
const ph = (w = 800, h = 600, text = "Guitar") =>
  `https://placehold.co/${w}x${h}?text=${encodeURIComponent(text)}`;

export default function App() {
  const guitars = [
    { name: "Fender Stratocaster", price: "$1,299", img: "https://cdn.mos.cms.futurecdn.net/9exiaJq5Sii684VPiEcwB8-1920-80.jpg", sold: false },
    { name: "Gibson Les Paul",     price: "$1,799", img: "https://cdn.mos.cms.futurecdn.net/ksJN7VBaRFadudkqNmN5uR-650-80.jpg", sold: false },
    { name: "Telecaster Custom",   price: "$1,199", img: "https://cdn.mos.cms.futurecdn.net/PfGEsLmBxhRFS8kPJvhHU4-650-80.jpg", sold: false },
    { name: "SG Vintage",          price: "$2,099", img: "https://truevintageguitar.com/cdn/shop/files/1963GibsonLesPaulStandardSG-18.jpg", sold: true },
    { name: "Jazzmaster",          price: "$1,499", img: "https://guitar.com/wp-content/uploads/2022/11/Fender-American-Vintage-Jazzmaster-HERO@2560x1625-1068x678.jpg", sold: false },
    { name: "Flying V",            price: "$1,899", img: "https://www.gibson.com/cdn/shop/files/1959-Gibson-Flying-V-9-1707_44-1024x683.jpg", sold: true },
  ];

  // Auto-fallback to placeholder if image fails to load
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, name: string) => {
    e.currentTarget.src = ph(800, 600, name);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white flex flex-col">
      {/* Header / Banner */}
      <header className="flex flex-col items-center justify-center py-12 text-center">
        <img
          src={logo}
          alt="Fuzzy Logic Logo"
          className="w-32 h-32 mb-6 rounded-full border-4 border-yellow-400 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide">
          Fuzzy Logic Guitars
        </h1>
        <p className="text-gray-300 mt-2 text-lg">
          Electric tone for the bold and curious
        </p>
      </header>

      {/* Product Grid */}
      <main className="flex-grow max-w-6xl mx-auto py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {guitars.map((g) => (
          <div
            key={g.name}
            className="relative bg-gray-800 border border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={g.img}
              alt={g.name}
              onError={(e) => handleImgError(e, g.name)}
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
              {!g.sold && (
                <button className="mt-3 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition">
                  Buy Now
                </button>
              )}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Fuzzy Logic Guitars — All Rights Reserved
      </footer>
    </div>
  );
}
