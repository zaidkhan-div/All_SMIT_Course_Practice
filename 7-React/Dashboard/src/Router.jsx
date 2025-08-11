import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AddStudentComp from "./pages/Dashbaord.jsx";
import Dashbaord from "./pages/Dashbaord.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="forgotPassword" element={<ForgotPassword />} />
                <Route path="dashbaord" element={<Dashbaord />} />
                <Route path="addStudent" element={<AddStudentComp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;