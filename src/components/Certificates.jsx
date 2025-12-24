import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import certificates from "../data/certificates";
const FILTERS = [
  "All",
  "Electronics Engineering",
  "Biomedical Engineering",
  "Instrumentation",
  "Civil Engineering",
  "Industrial Engineering",
  "Computer Science",
  "Materials Science",
  "Applied Mathematics",
  "Mechanical Engineering",
];

export default function Certificates() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [previewCert, setPreviewCert] = useState(null);

  const filtered = useMemo(() => {
    return filter === "All"
      ? certificates
      : certificates.filter((c) => c.type === filter);
  }, [filter]);

  const visible = useMemo(() => {
    return showAll ? filtered : filtered.slice(0, 12);
  }, [filtered, showAll]);

  return (
    <main className="min-h-screen bg-base-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Certificates</h1>
          <p className="mt-4 text-base-content/70 max-w-2xl">
            Professional training and certifications completed over the years.
          </p>
        </header>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setShowAll(false);
              }}
              className={`btn btn-sm rounded-full transition
                ${filter === f ? "btn-primary" : "btn-dash"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="btn btn-ghost">
          {filter ? filter : "all"}{" "}
          <div className="badge badge-sm">{filtered.length}</div>
        </button>

        {/* Grid */}
        <motion.div layout className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => setPreviewCert(cert)}
                title="Click for details"
                className="cursor-pointer border border-base-300 rounded-xl p-5
                           hover:shadow-md transition-shadow card h-82 "
              >
                <figure className="px-5 ">
                  <img
                    src={cert.images[0]}
                    alt={cert.title}
                    className="  h-36 object-contain rounded-md bg-base-200"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{cert.title}</h2>
                  <p>
                    {cert.issuer} {cert.year} {cert.type}
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more */}
        {filtered.length > 12 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="btn btn-outline rounded-full"
            >
              {showAll ? "Show less" : "Show all certificates"}
            </button>
          </div>
        )}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCert(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setPreviewCert(null)}
                className="absolute  -top-2 -right-4   rounded-full"
              >
                <AiFillCloseCircle
                  className="size-8 text-white btn btn-circle btn-dash"
                  title="Close"
                />
              </button>

              <img
                src={previewCert.images[0]}
                alt={previewCert.title}
                className="w-full max-h-[85vh] object-contain rounded-xl bg-base-100"
              />

              <div className="absolute bottom-0 text-center text-white bg-black/80 w-full h-12 ">
                <p className="font-medium">{previewCert.title}</p>
                <p className="text-sm opacity-70">
                  {previewCert.issuer} · {previewCert.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
