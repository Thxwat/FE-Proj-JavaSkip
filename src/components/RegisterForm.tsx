import React from "react";
import { useEffect } from "react";

interface RegisterFormProps {
    formData: {
        name: string;
        tel: string;
        email: string;
        password: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    error: string | null;
    success: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ formData, onChange, onSubmit, error, success }) => {

    // Use useEffect to redirect when success is true
    useEffect(() => {
        if (success) {
            const redirectTimer = setTimeout(() => {
                window.location.href = 'http://localhost:3000'; // Direct browser redirect
            }, 2000); // 2-second delay to show success message

            // Cleanup the timer to prevent memory leaks
            return () => clearTimeout(redirectTimer);
        }
    }, [success]);
    
    return (
        <form 
    onSubmit={onSubmit} 
    className="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
>
    <div className="mb-4">
        <label 
            htmlFor="name" 
            className="block text-gray-700 text-sm font-bold mb-2"
        >
            Name
        </label>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
    <div className="mb-4">
        <label 
            htmlFor="tel" 
            className="block text-gray-700 text-sm font-bold mb-2"
        >
            Telephone
        </label>
        <input
            type="text"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={onChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
    <div className="mb-4">
        <label 
            htmlFor="email" 
            className="block text-gray-700 text-sm font-bold mb-2"
        >
            Email
        </label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
    <div className="mb-6">
        <label 
            htmlFor="password" 
            className="block text-gray-700 text-sm font-bold mb-2"
        >
            Password
        </label>
        <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
    <div className="flex items-center justify-between">
        <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Register
        </button>
    </div>
    {error && (
        <p className="text-red-500 text-xs italic mt-3">{error}</p>
    )}
    {success && (
        <p className="text-green-500 text-xs italic mt-3">
            Registration successful! Redirecting...
        </p>
    )}
</form>

    );
};

export default RegisterForm;