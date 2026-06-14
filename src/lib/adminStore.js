import {
  productAquaShield,
  productBituShield,
  productHydroShield,
  productWallShield,
  standardBalconyInspection,
} from "../assets/images";

const PRODUCTS_KEY = "nikonikkos_admin_products";
const CATEGORIES_KEY = "nikonikkos_admin_categories";

export const defaultCategories = [
  {
    id: "cat-decorative",
    name: "Decorative",
    description: "Aesthetic wall finishes",
    productCount: 42,
    status: "active",
    image: productAquaShield,
  },
  {
    id: "cat-waterproofing",
    name: "Waterproofing",
    description: "Sealing & moisture protection",
    productCount: 28,
    status: "active",
    image: productBituShield,
  },
  {
    id: "cat-paints",
    name: "Paints",
    description: "Interior & Exterior coatings",
    productCount: 85,
    status: "inactive",
    image: productWallShield,
  },
  {
    id: "cat-insulation",
    name: "Insulation",
    description: "Thermal & sound barriers",
    productCount: 15,
    status: "active",
    image: standardBalconyInspection,
  },
];

export const defaultProducts = [
  {
    id: "prod-aqua",
    name: "Aqua Shield Liquid Membrane",
    subtitle: "High-end professional",
    category: "Waterproofing",
    brand: "Nikonikkos",
    price: 340,
    stock: 12,
    status: "active",
    sku: "NK-AQUA-001",
    description: "Flexible liquid membrane for long lasting waterproofing.",
    image: productAquaShield,
    features: ["UV Resistant", "Flexible Coating", "Long Lasting Protection"],
    size: "5 KG",
    active: true,
    featured: false,
  },
  {
    id: "prod-bitu",
    name: "Bitu Shield Foundation Coating",
    subtitle: "Master Series coating",
    category: "Waterproofing",
    brand: "Nikonikkos",
    price: 340,
    stock: 2,
    status: "low stock",
    sku: "NK-BITU-002",
    description: "Heavy-duty foundation coating with strong adhesion.",
    image: productBituShield,
    features: ["Damp Proof", "Strong Adhesion", "Weather Resistant"],
    size: "20 KG",
    active: true,
    featured: false,
  },
  {
    id: "prod-wall",
    name: "Wall Shield Exterior Paint",
    subtitle: "Exterior paint",
    category: "Paints",
    brand: "Nikonikkos",
    price: 340,
    stock: 0,
    status: "low stock",
    sku: "NK-WALL-003",
    description: "Smooth exterior wall coating with fade resistant color.",
    image: productWallShield,
    features: ["Smooth Finish", "Fade Resistant", "Long Lasting Color"],
    size: "5 KG",
    active: true,
    featured: true,
  },
  {
    id: "prod-hydro",
    name: "Hydro Shield Waterproof System",
    subtitle: "Heavy duty waterproof kit",
    category: "Waterproofing",
    brand: "Nikonikkos",
    price: 340,
    stock: 45,
    status: "active",
    sku: "NK-HYDRO-004",
    description: "Industrial waterproof system for demanding environments.",
    image: productHydroShield,
    features: ["Anti-Microbial", "Heavy Duty", "Waterproof Protection"],
    size: "100 KG",
    active: true,
    featured: false,
  },
];

const readCollection = (key, fallback) => {
  if (typeof window === "undefined") return fallback;

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

const writeCollection = (key, value) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

const defaultProductIds = new Set(defaultProducts.map((product) => product.id));
const defaultCategoryIds = new Set(defaultCategories.map((category) => category.id));

const getCustomProducts = () =>
  readCollection(PRODUCTS_KEY, []).filter(
    (product) => !defaultProductIds.has(product.id),
  );

const getCustomCategories = () =>
  readCollection(CATEGORIES_KEY, []).filter(
    (category) => !defaultCategoryIds.has(category.id),
  );

export const getProducts = () => [...getCustomProducts(), ...defaultProducts];
export const setProducts = (products) =>
  writeCollection(
    PRODUCTS_KEY,
    products.filter((product) => !defaultProductIds.has(product.id)),
  );

export const saveProduct = (product) => {
  const products = getCustomProducts();
  const nextProduct = {
    ...product,
    id:
      product.id && !defaultProductIds.has(product.id)
        ? product.id
        : `prod-${Date.now()}`,
    image: product.image || productAquaShield,
    status: product.stock > 5 ? "active" : "low stock",
  };

  writeCollection(PRODUCTS_KEY, [
    nextProduct,
    ...products.filter((item) => item.id !== nextProduct.id),
  ]);
  return nextProduct;
};

export const deleteProduct = (id) => {
  if (defaultProductIds.has(id)) return false;

  writeCollection(
    PRODUCTS_KEY,
    getCustomProducts().filter((product) => product.id !== id),
  );
  return true;
};

export const getCategories = () =>
  [...getCustomCategories(), ...defaultCategories];
export const setCategories = (categories) =>
  writeCollection(
    CATEGORIES_KEY,
    categories.filter((category) => !defaultCategoryIds.has(category.id)),
  );

export const saveCategory = (category) => {
  const categories = getCustomCategories();
  const nextCategory = {
    ...category,
    id:
      category.id && !defaultCategoryIds.has(category.id)
        ? category.id
        : `cat-${Date.now()}`,
    productCount: category.productCount || 0,
    image: category.image || productAquaShield,
  };

  writeCollection(CATEGORIES_KEY, [
    nextCategory,
    ...categories.filter((item) => item.id !== nextCategory.id),
  ]);
  return nextCategory;
};

export const deleteCategory = (id) => {
  if (defaultCategoryIds.has(id)) return false;

  writeCollection(
    CATEGORIES_KEY,
    getCustomCategories().filter((category) => category.id !== id),
  );
  return true;
};
