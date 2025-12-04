<template>
  <div class="flex gap-4">
    <span
      v-for="i in 3"
      :key="i"
      class="dot"
      :class="{ 'dot-active': i === active }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  active: Number
})
</script>
