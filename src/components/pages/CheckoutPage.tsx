import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, MapPin, User, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import type { OrderCustomization } from '../OrderCustomizer';

interface CheckoutPageProps {
  cartItems: OrderCustomization[];
  onNavigate: (page: string) => void;
  onClearCart: () => void;
}

export function CheckoutPage({ cartItems, onNavigate, onClearCart }: CheckoutPageProps) {
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.08;
  const deliveryFee = 4.99;
  const total = subtotal + tax + deliveryFee;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onClearCart();
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#faf6f0] pt-32 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-20 h-20 text-green-600" />
          </motion.div>
          
          <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#3d2516] mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-[#6f4e37] mb-8">
            Thank you for your order. Your coffee is being prepared and will be delivered soon!
          </p>
          
          <div className="bg-[#f5e6d3] rounded-2xl p-6 mb-6">
            <div className="text-sm text-[#6f4e37] mb-2">Order Total</div>
            <div className="font-['Playfair_Display'] text-3xl font-bold text-[#6f4e37]">
              ${total.toFixed(2)}
            </div>
            <div className="text-sm text-[#6f4e37] mt-2">
              Estimated delivery: 30-45 minutes
            </div>
          </div>

          <Button
            onClick={() => onNavigate('home')}
            size="lg"
            className="bg-[#6f4e37] hover:bg-[#3d2516] text-white px-8 py-6 text-lg rounded-full"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#faf6f0] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#3d2516] mb-2">
            Checkout
          </h1>
          <p className="text-lg text-[#6f4e37]">
            Complete your order
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${step === 'details' ? 'text-[#6f4e37]' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 'details' ? 'bg-[#6f4e37] text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="font-medium hidden sm:inline">Delivery Details</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300" />
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-[#6f4e37]' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 'payment' ? 'bg-[#6f4e37] text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="font-medium hidden sm:inline">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {step === 'details' && (
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleDetailsSubmit}
              >
                <Card className="p-8 bg-white rounded-2xl border-none shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#6f4e37]/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#6f4e37]" />
                    </div>
                    <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#3d2516]">
                      Delivery Information
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="mb-2 block">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6f4e37]/50" />
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="pl-10 h-12 rounded-xl border-[#6f4e37]/20"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6f4e37]/50" />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-10 h-12 rounded-xl border-[#6f4e37]/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6f4e37]/50" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10 h-12 rounded-xl border-[#6f4e37]/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="address" className="mb-2 block">Street Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="h-12 rounded-xl border-[#6f4e37]/20"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="city" className="mb-2 block">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="h-12 rounded-xl border-[#6f4e37]/20"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="zipCode" className="mb-2 block">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="h-12 rounded-xl border-[#6f4e37]/20"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-8 bg-[#6f4e37] hover:bg-[#3d2516] text-white py-6 text-lg rounded-full"
                  >
                    Continue to Payment
                  </Button>
                </Card>
              </motion.form>
            )}

            {step === 'payment' && (
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handlePaymentSubmit}
              >
                <Card className="p-8 bg-white rounded-2xl border-none shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#6f4e37]/10 rounded-full flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-[#6f4e37]" />
                    </div>
                    <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#3d2516]">
                      Payment Details
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="cardNumber" className="mb-2 block">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="h-12 rounded-xl border-[#6f4e37]/20"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardName" className="mb-2 block">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        className="h-12 rounded-xl border-[#6f4e37]/20"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="expiryDate" className="mb-2 block">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          className="h-12 rounded-xl border-[#6f4e37]/20"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="cvv" className="mb-2 block">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          className="h-12 rounded-xl border-[#6f4e37]/20"
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button
                      type="button"
                      onClick={() => setStep('details')}
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2 border-[#6f4e37] text-[#6f4e37] hover:bg-[#f5e6d3] py-6 text-lg rounded-full"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 bg-[#6f4e37] hover:bg-[#3d2516] text-white py-6 text-lg rounded-full"
                    >
                      Place Order
                    </Button>
                  </div>
                </Card>
              </motion.form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <Card className="p-6 bg-gradient-to-br from-white to-[#faf6f0] rounded-2xl border-none shadow-lg">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#3d2516] mb-6">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <div>
                        <div className="font-medium text-[#3d2516]">{item.product.name}</div>
                        <div className="text-[#6f4e37]/70">
                          {item.size} × {item.quantity}
                        </div>
                      </div>
                      <div className="font-medium text-[#6f4e37]">
                        ${item.totalPrice.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pb-4 border-b border-[#6f4e37]/20">
                  <div className="flex justify-between text-[#6f4e37]">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#6f4e37]">
                    <span>Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#6f4e37]">
                    <span>Delivery Fee</span>
                    <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516]">
                    Total
                  </span>
                  <span className="font-['Playfair_Display'] text-3xl font-bold text-[#6f4e37]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
