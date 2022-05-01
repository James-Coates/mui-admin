import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ProtectedRoute from "./components/organisms/ProtectedRoute";
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import DashboardApp from "./pages/DashboardApp";
import InvoiceList from "./pages/InvoiceList";
import Login from "./pages/Login";
import UserEdit from "./pages/user/UserEdit";
import UserList from "./pages/user/UserList";
import UserNew from "./pages/user/UserNew";

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
        {
          path: "invoice",
          children: [{ path: "list", element: <InvoiceList /> }],
        },
        {
          path: "user",
          children: [
            { path: "list", element: <UserList /> },
            { path: "new", element: <UserNew /> },
            { path: ":userId/edit", element: <UserEdit /> },
          ],
        },
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
