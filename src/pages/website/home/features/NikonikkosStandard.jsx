import {
  standardBalconyInspection,
  standardLivingRoom,
  standardPaintMixer,
  standardPaintMixerAlt,
  standardStoreWarehouse,
} from "../../../../assets/images";

const galleryItems = [
  {
    src: standardBalconyInspection,
    alt: "Contractor inspecting balcony waterproofing",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: standardPaintMixer,
    alt: "Industrial paint mixer preparing product",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: standardLivingRoom,
    alt: "Finished interior wall using Nikonikkos products",
    className: "lg:col-span-2 lg:row-span-1",
  },
];

const NikonikkosStandard = () => {
  return (
    <section className="bg-black px-5 py-20 text-white md:py-24">
      <div className="mx-auto max-w-[1360px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-12 bg-red-600" />
            <p className="text-sm font-bold uppercase leading-5 tracking-wider text-red-600">
              Our Store
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            The Nikonikkos Standard
          </h2>

          <p className="mt-6 max-w-[672px] text-base font-normal leading-6 text-white/90 md:text-lg md:leading-7">
            Witness the real-world performance of our products in flagship
            architectural projects across the globe.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1253px] gap-5 lg:h-[519px] lg:grid-cols-[534px_270px_406px] lg:items-stretch lg:justify-center">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[243px_270px] lg:grid-rows-[247px_247px]">
            {galleryItems.map((item) => (
              <GalleryImage key={item.alt} {...item} />
            ))}
          </div>

          <GalleryImage
            src={standardPaintMixerAlt}
            alt="Nikonikkos product preparation in store"
            className="min-h-[300px] lg:min-h-0"
          />

          <GalleryImage
            src={standardStoreWarehouse}
            alt="Nikonikkos product warehouse shelves"
            className="min-h-[360px] lg:min-h-0"
          />
        </div>
      </div>
    </section>
  );
};

const GalleryImage = ({ src, alt, className = "" }) => {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-neutral-900 ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
};

export default NikonikkosStandard;
