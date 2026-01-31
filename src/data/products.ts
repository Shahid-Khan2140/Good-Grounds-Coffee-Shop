export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  customizable?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Espresso',
    description: 'Rich and bold espresso shot made from our signature blend',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1732556185440-f4a02ec42bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cCUyMGRhcmt8ZW58MXx8fHwxNzY5ODM4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hot Coffee',
    featured: true,
    customizable: true,
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Creamy cappuccino with perfect microfoam and latte art',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNhcHB1Y2Npbm98ZW58MXx8fHwxNzY5ODQ1NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hot Coffee',
    featured: true,
    customizable: true,
  },
  {
    id: '3',
    name: 'Cold Brew',
    description: 'Smooth and refreshing cold brew steeped for 24 hours',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1587663939437-9f9f1e8c9f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZCUyMGJyZXd8ZW58MXx8fHwxNzY5ODM5MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Iced Coffee',
    featured: true,
    customizable: true,
  },
  {
    id: '4',
    name: 'Mocha',
    description: 'Decadent blend of espresso, steamed milk, and chocolate',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1619286310410-a95de97b0aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNvZmZlZSUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3Njk3NjUzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Specialty',
    featured: true,
    customizable: true,
  },
  {
    id: '5',
    name: 'Americano',
    description: 'Classic Americano with hot water and espresso',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1663683462505-c12f9445d2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbm8lMjBibGFjayUyMGNvZmZlZXxlbnwxfHx8fDE3Njk3NTY5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hot Coffee',
    customizable: true,
  },
  {
    id: '6',
    name: 'Macchiato',
    description: 'Espresso marked with a dollop of foamed milk',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1630021439100-74a32ab42d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNjaGlhdG8lMjBjb2ZmZWUlMjBmb2FtfGVufDF8fHx8MTc2OTg0NTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hot Coffee',
    customizable: true,
  },
  {
    id: '7',
    name: 'House Blend Coffee',
    description: 'Our signature roasted coffee beans',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzY5NzIwNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Retail',
    featured: false,
  },
  {
    id: '8',
    name: 'Latte',
    description: 'Smooth espresso with steamed milk and light foam',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNhcHB1Y2Npbm98ZW58MXx8fHwxNzY5ODQ1NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hot Coffee',
    customizable: true,
  },
];

export const categories = ['All', 'Hot Coffee', 'Iced Coffee', 'Specialty', 'Retail'];
