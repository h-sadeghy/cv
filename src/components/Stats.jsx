import React, { useEffect, useState } from "react";

export default function Stats() {
  const [count, setCount] = useState(0);
  const total = 200;

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = Math.ceil(total / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= total) {
        setCount(total);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="mt-6 px-4">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            stats stats-vertical lg:stats-horizontal
            bg-base-200 shadow
            w-full
          "
        >
          {/* Stat 1 */}
          <div className="stat text-center lg:text-left">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="stat-title">Total Publications</div>
            <div className="stat-value text-primary text-4xl">+{count}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          {/* Stat 2 */}
          <div className="stat text-center lg:text-left">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">Customers</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          {/* Stat 3 */}
          <div className="stat text-center lg:text-left">
            <div className="stat-figure text-secondary">
              <div className="avatar avatar-online">
                <div className="w-14 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Ongoing projects</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </section>
  );
}
