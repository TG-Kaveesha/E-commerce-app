<script setup lang="ts">
import { useCartStore } from "../store/cart";
const cart = useCartStore();
</script>

<template>
  <div class="flex justify-between items-center">
    <router-link to="/">Home</router-link>
    <router-link to="/cart">
      Cart ({{ cart.items.length }})
    </router-link>
  </div>
</template>