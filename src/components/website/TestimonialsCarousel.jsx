import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const initialSlideIndex = 5;

const testimonials = [
  {
    avatar: "https://i.pravatar.cc/160?img=12",
    quote:
      "Our IT consulting services are customized to empower businesses in enhancing their technology strategies and achieved.",
    role: "ENGINEER. LONDON",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=33",
    quote:
      "Our IT consulting services are tailored to help businesses optimize their technology strategies and streamline for greater efficiency.",
    role: "ENGINEER. SWITZERLAND",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=59",
    quote:
      "Our IT consulting services are customized to empower businesses in enhancing their technology strategies and achieved.",
    role: "FOUNDER. LONDON",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=15",
    quote:
      "Nikonikkos materials gave our project team dependable coverage, cleaner finishes, and confidence across every surface we treated.",
    role: "CONTRACTOR. DUBAI",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=48",
    quote:
      "The waterproofing systems performed exactly as promised and helped us deliver a demanding commercial build on schedule.",
    role: "ARCHITECT. DOHA",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=8",
    quote:
      "Their support team understood our technical requirements and recommended the right coating system for our environment.",
    role: "ENGINEER. RIYADH",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=52",
    quote:
      "We use Nikonikkos finishes because the color consistency and durability make our handover process much smoother.",
    role: "DESIGNER. LONDON",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=68",
    quote:
      "From product selection to application guidance, everything felt professional, reliable, and easy for our site team.",
    role: "PROJECT LEAD. BERLIN",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=21",
    quote:
      "The insulation solution improved thermal comfort while keeping the finish sharp and aligned with the project specification.",
    role: "CONSULTANT. MILAN",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=37",
    quote:
      "Their product catalog made it easy to compare systems and choose materials that matched our performance targets.",
    role: "BUILDER. PARIS",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=5",
    quote:
      "The final finish looked premium, and the coating held up beautifully through tough weather exposure.",
    role: "OWNER. MADRID",
  },
  {
    avatar: "https://i.pravatar.cc/160?img=64",
    quote:
      "We needed a dependable waterproofing partner, and Nikonikkos delivered the technical clarity we were looking for.",
    role: "MANAGER. ZURICH",
  },
];

const TestimonialsCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card = carousel.querySelector("[data-testimonial-card]");
    const cardWidth = card?.getBoundingClientRect().width || 531;
    const gap = 24;

    carousel.scrollLeft = initialSlideIndex * (cardWidth + gap);
  }, []);

  const goToSlide = (index) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card = carousel.querySelector("[data-testimonial-card]");
    const cardWidth = card?.getBoundingClientRect().width || 531;
    const gap = 24;

    carousel.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card = carousel.querySelector("[data-testimonial-card]");
    const cardWidth = card?.getBoundingClientRect().width || 531;
    const gap = 24;
    const nextIndex = Math.round(carousel.scrollLeft / (cardWidth + gap));

    setActiveIndex(Math.min(testimonials.length - 1, Math.max(0, nextIndex)));
  };

  return (
    <section className="overflow-hidden bg-black px-0 pb-24 pt-24 text-white">
      <div className="mx-auto flex w-full max-w-[920px] flex-col items-center gap-4 px-5">
        <h2 className="whitespace-nowrap text-center text-3xl font-extrabold uppercase leading-10 text-white sm:text-4xl">
          What Our Customers Say
        </h2>
        <span className="h-1.5 w-20 bg-red-600" />
      </div>

      <div className="mt-12 w-full overflow-hidden">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 scroll-smooth [scrollbar-width:none] md:pl-[72px] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.role} {...testimonial} />
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.role}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial slide ${index + 1}`}
            className={`size-4 rounded-full border ${
              index === activeIndex
                ? "border-red-600 bg-red-600"
                : "border-gray-300 bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ avatar, quote, role }) => {
  return (
    <article
      data-testimonial-card
      className="relative h-96 w-[calc(100vw-40px)] max-w-[531px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/40 bg-zinc-900 px-10 py-10"
    >
      <div className="flex items-start justify-between gap-6">
        <img
          src={avatar}
          alt=""
          className="size-28 rounded-full object-cover"
        />
        <QuoteIcon />
      </div>

      <p className="mt-[41px] max-w-[458px] text-xl font-medium leading-8 text-white">
        &quot;{quote}&quot;
      </p>

      <div className="absolute bottom-10 left-10">
        <p className="text-base font-medium uppercase leading-6 text-white">
          {role}
        </p>
        <div className="mt-4 flex gap-[7px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-red-600 text-red-600"
              strokeWidth={0}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

const QuoteIcon = () => {
  return (
    <svg
      width="42"
      height="34"
      viewBox="0 0 42 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-[43px] shrink-0"
    >
      <path
        d="M25 25C25 21.2288 25 19.3432 26.1716 18.1716C27.3431 17 29.2288 17 33 17C36.7712 17 38.6569 17 39.8284 18.1716C41 19.3432 41 21.2288 41 25C41 28.7712 41 30.6569 39.8284 31.8284C38.6569 33 36.7712 33 33 33C29.2288 33 27.3431 33 26.1716 31.8284C25 30.6569 25 28.7712 25 25Z"
        stroke="#E72C24"
        strokeWidth="1.5"
      />
      <path
        d="M25 27V18.0358C25 10.0906 30.0314 3.3526 37 1"
        stroke="#E72C24"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 25C1 21.2288 1 19.3432 2.1716 18.1716C3.3432 17 5.2288 17 9 17C12.7712 17 14.6568 17 15.8284 18.1716C17 19.3432 17 21.2288 17 25C17 28.7712 17 30.6569 15.8284 31.8284C14.6568 33 12.7712 33 9 33C5.2288 33 3.3432 33 2.1716 31.8284C1 30.6569 1 28.7712 1 25Z"
        stroke="#E72C24"
        strokeWidth="1.5"
      />
      <path
        d="M1 27V18.0358C1 10.0906 6.0314 3.3526 13 1"
        stroke="#E72C24"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TestimonialsCarousel;
