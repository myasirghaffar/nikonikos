import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, image, icon: Icon, iconColor, features, price = 340 }) => {
  const content = (
    <article className="overflow-hidden rounded-xl border border-white/20 bg-neutral-800 shadow-[0px_10px_24px_-8px_rgba(0,0,0,0.45)]">
      <div className="relative h-56 overflow-hidden rounded-t-xl bg-gray-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm">
          <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2.5} />
        </div>
      </div>

      <div className="px-[22px] pb-7 pt-7">
        <h3 className="min-h-14 text-xl font-bold leading-7 text-white">
          {title}
        </h3>

        <ul className="mt-4 space-y-3 pb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 fill-red-600 text-red-600" />
              <span className="text-sm font-normal leading-5 text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-700 pt-4">
          <p className="flex items-baseline gap-2">
            <span className="text-sm font-normal leading-5 tracking-tight text-gray-400">
              From
            </span>
            <span className="text-2xl font-bold leading-6 tracking-tight text-white">
              €{price}
            </span>
          </p>
        </div>
      </div>
    </article>
  );

  return id ? (
    <Link to={`/shop/${id}`} className="block transition hover:-translate-y-1 hover:opacity-95">
      {content}
    </Link>
  ) : (
    content
  );
};

export default ProductCard;
