<script setup>
import { useCartStore } from "../store/cart";
const cart = useCartStore();
</script>

<template>
  <div class="flex justify-between p-4 bg-gray-200">
    <router-link to="/">Home</router-link>
    <router-link to="/cart">
      Cart ({{ cart.items.length }})
    </router-link>
  </div>
</template>