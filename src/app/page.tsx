import Link from 'next/link';
import { ChevronRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const features = [
    'Secure Authentication',
    'User-friendly Dashboard',
    'Personalized Experience',
    'Real-time Updates'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Your 
              <span className="block text-indigo-600">Next.js Authentication App</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
              A robust, secure, and scalable authentication solution 
              built with Next.js, TypeScript, and modern web technologies.
            </p>

            {/* Features List */}
            <div className="mt-8 max-w-md mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center mb-3">
                  <CheckCircle className="text-indigo-500 mr-3" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-10 flex justify-center lg:justify-start gap-4">
              <Link 
                href="/signup" 
                className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
              >
                Get Started
                <ChevronRight className="ml-2" size={20} />
              </Link>
              
              <Link 
                href="/login" 
                className="flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="hidden lg:block mt-12 lg:mt-0">
            <div className="bg-indigo-100 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-8 bg-white bg-opacity-90">
                <div className="h-64 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg opacity-80"></div>
                <div className="mt-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                © {new Date().getFullYear()} Authentication App
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Built with Next.js, TypeScript, and ❤️
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 flex justify-center md:justify-end space-x-6">
              <Link 
                href="/privacy" 
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}