import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Message from "./pages/Message";
import EditProfilePage from "./pages/EditProfilePage";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./context/protectedRoutes";


const router = createBrowserRouter([

    {
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: '/message',
                element: <Message />
            }
        ]
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: '/profile/edit',
                element: <EditProfilePage />
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

])

export default router;
