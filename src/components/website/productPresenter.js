import { productCatalog } from "./productCatalog";

const iconProductMap = new Map(
  productCatalog.map((product) => [product.title, product]),
);

export const toProductCard = (product) => {
  const fallback = productCatalog[0];
  const catalogMatch = iconProductMap.get(product.name);

  return {
    ...product,
    title: product.name,
    icon: catalogMatch?.icon || fallback.icon,
    iconColor: catalogMatch?.iconColor || fallback.iconColor,
    features: product.features?.length ? product.features : fallback.features,
    price: Number(product.price || 0),
  };
};

export const getStorefrontProducts = (products, limit) => {
  const visibleProducts = products.filter(
    (product) => product.active !== false && product.status !== "inactive",
  );

  return (limit ? visibleProducts.slice(0, limit) : visibleProducts).map(toProductCard);
};
