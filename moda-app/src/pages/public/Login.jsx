import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login
        if (email && password) {
            if (email.includes('admin')) {
                navigate('/admin/dashboard');
            } else {
                // Standard user login redirection could go here
                navigate('/');
            }
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased selection:bg-primary selection:text-white overflow-hidden">
            <div className="flex min-h-screen w-full flex-row overflow-hidden">
                {/* Left Side: Editorial Image */}
                <div className="relative hidden w-1/2 lg:flex flex-col justify-between p-12 overflow-hidden bg-text-main group">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Minimalist fashion model posing in neutral coat"
                            className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                            src="/images/login_hero.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10">
                        {/* Logo on Image side */}
                        <div className="flex items-center gap-3 text-white">
                            <Link to="/" className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-3xl icon-filled">diamond</span>
                                <h1 className="text-xl font-bold tracking-tight">MODA</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="relative z-10 max-w-md">
                        <blockquote className="text-2xl font-medium text-white leading-relaxed">
                            "La simplicidad es la clave de la verdadera elegancia."
                        </blockquote>
                        <p className="mt-4 text-white/80 text-sm font-medium">— Coco Chanel</p>
                    </div>
                </div>
                {/* Right Side: Login Form */}
                <div className="flex w-full lg:w-1/2 flex-col justify-center items-center bg-background-light dark:bg-background-dark p-6 sm:p-12 md:p-20 relative">
                    {/* Mobile Header Logo (Visible only on small screens) */}
                    <div className="lg:hidden absolute top-6 left-6 flex items-center gap-2 text-text-main dark:text-white mb-8">
                        <Link to="/" className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-3xl icon-filled">diamond</span>
                        </Link>
                        <span className="font-bold text-lg">Moda Minimalista</span>
                    </div>
                    <div className="w-full max-w-[420px] flex flex-col gap-8">
                        {/* Heading */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                                Bienvenido de nuevo
                            </h2>
                            <p className="text-text-muted text-base font-normal">
                                Ingresa tus credenciales para acceder a tu cuenta.
                            </p>
                        </div>
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Email Field */}
                            <label className="flex flex-col w-full">
                                <p className="text-text-main dark:text-white text-sm font-semibold leading-normal pb-2">
                                    Correo electrónico
                                </p>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="form-input w-full resize-none rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base text-text-main dark:text-white placeholder:text-text-muted outline-none transition-all"
                                    placeholder="admin@moda.store"
                                    type="email"
                                />
                            </label>
                            {/* Password Field */}
                            <label className="flex flex-col w-full">
                                <div className="flex justify-between items-center pb-2">
                                    <p className="text-text-main dark:text-white text-sm font-semibold leading-normal">Contraseña</p>
                                </div>
                                <div className="relative w-full">
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="form-input w-full resize-none rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-4 pr-12 text-base text-text-main dark:text-white placeholder:text-text-muted outline-none transition-all"
                                        placeholder="••••••••"
                                        type="password"
                                    />
                                    <button
                                        className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-text-muted hover:text-primary transition-colors"
                                        type="button"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                                    </button>
                                </div>
                            </label>
                            {/* Checkbox & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            className="peer h-4 w-4 cursor-pointer rounded border-border-color border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all"
                                            type="checkbox"
                                        />
                                        <svg
                                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                            fill="none"
                                            height="8"
                                            viewBox="0 0 10 8"
                                            width="10"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9 1L3.5 6.5L1 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <span className="text-text-main dark:text-gray-300 text-sm font-medium group-hover:text-primary transition-colors">
                                        Recordarme
                                    </span>
                                </label>
                                <a className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors" href="#">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-primary/20"
                            >
                                <span className="truncate">Iniciar Sesión</span>
                            </button>
                        </form>
                        {/* Divider */}
                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-border-color"></div>
                            <span className="flex-shrink-0 mx-4 text-text-muted text-xs font-medium uppercase tracking-wider">
                                O continúa con
                            </span>
                            <div className="flex-grow border-t border-border-color"></div>
                        </div>
                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <img
                                    alt="Google Logo"
                                    className="w-5 h-5"
                                    src="/images/google_logo.jpg"
                                />
                                <span className="text-sm font-semibold text-text-main dark:text-white">Google</span>
                            </button>
                            <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <span className="material-symbols-outlined text-[22px] text-text-main dark:text-white">ios</span>
                                <span className="text-sm font-semibold text-text-main dark:text-white">Apple</span>
                            </button>
                        </div>
                        {/* Sign Up Footer */}
                        <div className="flex justify-center gap-1 mt-2">
                            <p className="text-text-muted text-sm">¿No tienes una cuenta?</p>
                            <a className="text-primary hover:text-primary-dark text-sm font-bold transition-colors" href="#">
                                Registrarse
                            </a>
                        </div>
                    </div>
                    {/* Bottom Helper Links */}
                    <div className="absolute bottom-6 flex gap-6 text-xs text-text-muted">
                        <a className="hover:text-text-main transition-colors" href="#">
                            Ayuda
                        </a>
                        <a className="hover:text-text-main transition-colors" href="#">
                            Privacidad
                        </a>
                        <a className="hover:text-text-main transition-colors" href="#">
                            Términos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
