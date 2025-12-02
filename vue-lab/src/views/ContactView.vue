<script setup lang="ts">
import UserCard from '../components/UserCard.vue';
</script>

<template>
  <div class="p-5 text-gray-900 dark:text-gray-200 transition-colors">
    <h1 class="text-2xl font-bold mb-4 dark:text-white">
      Сторінка контактів
    </h1>

    <p class="mb-4 dark:text-gray-300">
      Це наша нова сторінка контактів!
    </p>

    <UserCard username="Student_1" :isActive="true" />
    <UserCard username="Student_2" :isActive="false" />
  </div>
</template>
