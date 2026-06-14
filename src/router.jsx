import { Routes, Route } from "react-router-dom";
import AppLayout from "./global/AppLayout";
import Login from "./pages/Login";
import UnauthorizedPage from "./pages/Unauthor";
import AuthGuard from "./components/AuthGuard";
import AuthRedirect from "./utils/AuthRedirect";
import NotFound from "./pages/NotFound";
import WebsiteLayout from "./layouts/WebsiteLayout";
import WebsiteHome from "./pages/website/home";
import WebsiteAbout from "./pages/website/about";
import WebsiteBrands from "./pages/website/brands";
import WebsiteBrochures from "./pages/website/brochures";
import WebsiteContact from "./pages/website/contact";
import WebsiteShop from "./pages/website/shop";
import WebsiteGallery from "./pages/website/gallery";
import ProductDetailPage from "./pages/website/shop/product/ProductDetailPage";
import NotificationsPage from "./pages/admin/notifications";
import AdminChat from "./pages/admin/chat";

import AdminDashboard from "./pages/admin/dashboard";
import AdminProducts from "./pages/admin/products";
import AddProductPage from "./pages/admin/products/new";
import AdminCategories from "./pages/admin/categories";
import AddCategoryPage from "./pages/admin/categories/new";
import AdminBrands from "./pages/admin/brands";
import AddBrandPage from "./pages/admin/brands/new";
import AdminOrders from "./pages/admin/orders";
import OrderDetailPage from "./pages/admin/orders/detail";
import AdminSettings from "./pages/admin/settings";
import AdminCustomers from "./pages/admin/customers";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<WebsiteHome />} />
        <Route path="/shop" element={<WebsiteShop />} />
        <Route path="/shop/:productId" element={<ProductDetailPage />} />
        <Route path="/gallery" element={<WebsiteGallery />} />
        <Route path="/about" element={<WebsiteAbout />} />
        <Route path="/brands" element={<WebsiteBrands />} />
        <Route path="/brochures" element={<WebsiteBrochures />} />
        <Route path="/contact" element={<WebsiteContact />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<AuthRedirect />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      <Route
        path="/admin"
        element={
          <AuthGuard>
            <AppLayout />
          </AuthGuard>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="products/new" element={<AddProductPage />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="categories/new" element={<AddCategoryPage />} />
        <Route path="brands" element={<AdminBrands />} />
        <Route path="brands/new" element={<AddBrandPage />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="orders/:orderId" element={<OrderDetailPage />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="chat" element={<AdminChat />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
