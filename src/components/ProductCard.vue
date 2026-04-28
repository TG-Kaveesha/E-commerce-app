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
  <div class="border p-4 rounded shadow cursor-pointer" @click="goToDetail">
    <img :src="product.thumbnail" class="w-full h-40 object-cover" />
    <h2 class="font-bold">{{ product.title }}</h2>
    <p>${{ product.price }}</p>
  </div>
</template>