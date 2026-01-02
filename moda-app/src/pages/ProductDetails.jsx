import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';

const ProductDetails = () => {
    const { id } = useParams();
    const product = getProductById(id) || getProductById('coat'); // Fallback
    const [activeImage, setActiveImage] = useState(product?.image);

    if (!product) return <div className="p-10 text-center">Producto no encontrado</div>;

    const images = product.images || [product.image];

    return (
        <div className="flex-1 flex flex-col w-full max-w-[1400px] mx-auto">
            <main className="w-full px-4 md:px-10 pb-20">
                {/* Breadcrumbs */}
                <div className="py-6 flex items-center text-sm text-text-muted">
                    <Link className="hover:text-primary transition-colors" to="/">Inicio</Link>
                    <span className="mx-2 text-xs opacity-50">/</span>
                    <Link className="hover:text-primary transition-colors" to="/products">Colección</Link>
                    <span className="mx-2 text-xs opacity-50">/</span>
                    <span className="text-text-main dark:text-white font-medium">{product.title}</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
                    {/* Left Column: Image Gallery */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
                        {/* Main big image */}
                        <div className="w-full bg-[#f0f0f0] rounded-xl overflow-hidden aspect-[4/5] relative group cursor-zoom-in">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url('${activeImage || product.image}')` }}>
                                <img src={activeImage || product.image} alt={product.title} className="w-full h-full object-cover opacity-0" />
                            </div>
                            {product.badge && (
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-text-main shadow-sm">
                                    {product.badge}
                                </div>
                            )}
                        </div>
                        {/* Grid of secondary images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {images.map((img, index) => (
                                <div key={index}
                                    className={`w-full bg-[#f0f0f0] rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer ${index === 0 ? 'border-2 border-primary' : ''}`}
                                    onClick={() => setActiveImage(img)}>
                                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${img}')` }}>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right Column: Product Details (Sticky) */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="sticky top-28 flex flex-col gap-8">
                            {/* Header Info */}
                            <div className="space-y-4 border-b border-[#f3e7ef] dark:border-[#3a1d30] pb-6">
                                <div className="flex items-start justify-between">
                                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-main dark:text-white leading-[1.1]">
                                        {product.title}
                                    </h1>
                                    <button className="mt-1 p-2 rounded-full hover:bg-black/5 text-text-muted hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">share</span>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-medium text-primary">${product.price.toFixed(2)}</span>
                                    <div className="flex items-center gap-1 text-sm font-medium">
                                        <div className="flex text-yellow-400 text-[18px]">
                                            <span className="material-symbols-outlined fill-current">star</span>
                                            <span className="material-symbols-outlined fill-current">star</span>
                                            <span className="material-symbols-outlined fill-current">star</span>
                                            <span className="material-symbols-outlined fill-current">star</span>
                                            <span className="material-symbols-outlined fill-current">star_half</span>
                                        </div>
                                        <span className="text-text-muted underline decoration-1 underline-offset-4 cursor-pointer hover:text-text-main">(42 Reseñas)</span>
                                    </div>
                                </div>
                                <p className="text-text-main/80 dark:text-white/80 leading-relaxed font-light">
                                    {product.description}
                                </p>
                                <p className="text-text-muted text-sm">REF: {product.ref}</p>
                            </div>
                            {/* Selectors */}
                            <div className="space-y-6">
                                {/* Color Selector */}
                                <div className="space-y-3">
                                    <span className="text-sm font-bold text-text-main dark:text-white">Color: <span className="font-normal text-text-muted">Crema Vintage</span></span>
                                    <div className="flex flex-wrap gap-3">
                                        <button className="w-10 h-10 rounded-full bg-[#E8E6E1] ring-2 ring-offset-2 ring-primary ring-offset-background-light shadow-sm focus:outline-none"></button>
                                        <button className="w-10 h-10 rounded-full bg-[#2C333A] hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 ring-offset-background-light shadow-sm transition-all focus:outline-none"></button>
                                    </div>
                                </div>
                                {/* Size Selector */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-bold text-text-main dark:text-white">Talla</span>
                                        <button className="text-xs font-medium text-text-muted underline decoration-1 underline-offset-4 hover:text-primary transition-colors">Guía de tallas</button>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2">
                                        {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                            <button key={size} className={`h-10 rounded-lg border text-sm font-medium transition-colors focus:outline-none ${size === 'M' ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' : 'border-[#e0cedb] text-text-muted hover:border-primary hover:text-primary'}`}>
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Actions */}
                            <div className="flex flex-col gap-3 pt-4">
                                <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg tracking-wide shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                    Añadir al Carrito
                                </button>
                                <p className="text-center text-xs text-text-muted flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[16px] text-green-600">check_circle</span>
                                    Envío gratis en pedidos superiores a $150
                                </p>
                            </div>
                            {/* Accordions */}
                            <div className="divide-y divide-[#f3e7ef] dark:divide-[#3a1d30] border-t border-[#f3e7ef] dark:border-[#3a1d30] mt-4">
                                <details className="group py-4 cursor-pointer">
                                    <summary className="flex items-center justify-between font-bold text-text-main dark:text-white list-none">
                                        <span>Descripción y Detalles</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <div className="pt-3 text-sm text-text-main/70 dark:text-white/70 leading-relaxed space-y-2">
                                        <p>Reimaginando el sastre clásico para el armario moderno.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;
