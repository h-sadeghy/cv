import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certificates from "../data/certificates";
import { useNavigate } from "react-router-dom";
import { LuTriangleAlert } from "react-icons/lu";
import { FILTERS } from "../data/filters";
export default function Order() {
  const [gridCols, setGridCols] = useState(3);
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
    <main className="min-h-screen bg-base-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setFilter(f.key);
                setShowAll(false);
              }}
              className={`btn btn-sm rounded-full transition
                ${filter === f.en ? "btn-neutral" : "btn-active"}`}
            >
              {f.en}/{f.fa}
            </button>
          ))}
        </div>

        {/* Header */}
        <header className="mb-5 max-w-6xl ">
          <h1 className="text-4xl font-bold">Order Certificates</h1>
          <div className="flex flex-row justify-between mt-2 ">
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
            <button className="flex justify-end  btn btn-warning">
              <LuTriangleAlert />
              How To
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
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                className="card bg-base-100 border border-base-300"
              >
                <div className="card-body p-6 flex flex-col ">
                  <div>
                    <h3 className="font-semibold line-clamp-2">{cert.title}</h3>
                    <p className="text-sm text-base-content/70">
                      {cert.issuer}
                    </p>
                    <span className="badge badge-outline mt-2">
                      {cert.type}
                    </span>
                  </div>

                  <div className="mt-4 flex-1 flex items-center justify-center">
                    <img
                      src={cert.images[0]}
                      alt={cert.title}
                      className="max-h-32 object-contain"
                    />
                  </div>

                  <div className="card-actions mt-4">
                    <button
                      className="btn btn-primary btn-sm w-full"
                      onClick={() => setSelected(cert)}
                    >
                      Order Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Order Modal */}
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
