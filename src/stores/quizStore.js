//step 1
import { defineStore } from "pinia";

export let state = defineStore('counter',{
   state(){
    return console.log('hello')
   }
})
