import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  {
    src: "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766760580/terren-hurst-blgOFmPIlr0-unsplash_ui0zjw.jpg",
    alt: "رویداد دانشگاهی و کنفرانس علمی در برلین آلمان",
  },
  {
    src: "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766760581/alexandre-pellaes-6vAjp0pscX0-unsplash_yutytp.jpg",
    alt: "کنفرانس علمی بین‌المللی با حضور پژوهشگران و اساتید دانشگاه",
  },
  {
    src: "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766760582/headway-F2KRf_QfCqw-unsplash_bkcxu3.jpg",
    alt: "ثبت مقاله در ژورنال‌های معتبر بین‌المللی",
  },
  {
    src: "https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766760581/the-climate-reality-project-Hb6uWq0i4MI-unsplash_ziwue0.jpg",
    alt: "فرصت ارائه مقاله در کنفرانس‌های معتبر اروپایی",
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

  const current = HERO_IMAGES[index];

  return (
    <section className="relative min-h-screen flex items-center justify-center lg:pt-10 font-serif">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-primary/40 to-black/40 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 lg:glass lg:rounded-3xl lg:max-w-6xl w-full lg:mx-4 lg:p-6 md:p-10"
      >
        <div className="relative lg:rounded-2xl overflow-hidden shadow-2xl">
          {/* Image slider */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:h-[420px] h-screen object-cover"
            />
          </AnimatePresence>

          {/* Overlay */}
          <div
            dir="rtl"
            className="absolute inset-0 bg-black/45 flex items-center"
          >
            <div className="max-w-xl px-6 text-white">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                کنفرانس‌ها و ژورنال‌های بین‌المللی
              </h1>

              <p className="mt-4 text-white/80 text-lg">{current.alt}</p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/order" className="btn btn-primary rounded-full">
                  ثبت سفارش مقاله
                </Link>

                <Link
                  to="/certificates"
                  className="btn btn-outline btn-white rounded-full"
                >
                  مشاهده مقالات ثبت‌شده
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
