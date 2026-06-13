export const ROLE_ROUTES = {
  admin: "admin",
};

export const ROLE_LABELS = {
  admin: "Admin",
};

export const getDashboardPathByRole = (role) => {
  const route = ROLE_ROUTES[role || "admin"];
  if (!route) return "/login";
  return `/${route}/dashboard`;
};
