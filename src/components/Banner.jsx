import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    alt: "International Academic Conference",
  },
  {
    src: "https://images.unsplash.com/photo-1457694587812-e8bf29a43845",
    alt: "Scientific Journals and Research Articles",
  },
  {
    src: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    alt: "Berlin Academic Event",
  },
];

export default function HeroGlassLarge() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/90 to-accent/90 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 lg:glass rounded-3xl max-w-6xl w-full mx-4 p-6 md:p-10"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Images */}
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={HERO_IMAGES[index].src}
              alt={HERO_IMAGES[index].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[420px] object-cover"
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45 flex items-center">
            <div className="max-w-xl px-6 text-white">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                International Conference
                <br />
                Berlin, Germany — 2026
              </h1>

              <p className="mt-4 text-white/80 text-lg">
                Open for journal submissions, research articles, and conference
                papers. Professional academic support from submission to
                acceptance.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/order" className="btn btn-primary rounded-full">
                  Place an Order
                </Link>

                <Link
                  to="/certificates"
                  className="btn btn-outline btn-white rounded-full"
                >
                  View Accepted Journals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
