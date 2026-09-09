import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { guitars } from "../data/guitars";
import { formatPrice } from "../utils/formatPrice";
import { siteConfig } from "../config/site";

const statusLabel = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
  "coming-soon": "Coming soon",
} as const;

const statusColour = {
  available: "text-green-400",
  reserved: "text-amber-400",
  sold: "text-red-400",
  "coming-soon": "text-blue-400",
} as const;

export default function GuitarDetail() {
  const { slug, id } = useParams();

  const guitar = guitars.find(
    (g) => (slug && g.slug === slug) || (id && g.id === id)
  );

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setSelectedImage(0);
  }, [slug, id]);

  if (!guitar) {
    return (
      <div className="text-center text-white mt-20 px-5">
        <h2 className="text-2xl font-bold">Guitar not found.</h2>
        <Link to="/" className="text-yellow-400 underline mt-4 block">
          Back to guitars
        </Link>
      </div>
    );
  }

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? guitar.gallery.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === guitar.gallery.length - 1 ? 0 : current + 1
    );
  };

  const enquirySubject =
    guitar.status === "sold"
      ? `Enquiry about a similar guitar to ${guitar.name}`
      : `Enquiry: ${guitar.name}`;

  const enquiryBody =
    guitar.status === "sold"
      ? `Hi,\n\nI'm interested in a guitar similar to the ${guitar.name} shown on your website.\n\n`
      : `Hi,\n\nI'm interested in the ${guitar.name} shown on your website.\n\n`;

  const enquiryHref = `mailto:${siteConfig.enquiryEmail}?subject=${encodeURIComponent(
    enquirySubject
  )}&body=${encodeURIComponent(enquiryBody)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto py-8 sm:py-10 px-4 sm:px-6">

        {/* Back link kept clear and tappable */}
        <div className="mb-5 sm:mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 py-2 text-sm sm:text-base font-semibold text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <span aria-hidden="true">←</span>
            Back to guitars
          </Link>
        </div>

        {/* Logo remains unchanged */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <Link to="/" className="inline-block">
            <img
              src="/FuzzyMonkeyRound_r2.png"
              alt="Fuzzy Logic Guitars Logo"
              className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        <header className="text-center mb-7 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-3">
            {guitar.name}
          </h1>

          {guitar.subtitle && (
            <p className="text-gray-300 text-base sm:text-lg leading-7 mb-3">
              {guitar.subtitle}
            </p>
          )}

          <p className="text-yellow-400 text-2xl font-bold mb-2">
            {formatPrice(guitar.price)}
          </p>

          <p
            className={`text-sm font-bold tracking-[0.14em] uppercase ${
              statusColour[guitar.status]
            }`}
          >
            {statusLabel[guitar.status]}
          </p>

          <div className="mt-6">
            <a
              href={enquiryHref}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-yellow-400 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-black"
            >
              {guitar.status === "sold"
                ? "Enquire about similar guitars"
                : "Enquire about this guitar"}
            </a>
          </div>
        </header>

        {/* Main image: reduced minimum height on phones, desktop behaviour retained */}
        <div className="relative mb-4 bg-black/30 rounded-xl overflow-hidden border border-gray-800">
          <div className="flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[68vh] sm:max-h-[70vh] p-3 sm:p-4">
            <img
              src={guitar.gallery[selectedImage]}
              alt={`${guitar.name} image ${selectedImage + 1}`}
              className="max-w-full max-h-[62vh] sm:max-h-[65vh] object-contain"
            />
          </div>

          {guitar.gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 border border-gray-700 text-white flex items-center justify-center text-2xl hover:border-yellow-400/60 hover:bg-black transition-colors"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 border border-gray-700 text-white flex items-center justify-center text-2xl hover:border-yellow-400/60 hover:bg-black transition-colors"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip remains swipeable on phones */}
        <div className="flex gap-3 overflow-x-auto pb-3 mb-4 justify-start sm:justify-center snap-x">
          {guitar.gallery.map((src, index) => (
            <button
              type="button"
              key={src}
              onClick={() => setSelectedImage(index)}
              aria-label={`View image ${index + 1}`}
              className={`snap-start flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "border-yellow-400"
                  : "border-gray-800 opacity-70 hover:opacity-100 hover:border-gray-600"
              }`}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-contain bg-black"
              />
            </button>
          ))}
        </div>

        <p className="text-center text-sm font-medium text-gray-400 mb-8 sm:mb-10">
          {selectedImage + 1} / {guitar.gallery.length}
        </p>

        <section className="bg-gray-800/90 border border-gray-700 p-5 sm:p-7 rounded-xl shadow-lg mb-5 sm:mb-6">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400 tracking-tight">
            Overview
          </h2>
          <p className="text-gray-200 text-base sm:text-lg leading-7">
            {guitar.overview}
          </p>
        </section>

        {guitar.specification.length > 0 && (
          <section className="bg-gray-800/90 border border-gray-700 p-5 sm:p-7 rounded-xl shadow-lg mb-5 sm:mb-6">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400 tracking-tight">
              Specification
            </h2>

            <dl className="divide-y divide-gray-700">
              {guitar.specification.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-3.5"
                >
                  <dt className="font-semibold text-gray-300">
                    {item.label}
                  </dt>
                  <dd className="text-gray-100 leading-6">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {guitar.condition && (
          <section className="bg-gray-800/90 border border-gray-700 p-5 sm:p-7 rounded-xl shadow-lg mb-5 sm:mb-6">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400 tracking-tight">
              Condition
            </h2>
            <p className="text-gray-200 text-base sm:text-lg leading-7">
              {guitar.condition}
            </p>
          </section>
        )}

        {guitar.playingCondition && (
          <section className="bg-gray-800/90 border border-gray-700 p-5 sm:p-7 rounded-xl shadow-lg mb-5 sm:mb-6">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400 tracking-tight">
              Playing condition
            </h2>
            <p className="text-gray-200 text-base sm:text-lg leading-7">
              {guitar.playingCondition}
            </p>
          </section>
        )}

        {guitar.notes && (
          <section className="bg-gray-800/90 border border-gray-700 p-5 sm:p-7 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400 tracking-tight">
              Notes
            </h2>
            <p className="text-gray-200 text-base sm:text-lg leading-7">
              {guitar.notes}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
