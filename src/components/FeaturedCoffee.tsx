import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface CoffeeProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: 'hot' | 'cold' | 'beans' | 'special';
  bestseller?: boolean;
}

interface FeaturedCoffeeProps {
  onAddToCart: (product: CoffeeProduct) => void;
  onProductClick: (product: CoffeeProduct) => void;
}

const products: CoffeeProduct[] = [
  {
    id: '1',
    name: 'Espresso Supreme',
    description: 'Rich, bold espresso with chocolate notes',
    price: 4.99,
    rating: 4.9,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1764361276489-79b17d9a8782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGVzcHJlc3NvJTIwcHJlbWl1bSUyMGRhcmt8ZW58MXx8fHwxNzY5ODQzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'hot',
    bestseller: true,
  },
  {
    id: '2',
    name: 'Caramel Latte',
    description: 'Smooth latte with caramel drizzle',
    price: 5.99,
    rating: 4.8,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1630439922491-3d7c7ebc2c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnQlMjBiYXJpc3RhfGVufDF8fHx8MTc2OTg0MzU4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'hot',
  },
  {
    id: '3',
    name: 'Iced Coffee',
    description: 'Refreshing cold brew with ice',
    price: 4.49,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1743584637392-75faeaae66c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZCUyMGJyZXclMjBnbGFzc3xlbnwxfHx8fDE3Njk3OTc1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'cold',
    bestseller: true,
  },
  {
    id: '4',
    name: 'Mocha Delight',
    description: 'Chocolate and espresso perfection',
    price: 6.49,
    rating: 4.9,
    reviews: 421,
    image: 'https://images.unsplash.com/photo-1634936536013-705bd5e3e6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZSUyMGRyaW5rfGVufDF8fHx8MTc2OTg0MzU4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'special',
  },
  {
    id: '5',
    name: 'Premium Beans',
    description: 'Arabica beans from Colombia',
    price: 18.99,
    rating: 5.0,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1764361276489-79b17d9a8782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGVzcHJlc3NvJTIwcHJlbWl1bSUyMGRhcmt8ZW58MXx8fHwxNzY5ODQzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'beans',
    bestseller: true,
  },
  {
    id: '6',
    name: 'Vanilla Cappuccino',
    description: 'Classic cappuccino with vanilla',
    price: 5.49,
    rating: 4.6,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1630439922491-3d7c7ebc2c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnQlMjBiYXJpc3RhfGVufDF8fHx8MTc2OTg0MzU4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'hot',
  },
];

export function FeaturedCoffee({ onAddToCart, onProductClick }: FeaturedCoffeeProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'hot', name: 'Hot Coffee' },
    { id: 'cold', name: 'Cold Brew' },
    { id: 'beans', name: 'Coffee Beans' },
    { id: 'special', name: 'Special' },
  ];

  const filteredProducts = selectedFilter === 'all'
    ? products
    : products.filter((p) => p.category === selectedFilter);

  const toggleLike = (productId: string) => {
    const newLiked = new Set(likedProducts);
    if (newLiked.has(productId)) {
      newLiked.delete(productId);
    } else {
      newLiked.add(productId);
    }
    setLikedProducts(newLiked);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#6f4e37]/10 text-[#6f4e37] rounded-full text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#3d2516] mb-4">
            Featured Coffee
          </h2>
          <p className="text-lg text-[#6f4e37] max-w-2xl mx-auto">
            Discover our handpicked selection of premium coffee drinks and beans
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-[#6f4e37] text-white shadow-lg scale-105'
                  : 'bg-white text-[#6f4e37] hover:bg-[#f5e6d3] border border-[#6f4e37]/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-3xl">
                <div className="relative overflow-hidden">
                  {/* Image */}
                  <div
                    onClick={() => onProductClick(product)}
                    className="cursor-pointer relative aspect-[4/3] overflow-hidden"
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Badges */}
                  {product.bestseller && (
                    <div className="absolute top-4 left-4 bg-[#6f4e37] text-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Bestseller
                    </div>
                  )}

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        likedProducts.has(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-[#6f4e37]'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    onClick={() => onProductClick(product)}
                    className="cursor-pointer mb-3"
                  >
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#3d2516] mb-2 group-hover:text-[#6f4e37] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#6f4e37]/70">{product.description}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-[#d4a574] text-[#d4a574]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[#6f4e37]">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="font-['Playfair_Display'] text-3xl font-bold text-[#6f4e37]">
                      ${product.price}
                    </div>
                    <Button
                      onClick={() => onAddToCart(product)}
                      className="bg-[#6f4e37] hover:bg-[#3d2516] text-white rounded-full px-6 py-2 flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
