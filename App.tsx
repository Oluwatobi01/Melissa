
import React, { useState, useEffect } from 'react';
import { BottomNav } from './components/Components';
import { HomeScreen } from './pages/Home';
import { BakeryScreen } from './pages/Bakery';
import { CafeScreen } from './pages/Cafe';
import { EventsScreen } from './pages/Events';
import { YogurtScreen } from './pages/Yogurt';
import { CustomCakeScreen } from './pages/CustomCake';
import { CartScreen } from './pages/Cart';
import { ProfileScreen } from './pages/Profile';
import { TrackingScreen } from './pages/Tracking';
import { BookingScreen } from './pages/Booking';
import { QROrderScreen } from './pages/QROrder';
import { QuoteRequestScreen } from './pages/QuoteRequest';
import { Explore } from './pages/Explore';
import { CartItem, Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  // Routing Logic
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen onNavigate={setCurrentScreen} addToCart={addToCart} />;
      case 'explore': return <Explore onNavigate={setCurrentScreen} />;
      case 'bakery': return <BakeryScreen onNavigate={setCurrentScreen} addToCart={addToCart} />;
      case 'cafe': return <CafeScreen onNavigate={setCurrentScreen} addToCart={addToCart} />;
      case 'events': return <EventsScreen onNavigate={setCurrentScreen} />;
      case 'yogurt': return <YogurtScreen addToCart={addToCart} />;
      case 'custom-cake': return <CustomCakeScreen addToCart={addToCart} onBack={() => setCurrentScreen('bakery')} />;
      case 'cart': return <CartScreen cart={cart} onUpdateCart={setCart} onNavigate={setCurrentScreen} />;
      case 'profile': return <ProfileScreen />;
      case 'tracking': return <TrackingScreen onBack={() => setCurrentScreen('home')} />;
      case 'booking': return <BookingScreen onBack={() => setCurrentScreen('cafe')} />;
      case 'qr-order': return <QROrderScreen onBack={() => setCurrentScreen('cafe')} addToCart={addToCart} />;
      case 'quote-request': return <QuoteRequestScreen onBack={() => setCurrentScreen('events')} />;
      default: return <HomeScreen onNavigate={setCurrentScreen} addToCart={addToCart} />;
    }
  };

  // Sync BottomNav with currentScreen
  useEffect(() => {
    if (['home', 'explore', 'cart', 'profile'].includes(currentScreen)) {
        setActiveTab(currentScreen);
    } else {
        // keep active tab highlighting somewhat logical or clear it
        if (currentScreen === 'bakery' || currentScreen === 'cafe' || currentScreen === 'yogurt' || currentScreen === 'events') setActiveTab('home');
    }
  }, [currentScreen]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-primary dark:text-white">
      <main className="flex-1 pb-20">
        {renderScreen()}
      </main>
      {['home', 'explore', 'bakery', 'cafe', 'yogurt', 'events', 'profile'].includes(currentScreen) && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
}
