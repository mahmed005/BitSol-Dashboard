import { createBrowserRouter } from "react-router";
import JoinUsPage from "../pages/JoinUsPage";
import RegisterMainPage from "../components/Auth/Register/MainPage";
import AuthMainPage from "../components/Auth/Login/MainPage";
import SettingsRoutePage from "../pages/SettingsRoutePage";
import GeneralPage from "../pages/GeneralPage";
import SecurityPage from "../pages/SecurityPage";
import BillingPage from "../pages/BillingPage";
import NotificationsPage from "../pages/NotificationsPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import DashboardRootPage from "../pages/DashboardRootPage";
import DashboardSideLayoutPage from "../pages/DashboardSideLayoutPage";

const routes = createBrowserRouter([
  { path: "/join-us", element: <JoinUsPage /> },
  { path: "register", element: <RegisterMainPage /> },
  { path: "/auth", element: <AuthMainPage /> },
  {
    path: "/",
    element: <DashboardRootPage />,
    children: [
      {
        index: true,
        element: <DashboardSideLayoutPage />,
      },
    ],
  },
  {
    element: <SettingsRoutePage />,
    path: "/settings",
    children: [
      {
        index: true,
        element: <GeneralPage />,
      },
      {
        path: "security",
        element: <SecurityPage />,
      },
      {
        path: "billing",
        element: <BillingPage />,
      },
      {
        path: "notifications",
        element: <NotificationsPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
    ],
  },
]);

export default routes;
