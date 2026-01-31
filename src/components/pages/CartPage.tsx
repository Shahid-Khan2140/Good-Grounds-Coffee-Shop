import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import type { OrderCustomization } from '../OrderCustomizer';

interface CartPageProps {
  cartItems: OrderCustomization[];
  onUpdateQuantity: (index: number, newQuantity: number) => void;
  onRemoveItem: (index: number) => void;
  onNavigate: (page: string) => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.08;
  const deliveryFee = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + tax + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#faf6f0] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-32 h-32 bg-[#f5e6d3] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-16 h-16 text-[#6f4e37]" />
            </div>
            <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#3d2516] mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-[#6f4e37] mb-8">
              Add some delicious coffee to get started!
            </p>
            <Button
              onClick={() => onNavigate('menu')}
              size="lg"
              className="bg-[#6f4e37] hover:bg-[#3d2516] text-white px-8 py-6 text-lg rounded-full"
            >
              Browse Menu
            </Button>
          </motion.div>
        </div>
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
            Shopping Cart
          </h1>
          <p className="text-lg text-[#6f4e37]">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white rounded-2xl border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516] mb-2">
                        {item.product.name}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-sm px-2 py-1 bg-[#f5e6d3] text-[#6f4e37] rounded-full">
                          {item.size}
                        </span>
                        <span className="text-sm px-2 py-1 bg-[#f5e6d3] text-[#6f4e37] rounded-full">
                          {item.milk}
                        </span>
                        {item.sugar > 0 && (
                          <span className="text-sm px-2 py-1 bg-[#f5e6d3] text-[#6f4e37] rounded-full">
                            Sugar: {item.sugar}
                          </span>
                        )}
                        {item.extras.length > 0 && (
                          <span className="text-sm px-2 py-1 bg-[#f5e6d3] text-[#6f4e37] rounded-full">
                            +{item.extras.length} extras
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            className="w-8 h-8 bg-[#f5e6d3] hover:bg-[#e8d5c4] rounded-full flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4 text-[#6f4e37]" />
                          </button>
                          <span className="text-lg font-medium text-[#3d2516] min-w-[30px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            className="w-8 h-8 bg-[#f5e6d3] hover:bg-[#e8d5c4] rounded-full flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4 text-[#6f4e37]" />
                          </button>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="font-['Playfair_Display'] text-2xl font-bold text-[#6f4e37]">
                            ${item.totalPrice.toFixed(2)}
                          </div>
                          <button
                            onClick={() => onRemoveItem(index)}
                            className="w-10 h-10 bg-red-50 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors group"
                          >
                            <Trash2 className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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

                <div className="space-y-4 mb-6">
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
                  
                  <div className="border-t-2 border-[#6f4e37]/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516]">
                        Total
                      </span>
                      <span className="font-['Playfair_Display'] text-3xl font-bold text-[#6f4e37]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => onNavigate('checkout')}
                  size="lg"
                  className="w-full bg-[#6f4e37] hover:bg-[#3d2516] text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  onClick={() => onNavigate('menu')}
                  variant="outline"
                  size="lg"
                  className="w-full mt-3 border-2 border-[#6f4e37] text-[#6f4e37] hover:bg-[#f5e6d3] py-6 text-lg rounded-full transition-all"
                >
                  Continue Shopping
                </Button>

                {/* Delivery Info */}
                <div className="mt-6 p-4 bg-[#6f4e37]/5 rounded-xl">
                  <div className="text-sm text-[#6f4e37]">
                    <p className="font-medium mb-1">🚚 Free delivery on orders over $25</p>
                    <p>📦 Estimated delivery: 30-45 minutes</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
