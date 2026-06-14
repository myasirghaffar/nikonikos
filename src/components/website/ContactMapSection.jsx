const ContactMapSection = () => {
  return (
    <section className="relative min-h-[625px] overflow-hidden bg-black">
      <div className="absolute inset-x-0 top-6 h-[600px] overflow-hidden bg-stone-200">
        <iframe
          title="Nikonikkos location map"
          src="https://www.google.com/maps?q=Kota%20Industrial%20Area%2C%20Kota%2C%20Rajasthan&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="relative z-10 mx-auto min-h-[625px] max-w-[1440px] px-5 md:px-10">
        <div className="relative min-h-[625px]">
          <div className="relative w-full bg-red-600 px-8 py-10 text-white md:absolute md:left-[33px] md:top-0 md:h-[625px] md:w-[544px] md:px-10">
            <span className="absolute -right-[17px] top-0 hidden h-0 w-0 border-b-[24px] border-l-[17px] border-b-transparent border-l-red-600 md:block" />

            <h2 className="text-4xl font-extrabold uppercase leading-10 text-white">
              Get In Touch
            </h2>

            <p className="mt-10 max-w-[386px] text-base font-normal leading-6 text-white">
              Have a project in mind? Our experts are here to help you choose
              the right materials and systems.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase leading-4 text-white">
                  Location
                </h3>
                <p className="mt-5 text-sm font-normal leading-5 text-white">
                  123 Industrial Way
                  <br />
                  Tech City, ST 56789
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase leading-4 text-white">
                  Contact Info
                </h3>
                <p className="mt-5 text-sm font-normal leading-5 text-white">
                  sales@nikonikkos.com
                  <br />
                  +1 (234) 567-890
                </p>
              </div>
            </div>

            <form className="mt-12 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-[58px] rounded-md border-0 bg-white px-4 text-sm font-normal text-neutral-900 placeholder:text-neutral-900 focus:ring-2 focus:ring-white/40"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-[58px] rounded-md border-0 bg-white px-4 text-sm font-normal text-neutral-900 placeholder:text-neutral-900 focus:ring-2 focus:ring-white/40"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-[58px] w-full rounded-md border-0 bg-white px-4 text-sm font-normal text-neutral-900 placeholder:text-neutral-900 focus:ring-2 focus:ring-white/40"
              />

              <textarea
                placeholder="How can we help?"
                className="h-32 w-full resize-none rounded-md border-0 bg-white px-4 py-5 text-sm font-normal text-neutral-900 placeholder:text-neutral-900 focus:ring-2 focus:ring-white/40"
              />

              <button
                type="submit"
                className="h-16 w-full rounded-md bg-white text-center text-sm font-bold uppercase leading-5 tracking-[3px] text-red-600 transition hover:bg-gray-100"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
