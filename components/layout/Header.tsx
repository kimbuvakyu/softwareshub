import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SoftwaresHub
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-blue-600">
              Products
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-blue-600">
              Categories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-blue-600">
              Login
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}