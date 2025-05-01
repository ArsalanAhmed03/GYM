import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export const StorePage1 = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("Clothing");

  const productsByCategory = {
    Clothing: [
      { id: 1, name: "T-Shirt Pro", price: "$29.99", image: "/frame.svg" },
      { id: 2, name: "Training Shorts", price: "$24.99", image: "/frame.svg" },
      { id: 3, name: "Workout Tank", price: "$19.99", image: "/frame.svg" },
      { id: 4, name: "Compression Pants", price: "$34.99", image: "/frame.svg" },
      { id: 5, name: "Sports Bra", price: "$29.99", image: "/frame.svg" },
      { id: 6, name: "Training Jacket", price: "$49.99", image: "/frame.svg" },
    ],
    Accessories: [
      { id: 7, name: "Gym Bag", price: "$39.99", image: "/frame.svg" },
      { id: 8, name: "Lifting Gloves", price: "$19.99", image: "/frame.svg" },
      { id: 9, name: "Resistance Bands", price: "$14.99", image: "/frame.svg" },
      { id: 10, name: "Shaker Bottle", price: "$9.99", image: "/frame.svg" },
      { id: 11, name: "Lifting Belt", price: "$29.99", image: "/frame.svg" },
      { id: 12, name: "Gym Towel", price: "$12.99", image: "/frame.svg" },
    ],
    Supplements: [
      { id: 13, name: "Whey Protein", price: "$59.99", image: "/frame.svg" },
      { id: 14, name: "Pre-Workout", price: "$44.99", image: "/frame.svg" },
      { id: 15, name: "BCAA Complex", price: "$34.99", image: "/frame.svg" },
      { id: 16, name: "Creatine", price: "$29.99", image: "/frame.svg" },
      { id: 17, name: "Multivitamin", price: "$24.99", image: "/frame.svg" },
      { id: 18, name: "Mass Gainer", price: "$49.99", image: "/frame.svg" },
    ],
  };

  // Category data
  const categories = ["Clothing", "Accessories", "Supplements"];

  return (
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
            {productsByCategory[selectedCategory].map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-800 rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] border-0">
                  <CardContent className="p-4 space-y-3">
                    <img
                      className="w-full h-40 object-cover"
                      alt={`${product.name} image`}
                      src={product.image}
                    />
                    <div>
                      <h3 className="font-bold text-white text-lg leading-7 [font-family:'Roboto',Helvetica]">
                        {product.name}
                      </h3>
                      <p className="font-normal text-white text-base leading-6 [font-family:'Roboto',Helvetica]">
                        {product.price}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-normal text-base [font-family:'Roboto',Helvetica]">
                      Quick Buy
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};