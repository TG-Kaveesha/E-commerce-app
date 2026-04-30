<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Product } from "../types/product";
import { useCartStore } from '../store/cart';

const route = useRoute();
const product = ref<Product | null>(null);
const cartStore = useCartStore();
const loading = ref(true);

onMounted(async () => {
  try{
  const res = await fetch(`https://dummyjson.com/products/${route.params.id}`);
  product.value = await res.json();
}
  finally {
    loading.value = false;
  }
});

</script>

<template>
  <div v-if="loading" class="p-10 text-center dark:text-white">Loading...</div>
  
  <div v-else-if="product" class="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-10">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Product Image -->
      <div class="flex-1 bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
        <img :src="product.thumbnail" :alt="product.title" class="w-full h-auto object-contain mx-auto" />
      </div>

      <div class="flex-1">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {{ product.title }}
        </h1>
        
        <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {{ product.description }}
        </p>

        <div class="mb-6">
          <span class="text-2xl font-bold text-green-600 dark:text-green-400">
            ${{ product.price }}
          </span>
          <span class="ml-2 text-sm text-gray-500 line-through">
            ${{ (product.price * 1.2).toFixed(2) }}
          </span>
        </div>

        <div class="flex gap-4">
          <button 
            @click="cartStore.addToCart(product)"
            class="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition active:scale-95"
          >
            Add to Cart
          </button>
          
          <router-link 
            to="/" 
            class="border border-gray-300 dark:border-gray-600 dark:text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            Back
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>