<script setup></script>

<template>
  <div class="flex flex-col w-full max-w-full">
    <h3 class="font-bold text-lg mb-4">
      Enter your hourly wage per time range
    </h3>
    <label class="input-group input-group-md mb-4 w-full max-w-full">
      <span class="w-[25%]">7a - 12p</span>
      <input
        type="text"
        placeholder="Enter wage here"
        class="input input-bordered input-md max-w-full w-full"
      />
    </label>
    <label class="input-group input-group-md mb-4 w-full max-w-full">
      <span class="w-[25%]">12p - 4p</span>
      <input
        type="text"
        placeholder="Enter wage here"
        class="input input-bordered input-md w-full max-w-full"
      />
    </label>
    <label class="input-group input-group-md mb-4 w-full max-w-full">
      <span class="w-[25%]">4p - 10p</span>
      <input
        type="text"
        placeholder="Enter wage here"
        class="input input-bordered input-md w-full max-w-full"
      />
    </label>
    <label class="input-group input-group-md mb-4 w-full max-w-full">
      <span class="w-[25%]">10p - 7a</span>
      <input
        type="text"
        placeholder="Enter wage here"
        class="input input-bordered input-md w-full max-w-full"
      />
    </label>
    <div class="modal-action">
      <label htmlFor="wage-modal" class="btn btn-success w-full max-w-full"
        >Save</label
      >
    </div>
  </div>
</template>
