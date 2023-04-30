<script setup>
import { useFlash } from '@/composables/useFLash'
import { useStorage } from '@/composables/useStorage'

let { flash } = useFlash();

let food = useStorage('food', 'salad');
let age = useStorage('age');

</script>

<template>
  <main>
    <TheWelcome />
    <button @click="flash('It works!')">click Me</button>
    <p>Whats ur fav food <input type="text" v-model="food" /></p>
    <p>how old are you <input type="text" v-model="age" /></p>
  </main>
</template>
