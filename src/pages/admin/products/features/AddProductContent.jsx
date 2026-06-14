import { Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AdminFormSection, {
  AdminField,
  inputClass,
  textareaClass,
} from "../../../../components/admin/AdminFormSection";
import {
  getCategories,
  getProducts,
  saveProduct,
} from "../../../../lib/adminStore";
import { getBrands } from "../../../../lib/adminCommerceStore";
import { readImageFile } from "../../../../utils/readImageFile";

const AddProductContent = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const copyId = searchParams.get("copy");
  const copiedProduct = getProducts().find((product) => product.id === copyId);
  const categories = getCategories();
  const brands = getBrands().filter((brand) => brand.status === "active");

  const initialProduct = useMemo(
    () => ({
      id: copiedProduct?.id || "",
      name: copiedProduct?.name || "",
      description: copiedProduct?.description || "",
      category: copiedProduct?.category || "",
      brand: copiedProduct?.brand || "Nikonikkos",
      sku: copiedProduct?.sku || "",
      active: copiedProduct?.active ?? true,
      featured: copiedProduct?.featured ?? false,
      price: copiedProduct?.price || "",
      salePrice: "",
      stock: copiedProduct?.stock || "",
      image: copiedProduct?.image || "",
      gallery: copiedProduct?.gallery || [],
      features: copiedProduct?.features || ["UV Resistant", "Flexible Coating", "Long Lasting Protection"],
      size: copiedProduct?.size || "",
    }),
    [copiedProduct],
  );

  const [form, setForm] = useState(initialProduct);
  const [gallery, setGallery] = useState(initialProduct.gallery);
  const [variants, setVariants] = useState([
    { size: "1KG", price: "25.00", stock: "100" },
    { size: "5KG", price: "95.00", stock: "50" },
  ]);

  const update = (field, value) => setForm((previous) => ({ ...previous, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    saveProduct({
      ...form,
      subtitle: form.description || "Professional product",
      price: Number(form.price || form.salePrice || 0),
      stock: Number(form.stock || 0),
      category: form.category || categories[0]?.name || "Paints",
      brand: form.brand || brands[0]?.name || "Nikonikkos",
      sku: form.sku || `NK-${Date.now()}`,
      size: form.size || variants[0]?.size?.replace(/([0-9])([A-Z])/g, "$1 $2") || "5 KG",
      variants,
      gallery,
    });
    navigate("/admin/products");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-[1100px] space-y-8">
      <AdminFormSection title="Basic Information">
        <div className="space-y-6">
          <AdminField label="Product Name">
            <input
              className={inputClass}
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="e.g. Premium Matte Emulsion"
              required
            />
          </AdminField>
          <AdminField label="Description">
            <textarea
              className={textareaClass}
              value={form.description}
              onChange={(event) => update("description", event.target.value)}
              placeholder="Detailed product description and features..."
            />
          </AdminField>
          <div className="grid gap-6 md:grid-cols-2">
            <AdminField label="Category">
              <select
                className={inputClass}
                value={form.category}
                onChange={(event) => update("category", event.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </AdminField>
            <AdminField label="Brand">
              <select
                className={inputClass}
                value={form.brand}
                onChange={(event) => update("brand", event.target.value)}
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </AdminField>
          </div>
          <AdminField label="SKU">
            <input className={inputClass} value={form.sku} onChange={(event) => update("sku", event.target.value)} placeholder="NK-001-MATTE" />
          </AdminField>
          <AdminField label="Display Size">
            <input className={inputClass} value={form.size} onChange={(event) => update("size", event.target.value)} placeholder="5 KG" />
          </AdminField>
          <div className="flex flex-wrap gap-10">
            <Toggle label="Active Status" checked={form.active} onChange={(value) => update("active", value)} />
            <Toggle label="Featured Product" checked={form.featured} onChange={(value) => update("featured", value)} />
          </div>
        </div>
      </AdminFormSection>

      <AdminFormSection title="Pricing & Stock">
        <div className="grid gap-6 md:grid-cols-3">
          <AdminField label="Base Price ($)">
            <input type="number" className={inputClass} value={form.price} onChange={(event) => update("price", event.target.value)} placeholder="0.00" />
          </AdminField>
          <AdminField label="Sale Price ($)">
            <input type="number" className={inputClass} value={form.salePrice} onChange={(event) => update("salePrice", event.target.value)} placeholder="0.00" />
          </AdminField>
          <AdminField label="Stock Quantity">
            <input type="number" className={inputClass} value={form.stock} onChange={(event) => update("stock", event.target.value)} placeholder="0" />
          </AdminField>
        </div>
      </AdminFormSection>

      <AdminFormSection title="Media">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-2 text-sm text-gray-400">Main Product Image</p>
            <label className="group flex min-h-44 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-zinc-800 bg-black/20 text-center transition hover:border-rose-700/60">
              {form.image ? (
                <img src={form.image} alt="" className="h-44 w-full object-cover" />
              ) : (
                <span className="px-6 text-sm text-white">
                  Click to upload or drag and drop
                  <span className="mt-1 block text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (max. 2MB)
                  </span>
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(event) =>
                  readImageFile(event.target.files?.[0], (image) => update("image", image))
                }
              />
            </label>
            <input
              className={`${inputClass} mt-4`}
              value={form.image}
              onChange={(event) => update("image", event.target.value)}
              placeholder="Or paste image URL"
            />
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-400">Product Gallery</p>
            <div className="flex flex-wrap gap-3">
              <label className="flex size-28 cursor-pointer items-center justify-center rounded-xl border border-dashed border-zinc-800 text-gray-500 transition hover:border-rose-700/60 hover:text-white">
                +
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(event) => {
                    Array.from(event.target.files || []).forEach((file) => {
                      readImageFile(file, (image) =>
                        setGallery((previous) => [...previous, image]),
                      );
                    });
                    event.target.value = "";
                  }}
                />
              </label>
              {gallery.map((image, index) => (
                <div key={`${image}-${index}`} className="relative size-28 overflow-hidden rounded-xl bg-zinc-800">
                  <button
                    type="button"
                    onClick={() =>
                      setGallery((previous) =>
                        previous.filter((_, itemIndex) => itemIndex !== index),
                      )
                    }
                    className="absolute right-2 top-2 z-10 rounded-full bg-rose-700 p-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AdminFormSection>

      <AdminFormSection title="Product Variants (Size)">
        <div className="space-y-4">
          {variants.map((variant, index) => (
            <div key={index} className="grid gap-4 rounded-xl border border-zinc-800 bg-black/20 p-4 md:grid-cols-[1fr_1fr_1fr_auto]">
              {["size", "price", "stock"].map((field) => (
                <AdminField key={field} label={field}>
                  <input
                    className={inputClass}
                    value={variant[field]}
                    onChange={(event) => {
                      const next = [...variants];
                      next[index] = { ...next[index], [field]: event.target.value };
                      setVariants(next);
                    }}
                  />
                </AdminField>
              ))}
              <button type="button" onClick={() => setVariants(variants.filter((_, itemIndex) => itemIndex !== index))} className="self-end p-3 text-gray-400">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </AdminFormSection>

      <div className="flex justify-end gap-6">
        <button type="button" onClick={() => navigate("/admin/products")} className="h-11 px-6 text-sm font-bold text-gray-400">Cancel</button>
        <button type="submit" className="h-11 rounded-xl bg-rose-700 px-10 text-sm font-bold text-white shadow-[0_0_15px_rgba(200,16,46,0.2)]">Save Product</button>
      </div>
    </form>
  );
};

const Toggle = ({ label, checked, onChange }) => (
  <button type="button" onClick={() => onChange(!checked)} className="flex items-center gap-3 text-sm text-white">
    <span className={`relative h-5 w-9 rounded-full ${checked ? "bg-rose-700" : "bg-white/20"}`}>
      <span className={`absolute top-1 size-3 rounded-full bg-white transition ${checked ? "left-5" : "left-1"}`} />
    </span>
    {label}
  </button>
);

export default AddProductContent;
