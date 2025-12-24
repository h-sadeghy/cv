import { AnimatePresence, motion } from "motion/react";

import React, { useState } from "react";

export default function Gallery() {
  const images = [
    "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397055/c26_nmxjw8.jpg",
    "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397052/c31_x8nhtw.jpg",
    "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397052/c31_x8nhtw.jpg",
    "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397051/c30_zv9cyn.jpg",
    "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397048/c24_ruhzex.jpg",
    "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397052/c27_iaq3xu.jpg",
    "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397047/c25_fdlyil.jpg",
    "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397046/c23_cgqahz.jpg",
  ];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  return (
    <main className="min-h-screen bg-base-100 py-20 ">
      <div className="mx-auto lg:max-w-5xl px-6">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-base-300 ">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt="showcase"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "backIn" }}
                className="w-full h-[420px] object-contain "
              />
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            <button
              onClick={prev}
              className="btn btn-circle btn-sm bg-base-100/80 backdrop-blur hover:bg-base-100"
            >
              ❮
            </button>
            <button
              onClick={next}
              className="btn btn-circle btn-sm bg-base-100/80 backdrop-blur hover:bg-base-100"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
