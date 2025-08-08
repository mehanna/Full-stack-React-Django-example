"use client";

interface Product {
  id: number;
  name: string;
  description: string;
  cost: number;
}

interface ProductTableProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
}

export default function ProductTable({ products, onAddToCart }: ProductTableProps) {
  return (
    <div className="flex justify-center px-8 pb-8 bg-white">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 text-gray-600 font-medium">Product Name</th>
              <th className="text-left py-4 px-4 text-gray-600 font-medium">Description</th>
              <th className="text-left py-4 px-4 text-gray-600 font-medium">Cost</th>
              <th className="text-left py-4 px-4 text-gray-600 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className={index < products.length - 1 ? "border-b border-gray-100" : ""}>
                <td className="py-4 px-4 text-gray-800">{product.name}</td>
                <td className="py-4 px-4 text-gray-600">{product.description}</td>
                <td className="py-4 px-4 text-gray-800">${product.cost}</td>
                <td className="py-4 px-4">
                  <button 
                    onClick={() => onAddToCart(product.id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium"
                  >
                    Add to cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}