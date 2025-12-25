import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { certificates } from "../data/certificates";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const cert = certificates.find((c) => c.id === Number(id));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-base-content/60">Certificate not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-100 py-15">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost btn-lg mb-2"
        >
          ← Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-2"
        >
          {/* Preview */}
          <div className="flex items-center justify-center">
            <div className="card bg-base-100 border border-base-300 w-full max-w-md">
              <div className="card-body p-6 items-center text-center">
                <img
                  onClick={() => setPreview(cert)}
                  src={cert.images[0]}
                  alt={cert.title}
                  className="max-h-80 cursor-pointer object-contain rounded-md bg-base-200 p-4"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold leading-tight">{cert.title}</h1>

            <p className="mt-2 text-base-content/70">
              Issued by <span className="font-medium">{cert.issuer}</span>
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="badge badge-outline">{cert.type}</span>
              <span className="badge badge-ghost">{cert.year}</span>
            </div>

            {/* Description */}
            <div className="mt-6 space-y-3 text-base-content/80">
              <p>
                This certificate validates professional knowledge and practical
                experience in <strong>{cert.type}</strong>. It is suitable for
                academic, professional, and portfolio use.
              </p>
              <p>
                All certificates are reviewed for accuracy and delivered in
                high-quality digital format.
              </p>
            </div>

            {/* Order box */}
            <div className="mt-8 card bg-base-200 border border-base-300">
              <div className="card-body p-6">
                <h3 className="font-semibold">Place an Order</h3>

                <p className="text-sm text-base-content/70 mt-2">
                  After ordering, you will be contacted for verification and
                  delivery details.
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    className="btn btn-primary flex-1"
                    onClick={() => {
                      // TODO: connect API
                      alert("Order placed (mock)");
                    }}
                  >
                    Order Certificate
                  </button>

                  <button
                    className="btn btn-outline"
                    onClick={() => navigate("/order")}
                  >
                    Browse More
                  </button>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <p className="mt-4 text-xs text-base-content/50">
              ⚠️ Orders are processed manually. Delivery time may vary based on
              verification requirements.
            </p>
          </div>
        </motion.div>
        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreview(null)}
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
                  onClick={() => setPreview(null)}
                  className="absolute  -top-2 -right-4   rounded-full"
                >
                  <AiFillCloseCircle
                    className="size-8 text-white btn btn-circle btn-dash"
                    title="Close"
                  />
                </button>

                <img
                  src={preview.images[0]}
                  alt={preview.title}
                  className="w-full max-h-[85vh] object-contain rounded-xl bg-base-100"
                />

                <div className="absolute bottom-0 text-center text-white bg-black/80 w-full h-12 ">
                  <p className="font-medium">{preview.title}</p>
                  <p className="text-sm opacity-70">
                    {preview.issuer} · {preview.year}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
