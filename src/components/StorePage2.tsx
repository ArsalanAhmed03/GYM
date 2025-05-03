import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useAuth } from "../context/AuthContext";
import {
  getCart,
  addToCart,
  removeFromCart,
  checkout,
  updateQuantity,
  CartItem,
} from "../services/cartService";
import { getProducts, Product } from "../services/productService";
import { LoginModal } from "./LoginModal";

export const StorePage2 = (): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { token } = useAuth();

  const fetchCart = async () => {
    if (!token) {
      // Get cart from local storage for logged-out users
      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
      // Fetch all products
      const products: Product[] = await getProducts();
      // Map local cart items to full product objects
      const mappedCart = localCart
        .map((item: any) => {
          const product = products.find((p) => p._id === item.productId);
          return product
            ? { productId: product, quantity: item.quantity }
            : null;
        })
        .filter(Boolean);
      setCartItems(mappedCart);
      setLoading(false);
      return;
    }

    try {
      const cart = await getCart(token);
      setCartItems(cart.items || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  const handleQuantityChange = async (
    productId: string,
    newQuantity: number
  ) => {
    if (!token) {
      // Update local storage for logged-out users
      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const itemIndex = localCart.findIndex(
        (item: any) => item.productId === productId
      );

      if (itemIndex !== -1) {
        localCart[itemIndex].quantity = newQuantity;
        localStorage.setItem("cart", JSON.stringify(localCart));
        setCartItems(localCart);
      }
      return;
    }

    try {
      const cart = await updateQuantity(token, productId, newQuantity);
      setCartItems(cart.items);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveItem = async (productId: string) => {
    if (!token) {
      // Remove from local storage for logged-out users
      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = localCart.filter(
        (item: any) => item.productId !== productId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      return;
    }

    try {
      const cart = await removeFromCart(token, productId);
      setCartItems(cart.items);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleCheckout = async () => {
    if (!token) {
      setShowLoginModal(true);
      return;
    }

    try {
      await checkout(token);
      await fetchCart();
      alert("Purchase completed successfully!");
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Failed to complete purchase. Please try again.");
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.productId?.price || 0;
      return total + price * item.quantity;
    }, 0);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="w-full">
          <h2 className="font-semibold text-white text-2xl leading-8">Cart</h2>
        </div>
        <Card className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0">
          <CardContent className="flex flex-col items-center gap-4 p-4">
            <p className="font-semibold text-white text-lg leading-7">
              Loading...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={fetchCart}
      />
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="w-full">
          <h2 className="font-semibold text-white text-2xl leading-8">Cart</h2>
        </div>

        <Card className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0">
          <CardContent className="flex flex-col items-start gap-4 p-4">
            {cartItems.length === 0 ? (
              <div className="flex items-center justify-center gap-2">
                <p className="font-semibold text-white text-lg leading-7 whitespace-nowrap">
                  Your Cart is Empty
                </p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.productId._id}
                    className="flex items-center justify-between w-full p-4 bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.productId.image || "/placeholder-image.jpg"}
                        alt={item.productId.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold text-white">
                          {item.productId.name}
                        </h3>
                        <p className="text-gray-300">
                          ${item.productId.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleQuantityChange(
                              item.productId._id,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <span className="text-white">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleQuantityChange(
                              item.productId._id,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemoveItem(item.productId._id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between w-full mt-4">
                  <h3 className="font-semibold text-white text-xl">
                    Total: ${calculateTotal().toFixed(2)}
                  </h3>
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
