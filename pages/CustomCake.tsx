
import React from 'react';
import { Header } from '../components/Components';
import { IMG_CUSTOM_CAKE_BG } from '../constants';
import { Product } from '../types';

export const CustomCakeScreen = ({ onBack, addToCart }: { onBack: () => void, addToCart: (product: Product) => void }) => (
    <div className="flex flex-col h-full">
        <Header title="Create Custom Cake" showBack onBack={onBack} />
        <div className="flex-1 overflow-y-auto p-4">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 relative">
                 <img src={IMG_CUSTOM_CAKE_BG} className="w-full h-full object-cover" alt="Custom Cake" />
            </div>
            
            <div className="space-y-3">
                 {['Size', 'Tiers', 'Flavor', 'Fillings', 'Glazing'].map(opt => (
                     <details key={opt} className="bg-white dark:bg-white/5 border border-brand-orange/20 rounded-xl p-4 group">
                         <summary className="font-bold flex justify-between items-center cursor-pointer list-none">
                             {opt} <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                         </summary>
                         <div className="pt-4 text-sm opacity-70">Options for {opt}...</div>
                     </details>
                 ))}
            </div>

            <button className="w-full mt-6 border-dashed border-2 border-brand-orange/40 rounded-xl p-6 flex flex-col items-center gap-2 text-brand-orange bg-brand-orange/5">
                <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                <span className="font-bold">Upload Reference Photo</span>
            </button>
        </div>
        <div className="p-4 border-t border-black/10 flex justify-between items-center bg-white dark:bg-background-dark">
             <div>
                 <p className="text-xs opacity-70">Estimated Total</p>
                 <p className="text-2xl font-bold">$45.00</p>
             </div>
             <button onClick={() => {
                 addToCart({ id: 'custom_cake', name: 'Custom Cake', price: 45.00, image: IMG_CUSTOM_CAKE_BG, description: 'Custom' });
                 onBack();
             }} className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-orange/30">
                 Add to Cart
             </button>
        </div>
    </div>
);
