<template>
  <div class="min-h-screen bg-[#f8f9fa]">
    <nav class="bg-[#007bff] text-white px-6 py-2 flex justify-between items-center shadow-sm">
      <div class="text-lg font-semibold tracking-tight">E-Commerce-App</div>
      
      <div class="flex items-center gap-5 text-[14px]">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/contact" class="hover:underline">Contact</router-link>
        <router-link to="/help" class="hover:underline">Help</router-link>
        <router-link to="/login" class="hover:underline">Login</router-link>
        
        <button @click="signIn" class="bg-white text-gray-800 px-3 py-1 rounded-[4px] text-xs font-medium shadow-sm hover:bg-gray-100">
          Sign Up
        </button>

        <router-link to="/cart" class="flex items-center gap-1 cursor-pointer hover:opacity-80">
          <span class="text-lg">🛒</span>
          <span class="font-bold">({{ cartStore.items.length }})</span>
        </router-link>


        <button class="bg-[#ffc107] text-black px-2 py-1 rounded-[4px] text-[11px] font-bold flex items-center gap-1">
          <span class="text-[10px]">✔</span> Dark/Light
        </button>
      </div>
    </nav>

    <div class="bg-white border-b p-3">
      <div class="max-w-[1400px] mx-auto">
        <input 
          type="text" 
          placeholder="Search..." 
          class="w-72 border border-gray-300 rounded px-3 py-1.5 text-sm italic focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
    </div>

    <main class="max-w-[1400px] mx-auto p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useCartStore } from './store/cart';

const isLoggedIn = ref(false);
const signIn = () => isLoggedIn.value = true;
const cartStore = useCartStore();
onMounted(() => {
  cartStore.loadCart();
});
</script>