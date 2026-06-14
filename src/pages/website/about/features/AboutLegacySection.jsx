import { aboutLegacyImage } from "../../../../assets/images";

const AboutLegacySection = () => {
  return (
    <section className="bg-black px-5 pb-32 pt-24 md:px-12">
      <div className="mx-auto grid max-w-[1344px] gap-20 lg:grid-cols-2">
        <div className="relative min-h-[624px]">
          <div className="absolute -left-10 -top-10 h-64 w-64 bg-red-700/20 blur-[50px]" />
          <div className="relative h-[624px] overflow-hidden rounded-xl bg-white bg-blend-saturation shadow-2xl">
            <img
              src={aboutLegacyImage}
              alt="Nikonikkos coating application"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[-36px] right-0 bg-red-700 p-8">
            <p className="text-5xl font-black leading-[48px] text-white">
              1978
            </p>
            <p className="mt-1 text-sm font-bold uppercase leading-5 tracking-wider text-white">
              The Beginning
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <span className="block h-0.5 w-12 bg-red-700" />
            <h2 className="mt-8 text-5xl font-extrabold leading-[60px] text-white">
              A Legacy Built On
              <br />
              Quality &amp; Innovation
            </h2>
            <div className="mt-9 space-y-6 text-lg leading-7 text-white/50">
              <p>
                Founded in 1978, Nikonikkos started with a singular vision: to
                provide the construction industry with coatings that could
                withstand the harshest environments while maintaining aesthetic
                brilliance.
              </p>
              <p>
                What began as a specialized paint laboratory has evolved into a
                comprehensive industrial powerhouse. For over 45 years, we have
                pushed the boundaries of chemical engineering, developing
                proprietary waterproofing systems and thermal insulation that
                have redefined industry standards.
              </p>
              <p>
                Our journey is one of continuous evolution, driven by the
                challenges of our partners and the shifting landscapes of global
                architecture. We don't just sell products; we engineer peace of
                mind for every project we touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLegacySection;
