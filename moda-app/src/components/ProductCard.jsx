import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="group flex flex-col gap-3">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
                {product.badge && (
                    <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-text-main tracking-wide uppercase">
                        {product.badge}
                    </div>
                )}
                {product.discountBadge && (
                    <div className="absolute top-3 left-3 z-10 bg-primary px-2 py-1 rounded text-xs font-bold text-white tracking-wide uppercase">
                        {product.discountBadge}
                    </div>
                )}
                <button className="absolute top-3 right-3 z-10 bg-white p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                <Link to={`/products/${product.id}`}>
                    <img
                        alt={product.title}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        src={product.image}
                    />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-text-main hover:bg-primary hover:text-white font-bold py-3 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                        Añadir
                    </button>
                </div>
            </div>
            <div>
                <Link to={`/products/${product.id}`}>
                    <h3 className="text-text-main dark:text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors cursor-pointer">
                        {product.title}
                    </h3>
                </Link>
                <p className="text-text-muted text-sm mt-1">{product.description}</p>
                <div className="flex items-center gap-2 mt-2">
                    <p className="text-text-main dark:text-white font-semibold">${product.price.toFixed(2)}</p>
                    {product.originalPrice && (
                        <p className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
