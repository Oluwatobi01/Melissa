
import React from 'react';
import { Header } from '../components/Components';

export const BookingScreen = ({ onBack }: { onBack: () => void }) => (
    <div>
        <Header title="Table Booking" showBack onBack={onBack} />
        <div className="p-4 space-y-6">
             <div className="bg-white dark:bg-white/5 p-4 rounded-xl flex items-center justify-between">
                 <div className="flex items-center gap-3">
                     <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange"><span className="material-symbols-outlined">group</span></div>
                     <span>How many guests?</span>
                 </div>
                 <div className="flex items-center gap-3">
                     <button className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center font-bold">-</button>
                     <span className="font-bold">2</span>
                     <button className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">+</button>
                 </div>
             </div>

             <div>
                 <h3 className="font-bold text-lg mb-3">Select a date</h3>
                 <div className="flex gap-2 overflow-x-auto pb-2">
                     {[22, 23, 24, 25, 26].map((day, i) => (
                         <div key={day} className={`flex flex-col items-center p-3 rounded-xl min-w-[60px] ${i===1 ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' : 'bg-white dark:bg-white/5'}`}>
                             <span className="text-xs opacity-70">Mon</span>
                             <span className="font-bold text-lg">{day}</span>
                         </div>
                     ))}
                 </div>
             </div>

             <div>
                 <h3 className="font-bold text-lg mb-3">Choose a time</h3>
                 <div className="grid grid-cols-3 gap-3">
                     {['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM'].map((time, i) => (
                         <button key={time} className={`py-3 rounded-lg font-medium text-sm ${i===1 ? 'bg-brand-orange text-white' : 'bg-white dark:bg-white/5'}`}>{time}</button>
                     ))}
                 </div>
             </div>

             <button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-orange/30">Confirm Booking</button>
        </div>
    </div>
);
