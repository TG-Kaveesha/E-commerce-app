<script setup lang="ts">
import { useCartStore } from "../store/cart";

const cart = useCartStore();
const formatPrice = (price: number) => price.toFixed(2);
</script>

<template>
  <div class="p-4 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Your Cart</h1>

    <div v-if="cart.items.length === 0" class="text-center py-10">
    <p class="text-gray-500">Your cart is empty</p>
      <router-link to="/" class="text-blue-600 hover:underline">Go back to shopping</router-link>
    </div>

    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="border p-4 mb-2 flex justify-between items-center bg-white rounded shadow-sm"
      >
      <div>
        <h2 class="font-bold">{{ item.title }}</h2>
        <p class="text-blue-600 font-semibold">${{ item.price }}</p>
      </div>

      <button 
          @click="cart.removeFromCart(item.id)"
          class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition active:scale-95"
        >
          Remove
        </button>
        </div>

      <div class="mt-6 p-4 border-t flex justify-between items-center">
        <h2 class="text-xl font-bold">
          Total: ${{ 
            formatPrice(cart.items.reduce((sum, item) => sum + item.price, 0)) 
          }}
        </h2>
        <button class="bg-green-600 text-white px-6 py-2 rounded font-bold hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>