<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard.vue";

const products = ref<Product[]>([]);
const search = ref("");

onMounted(async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();
  products.value = data.products;
});

const filteredProducts = computed(() =>
  products.value.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<template>
  <div class="p-4">

    <input 
      v-model="search" 
      placeholder="Search..." 
      class="border p-2 mb-4 w-full" 
    />

    <!-- 👇 THIS IS THE GRID -->
    <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

  </div>
</template>