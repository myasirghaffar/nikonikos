import { Link } from "react-router-dom";
import {
  FaApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaQuestion,
} from "react-icons/fa";
import { Send } from "lucide-react";
import { logo } from "../assets/logos";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/about" },
  { label: "Shop All Products", to: "/shop" },
  { label: "Brands", to: "/brands" },
  { label: "Brochures", to: "/brochures" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

const categories = [
  { label: "Decorative Paints", to: "/shop" },
  { label: "Industrial Coatings", to: "/shop" },
  { label: "Roof Waterproofing", to: "/shop" },
  { label: "Wall Insulation", to: "/shop" },
  { label: "Tools & Accessories", to: "/shop" },
  { label: "Flooring Solutions", to: "/shop" },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, to: "#" },
  { label: "Help", icon: FaQuestion, to: "#" },
  { label: "Instagram", icon: FaInstagram, to: "#" },
  { label: "LinkedIn", icon: FaLinkedinIn, to: "#" },
];

const paymentIcons = [FaCcVisa, FaCcMastercard, FaCcPaypal, FaApplePay];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 pt-20 text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1.25fr] lg:px-10">
        <div className="flex flex-col items-start">
          <Link to="/" className="block">
            <img
              src={logo}
              alt="Nikonikkos Home Improvement"
              className="h-[54px] w-[109px] object-contain"
            />
          </Link>

          <p className="mt-8 max-w-[17rem] text-sm font-normal leading-6 text-gray-400">
            Nikonikkos Home Improvement is the leading destination for premium
            construction and finishing materials. We prioritize quality and
            customer satisfaction in everything we do.
          </p>

          <div className="mt-8 flex items-center gap-4">
            {socialLinks.map(({ label, icon: Icon, to }) => (
              <Link
                key={label}
                to={to}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-zinc-800 text-white transition hover:border-red-600 hover:bg-red-600"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm leading-5 text-gray-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Categories">
          {categories.map((category) => (
            <Link
              key={category.label}
              to={category.to}
              className="text-sm leading-5 text-gray-400 transition hover:text-white"
            >
              {category.label}
            </Link>
          ))}
        </FooterColumn>

        <div className="flex flex-col items-start gap-6">
          <h2 className="text-lg font-bold uppercase leading-7 text-white">
            Newsletter
          </h2>

          <p className="max-w-[18rem] pt-2 text-sm leading-5 text-gray-400">
            Stay updated with our latest offers and technical guides.
          </p>

          <form className="flex w-full max-w-[20.5rem]" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">
              Email Address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email Address"
              className="h-12 min-w-0 flex-1 border-0 bg-zinc-800 px-4 text-sm text-white outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-600"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-12 w-16 shrink-0 items-center justify-center bg-red-600 text-white transition hover:bg-red-700"
            >
              <Send className="h-4 w-4 fill-white" />
            </button>
          </form>

          <div className="flex items-center gap-4 pt-2 text-4xl text-white/50">
            {paymentIcons.map((Icon, index) => (
              <Icon key={index} className="h-[30px] w-[34px]" />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-6 py-6">
        <p className="mx-auto max-w-7xl text-center text-xs font-normal uppercase leading-4 tracking-wider text-gray-500">
          © 2024 Nikonikkos Home Improvement. All Rights Reserved. Designed by
          Industrial Premium Media.
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => (
  <div className="flex flex-col items-start gap-8">
    <h2 className="text-lg font-bold uppercase leading-7 text-white">{title}</h2>
    <div className="flex flex-col items-start gap-4">{children}</div>
  </div>
);

export default Footer;
