import { defineStore } from 'pinia'
// import moment from "moment/moment"
//
// moment().format()

export const useWageStore = defineStore('main',{
  state: () => ({
    morning: 0,
    afternoon: 0,
    evening: 0,
    night: 0,
    money: 0,
    startTime: 0,
    endTime: 0,
    rate: 0,
    startRate: 0,
    endRate: 0,
    morningRange: [7, 8, 9, 10, 11],
    afternoonRange: [12, 13, 14, 15],
    eveningRange: [16, 17, 18, 19],
    nightRange: [20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6]
  }),
  getters: {

  },
  actions: {
    setIncome() {
      // const morningTime = ['']
      // const afternoonTime = ['']
      // const eveningTime = ['']
      // const nightTime = ['']

      // let end;
      let duration;

      if (this.morningRange.includes(parseFloat(this.startTime))) {
        this.rate = this.morning
      } else if (
      this.afternoonRange.includes(parseFloat(this.startTime))) {
        this.rate = this.afternoon
      } else if (
          this.eveningRange.includes(parseFloat(this.startTime))) {
        this.rate = this.evening
      } else {
          this.rate = this.night
        }


      if (parseFloat(this.endTime) <= parseFloat(this.startTime)) {
        duration = parseFloat(this.endTime) + (24 - parseFloat(this.startTime))
      } else {
        duration = parseFloat(this.endTime) - parseFloat(this.startTime)
      }

      if ((this.startTime !== 0) && (this.endTime !== 0)) {
        this.money = duration * this.rate
      } else {
        this.money = 0
      }

      parseFloat(this.money)
      console.log(parseFloat(this.money))
    }
  }
,})
