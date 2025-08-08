"use client";

import { useState, useEffect } from "react";
import TopPanel from "../components/TopPanel";
import Navigation from "../components/Navigation";
import ProductTable from "../components/ProductTable";
import { getProducts } from "@/app/actions/getProducts";

// Define the Product interface
interface Product{
  id: number;
  name: string;
  description: string;
  cost: number;
}

export default function Home() {
  // State to manage cart count, products, selected product list, and loading state
  const [cartCount, setCartCount] = useState(0);
  // State to hold the list of products fetched from the API
  const [products, setProducts] = useState<Product[]>([]);
  // State to hold the list of selected products added to the cart
  const [selectedProductList, setSelectedProductList] = useState<Product[]>([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);

  // Function to handle adding a product to the cart
  const handleAddToCart = (productId: number) => {
    console.log(`Adding product ${productId} to cart`);
    // Copy the selected product to to the selectedProductList
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      setSelectedProductList(prevList => [...prevList, selectedProduct]);
      // set the cart count based on the selected product based on the selectedProductList count
      setCartCount(selectedProductList.length);
    }

  }

    // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        console.log('Fetched products:', fetchedProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
      }
    };

    fetchProducts();
  }, []);


  /* dummy data for products
  const products: Product[] = [
    { id: 1, name: "Product 1", description: "This is the first product", cost: 9.99 },
    { id: 2, name: "Product 2", description: "This is the second product", cost: 19.99 },
    { id: 3, name: "Product 3", description: "This is the third product", cost: 29.99 },
  ];
  */

  return (
    <>
      <TopPanel />
      <Navigation cartCount={cartCount} />

      {/* Home Title */}
      <div className="flex justify-center py-8 bg-white">
        <h1 className="text-4xl font-bold text-gray-800">Home</h1>
      </div>

      <ProductTable products={products} onAddToCart={handleAddToCart} />
    </>
  );
}