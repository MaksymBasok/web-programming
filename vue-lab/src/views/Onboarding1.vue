<script setup>
import PhoneFrame from "@/components/PhoneFrame.vue";
import Dots from "@/components/Dots.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
</script>

<template>
  <PhoneFrame>
    <div class="flex flex-1 items-center justify-center">
      <img src="@/assets/img/image1.png" class="w-full max-w-xs" />
    </div>

    <div class="flex flex-col items-center gap-3 text-center">
      <div class="cta">MEET NEW PEOPLE</div>
      <p class="text-muted text-xs leading-5 max-w-[310px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
 lacinia tellus quis est pharetra fermentum. Curabitur dapibus.
 neque id lacus hendrerit rhoncus. Vivamus quis pretium metus.
Praesent varius tortor sit amet quam eleifend hendrerit.
Vivamus pharetra ultrices diam vel volutpat. Praesent molestie
lobortis sodales. Sed volutpat tempus orci
      </p>
    </div>

    <div class="flex items-center justify-between mt-auto gap-3">
      <SecondaryButton to="/login">SKIP</SecondaryButton>

      <Dots :active="1" />

      <PrimaryButton to="/onboarding-2">NEXT</PrimaryButton>
    </div>
  </PhoneFrame>
</template>
