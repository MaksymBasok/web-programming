<script setup>
import { computed } from "vue";

const props = defineProps({
  to: { type: String, default: null },
  type: { type: String, default: "button" },
  extraClass: { type: String, default: "" }
});

const classes = computed(() => `btn btn-primary ${props.extraClass}`.trim());
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to || undefined"
    :type="to ? undefined : type"
    :class="classes"
  >
    <slot />
  </component>
</template>
