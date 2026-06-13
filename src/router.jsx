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
import WebsiteContact from "./pages/website/contact";
import NotificationsPage from "./pages/admin/notifications";
import AdminChat from "./pages/admin/chat";

import AdminDashboard from "./pages/admin/dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<WebsiteHome />} />
        <Route path="/about" element={<WebsiteAbout />} />
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
        <Route path="chat" element={<AdminChat />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
