<script setup lang="ts">
import type { Product } from "../types/product";
import { useRouter } from "vue-router";

const props = defineProps<{ product: Product }>();
const router = useRouter();

const goToDetail = () => {
  router.push(`/product/${props.product.id}`);
};
</script>

<template>
  <div class="border p-4 rounded-xl shadow hover:shadow-lg transition duration-300" @click="goToDetail" style="cursor: pointer;">

    <img 
  :src="product.thumbnail" 
  class="w-full h-40 object-contain bg-gray-100"
/>

    <h2 class="font-semibold text-sm mt-2 truncate">
      {{ product.title }}
    </h2>

    <p class="text-blue-600 font-bold text-sm">
      ${{ product.price }}
    </p>

  </div>
</template>