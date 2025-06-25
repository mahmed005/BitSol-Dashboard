import { createBrowserRouter } from "react-router";
import JoinUsPage from "../pages/JoinUsPage";
import RegisterMainPage from "../components/Auth/Register/MainPage";
import AuthMainPage from "../components/Auth/Login/MainPage";

const routes = createBrowserRouter([
  { path: "/join-us", element: <JoinUsPage /> },
  { path: "register", element: <RegisterMainPage /> },
  { path: "/auth", element: <AuthMainPage /> },
]);

export default routes;
