import { Image, Layers3, UploadCloud } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AdminFormSection, {
  AdminField,
  inputClass,
  textareaClass,
} from "../../../../components/admin/AdminFormSection";
import { getCategories, saveCategory } from "../../../../lib/adminStore";
import { readImageFile } from "../../../../utils/readImageFile";

const AddCategoryContent = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const copyId = searchParams.get("copy");
  const copiedCategory = getCategories().find((category) => category.id === copyId);

  const initialCategory = useMemo(
    () => ({
      id: copiedCategory?.id || "",
      name: copiedCategory?.name || "",
      description: copiedCategory?.description || "",
      status: copiedCategory?.status || "active",
      image: copiedCategory?.image || "",
      icon: copiedCategory?.icon || "",
      productCount: copiedCategory?.productCount || 0,
    }),
    [copiedCategory],
  );

  const [form, setForm] = useState(initialCategory);
  const update = (field, value) => setForm((previous) => ({ ...previous, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    saveCategory(form);
    navigate("/admin/categories");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-gray-500">Category Management &gt; Add New Category</p>
          <h1 className="mt-3 text-2xl font-bold text-white">Add New Category</h1>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={() => navigate("/admin/categories")} className="h-11 rounded-xl border border-zinc-800 bg-white/5 px-6 text-sm font-medium text-white">Cancel</button>
          <button type="submit" className="h-11 rounded-xl bg-rose-700 px-8 text-sm font-medium text-white shadow-[0_0_15px_rgba(200,16,46,0.2)]">Save Category</button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <AdminFormSection title="General Information">
            <div className="space-y-6">
              <AdminField label="Category Name">
                <input className={inputClass} value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="e.g. Premium Decorative Paints" required />
              </AdminField>
              <AdminField label="Category Description">
                <textarea className={textareaClass} value={form.description} onChange={(event) => update("description", event.target.value)} placeholder="Describe the category purpose and product range..." />
              </AdminField>
            </div>
          </AdminFormSection>

          <AdminFormSection title="Visual Assets">
            <div className="grid gap-6 md:grid-cols-2">
              <UploadBox
                icon={UploadCloud}
                title="Click to upload banner"
                subtitle="PNG, JPG up to 5MB (1200x400px)"
                preview={form.image}
                onUpload={(image) => update("image", image)}
              />
              <UploadBox
                icon={Image}
                title="Click to upload icon"
                subtitle="SVG or PNG (128x128px)"
                preview={form.icon}
                onUpload={(image) => update("icon", image)}
              />
            </div>
            <AdminField label="Banner Image URL">
              <input className={inputClass} value={form.image} onChange={(event) => update("image", event.target.value)} placeholder="Paste image URL or asset path" />
            </AdminField>
          </AdminFormSection>
        </div>

        <aside className="h-fit rounded-2xl border border-zinc-800 bg-stone-900/70 p-7">
          <h2 className="text-base font-bold text-white">Settings</h2>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-white">Category Status</p>
              <p className="text-xs text-gray-500">Visible on storefront</p>
            </div>
            <button
              type="button"
              onClick={() => update("status", form.status === "active" ? "inactive" : "active")}
              className={`relative h-5 w-9 rounded-full ${form.status === "active" ? "bg-rose-700" : "bg-white/20"}`}
            >
              <span className={`absolute top-1 size-3 rounded-full bg-white ${form.status === "active" ? "left-5" : "left-1"}`} />
            </button>
          </div>
          <div className="my-8 h-px bg-zinc-800" />
          <p className="mb-4 text-sm text-gray-400">Category Preview</p>
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-stone-900">
            <div className="h-24 bg-black">
              {form.image ? <img src={form.image} alt="" className="h-full w-full object-cover" /> : null}
            </div>
            <div className="flex items-center gap-3 p-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-rose-700">
                <Layers3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{form.name || "New Category"}</p>
                <p className="text-xs text-gray-500">{form.productCount} Products</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </form>
  );
};

const UploadBox = ({ icon: Icon, title, subtitle, preview, onUpload }) => (
  <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-zinc-800 text-center transition hover:border-rose-700/60">
    {preview ? (
      <img src={preview} alt="" className="h-40 w-full object-cover" />
    ) : (
      <>
        <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-rose-700/20">
          <Icon className="h-5 w-5 text-rose-700" />
        </div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
      </>
    )}
    <input
      type="file"
      accept="image/*"
      className="sr-only"
      onChange={(event) =>
        readImageFile(event.target.files?.[0], (image) => onUpload(image))
      }
    />
  </label>
);

export default AddCategoryContent;
