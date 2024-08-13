import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditProfilePage from "./pages/EditProfilePage";

export default createBrowserRouter([
    {
        path: '',
        element: <HomePage />
    },
    {
        path: '/profile/edit',
        element: <EditProfilePage/>
    }
])