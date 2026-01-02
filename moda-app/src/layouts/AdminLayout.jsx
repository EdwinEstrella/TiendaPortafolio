import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname.includes(path);

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200 font-display">
            {/* Sidebar */}
            <aside className="hidden w-64 flex-col border-r border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark md:flex">
                <div className="flex h-16 items-center gap-3 px-6 border-b border-[#e7cfdf] dark:border-[#4a3041]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                        <span className="material-symbols-outlined text-[20px]">checkroom</span>
                    </div>
                    <h1 className="text-lg font-bold tracking-tight text-text-main dark:text-white">Admin Moda</h1>
                </div>
                <div className="flex flex-1 flex-col justify-between overflow-y-auto p-4">
                    <div className="flex flex-col gap-2">
                        <div className="px-2 py-1">
                            <p className="text-xs font-semibold uppercase text-text-muted dark:text-gray-400">Principal</p>
                        </div>
                        <Link
                            to="/admin/dashboard"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${isActive('dashboard') ? 'bg-primary/10 text-primary' : 'text-text-main dark:text-gray-300 hover:bg-[#f3e7ef] dark:hover:bg-[#4a3041]'
                                }`}
                        >
                            <span className={`material-symbols-outlined text-[20px] font-medium ${isActive('dashboard') ? '' : 'text-text-muted'}`}>dashboard</span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </Link>
                        <Link
                            to="/admin/products"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors group ${isActive('products') ? 'bg-primary/10 text-primary' : 'text-text-main dark:text-gray-300 hover:bg-[#f3e7ef] dark:hover:bg-[#4a3041]'
                                }`}
                        >
                            <span className={`material-symbols-outlined text-[20px] ${isActive('products') ? '' : 'text-text-muted'} group-hover:text-primary transition-colors`}>inventory_2</span>
                            <span className="text-sm font-medium">Productos</span>
                        </Link>
                        <Link
                            to="/admin/orders"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors group ${isActive('orders') ? 'bg-primary/10 text-primary' : 'text-text-main dark:text-gray-300 hover:bg-[#f3e7ef] dark:hover:bg-[#4a3041]'
                                }`}
                        >
                            <span className={`material-symbols-outlined text-[20px] ${isActive('orders') ? '' : 'text-text-muted'} group-hover:text-primary transition-colors`}>shopping_bag</span>
                            <span className="text-sm font-medium">Pedidos</span>
                            <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">12</span>
                        </Link>
                        <Link
                            to="/admin/customers"
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors group ${isActive('customers') ? 'bg-primary/10 text-primary' : 'text-text-main dark:text-gray-300 hover:bg-[#f3e7ef] dark:hover:bg-[#4a3041]'
                                }`}
                        >
                            <span className={`material-symbols-outlined text-[20px] ${isActive('customers') ? '' : 'text-text-muted'} group-hover:text-primary transition-colors`}>group</span>
                            <span className="text-sm font-medium">Clientes</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 border-t border-[#e7cfdf] dark:border-[#4a3041] pt-4">
                        <div className="px-2 py-1">
                            <p className="text-xs font-semibold uppercase text-text-muted dark:text-gray-400">Sistema</p>
                        </div>
                        <Link
                            to="/admin/settings"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-main dark:text-gray-300 hover:bg-[#f3e7ef] dark:hover:bg-[#4a3041] transition-colors group"
                        >
                            <span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primary transition-colors">settings</span>
                            <span className="text-sm font-medium">Configuración</span>
                        </Link>
                        <Link
                            to="/admin/logout"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-main dark:text-gray-300 hover:bg-[#f3e7ef] dark:hover:bg-[#4a3041] transition-colors group"
                        >
                            <span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primary transition-colors">logout</span>
                            <span className="text-sm font-medium">Cerrar Sesión</span>
                        </Link>
                    </div>
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-[#fcf8fa] dark:bg-[#22101c] p-3">
                        <div
                            className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/admin_avatar.jpg")' }}
                        ></div>
                        <div className="flex flex-col overflow-hidden">
                            <p className="truncate text-sm font-semibold text-text-main dark:text-white">Admin User</p>
                            <p className="truncate text-xs text-text-muted">admin@moda.store</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden bg-background-light dark:bg-background-dark">
                {/* Top Bar */}
                <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light/80 dark:bg-surface-dark/80 px-6 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-text-main dark:text-white">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold text-text-main dark:text-white">Resumen General</h2>
                            <p className="text-xs text-text-muted hidden sm:block">Bienvenido de nuevo, aquí tienes el estado de tu tienda.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light dark:bg-[#4a3041] text-text-muted hover:text-primary transition-colors shadow-sm border border-[#e7cfdf] dark:border-transparent">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-light dark:bg-[#4a3041] text-text-muted hover:text-primary transition-colors shadow-sm border border-[#e7cfdf] dark:border-transparent">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-white dark:ring-[#2f1c29]"></span>
                        </button>
                    </div>
                </header>
                {/* Render Page Content */}
                <div className="flex flex-col gap-6 p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
