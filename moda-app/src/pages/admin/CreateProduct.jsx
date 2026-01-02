import React from 'react';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
    return (
        <div className="layout-container flex h-full grow flex-col max-w-[1200px] mx-auto w-full px-4 md:px-8 py-8">
            {/* Page Header */}
            <div className="flex flex-wrap justify-between items-end gap-4 pb-8 border-b border-vintage-border dark:border-white/10 mb-8">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-text-muted text-sm font-medium mb-1">
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        <Link to="/admin/products" className="hover:underline">
                            Volver a Productos
                        </Link>
                    </div>
                    <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                        Creación de Producto
                    </h1>
                    <p className="text-text-muted text-base font-normal">
                        Añade un nuevo artículo a tu colección de temporada.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-white border border-vintage-border text-text-main text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white">
                        Guardar Borrador
                    </button>
                </div>
            </div>
            {/* Main Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column: Details (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    {/* Basic Info Card */}
                    <section className="flex flex-col gap-6 bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-vintage-border dark:border-white/10">
                        <h3 className="text-lg font-bold text-text-main dark:text-white">Información Básica</h3>
                        {/* Product Name */}
                        <label className="flex flex-col gap-2">
                            <span className="text-text-main dark:text-white text-sm font-medium">Nombre del Producto</span>
                            <input
                                className="form-input w-full rounded-lg border border-vintage-border bg-vintage-bg text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 text-base transition-shadow dark:bg-white/5 dark:border-white/10 dark:text-white"
                                placeholder="Ej. Camiseta Minimalista Crema"
                            />
                        </label>
                        {/* Category & Brand Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="flex flex-col gap-2">
                                <span className="text-text-main dark:text-white text-sm font-medium">Categoría</span>
                                <div className="relative">
                                    <select className="form-select w-full appearance-none rounded-lg border border-vintage-border bg-vintage-bg text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 text-base pr-10 dark:bg-white/5 dark:border-white/10 dark:text-white" defaultValue="">
                                        <option disabled value="">
                                            Seleccionar categoría
                                        </option>
                                        <option>Camisetas</option>
                                        <option>Pantalones</option>
                                        <option>Vestidos</option>
                                        <option>Accesorios</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                                        expand_more
                                    </span>
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-text-main dark:text-white text-sm font-medium">Colección</span>
                                <div className="relative">
                                    <select className="form-select w-full appearance-none rounded-lg border border-vintage-border bg-vintage-bg text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 text-base pr-10 dark:bg-white/5 dark:border-white/10 dark:text-white" defaultValue="">
                                        <option disabled value="">
                                            Seleccionar colección
                                        </option>
                                        <option>Verano 2024</option>
                                        <option>Vintage Essentials</option>
                                        <option>Otoño Neutro</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                                        expand_more
                                    </span>
                                </div>
                            </label>
                        </div>
                        {/* Description */}
                        <label className="flex flex-col gap-2">
                            <span className="text-text-main dark:text-white text-sm font-medium">Descripción detallada</span>
                            <textarea
                                className="form-input w-full resize-y rounded-lg border border-vintage-border bg-vintage-bg text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[160px] p-4 text-base dark:bg-white/5 dark:border-white/10 dark:text-white"
                                placeholder="Describe los materiales, el ajuste y el estilo. Sé persuasivo y claro."
                            ></textarea>
                            <span className="text-xs text-text-muted self-end">0/500 caracteres</span>
                        </label>
                    </section>
                    {/* Variants Card */}
                    <section className="flex flex-col gap-6 bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-vintage-border dark:border-white/10">
                        <h3 className="text-lg font-bold text-text-main dark:text-white">Variantes</h3>
                        {/* Sizes */}
                        <div className="flex flex-col gap-3">
                            <span className="text-text-main dark:text-white text-sm font-medium">Tallas disponibles</span>
                            <div className="flex flex-wrap gap-2">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <label key={size} className="cursor-pointer group">
                                        <input className="peer sr-only" type="checkbox" defaultChecked={['S', 'M', 'L'].includes(size)} />
                                        <div className="px-4 py-2 rounded-lg border border-vintage-border bg-vintage-bg text-text-main font-medium text-sm peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:border-primary/50 dark:bg-white/5 dark:border-white/10 dark:text-white">
                                            {size}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        {/* Colors */}
                        <div className="flex flex-col gap-3 mt-2">
                            <span className="text-text-main dark:text-white text-sm font-medium">Colores</span>
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Color Option 1 */}
                                <label className="cursor-pointer relative group">
                                    <input defaultChecked className="peer sr-only" name="color_select" type="radio" />
                                    <div className="size-10 rounded-full bg-[#F5F5DC] shadow-sm border border-black/10 flex items-center justify-center peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary transition-all">
                                        <span className="material-symbols-outlined text-black/60 opacity-0 peer-checked:opacity-100 text-sm">
                                            check
                                        </span>
                                    </div>
                                    <span className="sr-only">Beige</span>
                                </label>
                                {/* Color Option 2 */}
                                <label className="cursor-pointer relative group">
                                    <input className="peer sr-only" name="color_select" type="radio" />
                                    <div className="size-10 rounded-full bg-[#ec13a4] shadow-sm border border-black/10 flex items-center justify-center peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary transition-all">
                                        <span className="material-symbols-outlined text-white opacity-0 peer-checked:opacity-100 text-sm">
                                            check
                                        </span>
                                    </div>
                                    <span className="sr-only">Magenta</span>
                                </label>
                                {/* Color Option 3 */}
                                <label className="cursor-pointer relative group">
                                    <input className="peer sr-only" name="color_select" type="radio" />
                                    <div className="size-10 rounded-full bg-[#333333] shadow-sm border border-black/10 flex items-center justify-center peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary transition-all">
                                        <span className="material-symbols-outlined text-white opacity-0 peer-checked:opacity-100 text-sm">
                                            check
                                        </span>
                                    </div>
                                    <span className="sr-only">Charcoal</span>
                                </label>
                                {/* Add New */}
                                <button
                                    className="size-10 rounded-full border border-dashed border-primary text-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
                                    type="button"
                                >
                                    <span className="material-symbols-outlined text-xl">add</span>
                                </button>
                            </div>
                        </div>
                    </section>
                    {/* Pricing Card */}
                    <section className="flex flex-col gap-6 bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-vintage-border dark:border-white/10">
                        <h3 className="text-lg font-bold text-text-main dark:text-white">Precios e Inventario</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-text-main dark:text-white text-sm font-medium">Precio ($)</span>
                                <input
                                    className="form-input w-full rounded-lg border border-vintage-border bg-vintage-bg text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 text-base font-medium dark:bg-white/5 dark:border-white/10 dark:text-white"
                                    placeholder="0.00"
                                    type="number"
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-text-main dark:text-white text-sm font-medium">
                                    Descuento (%) <span className="text-text-muted font-normal text-xs ml-1">(Opcional)</span>
                                </span>
                                <input
                                    className="form-input w-full rounded-lg border border-vintage-border bg-vintage-bg text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 text-base font-medium dark:bg-white/5 dark:border-white/10 dark:text-white"
                                    placeholder="0"
                                    type="number"
                                />
                            </label>
                        </div>
                    </section>
                </div>
                {/* Right Column: Media & Actions (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    {/* Media Upload Card */}
                    <section className="flex flex-col bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-vintage-border dark:border-white/10 h-fit">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Multimedia</h3>
                            <span className="text-xs text-text-muted font-medium bg-vintage-bg px-2 py-1 rounded dark:bg-white/10">
                                Max 5MB
                            </span>
                        </div>
                        {/* Dropzone */}
                        <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-vintage-border bg-vintage-bg/50 px-6 py-10 hover:bg-vintage-bg transition-colors cursor-pointer group dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-primary text-2xl">cloud_upload</span>
                            </div>
                            <div className="text-center space-y-1">
                                <p className="text-text-main dark:text-white font-bold text-sm">Haz clic para subir</p>
                                <p className="text-text-muted text-xs">o arrastra y suelta tus archivos</p>
                            </div>
                        </div>
                        {/* Previews List */}
                        <div className="flex flex-col gap-3 mt-6">
                            <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Archivos Subidos (2)</p>
                            {/* Item 1 */}
                            <div className="flex items-center gap-3 p-2 rounded-lg border border-vintage-border bg-vintage-bg dark:bg-white/5 dark:border-white/10">
                                <div
                                    className="size-16 rounded bg-gray-100 bg-cover bg-center shrink-0"
                                    style={{ backgroundImage: 'url("/images/texture_beige.jpg")' }}
                                ></div>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <p className="text-sm font-medium text-text-main truncate dark:text-white">textura_beige_01.jpg</p>
                                    <p className="text-xs text-text-muted">1.2 MB</p>
                                </div>
                                <button className="size-8 flex items-center justify-center text-text-muted hover:text-red-500 hover:bg-red-50 rounded-full transition-colors dark:hover:bg-red-900/20">
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                </button>
                            </div>
                            {/* Item 2 */}
                            <div className="flex items-center gap-3 p-2 rounded-lg border border-vintage-border bg-vintage-bg dark:bg-white/5 dark:border-white/10">
                                <div
                                    className="size-16 rounded bg-gray-100 bg-cover bg-center shrink-0"
                                    style={{ backgroundImage: 'url("/images/model_frontal.jpg")' }}
                                ></div>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <p className="text-sm font-medium text-text-main truncate dark:text-white">modelo_frontal.jpg</p>
                                    <p className="text-xs text-text-muted">2.4 MB</p>
                                </div>
                                <button className="size-8 flex items-center justify-center text-text-muted hover:text-red-500 hover:bg-red-50 rounded-full transition-colors dark:hover:bg-red-900/20">
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                </button>
                            </div>
                        </div>
                    </section>
                    {/* Sticky Actions (Mobile/Desktop) */}
                    <div className="sticky bottom-6 flex flex-col gap-3 pt-4 lg:pt-0">
                        <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/40 transition-all active:scale-[0.99]">
                            <span className="material-symbols-outlined">add_circle</span>
                            Crear Producto
                        </button>
                        <button className="w-full flex items-center justify-center rounded-lg h-10 bg-transparent text-text-muted font-medium text-sm hover:text-text-main hover:bg-vintage-bg/50 transition-colors dark:hover:text-white dark:hover:bg-white/5">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
