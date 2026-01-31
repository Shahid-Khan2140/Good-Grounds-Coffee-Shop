import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import type { CoffeeProduct } from './FeaturedCoffee';

interface OrderCustomizerProps {
  product: CoffeeProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (customization: OrderCustomization) => void;
}

export interface OrderCustomization {
  product: CoffeeProduct;
  size: 'small' | 'medium' | 'large';
  milk: string;
  sugar: number;
  quantity: number;
  extras: string[];
  totalPrice: number;
}

const sizes = [
  { id: 'small', name: 'Small', ml: '8oz', priceModifier: 0 },
  { id: 'medium', name: 'Medium', ml: '12oz', priceModifier: 1 },
  { id: 'large', name: 'Large', ml: '16oz', priceModifier: 2 },
];

const milkOptions = [
  { id: 'whole', name: 'Whole Milk', price: 0 },
  { id: 'skim', name: 'Skim Milk', price: 0 },
  { id: 'almond', name: 'Almond Milk', price: 0.5 },
  { id: 'oat', name: 'Oat Milk', price: 0.5 },
  { id: 'soy', name: 'Soy Milk', price: 0.5 },
  { id: 'coconut', name: 'Coconut Milk', price: 0.5 },
];

const extras = [
  { id: 'whipped', name: 'Whipped Cream', price: 0.75 },
  { id: 'caramel', name: 'Caramel Drizzle', price: 0.5 },
  { id: 'chocolate', name: 'Chocolate Syrup', price: 0.5 },
  { id: 'vanilla', name: 'Vanilla Shot', price: 1 },
  { id: 'espresso', name: 'Extra Espresso', price: 1.5 },
];

export function OrderCustomizer({ product, isOpen, onClose, onAddToCart }: OrderCustomizerProps) {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [selectedMilk, setSelectedMilk] = useState('whole');
  const [sugarLevel, setSugarLevel] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');

  if (!product) return null;

  const calculateTotalPrice = () => {
    if (!product) return 0;
    
    const sizePrice = sizes.find(s => s.id === selectedSize)?.priceModifier || 0;
    const milkPrice = milkOptions.find(m => m.id === selectedMilk)?.price || 0;
    const extrasPrice = selectedExtras.reduce((sum, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return sum + (extra?.price || 0);
    }, 0);
    
    return (product.price + sizePrice + milkPrice + extrasPrice) * quantity;
  };

  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev =>
      prev.includes(extraId)
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const handleAddToCart = () => {
    const customization: OrderCustomization = {
      product,
      size: selectedSize,
      milk: selectedMilk,
      sugar: sugarLevel,
      quantity,
      extras: selectedExtras,
      totalPrice: calculateTotalPrice(),
    };
    onAddToCart(customization);
    onClose();
    
    // Reset customization
    setSelectedSize('medium');
    setSelectedMilk('whole');
    setSugarLevel(1);
    setQuantity(1);
    setSelectedExtras([]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 max-w-4xl w-full z-50"
          >
            <Card className="max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-[#6f4e37]/10 p-6 flex items-center justify-between z-10">
                <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#3d2516]">
                  Customize Your Order
                </h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 hover:bg-[#f5e6d3] rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-[#6f4e37]" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Product Info */}
                <div className="flex gap-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded-2xl"
                  />
                  <div>
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#3d2516] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-[#6f4e37]/70 mb-2">{product.description}</p>
                    <div className="text-2xl font-bold text-[#6f4e37]">
                      Base: ${product.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Delivery Method */}
                <div>
                  <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516] mb-4">
                    Delivery Method
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        deliveryMethod === 'delivery'
                          ? 'border-[#6f4e37] bg-[#6f4e37]/5'
                          : 'border-[#6f4e37]/20 hover:border-[#6f4e37]/40'
                      }`}
                    >
                      <MapPin className="w-6 h-6 text-[#6f4e37] mb-2" />
                      <div className="font-medium text-[#3d2516]">Delivery</div>
                      <div className="text-sm text-[#6f4e37]/70">30-45 min</div>
                    </button>
                    <button
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        deliveryMethod === 'pickup'
                          ? 'border-[#6f4e37] bg-[#6f4e37]/5'
                          : 'border-[#6f4e37]/20 hover:border-[#6f4e37]/40'
                      }`}
                    >
                      <Clock className="w-6 h-6 text-[#6f4e37] mb-2" />
                      <div className="font-medium text-[#3d2516]">Pickup</div>
                      <div className="text-sm text-[#6f4e37]/70">15-20 min</div>
                    </button>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516] mb-4">
                    Select Size
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id as any)}
                        className={`p-4 rounded-2xl border-2 transition-all ${
                          selectedSize === size.id
                            ? 'border-[#6f4e37] bg-[#6f4e37]/5'
                            : 'border-[#6f4e37]/20 hover:border-[#6f4e37]/40'
                        }`}
                      >
                        <div className="font-medium text-[#3d2516]">{size.name}</div>
                        <div className="text-sm text-[#6f4e37]/70">{size.ml}</div>
                        {size.priceModifier > 0 && (
                          <div className="text-sm text-[#6f4e37] mt-1">
                            +${size.priceModifier.toFixed(2)}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Milk Options */}
                {product.category !== 'beans' && (
                  <div>
                    <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516] mb-4">
                      Milk Type
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {milkOptions.map((milk) => (
                        <button
                          key={milk.id}
                          onClick={() => setSelectedMilk(milk.id)}
                          className={`p-3 rounded-xl border-2 transition-all text-left ${
                            selectedMilk === milk.id
                              ? 'border-[#6f4e37] bg-[#6f4e37]/5'
                              : 'border-[#6f4e37]/20 hover:border-[#6f4e37]/40'
                          }`}
                        >
                          <div className="font-medium text-[#3d2516] text-sm">
                            {milk.name}
                          </div>
                          {milk.price > 0 && (
                            <div className="text-xs text-[#6f4e37]">
                              +${milk.price.toFixed(2)}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sugar Level */}
                {product.category !== 'beans' && (
                  <div>
                    <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516] mb-4">
                      Sugar Level
                    </h4>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setSugarLevel(Math.max(0, sugarLevel - 1))}
                        className="w-10 h-10 bg-[#f5e6d3] hover:bg-[#e8d5c4] rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-5 h-5 text-[#6f4e37]" />
                      </button>
                      <div className="flex-1">
                        <div className="h-3 bg-[#f5e6d3] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#6f4e37] to-[#d4a574] transition-all duration-300"
                            style={{ width: `${(sugarLevel / 5) * 100}%` }}
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-[#6f4e37]">
                          <span>No Sugar</span>
                          <span className="font-medium">{sugarLevel}</span>
                          <span>Extra Sweet</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSugarLevel(Math.min(5, sugarLevel + 1))}
                        className="w-10 h-10 bg-[#f5e6d3] hover:bg-[#e8d5c4] rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-5 h-5 text-[#6f4e37]" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Extras */}
                {product.category !== 'beans' && (
                  <div>
                    <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516] mb-4">
                      Add Extras
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {extras.map((extra) => (
                        <button
                          key={extra.id}
                          onClick={() => toggleExtra(extra.id)}
                          className={`p-3 rounded-xl border-2 transition-all text-left ${
                            selectedExtras.includes(extra.id)
                              ? 'border-[#6f4e37] bg-[#6f4e37]/5'
                              : 'border-[#6f4e37]/20 hover:border-[#6f4e37]/40'
                          }`}
                        >
                          <div className="font-medium text-[#3d2516] text-sm">
                            {extra.name}
                          </div>
                          <div className="text-xs text-[#6f4e37]">
                            +${extra.price.toFixed(2)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div>
                  <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#3d2516] mb-4">
                    Quantity
                  </h4>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 bg-[#f5e6d3] hover:bg-[#e8d5c4] rounded-full flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-6 h-6 text-[#6f4e37]" />
                    </button>
                    <div className="text-3xl font-bold text-[#6f4e37] min-w-[60px] text-center">
                      {quantity}
                    </div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 bg-[#f5e6d3] hover:bg-[#e8d5c4] rounded-full flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-6 h-6 text-[#6f4e37]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t border-[#6f4e37]/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-[#6f4e37]/70">Total Price</div>
                    <div className="font-['Playfair_Display'] text-4xl font-bold text-[#6f4e37]">
                      ${calculateTotalPrice().toFixed(2)}
                    </div>
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="bg-[#6f4e37] hover:bg-[#3d2516] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="text-sm text-center text-[#6f4e37]/70">
                  Estimated {deliveryMethod === 'delivery' ? 'delivery' : 'pickup'} time: {deliveryMethod === 'delivery' ? '30-45' : '15-20'} minutes
                </div>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
