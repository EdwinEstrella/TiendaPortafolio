
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
    // Products data is now imported

    return (
        <div className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex mb-6 text-sm text-text-muted">
                <Link className="hover:text-primary transition-colors" to="/">Inicio</Link>
                <span className="mx-2 text-xs opacity-50">/</span>
                <Link className="hover:text-primary transition-colors" to="/products">Colección</Link>
            </nav>
            {/* Page Heading & Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-8 border-b border-[#f3e7ef] dark:border-[#3a1d30]">
                <div className="flex flex-col gap-2 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-black text-text-main tracking-tight dark:text-white">
                        Nueva Colección
                    </h1>
                    <p className="text-text-muted text-lg font-light">
                        Prendas minimalistas en tonos neutros con toques vibrantes para la temporada.
                    </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                    <div className="relative group">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted pointer-events-none">sort</span>
                        <select className="pl-10 pr-8 py-2.5 bg-white dark:bg-background-dark border border-[#e7cfdf] dark:border-[#4a3041] rounded-lg text-text-main dark:text-white text-sm font-medium focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer hover:border-primary/50 transition-colors appearance-none min-w-[180px]">
                            <option>Recomendados</option>
                            <option>Precio: Menor a Mayor</option>
                            <option>Precio: Mayor a Menor</option>
                            <option>Más nuevos</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted text-sm pointer-events-none">expand_more</span>
                    </div>
                </div>
            </div>
            {/* Chips / Quick Filters */}
            <div className="flex flex-wrap gap-3 mb-10">
                <button className="px-5 py-2 rounded-full bg-text-main text-white text-sm font-medium transition-transform active:scale-95 shadow-lg shadow-primary/10">
                    Ver todo
                </button>
                {['Abrigos', 'Pantalones', 'Camisas', 'Vestidos', 'Accesorios'].map((category) => (
                    <button key={category} className="px-5 py-2 rounded-full bg-white dark:bg-background-dark border border-[#e7cfdf] dark:border-[#4a3041] text-text-main dark:text-white hover:border-primary hover:text-primary text-sm font-medium transition-colors">
                        {category}
                    </button>
                ))}
            </div>
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <aside className="hidden lg:block lg:col-span-1 space-y-8 pr-4">
                    {/* Categories */}
                    <div>
                        <h3 className="font-bold text-text-main dark:text-white mb-4 flex items-center justify-between">
                            Categorías
                            <span className="material-symbols-outlined text-sm">remove</span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Novedades', count: 12 },
                                { name: 'Básicos', count: 24 },
                                { name: 'Edición Limitada', count: 5 }
                            ].map((item) => (
                                <li key={item.name}>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" type="checkbox" />
                                        </div>
                                        <span className="text-sm text-text-muted group-hover:text-primary transition-colors">
                                            {item.name} ({item.count})
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                {/* Product Grid */}
                <div className="col-span-1 lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="mt-16 flex justify-center">
                        <nav className="flex items-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e7cfdf] dark:border-[#4a3041] text-text-muted hover:bg-primary hover:border-primary hover:text-white transition-colors disabled:opacity-50">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md shadow-primary/20">
                                1
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e7cfdf] dark:border-[#4a3041] text-text-main dark:text-white hover:border-primary hover:text-primary transition-colors">
                                2
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e7cfdf] dark:border-[#4a3041] text-text-main dark:text-white hover:border-primary hover:text-primary transition-colors">
                                3
                            </button>
                            <span className="text-text-muted px-2">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e7cfdf] dark:border-[#4a3041] text-text-main dark:text-white hover:border-primary hover:text-primary transition-colors">
                                12
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e7cfdf] dark:border-[#4a3041] text-text-muted hover:bg-primary hover:border-primary hover:text-white transition-colors">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
