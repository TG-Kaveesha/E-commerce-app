import { defineStore } from "pinia";
import type { Product } from "../types/product";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Product[]
  }),

  actions: {
    addToCart(product: Product) {
      this.items.push(product);
      localStorage.setItem("cart", JSON.stringify(this.items));
    },

    loadCart() {
      const data = localStorage.getItem("cart");
      if (data) this.items = JSON.parse(data);
    }
  }
});