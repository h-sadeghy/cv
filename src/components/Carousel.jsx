import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function ImageShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="py-20 bg-base-300 ">
      <div className="mx-auto lg:max-w-6xl lg:px-6 lg:border-1 border-primary rounded-2xl">
        {/* Header */}
        <div className="lg:mb-10 flex items-end justify-between px-2 lg:px-0">
          <div>
            <h2 className="text-2xl font-semibold">Certificates</h2>
            <p className="text-base-content/60 mt-2">
              A few snapshots from my published Certificates
            </p>
          </div>

          <a
            href="/certificates"
            className="btn btn-sm btn-outline rounded-full"
          >
            View more
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl  lg:w-md mx-auto  ">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt="showcase"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "linear" }}
                className="w-full h-[420px] object-contain "
              />
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute inset-y-0 left-30 right-30  items-center justify-between px-4 hidden lg:flex">
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
    </section>
  );
}
