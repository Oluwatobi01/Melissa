
import React from 'react';
import { Header } from '../components/Components';
import { IMG_HOLIDAY } from '../constants';

export const EventsScreen = ({ onNavigate }: { onNavigate: (screen: string) => void }) => (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
        <Header title="Event Planning" showBack onBack={() => onNavigate('home')} />
        <div className="flex-1 overflow-y-auto pb-24">
            {/* Hero Image */}
            <div className="mx-4 mt-2 h-56 rounded-xl bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url("${IMG_HOLIDAY}")` }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex h-full flex-col items-start justify-end p-4 text-white">
                    <h2 className="text-2xl font-bold leading-tight">Your Perfect Event, Planned by Us</h2>
                    <p className="text-sm opacity-90">From intimate gatherings to grand celebrations.</p>
                </div>
            </div>

            <div className="px-4 pt-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-[#FFEDD5] p-4 text-center dark:bg-brand-orange/20">
                        <span className="material-symbols-outlined text-brand-orange text-3xl">checklist</span>
                        <p className="text-sm font-semibold text-[#4E342E] dark:text-white">Timeline & Checklist</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-[#FFEDD5] p-4 text-center dark:bg-brand-orange/20">
                        <span className="material-symbols-outlined text-brand-orange text-3xl">groups</span>
                        <p className="text-sm font-semibold text-[#4E342E] dark:text-white">Vendor Coordination</p>
                    </div>
                </div>
            </div>

            <div className="px-4 pt-6">
                <h3 className="text-xl font-bold text-[#4E342E] dark:text-white mb-4">Our Packages</h3>
                <div className="flex flex-col gap-4">
                    {/* Small Gatherings */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-[#785348] dark:bg-white/5">
                        <h4 className="text-lg font-bold text-brand-orange">Small Gatherings</h4>
                        <p className="mt-1 text-sm text-[#785348] dark:text-gray-300">Perfect for intimate events up to 25 guests. Includes basic setup and coordination.</p>
                        <p className="mt-2 text-base font-bold text-[#4E342E] dark:text-white">Starting from $500</p>
                    </div>

                    {/* Medium Events */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-[#785348] dark:bg-white/5">
                        <h4 className="text-lg font-bold text-brand-orange">Medium Events</h4>
                        <p className="mt-1 text-sm text-[#785348] dark:text-gray-300">Ideal for parties of 25–75 guests. Includes vendor suggestions and day-of management.</p>
                        <p className="mt-2 text-base font-bold text-[#4E342E] dark:text-white">Starting from $1,200</p>
                    </div>

                    {/* Full-Service */}
                    <div className="rounded-xl border-2 border-brand-orange bg-white p-4 dark:bg-white/5 relative">
                        <h4 className="text-lg font-bold text-brand-orange">Full-Service Planning</h4>
                        <p className="mt-1 text-sm text-[#785348] dark:text-gray-300 mb-14">Comprehensive planning for any size event. We handle everything from start to finish. Custom Quote</p>
                        <button 
                            onClick={() => onNavigate('quote-request')}
                            className="absolute bottom-4 left-4 right-4 rounded-lg bg-brand-orange py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-orange-600 transition-colors"
                        >
                            Request Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Sticky Footer Button */}
        <div className="sticky bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4 dark:border-[#785348] dark:bg-background-dark z-10">
            <button className="h-12 w-full rounded-full bg-brand-orange text-lg font-bold text-white shadow-lg">
                Request a Quote or Booking
            </button>
        </div>
    </div>
);
