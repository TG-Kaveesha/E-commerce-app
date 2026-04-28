<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Product } from "../types/product";

const route = useRoute();
const product = ref<Product | null>(null);

    

onMounted(async () => {
  const res = await fetch(`https://dummyjson.com/products/${route.params.id}`);
  product.value = await res.json();
});

</script>

<template>
  <div v-if="product" class="p-4">
    <img :src="product.thumbnail" class="w-64" />
    <h1 class="text-2xl font-bold">{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p class="text-lg font-bold">${{ product.price }}</p>
  </div>
  
</template>