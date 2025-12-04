<script setup>
import PhoneFrame from "@/components/PhoneFrame.vue";
import Dots from "@/components/Dots.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
</script>

<template>
  <PhoneFrame>
    <div class="flex flex-1 items-center justify-center">
      <img src="@/assets/img/image2.png" class="w-full max-w-xs" />
    </div>

    <div class="flex flex-col items-center gap-3 text-center">
      <div class="cta">CHAT WITH EASE</div>
      <p class="text-muted text-xs leading-5 max-w-[310px]">
      Maecenas in placerat nibh. Integer sollicitudin sapien et massa varius venenatis. Nulla facilisis purus nec nibh posuere volutpat. Nunc congue, arcu sit amet imperdiet sodales, tellus odio sagittis turpis, sed tincidunt nibh urna in leo. Duis et sodales elit, ut cursus est. Aenean magna metus, volutpat vel dignissim quis, malesuada eget ex.
      </p>
    </div>

    <div class="flex items-center justify-between mt-auto gap-3">
      <SecondaryButton to="/login">SKIP</SecondaryButton>

      <Dots :active="2" />

      <PrimaryButton to="/onboarding-3">NEXT</PrimaryButton>
    </div>
  </PhoneFrame>
</template>
