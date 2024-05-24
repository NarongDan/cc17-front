import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Header from "../layout/Header";
import LoginForm from "../layout/LoginForm";
import RegisterForm from "../layout/RegisterForm";

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <Navigate to="/" />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={guestRouter} />;
}
