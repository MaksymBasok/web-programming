<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem("theme")
  if (saved === "dark") {
    isDark.value = true
    document.documentElement.classList.add("dark")
  }
})

function toggleTheme() {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}
</script>

<template>
  <header>
    <div class="max-w-4xl mx-auto">
      <nav
        class="p-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100
               rounded-b-lg shadow-md flex justify-between items-center transition-colors"
      >
        <div class="flex gap-4">
          <RouterLink class="hover:underline" to="/">Home</RouterLink>
          <RouterLink class="hover:underline" to="/about">About</RouterLink>
          <RouterLink class="hover:underline" to="/contact">Contact</RouterLink>
        </div>

        <!-- Кнопка перемикача теми -->
        <button
          @click="toggleTheme"
          class="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 dark:text-white
                 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          {{ isDark ? "Light" : "Dark" }}
        </button>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto mt-5">
    <RouterView />
  </main>
</template>
