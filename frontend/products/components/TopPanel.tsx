export default function TopPanel() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">H</span>
            <div className="w-4 h-4 bg-green-500 ml-1"></div>
          </div>
          <span className="text-green-400 font-semibold text-xl ml-2">Market</span>
        </div>
      </div>
    </header>
  );
}