
import React from 'react';
import { IMG_CAKE, IMG_CROISSANT } from '../constants';
import { Product } from '../types';

const BakeryListItem = ({ title, description, price, image, onAdd }: { title: string, description: string, price: number, image: string, onAdd?: () => void }) => (
    <div className="flex items-center gap-4 bg-[#F8F8F8] dark:bg-white/5 p-4 rounded-2xl">
        <img src={image} className="w-20 h-20 rounded-xl object-cover shrink-0" alt={title} />
        <div className="flex-1">
            <h4 className="font-bold text-[#4E342E] dark:text-white text-base leading-tight mb-1">{title}</h4>
            <p className="text-sm text-[#8D6E63] dark:text-[#BCAAA4] leading-normal line-clamp-2 mb-1">{description}</p>
            <p className="text-base font-bold text-brand-orange">${price.toFixed(2)}</p>
        </div>
        <button className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-sm shrink-0">
            <span className="material-symbols-outlined text-xl">add</span>
        </button>
    </div>
);

export const BakeryScreen = ({ onNavigate, addToCart }: { onNavigate: (screen: string) => void, addToCart: (product: Product) => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display pb-20">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sticky top-0 bg-background-light dark:bg-background-dark z-10">
                <button onClick={() => onNavigate('home')} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                    <span className="material-symbols-outlined text-[#4E342E] dark:text-white">arrow_back</span>
                </button>
                <h1 className="text-xl font-bold text-[#4E342E] dark:text-white">Bakery</h1>
                <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                    <span className="material-symbols-outlined text-[#4E342E] dark:text-white">favorite_border</span>
                </button>
            </div>

            <div className="p-4 space-y-8">
                {/* Banner */}
                <div className="bg-[#FAE8D2] dark:bg-[#3E2C1F] rounded-[2.5rem] p-6 flex items-center relative overflow-visible">
                    <div className="flex-1 pr-2 z-10">
                        <h2 className="text-lg font-bold text-[#4E342E] dark:text-[#EFEBE9] mb-2 leading-tight">Design Your Dream Cake</h2>
                        <p className="text-sm text-[#8D6E63] dark:text-[#D7CCC8] mb-4 leading-relaxed">Make it uniquely yours.</p>
                        <button 
                            onClick={() => onNavigate('custom-cake')} 
                            className="bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm active:scale-95 transition-transform"
                        >
                            Get Started <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </button>
                    </div>
                    <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden -mr-2 shadow-lg">
                        <img src={IMG_CAKE} className="w-full h-full object-cover" alt="Cake" />
                    </div>
                </div>

                {/* Freshly Baked List */}
                <div>
                    <h3 className="text-lg font-bold text-[#4E342E] dark:text-white mb-4">Freshly Baked</h3>
                    <div className="space-y-4">
                        <BakeryListItem 
                            title="Classic Croissant"
                            description="Flaky, buttery perfection."
                            price={3.50}
                            image={IMG_CROISSANT}
                        />
                        <BakeryListItem 
                            title="Raspberry Cupcake"
                            description="Red velvet with fresh raspberry."
                            price={4.50}
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuADciu4mxihS__9ExtTtgob8tA6lqg9SN4CNSAgtUj0mhT-e6SMvV9twmXrSZsmxJ7d_ilQcisBU00tEqwZno9y0YmXylR6NSzdhTNpj-W6LTLzfndzNYHsctlqsftte6OtxY-4H7lm7mlDz4sVMKgjmPt8usz426lt2oQOQcekBgSgWEHjvgCdO5ip4Sdg5l_RCElL6uJIpXHKl6c6gwiykEDqG8zYmkPuAB7J1wb-M2NdYldKdvzyoq3CR0dg2LW3JaTXdXzXhmKw" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
