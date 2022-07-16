<script setup>
import { useWageStore } from "../stores/WageStore";

const wageStore = useWageStore()
</script>

<template>
  <div class="mt-6">
    <div class="stats shadow bg-emerald-50">
      <div class="stat">
        <div class="stat-title font-sans">Earnings This Shift</div>
        <div class="stat-value font-sans text-emerald-800">${{ wageStore.money }}</div>
      </div>
    </div>
  </div>
</template>
