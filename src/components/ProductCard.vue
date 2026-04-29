<script setup lang="ts">
import type { Product } from "../types/product";
import { useRouter } from "vue-router";
import { useCartStore } from "../store/cart";

const props = defineProps<{ product: Product }>();
const router = useRouter();
const cartStore = useCartStore();

const goToDetail = () => {
  router.push(`/product/${props.product.id}`);
};

const handleAddToCart = (e: Event) => {
  e.stopPropagation();
  cartStore.addToCart(props.product);
};
</script>

<template>
  <div class="border p-4 rounded-xl shadow hover:shadow-lg transition duration-300" @click="goToDetail" style="cursor: pointer;">

    <img 
  :src="product.thumbnail || 'https://via.placeholder.com/150'" 
  class="w-full h-40 object-contain bg-gray-100 rounded-md"
/>

    <h2 class="font-semibold text-sm mt-2 truncate">
      {{ product.title }}
    </h2>

    <p class="text-blue-600 font-bold text-sm">
      ${{ product.price }}
    </p>
    <div class="mt-3 flex items-center justify-between">
      <button 
        @click.stop="handleAddToCart"
        class="bg-[#007bff] text-white text-[12px] px-3 py-1.5 rounded font-medium hover:bg-blue-700 transition active:scale-95"
      >
        Add to Cart
      </button>
      <span class="text-blue-500 text-[11px] hover:underline">View Details</span>
    </div>

  </div>
</template>