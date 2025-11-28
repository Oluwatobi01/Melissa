
import React from 'react';
import { SectionTitle, Card } from '../components/Components';
import { IMG_PUMPKIN, IMG_HOLIDAY } from '../constants';
import { Product } from '../types';

export const HomeScreen = ({ onNavigate, addToCart }: { onNavigate: (screen: string) => void, addToCart: (product: Product) => void }) => (
  <div className="pb-4">
    <div className="p-4 bg-background-light dark:bg-background-dark">
      <div className="flex items-center justify-between mb-4">
         <div className="flex items-center gap-1 text-brand-orange">
             <span className="material-symbols-outlined">location_on</span>
             <span className="font-bold">My Location</span>
             <span className="material-symbols-outlined">expand_more</span>
         </div>
         <div className="flex gap-2">
             <button className="p-2 bg-white dark:bg-white/10 rounded-full"><span className="material-symbols-outlined">notifications</span></button>
         </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">Hi, Melissa!</h1>
      
      {/* Hero Carousel */}
      <div className="flex overflow-x-auto gap-4 pb-4 snap-x no-scrollbar">
          <div className="min-w-[85%] snap-center rounded-2xl overflow-hidden relative aspect-[1.8/1]">
              <img src={IMG_PUMPKIN} className="w-full h-full object-cover" alt="Pumpkin Spice" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-xl">New! Pumpkin Spice Latte</h3>
                  <p className="text-sm opacity-90">Taste the season.</p>
              </div>
          </div>
           <div className="min-w-[85%] snap-center rounded-2xl overflow-hidden relative aspect-[1.8/1]">
              <img src={IMG_HOLIDAY} className="w-full h-full object-cover" alt="Holiday" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-xl">Plan Your Holiday Party</h3>
                  <p className="text-sm opacity-90">Book a consultation today.</p>
              </div>
          </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 my-4">
           <button onClick={() => onNavigate('tracking')} className="bg-brand-orange/10 dark:bg-white/5 p-4 rounded-xl flex flex-col items-start gap-2 hover:bg-brand-orange/20 transition-colors">
               <span className="material-symbols-outlined text-brand-orange text-3xl">local_shipping</span>
               <span className="font-bold">Track Order</span>
           </button>
           <button onClick={() => onNavigate('profile')} className="bg-brand-orange/10 dark:bg-white/5 p-4 rounded-xl flex flex-col items-start gap-2 hover:bg-brand-orange/20 transition-colors">
               <span className="material-symbols-outlined text-brand-orange text-3xl fill">favorite</span>
               <span className="font-bold">Favorites</span>
           </button>
      </div>

      <SectionTitle title="Categories" />
      <div className="grid grid-cols-4 gap-4 px-4">
          {[
              { id: 'bakery', icon: 'bakery_dining', label: 'Bakery' },
              { id: 'cafe', icon: 'local_cafe', label: 'Café' },
              { id: 'events', icon: 'celebration', label: 'Events' },
              { id: 'yogurt', icon: 'icecream', label: 'Yogurt' }
          ].map(cat => (
              <button key={cat.id} onClick={() => onNavigate(cat.id)} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-3xl text-brand-orange">{cat.icon}</span>
                  </div>
                  <span className="text-xs font-bold opacity-70">{cat.label}</span>
              </button>
          ))}
      </div>

      <SectionTitle title="Specials Near You" actionLabel="See All" />
      <div className="px-4 space-y-4">
          <Card 
            title="Muffin & Coffee Combo" 
            subtitle="Start your day right." 
            price={5.99} 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA0cCKzQfT5lQOndifUEhVZgtEj_LR2qhrycQucRFDY4swckQYMl1lIVdzUgaiubVWqdlMIK1Ad-R9hvds3dGQI8VOMtBM0dAHn2BfWSq9u8_phEhyTFfewp2p9biaXS3kvhJDir5l82-NYe6Sav1aQGf6WhnI1NyBCa4t6J4Qcnv8E7iexbF5NkD4QT8fkNBuNCL_HS_L1owMJPY7Md8nkgoMzX7YGdFJS_p93vpFpNKTSdwSu5kUY5Nozl_qQN2JJnFjDAuhyJyKJ"
            onAdd={() => addToCart({ id: 'combo1', name: 'Muffin Combo', price: 5.99, image: '...', description: 'Combo' })}
           />
           <Card 
            title="BOGO Yogurt" 
            subtitle="4 PM - 6 PM Daily" 
            price={0.00} 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC6T-ZLvaV_qQ940wuoijtDCk31eztZnY52dkcI8Ol-8Hl35RZOb3DGKZRbyCOk6OotB9GaUChXEB0qeMyXuRMKNXw-q2p_7L3z0HfO86WVDccPCoAAmL_OryqvFDouhbgEAQCG1xdXGNkL_er82bruWY0Xx2CnVqF_TEYVp3rpwSPibAQqBjX-MgnBBfc6dfSJx7cTeSY-UQlZ7m1xSODTdxNbwDK6GLnXBoZKSCW0-tF7YLm8JX5Wf9pQZ-nRT6cCJHoCHVbuJ_1D"
            onAdd={() => addToCart({ id: 'yogurt_promo', name: 'BOGO Yogurt', price: 0, image: '...', description: 'Promo' })}
           />
      </div>
    </div>
  </div>
);
