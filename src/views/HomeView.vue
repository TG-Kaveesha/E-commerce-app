<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard.vue";
import { useCartStore } from "../store/cart";


const cartStore = useCartStore();
const products = ref<Product[]>([]);

onMounted(async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();
  products.value = data.products;
});

const filteredProducts = computed(() =>{
if (!cartStore.searchQuery) {
    return products.value;
  }
  const query = cartStore.searchQuery.toLowerCase();
  return products.value.filter(p =>
  
    p.title.toLowerCase().includes(query)
  );
});
</script>

<template>
  <div class="p-4">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

  </div>
</template>