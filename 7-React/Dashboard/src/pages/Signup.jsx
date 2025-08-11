import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from './../firbase'

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
    };

    const signupSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().min(6, "Password can not be < 6").required("Password is required"),
        confirmPassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Password must match")
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const createUser = await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                )
                if (createUser.user) {
                    await sendEmailVerification(auth.currentUser)
                    toast.success("User has been created. Please Verified your Email through Spam Section in your Gmail Account"
                    )
                    navigate("/login");
                }
            } catch (error) {
                toast(error.message);
            } finally {
                setLoading(false);
                formik.resetForm();
            }
        }
    });

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your details below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <span className="text-red-500 text-[12px]">
                                        {formik.errors.name}
                                    </span>
                                )}
                            </div>
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
                                    <span className="text-red-500 text-[12px]">
                                        {formik.errors.password}
                                    </span>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    type="password"
                                />
                                {formik.errors.confirmPassword &&
                                    formik.touched.confirmPassword && (
                                        <span className="text-red-500 text-[12px]">
                                            {formik.errors.confirmPassword}
                                        </span>
                                    )}
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button
                        disabled={loading}
                        onClick={formik.submitForm}
                        className="w-full"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                    <p className="text-sm text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="underline cursor-pointer">
                            Sign in
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Signup
