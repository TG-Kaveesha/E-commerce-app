import { defineStore } from "pinia";
import type { Product } from "../types/product";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Product[],
    searchQuery: ""
  }),

  actions: {
    addToCart(product: Product) {
      this.items.push(product);
      this.saveToLocalStorage();
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveToLocalStorage();
      
    },

    loadCart() {
      const data = localStorage.getItem("cart");
      if (data) this.items = JSON.parse(data);
    },
    saveToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    }
  }
});