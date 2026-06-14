import { AlertCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  AdminField,
  inputClass,
  textareaClass,
} from "../../../../components/admin/AdminFormSection";
import { getBrands, saveBrand } from "../../../../lib/adminCommerceStore";
import { readImageFile } from "../../../../utils/readImageFile";

const AddBrandContent = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const copyId = searchParams.get("copy");
  const copiedBrand = getBrands().find((brand) => brand.id === copyId);

  const initialBrand = useMemo(
    () => ({
      id: copiedBrand?.id || "",
      name: copiedBrand?.name || "",
      description: copiedBrand?.description || "",
      website: copiedBrand?.website || "",
      logo: copiedBrand?.logo || "",
      banner: copiedBrand?.banner || "",
      status: copiedBrand?.status || "active",
      productsCount: copiedBrand?.productsCount || 0,
    }),
    [copiedBrand],
  );

  const [form, setForm] = useState(initialBrand);
  const update = (field, value) =>
    setForm((previous) => ({ ...previous, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    saveBrand(form);
    navigate("/admin/brands");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-9">
      <header>
        <p className="text-sm font-medium text-gray-500">
          Brands <span className="mx-3 text-rose-700">Add New Brand</span>
        </p>
        <h1 className="mt-5 text-3xl font-bold text-white">Add New Brand</h1>
        <p className="mt-2 text-base text-gray-400">
          Create a new brand profile for your product catalog.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-800 bg-stone-900/70 p-9">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="space-y-7">
            <AdminField label={<span>Brand Name <span className="text-rose-700">*</span></span>}>
              <input
                className={inputClass}
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="e.g. Sony, Canon, Nike"
                required
              />
            </AdminField>
            <AdminField label="Brand Description">
              <textarea
                className={`${textareaClass} min-h-40`}
                value={form.description}
                onChange={(event) => update("description", event.target.value)}
                placeholder="Describe the brand and its legacy..."
              />
            </AdminField>
            <AdminField label="Website URL">
              <input
                className={inputClass}
                value={form.website}
                onChange={(event) => update("website", event.target.value)}
                placeholder="https://www.brandwebsite.com"
              />
            </AdminField>
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm text-gray-400">
                Brand Logo <span className="text-gray-500">(Square recommended)</span>
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <label className="flex size-28 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-zinc-700 text-xs text-gray-500 transition hover:border-rose-700/60">
                  {form.logo ? (
                    <img src={form.logo} alt="" className="max-h-full max-w-full object-contain p-3" />
                  ) : (
                    "Upload"
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(event) =>
                      readImageFile(event.target.files?.[0], (image) =>
                        update("logo", image),
                      )
                    }
                  />
                </label>
                <div className="space-y-4 text-sm text-gray-500">
                  <p>Allowed formats: JPG, PNG, SVG</p>
                  <p>Max size: 2MB</p>
                  <label className="cursor-pointer font-medium text-rose-700">
                    Browse files
                    <input
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(event) =>
                        readImageFile(event.target.files?.[0], (image) =>
                          update("logo", image),
                        )
                      }
                    />
                  </label>
                </div>
              </div>
              <input
                className={`${inputClass} mt-4`}
                value={form.logo}
                onChange={(event) => update("logo", event.target.value)}
                placeholder="Paste brand logo URL or asset path"
              />
            </div>

            <div>
              <p className="mb-3 text-sm text-gray-400">
                Brand Banner <span className="text-gray-500">(1200x400 px)</span>
              </p>
              <label className="flex min-h-40 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-zinc-700 text-sm text-gray-500 transition hover:border-rose-700/60">
                {form.banner ? (
                  <img src={form.banner} alt="" className="h-40 w-full object-cover" />
                ) : (
                  "Drop banner image here or click to upload"
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(event) =>
                    readImageFile(event.target.files?.[0], (image) =>
                      update("banner", image),
                    )
                  }
                />
              </label>
              <input
                className={`${inputClass} mt-4`}
                value={form.banner}
                onChange={(event) => update("banner", event.target.value)}
                placeholder="Paste brand banner URL"
              />
            </div>

            <AdminField label="Status">
              <select
                className={inputClass}
                value={form.status}
                onChange={(event) => update("status", event.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </AdminField>
          </div>
        </div>

        <div className="mt-9 border-t border-zinc-800 pt-9">
          <div className="flex justify-end gap-5">
            <button
              type="button"
              onClick={() => navigate("/admin/brands")}
              className="h-12 rounded-xl border border-zinc-700 bg-white/5 px-8 text-sm font-bold text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-12 rounded-xl bg-rose-700 px-10 text-sm font-bold text-white shadow-[0_0_18px_rgba(200,16,46,0.25)]"
            >
              Save Brand
            </button>
          </div>
        </div>
      </section>

      <aside className="flex items-center gap-5 rounded-2xl border border-zinc-800 bg-stone-900/70 p-7">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-rose-700/30 bg-rose-700/10">
          <AlertCircle className="h-5 w-5 text-rose-700" />
        </div>
        <div>
          <p className="font-bold text-white">Brand Visibility Note</p>
          <p className="mt-2 text-sm leading-6 text-gray-400">
            Adding a brand with active status will immediately make it available
            to be selected for products and visible on the public store.
          </p>
        </div>
      </aside>
    </form>
  );
};

export default AddBrandContent;
