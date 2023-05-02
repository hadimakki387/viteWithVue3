<script setup>
import tabbableTextarea from '@/components/tabbableTextarea.vue'
import {ref} from "vue"
import { state } from '../stores/quizStore';

state();

let comments = ref('hello there');

</script>

<template>
  <main>
    <TheWelcome />
    <tabbableTextarea v-model="comments" style="width: 100%; height: 300px" />
  </main>
</template>
