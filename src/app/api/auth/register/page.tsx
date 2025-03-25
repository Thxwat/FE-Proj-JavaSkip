"use client";

import React, { useState } from "react";
import RegisterForm from "@/components/RegisterForm";
import userRegister from "@/libs/userRegister";

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        tel: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Call the userRegister function with the form data
            await userRegister(
                formData.name,
                formData.tel,
                formData.email,
                formData.password
            );

            setSuccess(true);
            setError(null);
            // Handle successful registration (e.g., redirect, show message)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Registration failed");
            setSuccess(false);
        }
    };

    return (
        <RegisterForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            error={error}
            success={success}
        
        />
    );
};

export default RegisterPage;
