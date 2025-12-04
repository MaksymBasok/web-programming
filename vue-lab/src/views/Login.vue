<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";

import AuthScreen from "@/components/AuthScreen.vue";
import TabBar from "@/components/TabBar.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

const username = ref("");
const password = ref("");

function submitLogin() {
  if (!username.value.trim()) return toast.error("Username is required");
  if (!password.value.trim()) return toast.error("Password is required");
  toast.success("Login successful (mock)");
}
</script>

<template>
  <AuthScreen>
    <div class="flex flex-col items-center gap-3">
      <img src="@/assets/img/heart.png" class="w-24" />
      <div class="text-4xl font-bold tracking-[2px]">FATED</div>
    </div>

    <TabBar active="login" />

    <form @submit.prevent="submitLogin" class="flex flex-col gap-4 w-full">
      <input class="auth-input" placeholder="user name" v-model="username" />
      <input class="auth-input" type="password" placeholder="password" v-model="password" />

      <PrimaryButton type="submit" extraClass="w-full">LOGIN</PrimaryButton>
    </form>

    <div class="mt-auto flex gap-2 text-xs opacity-90">
      <span>DON'T HAVE AN ACCOUNT?</span>
      <router-link to="/register" class="font-bold">REGISTER</router-link>
    </div>
  </AuthScreen>
</template>
