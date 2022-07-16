<script setup>
// import moment from 'moment'
import { useWageStore} from "../stores/WageStore";
const wageStore = useWageStore()
// moment().format('LLLL');

const times = ['00','01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

</script>

<template>
  <div class="w-full">
    <form class="flex flex-col font-sans w-full" @submit.prevent="">
      <label class="block text-gray-500">Pick your start time.</label>
      <div class="flex flex-row mb-2">
        <select v-model="wageStore.startTime" class="input input-bordered w-full max-w-full">
          <option
              v-for="time in times"
              :value="time"
              :key="time"
              :selected="time === wageStore.startTime"
              >{{ time }}
          </option>
        </select>
      </div>
      <label class="block text-gray-500">Pick your end date / time.</label>
      <div class="flex flex-col">
        <select v-model="wageStore.endTime" class="input input-bordered w-full max-w-full">
          <option
              v-for="time in times"
              :value="time"
              :key="time"
              :selected="time === wageStore.endTime"
          >{{ time }}
          </option>
        </select>
        <button type="submit" class="btn btn-primary mt-4 max-w-full" @click.prevent="wageStore.setIncome()">
          OK
        </button>
      </div>
    </form>
  </div>
</template>
