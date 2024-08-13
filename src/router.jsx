import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditProfilePage from "./pages/EditProfilePage";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            }
        ]
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: '/profile/edit',
        element: <EditProfilePage/>
    }
])

export default router;
