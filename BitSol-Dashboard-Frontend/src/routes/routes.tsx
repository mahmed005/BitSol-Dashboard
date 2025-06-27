import { createBrowserRouter } from "react-router";
import JoinUsPage from "../pages/JoinUsPage";
import RegisterMainPage from "../components/Auth/Register/MainPage";
import AuthMainPage from "../components/Auth/Login/MainPage";
import SettingsRoutePage from "../pages/SettingsRoutePage";
import GeneralPage from "../pages/GeneralPage";
import SecurityPage from '../pages/SecurityPage';

const routes = createBrowserRouter([
  { path: "/join-us", element: <JoinUsPage /> },
  { path: "register", element: <RegisterMainPage /> },
  { path: "/auth", element: <AuthMainPage /> },
  {
    element: <SettingsRoutePage />,
    path: "/settings",
    children: [
      {
        index: true,
        element: <GeneralPage />,
      },
      {
        path: 'security',
        element: <SecurityPage />
      }
    ],
  },
]);

export default routes;
