<script setup>
const props = defineProps({
  active: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-3">
    <router-link
      to="/login"
      class="tab"
      :class="{ 'tab-active': active === 'login' }"
    >
      LOGIN
    </router-link>

    <router-link
      to="/register"
      class="tab"
      :class="{ 'tab-active': active === 'register' }"
    >
      REGISTER
    </router-link>
  </div>
</template>
