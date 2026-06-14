import {
  ArrowRight,
  Building2,
  ChevronDown,
  GraduationCap,
  PhoneCall,
  Plus,
} from "lucide-react";
import { useState } from "react";
import {
  contactHeroBackground,
  contactMapBackground,
  contactMessageShowroom,
} from "../../../../assets/images";

const contactCards = [
  {
    title: "Call Our Team",
    icon: PhoneCall,
    details: [
      "Sales: +1 (555) 123-4567",
      "Project Consultation: +1 (555) 987-6543",
      "WhatsApp: +1 (555) 000-1111",
    ],
    action: "Call Now",
    href: "tel:+15551234567",
  },
  {
    title: "Email Support",
    icon: GraduationCap,
    details: [
      "General: info@nikonikkos.com",
      "Sales: sales@nikonikkos.com",
      "Technical: tech@nikonikkos.com",
    ],
    action: "Send Email",
    href: "mailto:info@nikonikkos.com",
  },
  {
    title: "Experience Center",
    icon: Building2,
    details: [
      "123 Architectural Way, Design District",
      "Mon - Fri: 09:00 - 18:00",
      "Sat: 10:00 - 14:00",
    ],
    action: "Get Directions",
    href: "#location",
  },
];

const faqs = [
  {
    question: "How long does a technical consultation take?",
    answer:
      "Most consultations take 30 to 45 minutes once project scope, substrate condition, and delivery timeline are clear.",
  },
  {
    question: "Do you provide on-site material application training?",
    answer:
      "Yes. Our technical team can support contractors with material handling, application sequencing, and finishing guidance.",
  },
  {
    question: "Can you match custom architectural color palettes?",
    answer:
      "Yes. We can coordinate finishes with custom palettes and project references for residential and commercial work.",
  },
  {
    question: "What is the standard delivery timeframe for large projects?",
    answer:
      "Standard large-project delivery is usually 5 to 10 business days, with priority support available for critical site needs.",
  },
];

const fieldClass =
  "h-[66px] w-full rounded-[10px] border border-white/10 bg-white/10 px-4 text-base text-white outline-none transition placeholder:text-white focus:border-red-600 focus:ring-2 focus:ring-red-600/20";

const ContactContent = () => {
  return (
    <main className="bg-black text-white">
      <ContactHero />
      <Specialists />
      <MessageSection />
      <QuickAnswers />
      <ImmediateAssistance />
      <LocationStrip />
      <FinalCTA />
    </main>
  );
};

const ContactHero = () => (
  <section className="relative min-h-screen overflow-hidden bg-black">
    <img
      src={contactHeroBackground}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.82)_39%,rgba(0,0,0,0.22)_73%,rgba(0,0,0,0.12)_100%)]" />
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-6 py-16 md:px-16">
      <div className="max-w-[610px]">
        <p className="text-sm font-bold uppercase leading-5 tracking-[0.18em] text-red-600">
          Get In Touch
        </p>
        <span className="mt-5 block h-px w-36 bg-red-600" />
        <h1 className="mt-10 text-5xl font-extrabold leading-[1.08] md:text-7xl">
          Nikonikkos
          <span className="block text-red-600">Home Improvement</span>
        </h1>
        <p className="mt-9 max-w-[455px] text-xl leading-9 text-white/72">
          We're here to help you with expert advice, product information, and
          solutions tailored to your project needs.
        </p>
        <div className="mt-12 flex flex-wrap gap-8">
          <a
            href="#send-message"
            className="inline-flex h-16 min-w-[230px] items-center justify-center gap-10 rounded-xl bg-red-600 px-8 text-xl font-bold text-white shadow-[0px_20px_50px_rgba(227,30,36,0.16)]"
          >
            Get In Touch <ArrowRight className="h-8 w-8" />
          </a>
          <a
            href="#location"
            className="inline-flex h-16 min-w-[230px] items-center justify-center gap-10 rounded-xl border border-red-600 bg-black/35 px-8 text-xl font-bold text-white"
          >
            View Map <ArrowRight className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Specialists = () => (
  <section className="bg-black px-5 py-20 md:px-12">
    <div className="mx-auto flex max-w-[1344px] flex-col items-center gap-14">
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <p className="w-64 text-center text-sm font-bold uppercase leading-5 tracking-wider text-red-600">
          Multiple Ways To Reach Us
        </p>
        <h2 className="text-center text-5xl font-extrabold leading-[72px] text-white">
          Connect With Our Specialists
        </h2>
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-[repeat(3,384px)] lg:justify-between">
        {contactCards.map(({ title, icon: Icon, details, action, href }) => (
          <article
            key={title}
            className="flex min-h-96 flex-col items-start gap-6 rounded-[20px] border border-white/5 bg-neutral-900 p-12"
          >
            <div className="flex size-16 items-center justify-center rounded-[42px] bg-white">
              <Icon className="h-8 w-8 fill-red-600 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold leading-9 text-white">
              {title}
            </h3>
            <div className="flex flex-col gap-2">
              {details.map((detail) => (
                <p key={detail} className="text-base leading-6 text-white/50">
                  {detail}
                </p>
              ))}
            </div>
            <a
              href={href}
              className="mt-auto flex w-full items-center justify-center rounded-3xl bg-red-600 py-4 text-xs font-bold uppercase leading-4 tracking-wider text-white"
            >
              {action}
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const MessageSection = () => (
  <section
    id="send-message"
    className="bg-neutral-900 px-5 py-24 md:px-12"
  >
    <div className="mx-auto max-w-[1344px]">
      <div className="relative min-h-[711px]">
        <div className="mb-10 md:absolute md:left-0 md:top-0">
          <h2 className="text-2xl font-semibold leading-8 text-white">
            Send a Message
          </h2>
          <span className="mt-1 block h-1 w-20 bg-red-600" />
        </div>

        <div className="relative flex flex-col gap-10 lg:block">
          <div className="relative z-0 w-full lg:absolute lg:left-0 lg:top-11 lg:w-[610px]">
            <div className="absolute -inset-10 rounded-full bg-red-600/10 blur-[53px]" />
            <div className="relative h-[360px] overflow-hidden rounded-[10px] border border-white/10 shadow-2xl md:h-[500px]">
              <div className="absolute -inset-5 bg-red-600/10 blur-[53px]" />
              <img
                src={contactMessageShowroom}
                alt="Nikonikkos experience center"
                className="relative h-full w-full object-cover"
              />
            </div>
          </div>

          <form
            className="relative z-10 ml-auto flex w-full max-w-[624px] flex-col rounded-xl border border-white/5 bg-black px-8 pb-12 pt-12 md:px-16 md:pb-16 md:pt-16 lg:h-[711px]"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col gap-5">
              <FormField label="Full Name">
                <input
                  className={fieldClass}
                  placeholder="Enter your full name"
                />
              </FormField>
              <div className="grid gap-6 md:grid-cols-2">
                <FormField label="Email Address">
                  <input
                    type="email"
                    className={fieldClass}
                    placeholder="name@company.com"
                  />
                </FormField>
                <FormField label="Phone Number">
                  <input
                    className={fieldClass}
                    placeholder="+1 (555) 000-0000"
                  />
                </FormField>
              </div>
              <FormField label="Project Type">
                <div className="relative">
                  <select
                    className={`${fieldClass} appearance-none pr-11`}
                    defaultValue="Residential Development"
                  >
                    <option>Residential Development</option>
                    <option>Commercial Project</option>
                    <option>Waterproofing System</option>
                    <option>Industrial Coating</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
                </div>
              </FormField>
              <FormField label="Message">
                <textarea
                  className="min-h-[120px] w-full resize-none rounded-[10px] border border-white/10 bg-white/10 px-4 py-4 text-base text-white outline-none transition placeholder:text-white focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                  placeholder="Tell us about your project requirements..."
                />
              </FormField>
              <div className="pt-2">
                <button
                  type="submit"
                  className="h-[60px] w-full rounded-xl bg-red-600 text-sm font-bold uppercase leading-5 tracking-widest text-white"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const FormField = ({ label, children }) => (
  <label className="block">
    <span className="mb-2 block text-xs font-bold uppercase leading-4 tracking-wide text-white">
      {label}
    </span>
    {children}
  </label>
);

const QuickAnswers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black px-5 py-24 md:px-12">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-16">
        <h2 className="text-center text-4xl font-extrabold leading-[54px] text-white">
          Quick Answers
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={faq.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full rounded-xl border border-white/20 bg-neutral-900 p-8 text-left"
              >
                <span className="flex items-center justify-between gap-6">
                  <span className="text-lg font-semibold leading-7 text-white">
                    {faq.question}
                  </span>
                  <Plus
                    className={`h-4 w-4 shrink-0 text-red-600 transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </span>
                {isOpen && (
                  <span className="mt-4 block max-w-3xl text-base leading-7 text-white/55">
                    {faq.answer}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ImmediateAssistance = () => (
  <section className="bg-red-700/90 px-5 py-20 md:px-12">
    <div className="mx-auto flex max-w-[1344px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-3xl font-extrabold leading-[48px] text-white">
          Need Immediate Assistance?
        </h2>
        <p className="text-lg leading-7 text-white">
          Our priority support line is active 24/7 for critical site issues.
        </p>
      </div>
      <div className="flex flex-wrap gap-6">
        <a
          href="tel:+15551234567"
          className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-sm font-bold uppercase leading-5 tracking-wide text-red-600"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/15550001111"
          className="inline-flex items-center justify-center rounded-lg border border-white px-10 py-4 text-sm font-bold uppercase leading-5 tracking-wide text-white"
        >
          WhatsApp Support
        </a>
      </div>
    </div>
  </section>
);

const LocationStrip = () => (
  <section
    id="location"
    className="relative h-[500px] overflow-hidden bg-slate-950"
  >
    <img
      src={contactMapBackground}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-black/25" />
    <div className="relative z-10 flex h-full items-center justify-center px-5">
      <div className="max-w-96 rounded-sm border border-white/10 bg-gray-900 px-8 py-8 shadow-2xl">
        <h3 className="text-xl font-bold leading-8 text-white">
          Visit Our Location
        </h3>
        <p className="mt-3 text-base leading-6 text-white/50">
          123 Architectural Way, Design District, Suite 500. Free visitor
          parking available in Zone C.
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Kota%20Industrial%20Area%20Kota%20Rajasthan"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase leading-4 tracking-wide text-red-600"
        >
          Open in Google Maps <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="bg-black px-5 py-24 md:px-12">
    <div className="mx-auto flex max-w-[1344px] flex-col gap-10 rounded-3xl border border-white/10 bg-[linear-gradient(84deg,#171717_0%,#0c0a09_100%)] p-10 md:flex-row md:items-center md:justify-between md:p-20">
      <div className="max-w-[700px] md:min-w-[600px]">
        <h2 className="text-5xl font-extrabold leading-[48px] text-white">
          Ready To Start Your Next
          <br />
          Project?
        </h2>
        <p className="mt-8 text-xl leading-8 text-white/60">
          Partner with our engineering team to ensure high-performance results
          from foundation to finish.
        </p>
      </div>
      <div className="flex min-w-80 flex-col gap-6">
        <a
          href="#send-message"
          className="flex items-center justify-center rounded-xl bg-red-600 py-6 text-base font-bold uppercase leading-6 tracking-[3.6px] text-white shadow-[0px_20px_50px_rgba(227,30,36,0.12)]"
        >
          Contact Experts
        </a>
        <a
          href="mailto:sales@nikonikkos.com"
          className="flex items-center justify-center rounded-xl border border-white/20 py-6 text-base font-bold uppercase leading-6 tracking-[3.6px] text-white"
        >
          Request A Quote
        </a>
      </div>
    </div>
  </section>
);

export default ContactContent;
