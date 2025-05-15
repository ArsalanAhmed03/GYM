import axios from 'axios';
import { Product } from './productService';

const API_URL = 'https://gym-backend-ujzl.onrender.com/api';

export interface CartItem {
  productId: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export const getCart = async (token: string): Promise<Cart> => {
  try {
    const response = await axios.get(`${API_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const addToCart = async (token: string, productId: string, quantity: number): Promise<Cart> => {
  try {
    const response = await axios.post(
      `${API_URL}/cart/add`,
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const removeFromCart = async (token: string, productId: string): Promise<Cart> => {
  try {
    const response = await axios.post(
      `${API_URL}/cart/remove`,
      { productId, removeCompletely: true },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export const checkout = async (token: string): Promise<void> => {
  try {
    await axios.post(
      `${API_URL}/purchase/checkout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error('Error during checkout:', error);
    throw error;
  }
};

export const updateQuantity = async (token: string, productId: string, quantity: number): Promise<Cart> => {
  try {
    const response = await axios.post(
      `${API_URL}/cart/update-quantity`,
      { productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating quantity:', error);
    throw error;
  }
}; 