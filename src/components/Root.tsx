import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from '../context/CartContext';
import { Toaster } from 'sonner@2.0.3';

export default function Root() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--color-espresso)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 10px 30px rgba(45, 27, 19, 0.3)',
            },
            className: 'font-sans',
          }}
          richColors
        />
      </div>
    </CartProvider>
  );
}