import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  getProducts,
  getProductsByCategory,
  Product,
} from "../services/productService";
import { useAuth } from "../context/AuthContext";
import { LoginModal } from "./LoginModal";
import { addToCart } from "../services/cartService";

interface StorePage1Props {
  onCartUpdate: () => void;
}

export const StorePage1 = ({ onCartUpdate }: StorePage1Props): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("Clothing");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { token } = useAuth();

  const categories = ["Clothing", "Accessories", "Supplements"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductsByCategory(selectedCategory);
        setProducts(data || []);
        setError(null);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleLoginSuccess = () => {
    onCartUpdate(); // Update cart after successful login
  };

  const handleQuickBuy = async (productId: string) => {
    if (!token) {
      // Add to local storage for logged-out users
      const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingItem = cartItems.find(
        (item: any) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ productId, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cartItems));
      onCartUpdate();
      alert("Product added to cart!");
      return;
    }

    try {
      await addToCart(token, productId, 1);
      alert("Product added to cart successfully!");
      onCartUpdate();
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex w-full gap-8">
        <div className="w-64 flex-shrink-0">
          <h2 className="font-semibold text-white text-2xl leading-8 [font-family:'Roboto',Helvetica] mb-4">
            Categories
          </h2>
          <nav className="w-full">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start rounded h-10 px-0 ${
                      category === selectedCategory
                        ? "text-[#ff4b2b] font-bold"
                        : "text-[#ffffffb2] font-normal"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span className="ml-[31px] [font-family:'Roboto',Helvetica] text-base leading-6">
                      {category}
                    </span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-white text-2xl leading-8 [font-family:'Roboto',Helvetica] mb-4">
            Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <Card
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0"
              >
                <CardContent className="p-4 space-y-3">
                  <div className="w-full h-40 bg-gray-700 animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse" />
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="w-full h-10 bg-gray-700 rounded animate-pulse" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <div className="flex w-full gap-8">
        {/* Categories Section - Fixed width sidebar */}
        <div className="w-64 flex-shrink-0">
          <h2 className="font-semibold text-white text-2xl leading-8 [font-family:'Roboto',Helvetica] mb-4">
            Categories
          </h2>

          <nav className="w-full">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start rounded h-10 px-0 ${
                      category === selectedCategory
                        ? "text-[#ff4b2b] font-bold"
                        : "text-[#ffffffb2] font-normal"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span className="ml-[31px] [font-family:'Roboto',Helvetica] text-base leading-6">
                      {category}
                    </span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Products Section - Flexible width main content */}
        <div className="flex-1">
          <h2 className="font-semibold text-white text-2xl leading-8 [font-family:'Roboto',Helvetica] mb-4">
            Products
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-800 rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0">
                    <CardContent className="p-4 space-y-3">
                      <img
                        className="w-full h-40 object-cover"
                        alt={`${product.name} image`}
                        src={product.image || "/placeholder-image.jpg"}
                      />
                      <div>
                        <h3 className="font-bold text-white text-lg leading-7 [font-family:'Roboto',Helvetica]">
                          {product.name}
                        </h3>
                        <p className="font-normal text-white text-base leading-6 [font-family:'Roboto',Helvetica]">
                          ${product.price.toFixed(2)}
                        </p>
                        {/* {product.stock <= 0 && (
                          <p className="text-red-500 text-sm">Out of Stock</p>
                        )} */}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-normal text-base [font-family:'Roboto',Helvetica]"
                        onClick={() => handleQuickBuy(product._id)}
                        disabled={product.stock <= 0}
                      >
                        {product.stock <= 0 ? "Out of Stock" : "Quick Buy"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
