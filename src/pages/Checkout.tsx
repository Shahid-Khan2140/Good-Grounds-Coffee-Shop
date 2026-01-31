import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, User, MapPin, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  if (cart.length === 0) {
    navigate('/menu');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Store order details
    const order = {
      items: cart,
      total: getTotalPrice() * 1.08,
      orderType,
      paymentMethod,
      customerInfo: formData,
      orderNumber: Math.random().toString(36).substring(2, 10).toUpperCase(),
      date: new Date().toISOString(),
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));

    clearCart();
    navigate('/order-confirmation');
  };

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const deliveryFee = orderType === 'delivery' ? 5.99 : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[var(--color-foam)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-espresso)] mb-2">Checkout</h1>
          <p className="text-lg text-[var(--color-coffee)]">Complete your order</p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    1
                  </div>
                  <h2 className="text-2xl font-serif text-[var(--color-espresso)]">Order Type</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      orderType === 'pickup'
                        ? 'border-[var(--color-accent)] bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-gold)]/10 shadow-md'
                        : 'border-[var(--color-cream)] hover:border-[var(--color-latte)] hover:shadow-md'
                    }`}
                  >
                    <MapPin className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                    <div className="text-center">
                      <div className="font-bold text-[var(--color-espresso)] text-lg">Pickup</div>
                      <div className="text-sm text-[var(--color-coffee)] mt-1">Free</div>
                    </div>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      orderType === 'delivery'
                        ? 'border-[var(--color-accent)] bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-gold)]/10 shadow-md'
                        : 'border-[var(--color-cream)] hover:border-[var(--color-latte)] hover:shadow-md'
                    }`}
                  >
                    <Truck className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                    <div className="text-center">
                      <div className="font-bold text-[var(--color-espresso)] text-lg">Delivery</div>
                      <div className="text-sm text-[var(--color-coffee)] mt-1">$5.99</div>
                    </div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Customer Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    2
                  </div>
                  <h2 className="text-2xl font-serif text-[var(--color-espresso)]">
                    Contact Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[var(--color-espresso)] mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm text-[var(--color-espresso)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[var(--color-espresso)] mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm text-[var(--color-espresso)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-espresso)] mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm text-[var(--color-espresso)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-espresso)] mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm text-[var(--color-espresso)]"
                    />
                  </div>
                </div>

                {orderType === 'delivery' && (
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm"
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm"
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm"
                      />
                      <input
                        type="text"
                        name="zip"
                        placeholder="ZIP"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        className="px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm"
                      />
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    3
                  </div>
                  <h2 className="text-2xl font-serif text-[var(--color-espresso)]">Payment</h2>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <motion.button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[var(--color-accent)] bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-gold)]/10 shadow-md'
                        : 'border-[var(--color-cream)] hover:border-[var(--color-latte)] hover:shadow-sm'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mx-auto text-[var(--color-accent)]" />
                    <div className="text-sm mt-2 text-center font-medium">Card</div>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      paymentMethod === 'apple'
                        ? 'border-[var(--color-accent)] bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-gold)]/10 shadow-md'
                        : 'border-[var(--color-cream)] hover:border-[var(--color-latte)] hover:shadow-sm'
                    }`}
                  >
                    <div className="text-2xl mx-auto text-center">🍎</div>
                    <div className="text-sm mt-2 text-center font-medium">Apple Pay</div>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setPaymentMethod('google')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      paymentMethod === 'google'
                        ? 'border-[var(--color-accent)] bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-gold)]/10 shadow-md'
                        : 'border-[var(--color-cream)] hover:border-[var(--color-latte)] hover:shadow-sm'
                    }`}
                  >
                    <div className="text-2xl mx-auto text-center">G</div>
                    <div className="text-sm mt-2 text-center font-medium">Google Pay</div>
                  </motion.button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      maxLength={19}
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm"
                    />
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Cardholder Name"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        maxLength={5}
                        required
                        className="px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength={4}
                        required
                        className="px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
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

                <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-[var(--color-coffee)]">
                        {item.quantity}x {item.name} ({item.size})
                      </span>
                      <span className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pb-6 border-t border-b border-[var(--color-cream)] pt-4">
                  <div className="flex justify-between text-[var(--color-coffee)]">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-[var(--color-coffee)]">
                      <span>Delivery Fee</span>
                      <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[var(--color-coffee)]">
                    <span>Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xl font-semibold text-[var(--color-espresso)] mb-8">
                  <span>Total</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] bg-clip-text text-transparent">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <motion.button
                  type="submit"
                  disabled={isProcessing}
                  whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                  whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] text-white py-5 rounded-full flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Place Order</span>
                      <Check className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <div className="mt-6 text-xs text-center text-[var(--color-coffee)] space-y-2">
                  <p className="flex items-center justify-center gap-1">
                    <span className="text-lg">🔒</span> Secure payment powered by Stripe
                  </p>
                  <p>Your payment information is encrypted and secure</p>
                </div>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}