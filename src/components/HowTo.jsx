import React from "react";
import { HowToSteps } from "../data/howto";
export default function HowTo() {
  return (
    <section className="py-20  max-w-6xl  mx-auto bg-base-300 font-serif ">
      <div className="max-w-5xl mx-auto px-4 ">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3">راهنمای ثبت سفارش</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            A clear, step-by-step overview of our process from consultation to
            final delivery.
          </p>
        </div>

        {/* Timeline */}
        <ul className="timeline timeline-vertical">
          <li>
            <div dir="rtl" className="timeline-end timeline-box     ">
              <span className="badge badge-primary     ">مرحله1</span>
              <p className="lg:text-lg text-sm   ">
                حل ارائه گردد و تجربیات چندین ساله خودمان را در اختیار شما قرار
                مشاوره قبل از انجام کار به شما مشاوره داده می شود تا بهترین راه
                دهیم.
              </p>
            </div>

            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="w-3 h-3 rounded-full bg-primary"></span>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div dir="rtl" className="timeline-start timeline-box">
              <span className="badge badge-primary mb-2">مرحله2</span>
              <p className="lg:text-lg text-sm">
                پیشنهاد و ارائه موضوعات به روز و جدید و همایش ها و مجالات معتبر
                در رشته و گرایش شما و انتخاب عنوان مقاله توسط شما.
              </p>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="w-3 h-3 rounded-full bg-primary"></span>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div dir="rtl" className="timeline-end timeline-box">
              <span className="badge badge-primary mb-2">مرحله3</span>
              <p className="lg:text-lg text-sm">
                نگارش مقاله، فرمت بندی، ساخت پنل به نام شما، ارسال مقاله، پیگیری
                داوری مقالات و تا پذیرش نهایی توسط ما انجام می شود.
              </p>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="w-3 h-3 rounded-full bg-primary"></span>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div dir="rtl" className="timeline-start timeline-box">
              <span className="badge badge-primary mb-2">مرحله 4</span>
              <p className="lg:text-lg text-sm">
                پذیرش نهایی را به شما تحویل می دهیم و بعد از آن هزینه را از شما
                دریافت می کنیم. بعد از آن هم در کنار شما هستیم.
              </p>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="w-3 h-3 rounded-full bg-primary"></span>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div className="timeline-end timeline-box text-center">
              <span className="text-xl">⭐ ⭐ ⭐</span>
              <p className="mt-2 font-medium">Your success is our priority</p>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
                <hr className="bg-primary" />
              </svg>
              <span className="w-3 h-3 rounded-full bg-primary"></span>
            </div>
          </li>
        </ul>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn btn-primary btn-wide rounded-full">
            ثبت سفارش
          </button>
        </div>
      </div>
    </section>
  );
}
