import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroGlassLarge() {
  return (
    <section className="relative min-h-screen  flex items-center justify-center lg:overflow-hidden pt-8 ">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/40 via-secondary/10 to-accent/10 blur-3xl   " />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 lg:glass rounded-3xl lg:max-w-6xl w-full lg:mx-6 lg:p-8 md:p-12 "
      >
        <div className="grid md:grid-cols-2 lg:gap-10 gap-3  items-center">
          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            src="https://res.cloudinary.com/dv3quprrl/image/upload/f_auto,q_auto/v1766397013/image1_pqaxkx.jpg"
            alt="imans portrait"
            className="w-full lg:h-[420px] h-full px-1 lg:px-0 lg:object-cover   rounded-2xl shadow-2xl"
          />

          {/* TEXT */}
          <div>
            <h1 className="text-4xl px-2 lg:text-5xl font-bold leading-tight">
              University Proffesor <br />
            </h1>

            <p className="lg:mt-6 px-2 text-base-content/70 text-lg mt-2">
              With More Than 200 Published Articles
            </p>

            <div className="lg:mt-8 flex gap-4 px-2 mt-2">
              <button className="btn btn-primary rounded-full">
                View Projects
              </button>

              <button className="btn btn-error rounded-full">
                <Link to="/order">Order A Certificate</Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
