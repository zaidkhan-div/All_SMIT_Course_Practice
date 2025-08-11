import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Link, useNavigate } from 'react-router-dom';
import { Label } from '@radix-ui/react-label';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from './../firbase'
import { toast } from 'sonner';

const Login = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().required("Password is required")
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const loginUser = await signInWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                )
                if (loginUser) {
                    if (loginUser?.user?.emailVerified) {
                        toast.success("Login Succesfully");
                        await sendEmailVerification(auth.currentUser);
                    } else {
                        toast("Please verified your email to proceed further");
                    }
                    navigate("/Dashbaord")

                } else {
                    toast("Please create an account to proceed")
                }
            } catch (error) {
                toast.error(error.message);
                setLoading(false);
            } finally {
                setLoading(false);
                formik.resetForm();
            }
            console.log("Form Values", values);
        }
    })

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                    <CardDescription>
                        Enter your details below to login in
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <span className="text-red-500 text-[12px]">
                                        {formik.errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    type="password"
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <span className="text-red-500
                                    text-[12px]">
                                        {formik.errors.password}
                                    </span>
                                )}
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button
                        disabled={loading}
                        onClick={formik.handleSubmit}
                        className="w-full"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                    <p className="text-sm text-center">
                        Already have an account?{" "}
                        <Link to="/signup" className="underline cursor-pointer">
                            Sign up
                        </Link>
                    </p>
                    <p className="text-sm text-center">
                        <Link to="/forgotPassword" className="underline cursor-pointer">
                            Forgot Password
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Login
