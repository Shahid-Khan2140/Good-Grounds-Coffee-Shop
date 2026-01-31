import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Receipt, MapPin } from 'lucide-react';

export default function OrderConfirmation() {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-[var(--color-espresso)]">No order found</h2>
          <Link to="/menu" className="text-[var(--color-accent)] hover:underline mt-4 inline-block">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[var(--color-foam)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block"
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-5xl font-serif text-[var(--color-espresso)] mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-[var(--color-coffee)] mb-2">
            Thank you for your order, {order.customerInfo.firstName}!
          </p>
          <div className="inline-block bg-[var(--color-cream)] px-6 py-3 rounded-full">
            <span className="text-sm text-[var(--color-coffee)]">Order Number: </span>
            <span className="font-mono font-bold text-[var(--color-accent)]">
              #{order.orderNumber}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Receipt className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-2xl font-serif text-[var(--color-espresso)]">Order Details</h2>
          </div>

          <div className="space-y-4 mb-6 pb-6 border-b border-[var(--color-cream)]">
            {order.items.map((item: any) => (
              <div key={item.id} className="flex justify-between items-start">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-[var(--color-espresso)]">
                      {item.quantity}x {item.name}
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
                </div>
                <span className="font-semibold text-[var(--color-accent)]">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-xl font-semibold text-[var(--color-espresso)]">
            <span>Total Paid</span>
            <span className="text-2xl text-[var(--color-accent)]">
              ${order.total.toFixed(2)}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-2xl font-serif text-[var(--color-espresso)]">
              {order.orderType === 'pickup' ? 'Pickup' : 'Delivery'} Information
            </h2>
          </div>

          {order.orderType === 'pickup' ? (
            <div className="bg-[var(--color-foam)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-espresso)] mb-3">
                Pickup Location
              </h3>
              <p className="text-[var(--color-coffee)]">
                Good Grounds Coffee & Bistro<br />
                2402 Commerce Rd<br />
                Goodland, KS 67735, USA
              </p>
              <p className="text-[var(--color-coffee)] mt-4">
                <strong>Estimated Ready Time:</strong> 15-20 minutes
              </p>
              <p className="text-sm text-[var(--color-coffee)] mt-2">
                We'll send you a notification when your order is ready!
              </p>
            </div>
          ) : (
            <div className="bg-[var(--color-foam)] rounded-xl p-6">
              <h3 className="font-semibold text-[var(--color-espresso)] mb-3">
                Delivery Address
              </h3>
              <p className="text-[var(--color-coffee)]">
                {order.customerInfo.firstName} {order.customerInfo.lastName}<br />
                {order.customerInfo.address}<br />
                {order.customerInfo.city}, {order.customerInfo.state} {order.customerInfo.zip}
              </p>
              <p className="text-[var(--color-coffee)] mt-4">
                <strong>Estimated Delivery:</strong> 30-45 minutes
              </p>
              <p className="text-sm text-[var(--color-coffee)] mt-2">
                Track your order status via email or phone notifications
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="btn btn-primary btn-large"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/menu"
            className="btn btn-outline btn-large"
          >
            <span>Order Again</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-[var(--color-coffee)]"
        >
          <p className="text-sm">
            Questions about your order? Contact us at{' '}
            <a href="tel:6208907696" className="text-[var(--color-accent)] hover:underline">
              (620) 890-7696
            </a>{' '}
            or{' '}
            <a href="mailto:goodgroundscafe@gmail.com" className="text-[var(--color-accent)] hover:underline">
              goodgroundscafe@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}