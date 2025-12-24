import { Link } from "react-router-dom";

export default function MobileDrawer() {
  return (
    <div className="drawer md:hidden z-50">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle    " />

      {/* Hamburger button */}
      <div className="drawer-content">
        <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      {/* Drawer */}
      <div className="drawer-side">
        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>

        <aside className="w-2/3 min-h-full bg-base-100 p-6">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <p className="text-sm text-base-content/60">Navigate</p>
          </div>

          {/* Menu */}
          <ul className="menu text-base gap-1">
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li className="mt-4">
              <Link to="/order" className="btn btn-warning w-full">
                Order Certificate
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
