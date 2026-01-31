import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Eye, EyeOff, Coffee } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login/signup
    setTimeout(() => {
      onNavigate('home');
    }, 500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5e6d3] to-[#e8d5c4] pt-20 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6f4e37] to-[#a67c52] rounded-full flex items-center justify-center">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <span className="font-['Playfair_Display'] text-4xl font-bold text-[#3d2516]">
                Bean Scene
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-5xl font-bold text-[#3d2516] mb-6">
              {isLogin ? 'Welcome Back!' : 'Join Our Community'}
            </h1>
            <p className="text-lg text-[#6f4e37] mb-8">
              {isLogin
                ? 'Sign in to access your favorite coffee orders and exclusive rewards.'
                : 'Create an account to start your premium coffee journey with us.'}
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                '☕ Exclusive member rewards',
                '🎁 Birthday specials',
                '🚚 Free delivery on first order',
                '⭐ Early access to new blends',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-[#6f4e37]"
                >
                  <div className="w-2 h-2 bg-[#6f4e37] rounded-full" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-8 md:p-10 bg-white rounded-3xl border-none shadow-2xl">
            <div className="mb-8">
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#3d2516] mb-2">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <p className="text-[#6f4e37]">
                {isLogin
                  ? 'Enter your credentials to access your account'
                  : 'Fill in your details to get started'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <Label htmlFor="name" className="mb-2 block">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6f4e37]/50" />
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="pl-10 h-12 rounded-xl border-[#6f4e37]/20 focus:border-[#6f4e37]"
                      placeholder="John Doe"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6f4e37]/50" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 h-12 rounded-xl border-[#6f4e37]/20 focus:border-[#6f4e37]"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="mb-2 block">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6f4e37]/50" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 pr-10 h-12 rounded-xl border-[#6f4e37]/20 focus:border-[#6f4e37]"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6f4e37]/50 hover:text-[#6f4e37]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-[#6f4e37]/20 text-[#6f4e37] focus:ring-[#6f4e37]"
                    />
                    <span className="text-sm text-[#6f4e37]">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-[#6f4e37] hover:text-[#3d2516]">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#6f4e37] hover:bg-[#3d2516] text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#6f4e37]/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#6f4e37]">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                className="border-2 border-[#6f4e37]/20 hover:bg-[#f5e6d3] rounded-xl"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-2 border-[#6f4e37]/20 hover:bg-[#f5e6d3] rounded-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>

            {/* Toggle Login/Signup */}
            <div className="mt-8 text-center">
              <p className="text-[#6f4e37]">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#6f4e37] font-medium hover:text-[#3d2516] underline"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {/* Guest Checkout */}
            <div className="mt-6">
              <Button
                type="button"
                onClick={() => onNavigate('home')}
                variant="ghost"
                className="w-full text-[#6f4e37] hover:bg-[#f5e6d3]"
              >
                Continue as Guest
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
