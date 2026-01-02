import React from 'react';

const Customers = () => {
    const customers = [
        { id: 1, name: 'Ana García', email: 'ana.g@example.com', spent: '$2,450.00', orders: 12, city: 'Madrid, ES', avatar: '/images/customer_ana.jpg' },
        { id: 2, name: 'Carlos Ruiz', email: 'carlos.r@example.com', spent: '$1,200.50', orders: 8, city: 'Barcelona, ES', avatar: '/images/customer_carlos.jpg' },
        { id: 3, name: 'Lucía Morales', email: 'lucia.m@example.com', spent: '$3,100.00', orders: 15, city: 'Valencia, ES', avatar: '/images/customer_lucia.jpg' },
        { id: 4, name: 'Jorge Vega', email: 'jorge.v@example.com', spent: '$850.00', orders: 5, city: 'Sevilla, ES', avatar: '/images/customer_jorge.jpg' },
        { id: 5, name: 'Marta Diaz', email: 'marta.d@example.com', spent: '$450.00', orders: 3, city: 'Bilbao, ES', avatar: '/images/admin_avatar.jpg' },
    ];

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Clientes</h2>
                    <p className="text-text-muted text-sm">Gestiona tu base de datos de clientes.</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">person_add</span> Añadir Cliente
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-vintage-border dark:border-[#4a3041] shadow-sm">
                    <p className="text-text-muted text-sm font-medium uppercase">Total Clientes</p>
                    <h3 className="text-3xl font-bold text-text-main dark:text-white mt-2">1,240</h3>
                    <p className="text-green-600 text-sm mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> +12% este mes</p>
                </div>
                <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-vintage-border dark:border-[#4a3041] shadow-sm">
                    <p className="text-text-muted text-sm font-medium uppercase">Nuevos (30d)</p>
                    <h3 className="text-3xl font-bold text-text-main dark:text-white mt-2">85</h3>
                    <p className="text-green-600 text-sm mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> +5% vs mes anterior</p>
                </div>
                <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-vintage-border dark:border-[#4a3041] shadow-sm">
                    <p className="text-text-muted text-sm font-medium uppercase">Retención</p>
                    <h3 className="text-3xl font-bold text-text-main dark:text-white mt-2">88%</h3>
                    <p className="text-text-muted text-sm mt-1">Alta fidelidad</p>
                </div>
            </div>

            <div className="w-full rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px] text-left">
                        <thead className="bg-[#fcf8fa] dark:bg-[#22101c]">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">Cliente</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">Ubicación</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">Pedidos</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">Total Gastado</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e7cfdf] dark:divide-[#4a3041]">
                            {customers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-[#fcf8fa] dark:hover:bg-[#2d1b26] transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-cover bg-center border border-vintage-border dark:border-[#4a3041]" style={{ backgroundImage: `url('${customer.avatar}')` }}></div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-text-main dark:text-white">{customer.name}</span>
                                                <span className="text-xs text-text-muted">{customer.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-main dark:text-gray-300">{customer.city}</td>
                                    <td className="px-6 py-4 text-sm text-text-main dark:text-gray-300">{customer.orders}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-text-main dark:text-white">{customer.spent}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-text-muted hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customers;
