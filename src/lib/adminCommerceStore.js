import {
  basfLogo,
  duluxLogo,
  jotunLogo,
  nipponPaintLogo,
  productAquaShield,
  productBituShield,
  productHydroShield,
  productWallShield,
  sherwinWilliamsLogo,
  sikaLogo,
} from "../assets/images";
import { logo } from "../assets/logos";

const BRANDS_KEY = "nikonikkos_admin_brands";
const ORDERS_KEY = "nikonikkos_admin_orders";
const CUSTOMERS_KEY = "nikonikkos_admin_customers";
const SETTINGS_KEY = "nikonikkos_admin_settings";

export const defaultBrands = [
  {
    id: "brand-nikonikkos",
    name: "Nikonikkos",
    description: "Home Improvement",
    productsCount: 4,
    status: "active",
    logo,
    website: "https://nikonikkos.com",
  },
  {
    id: "brand-canon",
    name: "Canon",
    description: "Imaging & Optical",
    productsCount: 432,
    status: "active",
    logo: duluxLogo,
    website: "https://www.canon.com",
  },
  {
    id: "brand-nikon",
    name: "Nikon",
    description: "Photography",
    productsCount: 289,
    status: "active",
    logo: nipponPaintLogo,
    website: "https://www.nikon.com",
  },
  {
    id: "brand-sony",
    name: "Sony",
    description: "Electronics",
    productsCount: 512,
    status: "active",
    logo: sikaLogo,
    website: "https://www.sony.com",
  },
  {
    id: "brand-fujifilm",
    name: "Fujifilm",
    description: "Cameras & Film",
    productsCount: 156,
    status: "inactive",
    logo: jotunLogo,
    website: "https://www.fujifilm.com",
  },
  {
    id: "brand-panasonic",
    name: "Panasonic",
    description: "Appliances",
    productsCount: 321,
    status: "active",
    logo: basfLogo,
    website: "https://www.panasonic.com",
  },
  {
    id: "brand-sherwin",
    name: "Sherwin Williams",
    description: "Coatings",
    productsCount: 214,
    status: "active",
    logo: sherwinWilliamsLogo,
    website: "https://www.sherwin-williams.com",
  },
];

export const defaultOrders = [
  {
    id: "order-1058",
    orderId: "#ORD-2026-1058",
    customer: "Ahmed Raza",
    email: "ahmed.raza@example.com",
    phone: "+92 300 1234567",
    avatar: "AR",
    date: "12 June 2026",
    updatedAt: "13 June 2026",
    amount: 26700,
    status: "processing",
    statusMessage: "Status changed to Processing",
    shippingAddress: "Same as billing address",
    billingAddress: "House 42, Block C, Gulberg III, Lahore, Pakistan",
    carrier: "Standard - Leopards Courier",
    tracking: "LPD123456789",
    delivery: "15 June 2026",
    discount: 1000,
    shipping: 500,
    weight: "24.5 kg",
    payment: "Cash on Delivery",
    products: [
      {
        name: "HydroShield Waterproofing",
        variant: "10L Bucket, Blue Label",
        image: productHydroShield,
        qty: 2,
        price: 8500,
      },
      {
        name: "Acrylic Emulsion Premium",
        variant: "Matte Finish, 4L",
        image: productWallShield,
        qty: 1,
        price: 6200,
      },
      {
        name: "Thermal Insulation Sheet",
        variant: "Standard 20m Roll",
        image: productAquaShield,
        qty: 1,
        price: 4000,
      },
    ],
  },
  {
    id: "order-9021",
    orderId: "#ORD-9021",
    customer: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    date: "Oct 24, 2023",
    amount: 599,
    status: "processing",
  },
  {
    id: "order-9020",
    orderId: "#ORD-9020",
    customer: "Marcus Thorne",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
    date: "Oct 24, 2023",
    amount: 1240.5,
    status: "pending",
  },
  {
    id: "order-9019",
    orderId: "#ORD-9019",
    customer: "David Chen",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=80&q=80",
    date: "Oct 23, 2023",
    amount: 89.99,
    status: "delivered",
  },
  {
    id: "order-9018",
    orderId: "#ORD-9018",
    customer: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80",
    date: "Oct 23, 2023",
    amount: 2450,
    status: "shipped",
  },
  {
    id: "order-9017",
    orderId: "#ORD-9017",
    customer: "Lisa Wang",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=80&q=80",
    date: "Oct 22, 2023",
    amount: 435.2,
    status: "cancelled",
  },
  {
    id: "order-9016",
    orderId: "#ORD-9016",
    customer: "Bilal Khan",
    avatar: "BK",
    date: "Oct 22, 2023",
    amount: 730,
    status: "pending",
  },
  {
    id: "order-9015",
    orderId: "#ORD-9015",
    customer: "Nora Wilson",
    avatar: "NW",
    date: "Oct 21, 2023",
    amount: 1120,
    status: "delivered",
  },
  {
    id: "order-9014",
    orderId: "#ORD-9014",
    customer: "Omar Farooq",
    avatar: "OF",
    date: "Oct 21, 2023",
    amount: 875,
    status: "processing",
  },
  {
    id: "order-9013",
    orderId: "#ORD-9013",
    customer: "Maya Kapoor",
    avatar: "MK",
    date: "Oct 20, 2023",
    amount: 318,
    status: "shipped",
  },
  {
    id: "order-9012",
    orderId: "#ORD-9012",
    customer: "James Patel",
    avatar: "JP",
    date: "Oct 20, 2023",
    amount: 1660,
    status: "cancelled",
  },
  {
    id: "order-9011",
    orderId: "#ORD-9011",
    customer: "Hina Malik",
    avatar: "HM",
    date: "Oct 19, 2023",
    amount: 980,
    status: "delivered",
  },
];

export const defaultSettings = {
  websiteName: "Nikonikkos Store",
  email: "info@nikonikkos.com",
  phone: "+1 (555) 000-0000",
  address: "123 Imaging Blvd, Camera City, NY 10001",
  mapsKey: "AIzaSyA_example_key_12345",
  analyticsId: "G-XXXXXXXXXX",
  tagManagerId: "GTM-XXXXXXXX",
  facebook: "",
  instagram: "",
  linkedin: "",
  whatsapp: "",
  smtpHost: "smtp.mailtrap.io",
  smtpPort: "587",
  smtpUsername: "admin_niko",
  smtpPassword: "************",
  notifications: {
    newOrders: true,
    lowStock: true,
    userRegistration: false,
    systemUpdates: true,
  },
};

export const defaultCustomers = [
  {
    id: "customer-ahmed",
    name: "Ahmed Raza",
    email: "ahmed.raza@example.com",
    phone: "+92 300 1234567",
    location: "Lahore, Pakistan",
    orders: 12,
    spent: 26700,
    status: "active",
    joined: "May 2024",
    avatar: "AR",
  },
  {
    id: "customer-sarah",
    name: "Sarah Jenkins",
    email: "sarah.jenkins@example.com",
    phone: "+44 20 7946 0184",
    location: "London, United Kingdom",
    orders: 8,
    spent: 5990,
    status: "active",
    joined: "Oct 2023",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "customer-marcus",
    name: "Marcus Thorne",
    email: "marcus.thorne@example.com",
    phone: "+41 44 555 0198",
    location: "Zurich, Switzerland",
    orders: 5,
    spent: 12405,
    status: "active",
    joined: "Sep 2023",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "customer-david",
    name: "David Chen",
    email: "david.chen@example.com",
    phone: "+65 8123 4567",
    location: "Singapore",
    orders: 3,
    spent: 899,
    status: "inactive",
    joined: "Aug 2023",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "customer-elena",
    name: "Elena Rodriguez",
    email: "elena.rodriguez@example.com",
    phone: "+34 600 123 456",
    location: "Madrid, Spain",
    orders: 9,
    spent: 24500,
    status: "active",
    joined: "Jul 2023",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "customer-lisa",
    name: "Lisa Wang",
    email: "lisa.wang@example.com",
    phone: "+1 555 0199",
    location: "New York, USA",
    orders: 4,
    spent: 4352,
    status: "blocked",
    joined: "Jun 2023",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: "customer-bilal",
    name: "Bilal Khan",
    email: "bilal.khan@example.com",
    phone: "+92 321 9876543",
    location: "Karachi, Pakistan",
    orders: 6,
    spent: 7300,
    status: "active",
    joined: "May 2023",
    avatar: "BK",
  },
  {
    id: "customer-nora",
    name: "Nora Wilson",
    email: "nora.wilson@example.com",
    phone: "+1 555 0124",
    location: "Toronto, Canada",
    orders: 7,
    spent: 11200,
    status: "active",
    joined: "Apr 2023",
    avatar: "NW",
  },
  {
    id: "customer-omar",
    name: "Omar Farooq",
    email: "omar.farooq@example.com",
    phone: "+971 50 123 4567",
    location: "Dubai, UAE",
    orders: 2,
    spent: 8750,
    status: "inactive",
    joined: "Mar 2023",
    avatar: "OF",
  },
  {
    id: "customer-maya",
    name: "Maya Kapoor",
    email: "maya.kapoor@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    orders: 11,
    spent: 31800,
    status: "active",
    joined: "Feb 2023",
    avatar: "MK",
  },
  {
    id: "customer-james",
    name: "James Patel",
    email: "james.patel@example.com",
    phone: "+44 7700 900123",
    location: "Manchester, United Kingdom",
    orders: 5,
    spent: 16600,
    status: "blocked",
    joined: "Jan 2023",
    avatar: "JP",
  },
  {
    id: "customer-hina",
    name: "Hina Malik",
    email: "hina.malik@example.com",
    phone: "+92 333 4567890",
    location: "Islamabad, Pakistan",
    orders: 10,
    spent: 9800,
    status: "active",
    joined: "Dec 2022",
    avatar: "HM",
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

const defaultBrandIds = new Set(defaultBrands.map((brand) => brand.id));
const defaultOrderIds = new Set(defaultOrders.map((order) => order.id));
const defaultCustomerIds = new Set(defaultCustomers.map((customer) => customer.id));

const getCustomBrands = () =>
  readCollection(BRANDS_KEY, []).filter((brand) => !defaultBrandIds.has(brand.id));

const getCustomOrders = () =>
  readCollection(ORDERS_KEY, []).filter((order) => !defaultOrderIds.has(order.id));

const getCustomCustomers = () =>
  readCollection(CUSTOMERS_KEY, []).filter(
    (customer) => !defaultCustomerIds.has(customer.id),
  );

export const getBrands = () => [...getCustomBrands(), ...defaultBrands];

export const saveBrand = (brand) => {
  const customBrands = getCustomBrands();
  const nextBrand = {
    ...brand,
    id:
      brand.id && !defaultBrandIds.has(brand.id)
        ? brand.id
        : `brand-${Date.now()}`,
    logo: brand.logo || duluxLogo,
    productsCount: Number(brand.productsCount || 0),
  };

  writeCollection(BRANDS_KEY, [
    nextBrand,
    ...customBrands.filter((item) => item.id !== nextBrand.id),
  ]);
  return nextBrand;
};

export const deleteBrand = (id) => {
  if (defaultBrandIds.has(id)) return false;
  writeCollection(
    BRANDS_KEY,
    getCustomBrands().filter((brand) => brand.id !== id),
  );
  return true;
};

export const getOrders = () => {
  const customOrders = getCustomOrders();

  return [
    ...customOrders,
    ...defaultOrders.filter(
      (order) => !customOrders.some((customOrder) => customOrder.originalId === order.id),
    ),
  ];
};

export const getOrderById = (id) => {
  const order = getOrders().find(
    (item) => item.id === id || item.originalId === id || item.orderId === id,
  );

  return order
    ? {
        ...defaultOrders[0],
        ...order,
        products: order.products || defaultOrders[0].products,
      }
    : defaultOrders[0];
};

export const updateOrderStatus = (id, status, tracking) => {
  const order = getOrderById(id);
  const customOrders = getCustomOrders();
  const nextOrder = {
    ...order,
    id: defaultOrderIds.has(order.id) ? `custom-${order.id}` : order.id,
    originalId: order.originalId || order.id,
    status,
    tracking: tracking || order.tracking,
    updatedAt: "14 June 2026",
  };

  writeCollection(ORDERS_KEY, [
    nextOrder,
    ...customOrders.filter((item) => item.id !== nextOrder.id),
  ]);
  return nextOrder;
};

export const getCustomers = () => [...getCustomCustomers(), ...defaultCustomers];

export const saveCustomer = (customer) => {
  const customCustomers = getCustomCustomers();
  const nextCustomer = {
    ...customer,
    id:
      customer.id && !defaultCustomerIds.has(customer.id)
        ? customer.id
        : `customer-${Date.now()}`,
    orders: Number(customer.orders || 0),
    spent: Number(customer.spent || 0),
  };

  writeCollection(CUSTOMERS_KEY, [
    nextCustomer,
    ...customCustomers.filter((item) => item.id !== nextCustomer.id),
  ]);
  return nextCustomer;
};

export const deleteCustomer = (id) => {
  if (defaultCustomerIds.has(id)) return false;
  writeCollection(
    CUSTOMERS_KEY,
    getCustomCustomers().filter((customer) => customer.id !== id),
  );
  return true;
};

export const getSettings = () => ({
  ...defaultSettings,
  ...readCollection(SETTINGS_KEY, {}),
  notifications: {
    ...defaultSettings.notifications,
    ...readCollection(SETTINGS_KEY, {}).notifications,
  },
});

export const saveSettings = (settings) => {
  writeCollection(SETTINGS_KEY, settings);
  return settings;
};
