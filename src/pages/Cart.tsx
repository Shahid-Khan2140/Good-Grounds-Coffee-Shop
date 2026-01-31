import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[var(--color-foam)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 mx-auto text-[var(--color-latte)] mb-6" />
          <h2 className="text-3xl font-serif text-[var(--color-espresso)] mb-4">
            Your cart is empty
          </h2>
          <p className="text-lg text-[var(--color-coffee)] mb-8">
            Start adding some delicious coffee to your cart!
          </p>
          <Link
            to="/menu"
            className="btn btn-primary"
          >
            <span>Browse Menu</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[var(--color-foam)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-espresso)] mb-2">Your Cart</h1>
          <p className="text-lg text-[var(--color-coffee)]">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-serif text-[var(--color-espresso)] mb-1">
                          {item.name}
                        </h3>
                        <div className="text-sm text-[var(--color-coffee)] space-y-0.5">
                          {item.size && <div>Size: {item.size}</div>}
                          {item.milk && <div>Milk: {item.milk}</div>}
                          {item.sugar && <div>Sugar: {item.sugar}</div>}
                          {item.extras && item.extras.length > 0 && (
                            <div>Extras: {item.extras.join(', ')}</div>
                          )}
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        className="text-[var(--color-coffee)] hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3 bg-[var(--color-foam)] rounded-full px-4 py-2 shadow-sm">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>
                      <span className="text-xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] bg-clip-text text-transparent">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl sticky top-32"
            >
              <h2 className="text-2xl font-serif text-[var(--color-espresso)] mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-[var(--color-cream)]">
                <div className="flex justify-between text-[var(--color-coffee)]">
                  <span>Subtotal</span>
                  <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[var(--color-coffee)]">
                  <span>Tax (estimate)</span>
                  <span className="font-semibold">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xl font-semibold text-[var(--color-espresso)] mb-8">
                <span>Total</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] bg-clip-text text-transparent">
                  ${(getTotalPrice() * 1.08).toFixed(2)}
                </span>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/checkout"
                  className="w-full btn btn-primary btn-large"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <Link
                to="/menu"
                className="block text-center mt-4 text-[var(--color-accent)] hover:text-[var(--color-gold)] transition-colors font-medium"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}