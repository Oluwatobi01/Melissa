
import React from 'react';

const StatusChip = ({ label, active, completed }: { label: string, active: boolean, completed: boolean }) => {
    let bg = 'bg-[#FFE0B2] text-brand-orange'; // Peach default
    if (active) bg = 'bg-brand-orange text-white';
    
    return (
        <span className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${bg}`}>
            {label}
        </span>
    );
};

export const TrackingScreen = ({ onBack }: { onBack: () => void }) => (
    <div className="h-full flex flex-col bg-background-light dark:bg-background-dark">
        {/* Header */}
        <div className="p-4 flex items-center sticky top-0 bg-background-light dark:bg-background-dark z-10">
            <button onClick={onBack} className="p-2 rounded-full hover:bg-black/5"><span className="material-symbols-outlined">arrow_back</span></button>
            <h2 className="flex-1 text-center font-bold text-lg">Order #MBNL1234</h2>
            <div className="w-10"></div>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto pb-24">
            <h1 className="text-3xl font-bold mb-1 leading-tight">Your order is on its way!</h1>
            <p className="opacity-60 mb-6 text-sm">Placed on: Aug 24, 2024</p>

            {/* Status Chips */}
            <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
                <StatusChip label="Order Placed" active={false} completed={true} />
                <StatusChip label="Preparing" active={false} completed={true} />
                <StatusChip label="En Route" active={true} completed={false} />
                <StatusChip label="Delivered" active={false} completed={false} />
            </div>
            
            {/* Progress Bar */}
            <div className="h-1.5 bg-brand-orange/20 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-brand-orange w-3/4 rounded-full"></div>
            </div>

            {/* ETA Card */}
            <div className="bg-brand-orange rounded-2xl p-6 text-white flex justify-between items-center mb-6 shadow-xl shadow-brand-orange/20">
                <div>
                    <p className="opacity-90 text-sm font-medium mb-1">Estimated Arrival Time</p>
                    <p className="text-4xl font-bold">3:45 PM</p>
                </div>
                <span className="material-symbols-outlined text-5xl">local_shipping</span>
            </div>

            {/* Map */}
            <div className="w-full h-48 bg-teal-800 rounded-2xl overflow-hidden relative mb-6 shadow-inner">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3g_-OcuyC1pG-JQ4R4Mis_y79Jw7DCk89LgiVmy27oGpgZdXfV9egZDg-Ig1mdKHSTXN6OLWgYFqYD1Me5Ft_fb4_LC1828O9uzth19Mjc8JKWtEcFr9DRf0YpdUwhzTY8YSqFRu9yx9FJEXyLqcCd3HViDNLB5LAy4rAO-3aFR7AA01Ntoe1pe30g0CXgiiMmMuyuuBiJYmCv0gvnejKb0XhuKFhLr_diGQd1y_tTB_kH1hjBL2ucJ1s_UoGiGQoHubd9L0HI2xv" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
                    alt="Map"
                />
                 {/* Map Pin Overlay */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white p-2 rounded-full shadow-lg">
                        <span className="material-symbols-outlined text-brand-orange text-2xl">storefront</span>
                    </div>
                 </div>
            </div>

            {/* Order Details Accordion */}
            <details className="bg-white dark:bg-white/5 rounded-xl p-4 group">
                <summary className="font-bold flex justify-between items-center cursor-pointer list-none">
                    View Order Details 
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="pt-4 border-t border-black/10 mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>1x Muffin Combo</span>
                        <span>$5.99</span>
                    </div>
                     <div className="flex justify-between text-sm">
                        <span>1x Latte</span>
                        <span>$4.50</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2">
                        <span>Total</span>
                        <span>$10.49</span>
                    </div>
                </div>
            </details>
            
            <div className="mt-8 text-center">
                <button className="text-brand-orange font-bold text-sm">View Receipt</button>
            </div>
        </div>

        {/* Floating Chat Button */}
        <div className="fixed bottom-6 right-6">
            <button className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">chat</span>
            </button>
        </div>
    </div>
);
