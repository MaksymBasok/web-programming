<script setup>
import PhoneFrame from "@/components/PhoneFrame.vue";
import Dots from "@/components/Dots.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
</script>

<template>
  <PhoneFrame>
    <div class="flex flex-1 items-center justify-center">
      <img src="@/assets/img/image3.png" class="w-full max-w-xs" />
    </div>

    <div class="flex flex-col items-center gap-3 text-center">
      <div class="cta">MEET NEW PEOPLE</div>
      <p class="text-muted text-xs leading-5 max-w-[310px]">
      Nam vitae commodo nulla Ancana orci ou ipsoft congue comalic ac tempus Donec portarost viverra duobus Aliquam erat volutpat. Cras maximus request odio bibendum sociales. Ut id suncus egestas farum nec, varius lacus Proin st interdict diam. Nika faciki. Duli enim ni, marinus vitae metus venenats accumsan foret
      </p>
    </div>

    <div class="flex items-center justify-between mt-auto gap-3">
      <SecondaryButton to="/login">SKIP</SecondaryButton>

      <Dots :active="3" />

      <PrimaryButton to="/login">NEXT</PrimaryButton>
    </div>
  </PhoneFrame>
</template>
