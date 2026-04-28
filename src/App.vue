<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b p-4 flex justify-between items-center">
      <div class="flex items-center gap-6">
        <router-link to="/" class="text-xl font-bold text-blue-600">MyStore</router-link>
        <router-link to="/" class="text-gray-600 hover:text-blue-600">Home</router-link>
        <router-link to="/help" class="text-gray-600 hover:text-blue-600">Help</router-link>
      </div>

      <div class="flex gap-4">
        <button v-if="!isLoggedIn" @click="signIn" class="px-4 py-2 text-gray-700 font-medium">
          Sign In
        </button>
        
        <button v-else @click="signOut" class="px-4 py-2 bg-red-500 text-white rounded-lg">
          Sign Out
        </button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Basic state to handle buttons
const isLoggedIn = ref(false);

const signIn = () => {
  isLoggedIn.value = true;
};

const signOut = () => {
  isLoggedIn.value = false;
};
</script>