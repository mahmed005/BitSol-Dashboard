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
import FeedPage from "../pages/FeedPage";
import EventsPage from "../pages/EventsPage";
import JobsPage from "../pages/JobsPage";
import ArticlesPage from "../pages/ArticlesPage";
import PeoplePage from "../pages/PeoplePage";

const routes = createBrowserRouter([
  { path: "/join-us", element: <JoinUsPage /> },
  { path: "register", element: <RegisterMainPage /> },
  { path: "/auth", element: <AuthMainPage /> },
  {
    path: "/",
    element: <DashboardRootPage />,
    children: [
      {
        path: "",
        element: <DashboardSideLayoutPage />,
        children: [
          {
            index: true,
            element: <FeedPage />,
          },
          {
            path: "events",
            element: <EventsPage />,
          },
          {
            path: "jobs",
            element: <JobsPage />,
          },
        ],
      },
      {
        path: "articles",
        element: <ArticlesPage />,
      },
      {
        path: "people",
        element: <PeoplePage />,
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
