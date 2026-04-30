<template>
  <div :class="isDarkMode ? 'dark' : ''" class="min-h-screen bg-[#f8f9fa] dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <nav class="bg-[#007bff] dark :bg-gray-800 text-white px-6 py-2 flex justify-between items-center shadow-sm">
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


        <button
        @click="toggleDarkMode"
         class="bg-[#ffc107] text-black px-2 py-1 rounded-[4px] text-[11px] font-bold flex items-center gap-1 hover:bg-yellow-500 transition-all">
          <span class="text-[10px]">{{ isDarkMode ? '☀' : '✔' }}</span> 
          {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </nav>

    <div class="bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-3">
      <div class="max-w-[1400px] mx-auto">
        <input
        v-model="cartStore.searchQuery" 
          type="text" 
          placeholder="Search..." 
          class="w-72 border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm italic focus:outline-none focus:ring-1 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
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
const isDarkMode = ref(false);
const toggleDarkMode = () => {isDarkMode.value = !isDarkMode.value;  
if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  cartStore.loadCart();
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>