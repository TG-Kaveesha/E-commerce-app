<script setup lang="ts">
import { useCartStore } from "../store/cart";

const cart = useCartStore();
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Your Cart</h1>

    <div v-if="cart.items.length === 0">
      <p>Your cart is empty</p>
    </div>

    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="border p-4 mb-2"
      >
        <h2 class="font-bold">{{ item.title }}</h2>
        <p>${{ item.price }}</p>
      </div>

      <h2 class="text-xl font-bold mt-4">
        Total: ${{
          cart.items.reduce((sum, item) => sum + item.price, 0)
        }}
      </h2>
    </div>
  </div>
</template>