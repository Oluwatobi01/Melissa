
import React, { useState } from 'react';
import { Header } from '../components/Components';

export const QuoteRequestScreen = ({ onBack }: { onBack: () => void }) => {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
                <Header title="Request Quote" showBack onBack={onBack} />
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-4xl text-brand-orange">check_circle</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-[#4E342E] dark:text-white">Request Sent!</h2>
                    <p className="opacity-70 mb-8 text-[#785348] dark:text-gray-300">We've received your details and will get back to you shortly.</p>
                    <button onClick={onBack} className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-orange/30 hover:bg-orange-600 transition-colors">
                        Back to Events
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            <Header title="Request Quote" showBack onBack={onBack} />
            <div className="flex-1 overflow-y-auto p-4 pb-10">
                <div className="bg-white dark:bg-white/5 p-6 rounded-2xl mb-6 border border-gray-100 dark:border-white/10 shadow-sm">
                    <h2 className="text-xl font-bold mb-2 text-[#4E342E] dark:text-white">Full-Service Planning</h2>
                    <p className="text-sm text-[#785348] dark:text-gray-300">Tell us a bit about your event so we can prepare a custom quote tailored to your vision.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div>
                        <label className="block text-sm font-bold mb-2 ml-1 text-[#4E342E] dark:text-white opacity-80">Event Type</label>
                        <select className="w-full bg-white dark:bg-white/5 p-4 rounded-xl outline-none border border-gray-100 dark:border-white/10 focus:border-brand-orange text-[#4E342E] dark:text-white appearance-none shadow-sm">
                            <option>Wedding</option>
                            <option>Birthday Party</option>
                            <option>Corporate Event</option>
                            <option>Anniversary</option>
                            <option>Other</option>
                        </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-2 ml-1 text-[#4E342E] dark:text-white opacity-80">Date</label>
                            <input type="date" className="w-full bg-white dark:bg-white/5 p-4 rounded-xl outline-none border border-gray-100 dark:border-white/10 focus:border-brand-orange text-[#4E342E] dark:text-white shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 ml-1 text-[#4E342E] dark:text-white opacity-80">Guests</label>
                            <input type="number" placeholder="100" className="w-full bg-white dark:bg-white/5 p-4 rounded-xl outline-none border border-gray-100 dark:border-white/10 focus:border-brand-orange text-[#4E342E] dark:text-white shadow-sm" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2 ml-1 text-[#4E342E] dark:text-white opacity-80">Budget Range</label>
                        <select className="w-full bg-white dark:bg-white/5 p-4 rounded-xl outline-none border border-gray-100 dark:border-white/10 focus:border-brand-orange text-[#4E342E] dark:text-white appearance-none shadow-sm">
                            <option>$1,000 - $5,000</option>
                            <option>$5,000 - $10,000</option>
                            <option>$10,000 - $20,000</option>
                            <option>$20,000+</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2 ml-1 text-[#4E342E] dark:text-white opacity-80">Additional Notes</label>
                        <textarea className="w-full bg-white dark:bg-white/5 p-4 rounded-xl outline-none border border-gray-100 dark:border-white/10 focus:border-brand-orange text-[#4E342E] dark:text-white h-32 resize-none shadow-sm" placeholder="Describe your vision, specific requirements, or themes..."></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-brand-orange text-white py-4 rounded-full font-bold shadow-lg shadow-brand-orange/30 mt-6 text-lg hover:bg-orange-600 transition-transform active:scale-95">
                        Send Request
                    </button>
                </form>
            </div>
        </div>
    );
};
