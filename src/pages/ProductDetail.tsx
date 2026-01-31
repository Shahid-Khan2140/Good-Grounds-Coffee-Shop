import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ShoppingCart, Check, Plus, Minus, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner@2.0.3';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedMilk, setSelectedMilk] = useState('Whole Milk');
  const [selectedSugar, setSelectedSugar] = useState('Regular');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-[var(--color-foam)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-4xl">😕</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-[var(--color-espresso)] mb-4">
            Product not found
          </h2>
          <p className="text-[var(--color-coffee)] mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/menu" className="btn btn-primary">
            Back to Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  const sizes = ['Small', 'Medium', 'Large'];
  const milkOptions = ['Whole Milk', 'Oat Milk', 'Almond Milk', 'Soy Milk', 'Skim Milk'];
  const sugarOptions = ['No Sugar', 'Light', 'Regular', 'Extra'];
  const extras = ['Extra Shot', 'Whipped Cream', 'Caramel Drizzle', 'Vanilla Syrup', 'Cinnamon'];

  const sizeMultiplier = selectedSize === 'Small' ? 0.9 : selectedSize === 'Large' ? 1.2 : 1;
  const extrasPrice = selectedExtras.length * 0.5;
  const totalPrice = (product.price * sizeMultiplier + extrasPrice) * quantity;

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate a brief loading state
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addToCart({
      id: product.id + '-' + Date.now(),
      name: product.name,
      price: product.price * sizeMultiplier + extrasPrice,
      quantity,
      size: selectedSize,
      milk: selectedMilk,
      sugar: selectedSugar,
      extras: selectedExtras,
      image: product.image,
    });
    
    toast.success('Added to cart!', {
      description: `${quantity}x ${product.name} (${selectedSize})`,
    });
    
    setIsAdding(false);
  };

  const toggleExtra = (extra: string) => {
    setSelectedExtras(prev =>
      prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[var(--color-foam)] to-white pt-32 pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-[var(--color-coffee)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Menu</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Product Content */}
      <section className="pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[var(--color-cream)] sticky top-32">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                    className="absolute top-6 right-6 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-accent)] text-white px-4 py-2 rounded-full font-bold shadow-xl flex items-center gap-2"
                  >
                    <Star className="w-4 h-4" fill="currentColor" />
                    Popular Choice
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Product Details & Customization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-sm text-[var(--color-accent)] font-bold uppercase tracking-wider mb-3"
                >
                  {product.category}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-4"
                >
                  {product.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-[var(--color-coffee)] leading-relaxed"
                >
                  {product.description}
                </motion.p>
              </div>

              {product.customizable && (
                <div className="space-y-6">
                  {/* Size Selection */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-lg font-bold text-[var(--color-espresso)] mb-3">
                      Size
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {sizes.map((size, index) => (
                        <motion.button
                          key={size}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedSize(size)}
                          className={`py-4 rounded-xl font-semibold transition-all ${
                            selectedSize === size
                              ? 'bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] text-white shadow-lg scale-105'
                              : 'bg-white text-[var(--color-coffee)] border-2 border-[var(--color-cream)] hover:border-[var(--color-accent)]'
                          }`}
                        >
                          {size}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Milk Selection */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-lg font-bold text-[var(--color-espresso)] mb-3">
                      Milk Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {milkOptions.map((milk, index) => (
                        <motion.button
                          key={milk}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedMilk(milk)}
                          className={`py-3 px-2 rounded-xl font-medium transition-all text-sm ${
                            selectedMilk === milk
                              ? 'bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] text-white shadow-lg'
                              : 'bg-white text-[var(--color-coffee)] border-2 border-[var(--color-cream)] hover:border-[var(--color-accent)]'
                          }`}
                        >
                          {milk}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Sugar Level */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-lg font-bold text-[var(--color-espresso)] mb-3">
                      Sugar Level
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {sugarOptions.map((sugar, index) => (
                        <motion.button
                          key={sugar}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedSugar(sugar)}
                          className={`py-3 rounded-xl font-medium transition-all ${
                            selectedSugar === sugar
                              ? 'bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] text-white shadow-lg'
                              : 'bg-white text-[var(--color-coffee)] border-2 border-[var(--color-cream)] hover:border-[var(--color-accent)]'
                          }`}
                        >
                          {sugar}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Extras */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-lg font-bold text-[var(--color-espresso)] mb-3">
                      Extras <span className="text-sm font-normal text-[var(--color-coffee)]">(+$0.50 each)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {extras.map((extra, index) => (
                        <motion.button
                          key={extra}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleExtra(extra)}
                          className={`py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                            selectedExtras.includes(extra)
                              ? 'bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] text-white shadow-lg'
                              : 'bg-white text-[var(--color-coffee)] border-2 border-[var(--color-cream)] hover:border-[var(--color-accent)]'
                          }`}
                        >
                          <AnimatePresence>
                            {selectedExtras.includes(extra) && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                              >
                                <Check className="w-4 h-4" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <span>{extra}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="pt-6 border-t-2 border-[var(--color-cream)] space-y-6"
              >
                <div className="flex items-center justify-between">
                  <label className="text-lg font-bold text-[var(--color-espresso)]">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4 bg-[var(--color-foam)] rounded-full px-5 py-3 shadow-md">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-[var(--color-cream)] transition-colors shadow-sm"
                    >
                      <Minus className="w-4 h-4 text-[var(--color-accent)]" />
                    </motion.button>
                    <span className="text-xl font-bold w-8 text-center text-[var(--color-espresso)]">
                      {quantity}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-[var(--color-cream)] transition-colors shadow-sm"
                    >
                      <Plus className="w-4 h-4 text-[var(--color-accent)]" />
                    </motion.button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[var(--color-foam)] to-white rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-[var(--color-espresso)]">
                      Total Price
                    </span>
                    <motion.span
                      key={totalPrice}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] bg-clip-text text-transparent"
                    >
                      ${totalPrice.toFixed(2)}
                    </motion.span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className="w-full btn btn-primary btn-large disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAdding ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Adding...</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
