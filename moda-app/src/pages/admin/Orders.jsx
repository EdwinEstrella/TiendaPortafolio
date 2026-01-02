import React from 'react';

const Orders = () => {
    const orders = [
        { id: '#ORD-1024', customer: 'Ana García', email: 'ana.g@example.com', date: '01 Ene 2024', total: '$120.50', status: 'Pendiente', statusColor: 'orange', avatar: '/images/customer_ana.jpg' },
        { id: '#ORD-1023', customer: 'Carlos Ruiz', email: 'carlos.r@example.com', date: '31 Dic 2023', total: '$85.00', status: 'Completado', statusColor: 'green', avatar: '/images/customer_carlos.jpg' },
        { id: '#ORD-1022', customer: 'Lucía Morales', email: 'lucia.m@example.com', date: '30 Dic 2023', total: '$210.00', status: 'Enviado', statusColor: 'blue', avatar: '/images/customer_lucia.jpg' },
        { id: '#ORD-1021', customer: 'Jorge Vega', email: 'jorge.v@example.com', date: '29 Dic 2023', total: '$45.00', status: 'Completado', statusColor: 'green', avatar: '/images/customer_jorge.jpg' },
        { id: '#ORD-1020', customer: 'Ana García', email: 'ana.g@example.com', date: '25 Dic 2023', total: '$320.00', status: 'Completado', statusColor: 'green', avatar: '/images/customer_ana.jpg' },
        { id: '#ORD-1019', customer: 'Roberto Diaz', email: 'roberto.d@example.com', date: '20 Dic 2023', total: '$150.00', status: 'Cancelado', statusColor: 'red', avatar: '/images/admin_avatar.jpg' },
    ];

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-text-main dark:text-white tracking-tight">Pedidos</h2>
                    <p className="text-text-muted text-sm">Gestiona y rastrea todos los pedidos de la tienda.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white dark:bg-surface-dark border border-vintage-border dark:border-[#4a3041] rounded-lg font-bold text-sm text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-[#3a2230] transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">filter_list</span> Filtrar
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">download</span> Exportar
                    </button>
                </div>
            </div>

            <div className="w-full rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px] text-left">
                        <thead className="bg-[#fcf8fa] dark:bg-[#22101c]">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">ID Pedido</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">Cliente</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">Fecha</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">Estado</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted">Total</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e7cfdf] dark:divide-[#4a3041]">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-[#fcf8fa] dark:hover:bg-[#2d1b26] transition-colors group">
                                    <td className="px-6 py-4 text-sm font-bold text-text-main dark:text-white">{order.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-9 rounded-full bg-cover bg-center border border-vintage-border dark:border-[#4a3041]" style={{ backgroundImage: `url('${order.avatar}')` }}></div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-text-main dark:text-white">{order.customer}</span>
                                                <span className="text-xs text-text-muted">{order.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-main dark:text-gray-300">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold bg-${order.statusColor}-100 text-${order.statusColor}-800 dark:bg-${order.statusColor}-900/30 dark:text-${order.statusColor}-300 border border-${order.statusColor}-200 dark:border-${order.statusColor}-800`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-text-main dark:text-white">{order.total}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1 text-text-muted hover:text-primary transition-colors" title="Ver Detalles">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-1 text-text-muted hover:text-primary transition-colors" title="Editar">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-[#e7cfdf] dark:border-[#4a3041]">
                    <span className="text-sm text-text-muted">Mostrando 1-6 de 24 pedidos</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm border border-[#e7cfdf] dark:border-[#4a3041] rounded hover:bg-gray-50 dark:hover:bg-[#3a2230] text-text-main dark:text-white disabled:opacity-50">Anterior</button>
                        <button className="px-3 py-1 text-sm border border-[#e7cfdf] dark:border-[#4a3041] rounded hover:bg-gray-50 dark:hover:bg-[#3a2230] text-text-main dark:text-white">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
