
import React from 'react';
import { Header } from '../components/Components';
import { IMG_PROFILE } from '../constants';

export const ProfileScreen = () => (
    <div>
        <Header title="My Profile" rightIcon={<span className="text-brand-orange font-bold text-sm">Sign Out</span>} />
        <div className="p-4 flex gap-4 items-center">
            <img src={IMG_PROFILE} className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md" alt="Profile" />
            <div>
                <h2 className="text-xl font-bold">Melissa James</h2>
                <p className="opacity-70 text-sm">Gold Member</p>
            </div>
        </div>
        
        <div className="px-4 mb-6">
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-black/5">
                <h3 className="font-bold mb-2">Loyalty & Rewards</h3>
                <div className="flex justify-between text-sm mb-1">
                    <span>250 Points</span>
                    <span className="opacity-50">Goal: 400</span>
                </div>
                <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange w-[62%]"></div>
                </div>
                <p className="text-xs mt-2 opacity-60">150 more points to reach Platinum!</p>
            </div>
        </div>

        <div className="px-4 space-y-2">
            {['Personal Details', 'Address Book', 'Payment Methods', 'Order History', 'Settings'].map(item => (
                <button key={item} className="w-full flex items-center justify-between p-4 bg-white dark:bg-white/5 rounded-xl hover:bg-black/5">
                    <span className="font-medium">{item}</span>
                    <span className="material-symbols-outlined opacity-50">chevron_right</span>
                </button>
            ))}
        </div>
    </div>
);
