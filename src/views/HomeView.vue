<script setup>
import {useFlash} from "@/composables/useFLash";
import { ref, watch } from "vue";
let {flash} = useFlash();

let food = ref(localStorage.getItem('food'));
let age = ref(localStorage.getItem('age'));

function  write(key,val){
  localStorage.setItem(key,val)
}


watch(food , (val)=>{
  write('food',val);
});

</script>

<template>
  <main>
    <TheWelcome />
    <button @click="flash('It works!')">click Me</button>
    <p>
    Whats ur fav food <input type="text" v-model="food" >  
    </p>
    <p>
    Whats ur age <input type="text" v-model="age">  
    </p>
  </main>
</template>
