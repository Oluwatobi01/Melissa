
import React from 'react';
import { Header } from '../components/Components';
import { IMG_YOGURT } from '../constants';
import { Product } from '../types';

export const YogurtScreen = ({ addToCart }: { addToCart: (product: Product) => void }) => (
    <div>
        <Header title="Yogurt Production" />
        <div className="p-4">
             <div className="rounded-2xl overflow-hidden relative h-48 mb-6">
                <img src={IMG_YOGURT} className="w-full h-full object-cover" alt="Yogurt" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                    <h2 className="text-white text-2xl font-bold">Fresh, Natural Yogurt</h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                 {[
                     { name: 'Classic Greek', cal: '120 cal', img: IMG_YOGURT },
                     { name: 'Strawberry', cal: '145 cal', img: IMG_YOGURT }
                 ].map((y, i) => (
                     <div key={i} className="cursor-pointer" onClick={() => addToCart({ id: `yogurt_${i}`, name: y.name, price: 4.00, image: y.img, description: 'Yogurt' })}>
                         <img src={y.img} className="w-full aspect-square object-cover rounded-xl mb-2" alt={y.name} />
                         <h4 className="font-bold">{y.name}</h4>
                         <p className="text-xs opacity-70">{y.cal}</p>
                     </div>
                 ))}
            </div>

            <div className="bg-brand-orange/10 p-5 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">Yogurt Subscription Box</h3>
                <p className="text-sm opacity-70 mb-4">Delivered to your door weekly.</p>
                <button className="w-full bg-brand-orange text-white py-3 rounded-full font-bold">Subscribe Now</button>
            </div>
        </div>
    </div>
);
