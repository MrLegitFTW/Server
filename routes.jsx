import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/home",
        element: <HomePage />
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
