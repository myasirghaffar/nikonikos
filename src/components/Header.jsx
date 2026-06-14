import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Clock,
  Heart,
  MapPin,
  Menu,
  Phone,
  Search,
  Truck,
  User,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../assets/logos";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Categories", to: "#" },
  { label: "Brands", to: "#" },
  { label: "Brochures", to: "#" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const infoItems = [
  { label: "+1 (234) 567-890", icon: Phone },
  { label: "123 Industrial Way, Tech City", icon: MapPin },
  { label: "Fast Nationwide Delivery", icon: Truck },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, to: "#" },
  { label: "Instagram", icon: FaInstagram, to: "#" },
  { label: "LinkedIn", icon: FaLinkedinIn, to: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMobilePanels = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm">
      <div className="bg-black text-white">
        <div className="mx-auto flex min-h-9 max-w-[1440px] items-center justify-between gap-4 px-6 py-2 md:px-10">
          <div className="hidden items-center gap-6 lg:flex">
            {infoItems.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 shrink-0 fill-red-600 text-red-600" />
                <span className="text-xs font-normal leading-4 tracking-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-start">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 fill-red-600 text-red-600" />
              <span className="text-xs font-normal leading-4 tracking-tight">
                Mon - Sat: 08:00 - 18:00
              </span>
            </div>

            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              {socialLinks.map(({ label, icon: Icon, to }) => (
                <Link
                  key={label}
                  to={to}
                  aria-label={label}
                  className="text-white transition hover:text-red-600"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-6 px-6 py-2 md:px-10">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Nikonikkos Home Improvement"
              className="h-[54px] w-[109px] object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "border-b-2 pb-1 text-sm font-semibold uppercase leading-5 tracking-wide transition",
                    isActive && link.to !== "#"
                      ? "border-red-600 text-red-600"
                      : "border-transparent text-zinc-900 hover:border-red-600 hover:text-red-600",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-6 lg:flex">
            <label className="relative block w-64">
              <span className="sr-only">Search products</span>
              <input
                type="search"
                placeholder="Search products..."
                className="h-12 w-full rounded-full border-0 bg-gray-100 py-2 pl-4 pr-12 text-sm text-zinc-900 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-600"
              />
              <Search className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </label>

            <div className="flex items-center gap-5">
              <Link
                to="/login"
                aria-label="Account"
                className="text-zinc-900 transition hover:text-red-600"
              >
                <User className="h-6 w-6" strokeWidth={2.25} />
              </Link>

              <Link
                to="#"
                aria-label="Wishlist"
                className="relative text-zinc-900 transition hover:text-red-600"
              >
                <Heart className="h-6 w-6" strokeWidth={2.25} />
                <span className="absolute -right-2.5 -top-2 flex size-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-normal leading-none text-white">
                  0
                </span>
              </Link>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3 xl:hidden">
            <button
              type="button"
              aria-label="Toggle search"
              aria-expanded={isSearchOpen}
              onClick={() => {
                setIsSearchOpen((previous) => !previous);
                setIsMenuOpen(false);
              }}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-gray-200 text-zinc-900 transition hover:border-red-600 hover:text-red-600"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => {
                setIsMenuOpen((previous) => !previous);
                setIsSearchOpen(false);
              }}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-gray-200 text-zinc-900 transition hover:border-red-600 hover:text-red-600"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`border-t border-gray-100 px-6 py-3 xl:hidden ${
            isSearchOpen ? "block" : "hidden"
          }`}
        >
          <label className="relative mx-auto block max-w-xl">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              placeholder="Search products..."
              className="h-11 w-full rounded-full border-0 bg-gray-100 py-2 pl-4 pr-12 text-sm text-zinc-900 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-600"
            />
            <Search className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </label>
        </div>

        <nav
          className={`border-t border-gray-100 bg-white px-6 py-4 xl:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="mx-auto flex max-w-xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMobilePanels}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-4 py-3 text-sm font-semibold uppercase leading-5 tracking-wide transition",
                    isActive && link.to !== "#"
                      ? "bg-red-600 text-white"
                      : "text-zinc-900 hover:bg-gray-100 hover:text-red-600",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-3 flex items-center gap-5 border-t border-gray-100 px-4 pt-4">
              <Link
                to="/login"
                onClick={closeMobilePanels}
                aria-label="Account"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-zinc-900 transition hover:text-red-600"
              >
                <User className="h-5 w-5" strokeWidth={2.25} />
                Account
              </Link>

              <Link
                to="#"
                onClick={closeMobilePanels}
                aria-label="Wishlist"
                className="relative inline-flex items-center gap-2 text-sm font-semibold uppercase text-zinc-900 transition hover:text-red-600"
              >
                <span className="relative">
                  <Heart className="h-5 w-5" strokeWidth={2.25} />
                  <span className="absolute -right-2.5 -top-2 flex size-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-normal leading-none text-white">
                    0
                  </span>
                </span>
                Wishlist
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
