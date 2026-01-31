import { motion } from 'motion/react';

export function ProductCardSkeleton() {
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-[var(--color-cream)] animate-pulse" />
      <div className="space-y-3">
        <div className="h-4 w-20 bg-[var(--color-cream)] rounded animate-pulse" />
        <div className="h-6 w-3/4 bg-[var(--color-cream)] rounded animate-pulse" />
        <div className="h-4 w-full bg-[var(--color-cream)] rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-[var(--color-cream)] rounded animate-pulse" />
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-cream)]">
          <div className="h-8 w-24 bg-[var(--color-cream)] rounded animate-pulse" />
          <div className="h-6 w-28 bg-[var(--color-cream)] rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-foam)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 border-4 border-[var(--color-cream)] border-t-[var(--color-accent)] rounded-full mx-auto mb-6"
        />
        <p className="text-[var(--color-coffee)] font-medium">Loading...</p>
      </motion.div>
    </div>
  );
}

export function ButtonLoader() {
  return (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
  );
}
