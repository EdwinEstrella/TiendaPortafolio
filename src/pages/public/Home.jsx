import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col w-full items-center">
            {/* Hero Section */}
            <div className="w-full max-w-[1280px] px-6 py-8">
                <div className="relative w-full rounded-2xl overflow-hidden min-h-[560px] flex items-center justify-center md:justify-start">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url("/images/hero_bg.jpg")',
                        }}
                    ></div>
                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-16 max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-white/90 text-sm font-bold tracking-wider uppercase mb-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            Nueva Temporada
                        </span>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
                            Redefiniendo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                Esenciales Modernos
                            </span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-lg">
                            Descubre nuestra colección Primavera/Verano con tejidos sostenibles, tonos neutros y cortes atemporales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/products"
                                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
                            >
                                Ver Colección
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </Link>
                            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-full font-bold text-lg transition-all flex items-center justify-center">
                                Novedades
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="w-full max-w-[1280px] px-6 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1b0d17] dark:text-white">
                        Categorías Destacadas
                    </h2>
                    <a
                        className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1"
                        href="#"
                    >
                        Ver todo <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Category 1 */}
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: 'url("/images/cat_vintage.jpg")' }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-white text-2xl font-bold mb-1">Vibras Vintage</h3>
                            <p className="text-white/80 text-sm">Estilos clásicos renovados</p>
                        </div>
                    </div>
                    {/* Category 2 */}
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: 'url("/images/cat_urban.jpg")' }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-white text-2xl font-bold mb-1">Urban Grey</h3>
                            <p className="text-white/80 text-sm">Minimalismo monocromático</p>
                        </div>
                    </div>
                    {/* Category 3 */}
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: 'url("/images/cat_magenta.jpg")' }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-white text-2xl font-bold mb-1">Toques Magenta</h3>
                            <p className="text-white/80 text-sm">Detalles que resaltan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Arrivals (Product Grid) */}
            <div className="w-full max-w-[1280px] px-6 py-12 bg-white dark:bg-neutral-900 rounded-3xl my-8">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1b0d17] dark:text-white">
                        Novedades
                    </h2>
                    <div className="flex gap-2">
                        <button className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-[#1b0d17] dark:text-white">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-[#1b0d17] dark:text-white">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Product Card 1 */}
                    <Link to="/products/coat" className="group flex flex-col gap-3">
                        <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                            <img
                                alt="Light beige linen blazer"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="/images/prod_blazer.jpg"
                            />
                            <button className="absolute bottom-3 right-3 size-10 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[#1b0d17] dark:text-white hover:text-primary">
                                <span className="material-symbols-outlined">add_shopping_cart</span>
                            </button>
                            <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold uppercase rounded text-[#1b0d17] dark:text-white">
                                Nuevo
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#1b0d17] dark:text-white line-clamp-1">
                                Blazer Lino Beige
                            </h3>
                            <p className="text-primary font-bold mt-1">$129.00</p>
                        </div>
                    </Link>
                    {/* Product Card 2 */}
                    <Link to="/products/shirt" className="group flex flex-col gap-3">
                        <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                            <img
                                alt="Grey oversized tee"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="/images/prod_tee.jpg"
                            />
                            <button className="absolute bottom-3 right-3 size-10 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[#1b0d17] dark:text-white hover:text-primary">
                                <span className="material-symbols-outlined">add_shopping_cart</span>
                            </button>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#1b0d17] dark:text-white line-clamp-1">
                                Camiseta Oversize Gris
                            </h3>
                            <p className="text-primary font-bold mt-1">$45.00</p>
                        </div>
                    </Link>
                    {/* Product Card 3 */}
                    <Link to="/products/dress" className="group flex flex-col gap-3">
                        <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                            <img
                                alt="White minimalist dress"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="/images/prod_dress.jpg"
                            />
                            <button className="absolute bottom-3 right-3 size-10 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[#1b0d17] dark:text-white hover:text-primary">
                                <span className="material-symbols-outlined">add_shopping_cart</span>
                            </button>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#1b0d17] dark:text-white line-clamp-1">
                                Vestido Midi Crema
                            </h3>
                            <p className="text-primary font-bold mt-1">$89.00</p>
                        </div>
                    </Link>
                    {/* Product Card 4 */}
                    <Link to="/products/top" className="group flex flex-col gap-3">
                        <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                            <img
                                alt="Magenta sweater"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src="/images/prod_sweat.jpg"
                            />
                            <button className="absolute bottom-3 right-3 size-10 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[#1b0d17] dark:text-white hover:text-primary">
                                <span className="material-symbols-outlined">add_shopping_cart</span>
                            </button>
                            <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 text-xs font-bold uppercase rounded">
                                -20%
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#1b0d17] dark:text-white line-clamp-1">
                                Suéter Punto Magenta
                            </h3>
                            <p className="text-gray-400 text-sm line-through">$110.00</p>
                            <p className="text-primary font-bold">$88.00</p>
                        </div>
                    </Link>
                </div>
                <div className="mt-10 text-center">
                    <Link
                        to="/products"
                        className="bg-transparent border border-gray-300 dark:border-gray-600 text-[#1b0d17] dark:text-white hover:border-primary hover:text-primary font-bold py-3 px-8 rounded-lg transition-colors inline-block"
                    >
                        Ver Todas las Novedades
                    </Link>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="w-full bg-[#f3e7ef] dark:bg-neutral-800 py-20 px-6">
                <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4">mail</span>
                    <h2 className="text-3xl font-bold text-[#1b0d17] dark:text-white mb-3">Únete a MODA</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                        Recibe un 10% de descuento en tu primera compra y entérate antes que nadie de nuestras nuevas colecciones.
                    </p>
                    <form className="flex w-full max-w-md flex-col sm:flex-row gap-3">
                        <input
                            className="flex-1 rounded-lg border-none py-3 px-4 text-[#1b0d17] focus:ring-2 focus:ring-primary shadow-sm"
                            placeholder="Tu correo electrónico"
                            type="email"
                        />
                        <button
                            className="bg-[#1b0d17] dark:bg-white text-white dark:text-[#1b0d17] font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                            type="button"
                        >
                            Suscribirme
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
