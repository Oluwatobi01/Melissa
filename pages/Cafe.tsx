
import React from 'react';
import { Header, SectionTitle, Card } from '../components/Components';
import { IMG_LATTE, IMG_CALAMARI } from '../constants';
import { Product } from '../types';

export const CafeScreen = ({ onNavigate, addToCart }: { onNavigate: (screen: string) => void, addToCart: (product: Product) => void }) => (
    <div>
        <Header title="Café & Restro" showBack onBack={() => onNavigate('home')} />
        <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <button onClick={() => onNavigate('booking')} className="border-2 border-brand-orange text-brand-orange rounded-full py-3 font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">table_restaurant</span> Book Table
                </button>
                <button onClick={() => onNavigate('qr-order')} className="border-2 border-brand-orange text-brand-orange rounded-full py-3 font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">qr_code_scanner</span> QR Order
                </button>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-[2/1]">
                 <img src={IMG_LATTE} className="absolute inset-0 w-full h-full object-cover" alt="Coffee" />
                 <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                     <span className="bg-brand-orange w-fit px-2 py-1 rounded text-xs font-bold mb-2">DAILY SPECIAL</span>
                     <h3 className="font-bold text-xl">Coffee & Croissant</h3>
                     <p className="text-sm">Kickstart your day.</p>
                 </div>
            </div>

            <SectionTitle title="Menu" />
            <Card title="Signature Latte" subtitle="Espresso with steamed milk." price={4.50} image={IMG_LATTE} onAdd={() => addToCart({id:'latte', name:'Latte', price: 4.50, image: IMG_LATTE, description: 'Latte'})} />
            <Card title="Crispy Calamari" subtitle="Lightly battered." price={14.50} image={IMG_CALAMARI} onAdd={() => addToCart({id:'calamari', name:'Calamari', price: 14.50, image: IMG_CALAMARI, description: 'Appetizer'})} />
        </div>
    </div>
);
