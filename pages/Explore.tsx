
import React, { useState } from 'react';
import { searchNearbyPlaces } from '../services/geminiService';
import { PlaceResult } from '../types';
import { IMG_BAKERY, IMG_CAFE, IMG_EVENTS, IMG_YOGURT, FALLBACK_IMAGES } from '../constants';

export const Explore = ({ onNavigate }: { onNavigate: (screen: string) => void }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PlaceResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);

    let lat = 37.7749;
    let lng = -122.4194;

    if (navigator.geolocation) {
        try {
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
            });
            lat = position.coords.latitude;
            lng = position.coords.longitude;
        } catch (err) {
            console.warn("Geolocation failed, using default.", err);
        }
    }

    const data = await searchNearbyPlaces(query, lat, lng);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark min-h-screen pb-24 font-display">
        {/* Header Section */}
        <div className="pt-6 pb-2 sticky top-0 bg-background-light dark:bg-background-dark z-20">
            <h1 className="text-xl font-bold mb-4 text-[#4E342E] dark:text-white text-center">Explore</h1>
            <div className="px-4">
                <form onSubmit={handleSearch} className="relative">
                    <div className="relative flex items-center w-full h-12 rounded-full bg-[#FFF5F5] dark:bg-white/10 overflow-hidden shadow-sm">
                        <div className="flex items-center justify-center pl-4 pr-2">
                            <span className="material-symbols-outlined text-[#8D6E63] text-[22px]">search</span>
                        </div>
                        <input 
                            type="text" 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for treats, coffee, events..."
                            className="w-full h-full bg-transparent border-none outline-none text-text-primary dark:text-white text-base placeholder-[#8D6E63]/70 dark:placeholder-white/50 focus:ring-0"
                        />
                        {query && !loading && (
                            <button type="button" onClick={() => { setQuery(''); setResult(null); }} className="pr-4 text-text-secondary flex items-center">
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        )}
                        {loading && (
                            <div className="pr-4 flex items-center">
                                <div className="animate-spin h-5 w-5 border-2 border-brand-orange border-t-transparent rounded-full"></div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>

        <div className="px-4 flex-1 overflow-y-auto">
            {/* Default Category View */}
            {!result && !loading && (
                <div className="mt-4 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <CategoryCard title="Bakery" image={IMG_BAKERY} onClick={() => onNavigate('bakery')} />
                        <CategoryCard title="Café" image={IMG_CAFE} onClick={() => onNavigate('cafe')} />
                        <CategoryCard title="Events" image={IMG_EVENTS} onClick={() => onNavigate('events')} />
                        <CategoryCard title="Yogurt" image={IMG_YOGURT} onClick={() => onNavigate('yogurt')} />
                    </div>

                    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                        <FilterChip icon="restaurant_menu" label="Dietary" />
                        <FilterChip icon="payments" label="Price" />
                        <FilterChip icon="schedule" label="Time" />
                        <FilterChip icon="near_me" label="Distance" />
                    </div>
                </div>
            )}

            {/* Search Results State */}
            {result && (
                <div className="space-y-6 animate-fade-in pb-8 pt-4">
                    <div className="bg-white dark:bg-white/5 p-5 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                        <div className="flex items-start gap-3">
                             <span className="material-symbols-outlined text-brand-orange mt-1">auto_awesome</span>
                             <div className="prose dark:prose-invert text-base leading-relaxed text-text-primary dark:text-white whitespace-pre-wrap">
                                 {result.content}
                             </div>
                        </div>
                    </div>

                    {result.places && result.places.length > 0 && (
                        <div>
                            <h3 className="font-bold mb-4 text-xl text-text-primary dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-orange">map</span> Recommended Places
                            </h3>
                            <div className="grid gap-4">
                                {result.places.map((place, idx) => (
                                    <a 
                                        key={idx} 
                                        href={place.googleMapsUri} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group block bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-black/5 dark:border-white/5 hover:border-brand-orange/50"
                                    >
                                        <div className="relative h-32 w-full overflow-hidden">
                                            <img 
                                                src={FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length]} 
                                                alt={place.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-3 left-3 text-white">
                                                <h4 className="font-bold text-lg leading-tight shadow-black drop-shadow-md">{place.name}</h4>
                                            </div>
                                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 p-2 rounded-full backdrop-blur-sm">
                                                <span className="material-symbols-outlined text-brand-orange text-sm block">near_me</span>
                                            </div>
                                        </div>
                                        <div className="p-4 flex justify-between items-center">
                                            <div className="text-sm text-text-secondary dark:text-gray-300">
                                                View details on Google Maps
                                            </div>
                                            <span className="material-symbols-outlined text-brand-orange group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    </div>
  );
};

const CategoryCard = ({ title, image, onClick }: { title: string, image: string, onClick: () => void }) => (
    <div onClick={onClick} className="relative rounded-[2rem] overflow-hidden aspect-square shadow-sm group cursor-pointer">
        <img src={image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-bold text-lg leading-tight tracking-wide">{title}</h3>
        </div>
    </div>
);

const FilterChip = ({ icon, label }: { icon: string, label: string }) => (
    <button className="flex items-center gap-2 bg-[#A8D8B9] dark:bg-[#2E7D32] px-4 py-2 rounded-full whitespace-nowrap shrink-0 shadow-sm active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-[#4E342E] dark:text-white text-lg">{icon}</span>
        <span className="text-[#4E342E] dark:text-white font-semibold text-sm">{label}</span>
    </button>
);
