import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="card h-full overflow-hidden"
      >
        {/* Image Container - Consistent Aspect Ratio */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-[var(--color-cream)]">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Popular Badge - Top Right */}
          {product.featured && (
            <motion.div
              initial={{ scale: 0, rotate: -12 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="absolute top-4 right-4 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-accent)] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
            >
              <Star className="w-3.5 h-3.5" fill="currentColor" />
              Popular
            </motion.div>
          )}

          {/* Category Badge - Top Left */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[var(--color-coffee)] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {product.category}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)] mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-1">
            {product.name}
          </h3>
          
          <p className="text-[var(--color-coffee)] text-sm mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-cream)]">
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm group-hover:gap-3 transition-all">
              Order Now
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
