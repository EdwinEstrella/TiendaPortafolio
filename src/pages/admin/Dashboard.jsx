import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Stat Card 1 */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark p-5 shadow-sm transition-transform hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-text-muted">Ingresos Totales</p>
                            <h3 className="mt-2 text-2xl font-bold text-text-main dark:text-white">$12,450</h3>
                        </div>
                        <div className="rounded-lg bg-[#f3e7ef] dark:bg-[#4a3041] p-2 text-primary">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm font-bold text-[#078854]">trending_up</span>
                        <span className="text-sm font-medium text-[#078854]">+12%</span>
                        <span className="text-xs text-text-muted ml-1">vs mes anterior</span>
                    </div>
                </div>
                {/* Stat Card 2 */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark p-5 shadow-sm transition-transform hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-text-muted">Pedidos Nuevos</p>
                            <h3 className="mt-2 text-2xl font-bold text-text-main dark:text-white">45</h3>
                        </div>
                        <div className="rounded-lg bg-[#f3e7ef] dark:bg-[#4a3041] p-2 text-primary">
                            <span className="material-symbols-outlined">local_mall</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm font-bold text-[#078854]">trending_up</span>
                        <span className="text-sm font-medium text-[#078854]">+5%</span>
                        <span className="text-xs text-text-muted ml-1">vs semana anterior</span>
                    </div>
                </div>
                {/* Stat Card 3 */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark p-5 shadow-sm transition-transform hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-text-muted">Prod. en Stock</p>
                            <h3 className="mt-2 text-2xl font-bold text-text-main dark:text-white">128</h3>
                        </div>
                        <div className="rounded-lg bg-[#f3e7ef] dark:bg-[#4a3041] p-2 text-primary">
                            <span className="material-symbols-outlined">inventory</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm font-bold text-text-muted">remove</span>
                        <span className="text-sm font-medium text-text-muted">0%</span>
                        <span className="text-xs text-text-muted ml-1">sin cambios</span>
                    </div>
                </div>
                {/* Stat Card 4 */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark p-5 shadow-sm transition-transform hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-text-muted">Visitas Tienda</p>
                            <h3 className="mt-2 text-2xl font-bold text-text-main dark:text-white">3,200</h3>
                        </div>
                        <div className="rounded-lg bg-[#f3e7ef] dark:bg-[#4a3041] p-2 text-primary">
                            <span className="material-symbols-outlined">visibility</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm font-bold text-[#078854]">trending_up</span>
                        <span className="text-sm font-medium text-[#078854]">+8%</span>
                        <span className="text-xs text-text-muted ml-1">vs ayer</span>
                    </div>
                </div>
            </div>
            {/* Charts Section */}
            <div className="w-full rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark p-6 shadow-sm">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-text-main dark:text-white">Rendimiento de Ventas</h3>
                        <p className="text-sm text-text-muted">Análisis de ingresos últimos 30 días</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-[#fcf8fa] dark:bg-[#22101c] p-1 border border-[#e7cfdf] dark:border-[#4a3041]">
                        <button className="rounded-md bg-white dark:bg-[#4a3041] px-3 py-1 text-xs font-semibold text-text-main dark:text-white shadow-sm">
                            Mensual
                        </button>
                        <button className="rounded-md px-3 py-1 text-xs font-medium text-text-muted hover:text-primary transition-colors">
                            Semanal
                        </button>
                    </div>
                </div>
                <div className="relative h-64 w-full">
                    {/* Placeholder Chart */}
                    <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#ec13a4" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#ec13a4" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <line opacity="0.5" stroke="#e7cfdf" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="150" y2="150" />
                        <line opacity="0.5" stroke="#e7cfdf" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="100" y2="100" />
                        <line opacity="0.5" stroke="#e7cfdf" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="50" y2="50" />
                        <path d="M0,150 C100,120 150,160 250,80 C350,0 450,100 550,60 C650,20 750,140 800,100 V200 H0 Z" fill="url(#chartGradient)" />
                        <path d="M0,150 C100,120 150,160 250,80 C350,0 450,100 550,60 C650,20 750,140 800,100" fill="none" stroke="#ec13a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        <circle cx="250" cy="80" fill="#ec13a4" r="4" stroke="white" strokeWidth="2" />
                        <circle cx="550" cy="60" fill="#ec13a4" r="4" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
                <div className="mt-4 flex justify-between px-2 text-xs font-medium text-text-muted">
                    <span>Semana 1</span>
                    <span>Semana 2</span>
                    <span>Semana 3</span>
                    <span>Semana 4</span>
                </div>
            </div>
            {/* Content Split: Product Form & Orders Table */}
            <div className="flex flex-col gap-6 lg:flex-row">
                {/* Left Column: Quick Add Product (Simplified) */}
                <div className="flex w-full flex-col gap-4 lg:w-1/3">
                    <div className="rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark p-6 shadow-sm h-full">
                        <div className="mb-5 flex items-center gap-2 border-b border-[#e7cfdf] dark:border-[#4a3041] pb-3">
                            <span className="material-symbols-outlined text-primary">add_circle</span>
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Nuevo Producto</h3>
                        </div>
                        <Link to="/admin/create-product" className="mt-2 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#d11091] hover:shadow-lg flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">add</span> Ir a Crear Producto
                        </Link>
                    </div>
                </div>
                {/* Right Column: Recent Orders */}
                <div className="flex flex-1 flex-col gap-4">
                    <div className="flex h-full flex-col rounded-xl border border-[#e7cfdf] dark:border-[#4a3041] bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden">
                        <div className="flex items-center justify-between border-b border-[#e7cfdf] dark:border-[#4a3041] px-6 py-4">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Pedidos Recientes</h3>
                            <a className="text-sm font-medium text-primary hover:text-[#d11091]" href="#">Ver todos</a>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] text-left">
                                <thead className="bg-[#fcf8fa] dark:bg-[#22101c]">
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-semibold uppercase text-text-muted">ID Pedido</th>
                                        <th className="px-6 py-3 text-xs font-semibold uppercase text-text-muted">Cliente</th>
                                        <th className="px-6 py-3 text-xs font-semibold uppercase text-text-muted">Estado</th>
                                        <th className="px-6 py-3 text-xs font-semibold uppercase text-text-muted">Total</th>
                                        <th className="px-6 py-3 text-xs font-semibold uppercase text-text-muted text-right">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#e7cfdf] dark:divide-[#4a3041]">
                                    {[
                                        { id: '#ORD-1024', name: 'Ana García', time: 'Hace 5 min', status: 'Pendiente', price: '$120.50', avatar: '/images/customer_ana.jpg', statusColor: 'orange' },
                                        { id: '#ORD-1023', name: 'Carlos Ruiz', time: 'Hace 2 horas', status: 'Completado', price: '$85.00', avatar: '/images/customer_carlos.jpg', statusColor: 'green' },
                                        { id: '#ORD-1022', name: 'Lucía M.', time: 'Ayer', status: 'Enviado', price: '$210.00', avatar: '/images/customer_lucia.jpg', statusColor: 'blue' },
                                        { id: '#ORD-1021', name: 'Jorge V.', time: 'Ayer', status: 'Completado', price: '$45.00', avatar: '/images/customer_jorge.jpg', statusColor: 'green' },
                                    ].map((order, index) => (
                                        <tr key={index} className="hover:bg-[#fcf8fa] dark:hover:bg-[#2d1b26] transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-text-main dark:text-white">{order.id}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${order.avatar}')` }}></div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-text-main dark:text-white">{order.name}</span>
                                                        <span className="text-xs text-text-muted">{order.time}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center rounded-full bg-${order.statusColor}-100 px-2.5 py-0.5 text-xs font-medium text-${order.statusColor}-800 dark:bg-${order.statusColor}-900/30 dark:text-${order.statusColor}-300`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-semibold text-text-main dark:text-white">{order.price}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-text-muted hover:text-primary"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
