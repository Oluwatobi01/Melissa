
import React from 'react';
import { Header, Card } from '../components/Components';
import { IMG_CALAMARI, IMG_LATTE } from '../constants';
import { Product } from '../types';

export const QROrderScreen = ({ onBack, addToCart }: { onBack: () => void, addToCart: (product: Product) => void }) => (
    <div className="h-full flex flex-col">
        <Header title="Table 12" showBack onBack={onBack} />
        <div className="p-4 space-y-4 flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-3">
                <button className="bg-white dark:bg-white/5 py-3 rounded-lg font-bold flex items-center justify-center gap-2"><span className="material-symbols-outlined">call_split</span> Split Bill</button>
                <button className="bg-white dark:bg-white/5 py-3 rounded-lg font-bold flex items-center justify-center gap-2"><span className="material-symbols-outlined">waving_hand</span> Call Waiter</button>
            </div>
            
            <div className="flex gap-4 border-b border-black/10 overflow-x-auto pb-2">
                {['Appetizers', 'Mains', 'Drinks', 'Desserts'].map((cat, i) => (
                    <button key={cat} className={`font-bold whitespace-nowrap pb-2 ${i===0 ? 'text-brand-orange border-b-2 border-brand-orange' : 'opacity-50'}`}>{cat}</button>
                ))}
            </div>

            <Card title="Crispy Calamari" subtitle="Lightly battered." price={14.50} image={IMG_CALAMARI} onAdd={() => addToCart({ id: 'calamari', name: 'Calamari', price: 14.50, image: IMG_CALAMARI, description: 'Appetizer' })} />
            <Card title="Bruschetta" subtitle="Fresh tomatoes." price={10.00} image="https://lh3.googleusercontent.com/aida-public/AB6AXuDGmGIG-mltgwcG180MElNemXKd2q2n2QK41m9UrZ8_Kff9AHJBMA7nczWxN_Q9-z0tkrro9q1j4-9dI2irz885TZMMqOtLIvMlXAlfn_HQU3egq8ke-x52uy82cmbNqvsB5hO-mA-bXxXg1r_qCCGexdc8pY9MT9d5A8VrVLFDtInFvZdb6NLlvymM2AWoZU5f2zfSr0Uy5BptyuKvCVpCIPYFMNFe52R5OltGcDH1XeDAGJhfDjgf6OhMONaOhtz8JbzMPhVIU0qW" onAdd={() => addToCart({ id: 'bruschetta', name: 'Bruschetta', price: 10.00, image: '...', description: 'Bruschetta' })} />
             <Card title="Spinach Dip" subtitle="With tortilla chips." price={12.00} image="https://lh3.googleusercontent.com/aida-public/AB6AXuCgg3u08jU_5LaHGLwlnmdlSaw6u8bTy_xfLtbv49dQpdKhOJpvBG5AthiYL7aKxALseTaRCDwVI0kJUQvXLBoZ4aT1kBjFKnEBHEk0sfXNb8in4sua7EdBJw0VF4IVjvPTN5LbAtPtvtkbsM5Myp7CwkFlr0-vsKDXLAgEaEmvSeNMeqB0XG4IqL15EZTm_cTvBRtRCChRmwF6BGURF2MG0gc5LeBypM8J_iwWfJt0Gd1mqlE_c2S6oHKd2dg4miB4lXRVBNhllhLr" onAdd={() => addToCart({ id: 'dip', name: 'Spinach Dip', price: 12.00, image: '...', description: 'Dip' })} />
        </div>
    </div>
);
