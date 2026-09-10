import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <main className="max-w-4xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 py-2 text-sm sm:text-base font-semibold text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <span aria-hidden="true">←</span>
            Back to guitars
          </Link>
        </div>

        <section className="bg-gray-800/90 border border-gray-700 p-6 sm:p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 tracking-tight mb-6">
            About Fuzzy Logic Guitars
          </h1>

          <div className="space-y-5 text-gray-200 text-base sm:text-lg leading-7">
            <p>
              Fuzzy Logic Guitars is an independent catalogue of interesting,
              unusual and overlooked guitars, with an emphasis on careful
              presentation, useful detail and honest condition reporting.
            </p>

            <p>
              We are interested in the instruments themselves: what they are,
              how they were made, what makes a particular example worth a closer
              look, and the details that help a buyer make an informed decision.
            </p>

            <p>
              Each guitar is presented with clear photography, specification
              information, condition notes and playing-condition details where
              these can be verified.
            </p>

            <p>
              The site is currently catalogue-led, with direct enquiries for
              available guitars. Sold instruments remain visible as part of the
              archive, helping to build a useful record of guitars that have
              passed through Fuzzy Logic.
            </p>
          </div>

          <div className="mt-8 pt-7 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              What we focus on
            </h2>

            <ul className="space-y-3 text-gray-200 text-base sm:text-lg leading-7">
              <li>Interesting, unusual and overlooked guitars</li>
              <li>Careful identification and research</li>
              <li>Detailed, useful photography</li>
              <li>Clear condition and playing-condition information</li>
              <li>Direct, straightforward enquiries</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
