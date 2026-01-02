import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Cart Items */}
                <div className="lg:col-span-8 space-y-6">
                    {/* Page Heading */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#e5e5e5] dark:border-[#3a1d30] pb-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white tracking-tight mb-2">
                                Tu Carrito
                            </h1>
                            <p className="text-text-muted text-sm md:text-base font-medium">Tienes 2 artículos en tu bolsa</p>
                        </div>
                        <Link className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 group" to="/products">
                            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Seguir comprando
                        </Link>
                    </div>
                    {/* Items List */}
                    <div className="flex flex-col gap-4">
                        {/* Item 1 */}
                        <div className="bg-white dark:bg-[#2a1424] rounded-2xl p-4 sm:p-6 shadow-sm border border-[#e5e5e5] dark:border-[#3a1d30] transition-all hover:shadow-md flex flex-col sm:flex-row gap-5 items-start relative group">
                            <button className="absolute top-4 right-4 text-text-muted hover:text-red-500 transition-colors sm:hidden">
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                            <div className="shrink-0 w-full sm:w-28 h-28 aspect-square rounded-xl overflow-hidden bg-gray-100">
                                <img src="/images/products_shirt.jpg" alt="Camiseta Oversize" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between h-full min-h-[112px] w-full">
                                <div className="flex justify-between items-start w-full">
                                    <div>
                                        <h3 className="text-lg font-bold text-text-main dark:text-white leading-tight mb-1">Camiseta Oversize</h3>
                                        <p className="text-text-muted text-sm mb-1">Ref: 89302102</p>
                                        <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                                            <span className="bg-background-light dark:bg-white/10 px-2 py-0.5 rounded text-xs font-semibold uppercase">M</span>
                                            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#E8DCC4] border border-gray-200"></span>Beige</span>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block text-right">
                                        <p className="text-lg font-bold text-text-main dark:text-white">$45.00</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end mt-4 sm:mt-0">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center bg-background-light dark:bg-white/5 rounded-lg p-1 border border-[#e5e5e5] dark:border-[#3a1d30]">
                                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 hover:shadow-sm text-text-main dark:text-white transition-all">
                                                <span className="material-symbols-outlined text-[16px]">remove</span>
                                            </button>
                                            <input className="w-10 text-center bg-transparent border-none text-text-main dark:text-white font-semibold focus:ring-0 p-0 text-sm" type="number" defaultValue="1" />
                                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 hover:shadow-sm text-text-main dark:text-white transition-all">
                                                <span className="material-symbols-outlined text-[16px]">add</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="sm:hidden text-lg font-bold text-text-main dark:text-white">$45.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column: Order Summary (Sticky) */}
                <div className="lg:col-span-4 sticky top-24">
                    <div className="bg-white dark:bg-[#2a1424] rounded-2xl shadow-lg border border-[#e5e5e5] dark:border-[#3a1d30] overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-text-main dark:text-white mb-6">Resumen del Pedido</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-text-muted dark:text-gray-400">Subtotal</span>
                                    <span className="text-text-main dark:text-white font-medium">$134.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-text-muted dark:text-gray-400">Envío Estimado</span>
                                    <span className="text-green-600 font-medium">Gratis</span>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#f3e7ef] dark:bg-[#3a1d30] my-6"></div>
                            <div className="flex justify-between items-end mb-6">
                                <span className="text-lg font-bold text-text-main dark:text-white">Total</span>
                                <div className="text-right">
                                    <span className="text-2xl font-black text-text-main dark:text-white block leading-none">$144.72</span>
                                    <span className="text-xs text-text-muted">Incluye impuestos</span>
                                </div>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                                <span>Proceder al Pago</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
