import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ProtectedRoute from "./components/organisms/ProtectedRoute";
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import DashboardApp from "./pages/DashboardApp";
import InvoiceList from "./pages/InvoiceList";
import Login from "./pages/Login";

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "app", element: <DashboardApp /> },
        { path: "invoices", element: <InvoiceList /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "/login", element: <Login /> },
        // { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
