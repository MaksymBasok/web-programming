<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";

import AuthScreen from "@/components/AuthScreen.vue";
import TabBar from "@/components/TabBar.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

const username = ref("");
const password = ref("");
const email = ref("");

function submitRegister() {
  if (!username.value.trim()) return toast.error("Username is required");
  if (!password.value.trim()) return toast.error("Password is required");
  if (!email.value.trim()) return toast.error("Email is required");

  toast.success("Register successful (mock)");
}
</script>

<template>
  <AuthScreen>
    <div class="flex flex-col items-center gap-3">
      <img src="@/assets/img/heart.png" class="w-24" />
      <div class="text-4xl font-bold tracking-[2px]">FATED</div>
    </div>

    <TabBar active="register" />

    <form @submit.prevent="submitRegister" class="flex flex-col gap-4 w-full">
      <input class="auth-input" placeholder="user name" v-model="username" />
      <input class="auth-input" type="password" placeholder="password" v-model="password" />
      <input class="auth-input" type="email" placeholder="email" v-model="email" />

      <PrimaryButton type="submit" extraClass="w-full">REGISTER</PrimaryButton>
    </form>

    <div class="mt-auto flex gap-2 text-xs opacity-90">
      <span>ALREADY HAVE AN ACCOUNT?</span>
      <router-link to="/login" class="font-bold">LOGIN</router-link>
    </div>
  </AuthScreen>
</template>
