import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certificates from "../data/certificates";
import { useNavigate } from "react-router-dom";
import { LuTriangleAlert } from "react-icons/lu";
import { FILTERS } from "../data/filters";
export default function Order() {
  const [gridCols, setGridCols] = useState(4);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const filtered = useMemo(() => {
    return filter === "All"
      ? certificates
      : certificates.filter((c) => c.type === filter);
  }, [filter]);

  const visible = useMemo(() => {
    return showAll ? filtered : filtered.slice(0, 12);
  }, [filtered, showAll]);

  return (
    <main className="min-h-screen bg-base-300 lg:py-20 py-5 font-sans">
      <div className="mx-auto max-w-6xl px-6 ">
        <div dir="rtl" className="mb-4  lg:flex lg:flex-wrap     gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setFilter(f.key);
                setShowAll(false);
              }}
              className={`btn btn-sm rounded-full transition
                ${filter === f.en ? "btn-neutral" : "btn-dash"}`}
            >
              {f.fa}
            </button>
          ))}
        </div>

        {/* Header */}
        <header className="mb-5 max-w-6xl ">
          <h1 className="text-4xl font-bold justify-end flex  ">ثبت سفارش</h1>
          <div className="flex flex-row justify-between mt-2 bg-base-300 ">
            <button className="btn btn-active">
              {filter ? filter : "all"}
              <div className="badge badge-sm badge-ghost">
                {filtered.length}
              </div>
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 hidden lg:block cursor-pointer rounded-lg ${
                  gridCols === 3
                    ? "bg-primary text-warning"
                    : "bg-ghost hover:bg-primary"
                }`}
              >
                <BsGrid3X3GapFill size={18} />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 hidden lg:block  cursor-pointer rounded-lg ${
                  gridCols === 4
                    ? "bg-primary text-warning"
                    : "bg-ghost hover:bg-primary"
                }`}
              >
                <TfiLayoutGrid4Alt size={18} />
              </button>
            </div>
            <button className="flex justify-end   btn btn-warning">
              <LuTriangleAlert />
              نحوه ثبت سفارش
            </button>
          </div>
        </header>

        {/* Search */}
        {/* <div className="mb-10">
          <input
            type="text"
            placeholder="Search by skill, field, or title..."
            className="input input-bordered w-full max-w-xl"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div> */}

        {/* Grid */}
        <motion.div
          layout
          className={`grid gap-6 grid-cols-1 md:grid-cols-2   
                  ${gridCols === 3 && "lg:grid-cols-3"}
                  ${gridCols === 4 && "lg:grid-cols-4"}
                }`}
        >
          <AnimatePresence>
            {visible.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => setSelected(cert)}
                key={cert.id}
                className="cursor-pointer   "
              >
                <div className="card image-full w-full h-64 rounded-xl overflow-hidden  ">
                  {/* Image */}
                  <figure>
                    <img
                      src={cert.images[0]}
                      alt={cert.title}
                      className="object-cover w-full h-full"
                    />
                  </figure>

                  {/* Overlay content */}
                  <div className="card-body justify-end">
                    {/* Top badges */}
                    <div className="flex justify-between items-center">
                      <span className="badge badge-outline gap-1">
                        {cert.flag} {cert.countryCode}
                      </span>

                      <span
                        className={`badge ${
                          cert.status === "Open"
                            ? "badge-success"
                            : "badge-neutral"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="card-title text-lg leading-tight">
                      {cert.title}
                    </h2>

                    {/* Meta */}
                    <p className="text-sm opacity-80">
                      {cert.type} · {cert.year}
                    </p>

                    {/* Action */}
                    <div className="card-actions justify-end mt-2">
                      <button
                        className="btn btn-sm btn-primary"
                        disabled={cert.status !== "Open"}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-base-100 rounded-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold">Order: {selected.title}</h3>
              <p className="text-sm text-base-content/70 mt-2">
                Field: {selected.type}
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  className="btn btn-primary flex-1"
                  onClick={() => navigate(`/order/${selected.id}`)}
                >
                  Confirm Order
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => setSelected(null)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
