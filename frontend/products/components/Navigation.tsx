interface NavigationProps {
  cartCount: number;
}

export default function Navigation({ cartCount }: NavigationProps) {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="flex items-center justify-center space-x-8">
        <button className="text-blue-500 hover:text-blue-700 font-medium text-lg">
          Home
        </button>
        <button className="text-blue-500 hover:text-blue-700 font-medium text-lg flex items-center space-x-2">
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}