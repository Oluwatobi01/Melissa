
import React from 'react';
import { Header } from '../components/Components';
import { CartItem } from '../types';

export const CartScreen = ({ cart, onUpdateCart, onNavigate }: { cart: CartItem[], onUpdateCart: (cart: CartItem[]) => void, onNavigate: (screen: string) => void }) => {
    const total = cart.reduce((acc: number, item: CartItem) => acc + (item.price * item.quantity), 0);
    
    return (
        <div className="h-full flex flex-col">
            <Header title="My Cart" />
            <div className="flex-1 p-4 overflow-y-auto">
                {cart.length === 0 ? (
                    <div className="text-center mt-20 opacity-50">
                        <span className="material-symbols-outlined text-6xl mb-4">shopping_cart_off</span>
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    cart.map((item: CartItem) => (
                        <div key={item.id} className="flex gap-4 mb-4 bg-white dark:bg-white/5 p-3 rounded-xl">
                            <img src={item.image} className="w-20 h-20 rounded-lg object-cover" alt={item.name} />
                            <div className="flex-1">
                                <h4 className="font-bold">{item.name}</h4>
                                <p className="text-brand-orange font-bold">${item.price.toFixed(2)}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <button onClick={() => {
                                        if (item.quantity > 1) {
                                            const newCart = cart.map((p: any) => p.id === item.id ? {...p, quantity: p.quantity - 1} : p);
                                            onUpdateCart(newCart);
                                        } else {
                                            onUpdateCart(cart.filter((p: any) => p.id !== item.id));
                                        }
                                    }} className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center font-bold">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => {
                                         const newCart = cart.map((p: any) => p.id === item.id ? {...p, quantity: p.quantity + 1} : p);
                                         onUpdateCart(newCart);
                                    }} className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">+</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="p-4 bg-white dark:bg-background-dark border-t border-black/10 pb-24">
                <div className="flex justify-between text-xl font-bold mb-4">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button onClick={() => onNavigate('tracking')} className="w-full bg-brand-orange text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/30">
                    Place Order <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div>
    );
};
