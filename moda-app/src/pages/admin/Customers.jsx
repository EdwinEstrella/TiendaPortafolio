import React from 'react';

const Customers = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Clientes</h2>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold">Añadir Cliente</button>
            </div>
            <div className="p-10 text-center bg-surface-light dark:bg-surface-dark rounded-xl border border-vintage-border dark:border-[#4a3041]">
                <p className="text-text-muted">La página de gestión de clientes se implementará completamente pronto.</p>
                <p className="text-text-main dark:text-white mt-4 font-bold">Mockup/Placeholder</p>
            </div>
        </div>
    );
};

export default Customers;
