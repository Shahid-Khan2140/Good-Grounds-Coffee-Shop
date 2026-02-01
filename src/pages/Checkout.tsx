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
    countryCode: '+1',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  if (cart.length === 0) {
    navigate('/menu');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                    <div className="flex gap-3">
                      <div className="relative w-36 flex-shrink-0">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="w-full appearance-none px-4 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm text-[var(--color-espresso)] bg-white cursor-pointer font-medium"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+81">🇯🇵 +81</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+86">🇨🇳 +86</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[var(--color-espresso)] opacity-50">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="flex-1 w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-cream)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent)]/10 transition-all hover:border-[var(--color-latte)] shadow-sm text-[var(--color-espresso)]"
                      />
                    </div>
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

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <motion.button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 overflow-hidden ${
                      paymentMethod === 'card'
                        ? 'border-[#D4A574] bg-[#FFF8F0] shadow-md ring-1 ring-[#D4A574]'
                        : 'border-gray-200 bg-white hover:border-[#D4A574]/50'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${paymentMethod === 'card' ? 'bg-[#D4A574]/20' : 'bg-gray-100'}`}>
                      <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-[#D4A574]' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-sm font-semibold tracking-wide ${paymentMethod === 'card' ? 'text-[#8B5E3C]' : 'text-gray-600'}`}>Card</span>
                    {paymentMethod === 'card' && (
                      <motion.div
                        layoutId="activePayment"
                        className="absolute inset-0 border-2 border-[#D4A574] rounded-xl"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 overflow-hidden ${
                      paymentMethod === 'apple'
                        ? 'border-black bg-black text-white shadow-md'
                        : 'border-gray-200 bg-white hover:border-black/50'
                    }`}
                  >
                     <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" 
                          alt="Apple Pay" 
                          className={`w-6 h-6 object-contain ${paymentMethod === 'apple' ? '' : 'invert'}`} 
                     />
                    <span className={`text-sm font-semibold tracking-wide ${paymentMethod === 'apple' ? 'text-white' : 'text-gray-600'}`}>Apple Pay</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => setPaymentMethod('google')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 overflow-hidden ${
                      paymentMethod === 'google'
                        ? 'border-[#4285F4] bg-white text-[#4285F4] shadow-md ring-1 ring-[#4285F4]'
                        : 'border-gray-200 bg-white hover:border-[#4285F4]/50'
                    }`}
                  >
                     <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                          alt="Google Pay" 
                          className="w-6 h-6 object-contain" 
                     />
                    <span className={`text-sm font-semibold tracking-wide ${paymentMethod === 'google' ? 'text-gray-800' : 'text-gray-600'}`}>Google Pay</span>
                  </motion.button>
                </div>

                {paymentMethod === 'card' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                  >
                    <div className="relative group">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        maxLength={19}
                        required
                        className="peer w-full px-5 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#D4A574] focus:outline-none focus:ring-4 focus:ring-[#D4A574]/10 transition-all font-medium text-gray-800 tracking-wide placeholder-transparent"
                        placeholder="Card Number"
                      />
                      <label className="absolute left-5 top-4 text-xs font-medium text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#D4A574]">
                        Card Number
                      </label>
                      <CreditCard className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 peer-focus:text-[#D4A574] transition-colors" />
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="peer w-full px-5 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#D4A574] focus:outline-none focus:ring-4 focus:ring-[#D4A574]/10 transition-all font-medium text-gray-800 tracking-wide placeholder-transparent"
                        placeholder="Cardholder Name"
                      />
                      <label className="absolute left-5 top-4 text-xs font-medium text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#D4A574]">
                        Cardholder Name
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div className="relative group">
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          maxLength={5}
                          required
                          className="peer w-full px-5 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#D4A574] focus:outline-none focus:ring-4 focus:ring-[#D4A574]/10 transition-all font-medium text-gray-800 tracking-wide placeholder-transparent"
                          placeholder="MM/YY"
                        />
                        <label className="absolute left-5 top-4 text-xs font-medium text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#D4A574]">
                          MM/YY
                        </label>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          maxLength={4}
                          required
                          className="peer w-full px-5 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#D4A574] focus:outline-none focus:ring-4 focus:ring-[#D4A574]/10 transition-all font-medium text-gray-800 tracking-wide placeholder-transparent"
                          placeholder="CVV"
                        />
                        <label className="absolute left-5 top-4 text-xs font-medium text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#D4A574]">
                          CVV
                        </label>
                      </div>
                    </div>
                  </motion.div>
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