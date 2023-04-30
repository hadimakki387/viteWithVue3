<script setup>
import {useFlash} from "@/composables/useFLash";

let {flash} = useFlash();
</script>

<template>
  <main>
    <TheWelcome />
    <button @click="flash('It works!')">click Me</button>
    
  </main>
</template>
