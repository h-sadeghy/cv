import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileNavbar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-transparent backdrop-blur-xs border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl lg:px-2 px-2 h-16 flex items-center justify-between ">
          {/* Logo / Name */}
          <div className="font-semibold text-lg tracking-tight">
            <a href="/">
              Iman<span className="text-primary">.</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center mx-auto">
            <div className="relative flex flex-row gap-8 text-sm font-sans text-base-content">
              <Link to="/cv" className="relative group py-2">
                <span className="transition-colors group-hover:text-primary">
                  CV
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathName === "/cv" ? "w-full bg-secondary" : ""
                  }`}
                />
              </Link>

              <Link to="/certificates" className="relative group py-2">
                <span className="transition-colors group-hover:text-primary">
                  Certificates
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathName === "/certificates" ? "w-full bg-secondary" : ""
                  }`}
                />
              </Link>

              <Link to="/gallery" className="relative group py-2">
                <span className="transition-colors group-hover:text-primary">
                  Gallery
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathName === "/gallery" ? "w-full bg-secondary" : ""
                  }`}
                />
              </Link>

              <Link to="/order" className="relative group py-2">
                <span className="transition-colors group-hover:text-primary">
                  Order
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathName === "/order" ? "w-full bg-secondary" : ""
                  }`}
                />
              </Link>
            </div>
          </nav>

          {/* CTA */}
          <div className="justify-end items-center flex gap-1">
            <a
              href="/order"
              className="text-md font-bold px-4 py-2 rounded-full
            bg-primary text-primary-content hover:bg-primary transition hidden lg:block"
            >
              ثبت سفارش+
            </a>
            <div className="flex justify-endm ">
              <ThemeToggle />

              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
