<script setup></script>

<template>
  <div>
    <form class="flex flex-col font-sans w-[100%]">
      <label classN="block text-gray-500">Pick your start date / time.</label>
      <div class="flex flex-row mb-2">
        <input
          type="datetime-local"
          class="input input-bordered w-full max-w-full"
        />
      </div>
      <label class="block text-gray-500">Pick your end date / time.</label>
      <div class="flex flex-col">
        <input
          type="datetime-local"
          class="input input-bordered w-full max-w-full flex flex-row"
        />
        <button type="submit" class="btn btn-primary mt-4 max-w-full">
          OK
        </button>
      </div>
    </form>
  </div>
</template>
