<script setup>
import WageModal from "@/components/WageModal.vue";
import DateRangePicker from "@/components/DateRangePicker.vue";
import Earnings from "@/components/Earnings.vue";
</script>

<template>
  <div
    class="flex pt-12 items-start justify-center h-screen w-screen bg-stone-200 font-sans"
  >
    <div class="card w-96 bg-base-100 shadow-xl p-6">
      <div class="flex flex-col items-center">
        <label
          htmlFor="wage-modal"
          class="btn modal-button w-full mb-4 text-white"
          >Configure your wages</label
        >
        <input type="checkbox" id="wage-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <WageModal />
          </div>
        </div>
        <div class="block h-[2px] w-[95%] bg-gray-100 mt-3 mb-4"></div>
        <DateRangePicker />
        <div class="block h-[2px] w-[95%] bg-gray-100 mt-6"></div>
        <Earnings />
      </div>
    </div>
  </div>
</template>
