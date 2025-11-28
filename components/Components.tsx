
import React from 'react';

export const Header = ({ title, showBack = false, onBack, rightIcon }: { title: string, showBack?: boolean, onBack?: () => void, rightIcon?: React.ReactNode }) => (
    <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-20 shadow-sm">
        <div className="flex size-10 shrink-0 items-center justify-center">
            {showBack && (
                <button onClick={onBack} className="rounded-full bg-white/50 dark:bg-black/20 p-2 hover:bg-black/5">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            )}
        </div>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary dark:text-white truncate px-2">
            {title}
        </h2>
        <div className="flex size-10 shrink-0 items-center justify-center">
            {rightIcon}
        </div>
    </div>
);

export const BottomNav = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background-light dark:bg-background-dark border-t border-black/5 dark:border-white/10 px-4 z-30 pb-safe">
        <div className="flex h-full items-center justify-around">
            <NavIcon icon="home" label="Home" active={activeTab === 'home'} onClick={() => onTabChange('home')} />
            <NavIcon icon="explore" label="Explore" active={activeTab === 'explore'} onClick={() => onTabChange('explore')} fill={false} />
            <NavIcon icon="shopping_cart" label="Cart" active={activeTab === 'cart'} onClick={() => onTabChange('cart')} />
            <NavIcon icon="person" label="Profile" active={activeTab === 'profile'} onClick={() => onTabChange('profile')} />
        </div>
    </nav>
);

const NavIcon = ({ icon, label, active, onClick, fill = true }: { icon: string, label: string, active: boolean, onClick: () => void, fill?: boolean }) => (
    <button onClick={onClick} className={`flex flex-col items-center justify-center gap-1 ${active ? 'text-brand-orange' : 'text-text-secondary opacity-70'}`}>
        <span className={`material-symbols-outlined ${active && fill ? 'fill' : ''}`}>{icon}</span>
        <span className="text-xs font-bold">{label}</span>
    </button>
);

export const SectionTitle = ({ title, actionLabel, onAction }: { title: string, actionLabel?: string, onAction?: () => void }) => (
    <div className="flex items-center justify-between px-4 pb-3 pt-6">
        <h2 className="text-xl font-bold leading-tight text-text-primary dark:text-white">{title}</h2>
        {actionLabel && (
            <button onClick={onAction} className="text-sm font-bold text-brand-orange">
                {actionLabel}
            </button>
        )}
    </div>
);

export const Card = ({ image, title, subtitle, price, onClick, onAdd }: { image: string, title: string, subtitle?: string, price?: number, onClick?: () => void, onAdd?: () => void }) => (
    <div className="flex items-center gap-4 bg-white dark:bg-white/5 p-3 rounded-xl shadow-sm mb-3 cursor-pointer" onClick={onClick}>
        <div className="h-20 w-20 shrink-0 rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${image}")` }}></div>
        <div className="flex flex-1 flex-col justify-center">
            <p className="text-base font-bold leading-normal text-text-primary dark:text-white line-clamp-1">{title}</p>
            {subtitle && <p className="text-sm font-normal leading-normal text-text-secondary line-clamp-2">{subtitle}</p>}
            {price !== undefined && <p className="text-sm font-bold leading-normal text-brand-orange mt-1">${price.toFixed(2)}</p>}
        </div>
        {onAdd && (
            <button 
                onClick={(e) => { e.stopPropagation(); onAdd(); }} 
                className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-white"
            >
                <span className="material-symbols-outlined text-lg">add</span>
            </button>
        )}
    </div>
);
