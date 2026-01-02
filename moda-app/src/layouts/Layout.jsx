import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-text-main dark:text-gray-100 selection:bg-primary selection:text-white overflow-x-hidden">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f3e7ef] dark:border-[#3a1d30] transition-colors duration-300">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-2 -ml-2 text-text-main dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
                            <span className="material-symbols-outlined text-2xl">menu</span>
                        </button>
                        <Link to="/" className="flex items-center gap-2 group text-decoration-none">
                            <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-3xl icon-filled">diamond</span>
                            </div>
                            <h1 className="text-2xl font-black tracking-tight text-text-main dark:text-white">MODA</h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link to="/products" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group py-2">
                            Colección
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group py-2">
                            Novedades
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group py-2">
                            Ofertas
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors group">
                            <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors">search</span>
                        </button>
                        <Link to="/cart" className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors group relative">
                            <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors icon-filled">shopping_bag</span>
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        </Link>
                        <Link to="/login" className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors group">
                            <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors">account_circle</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Spacer for Fixed Header */}
            <div className="h-20"></div>

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-background-dark border-t border-[#f3e7ef] dark:border-[#3a1d30] pt-16 pb-8">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="text-primary">
                                    <span className="material-symbols-outlined text-3xl icon-filled">diamond</span>
                                </div>
                                <h2 className="text-text-main dark:text-white text-xl font-extrabold tracking-tight">MODA</h2>
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Redefiniendo el minimalismo moderno con un toque de color y elegancia atemporal.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white mb-4">Comprar</h4>
                            <ul className="space-y-2 text-sm text-text-muted">
                                <li><a href="#" className="hover:text-primary transition-colors">Novedades</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Mujer</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Hombre</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Accesorios</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white mb-4">Ayuda</h4>
                            <ul className="space-y-2 text-sm text-text-muted">
                                <li><a href="#" className="hover:text-primary transition-colors">Envíos y Devoluciones</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Guía de Tallas</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white mb-4">Suscríbete</h4>
                            <p className="text-xs text-text-muted mb-3">Recibe las últimas tendencias y ofertas exclusivas.</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Tu email" className="flex-1 bg-background-light dark:bg-background-dark border border-[#e7cfdf] rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary" />
                                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">OK</button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#f3e7ef] dark:border-[#3a1d30] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-text-muted">© 2024 MODA Store. Todos los derechos reservados.</p>
                        <div className="flex gap-4">
                            <a href="#" className="text-text-muted hover:text-primary transition-colors">Instagram</a>
                            <a href="#" className="text-text-muted hover:text-primary transition-colors">Facebook</a>
                            <a href="#" className="text-text-muted hover:text-primary transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
