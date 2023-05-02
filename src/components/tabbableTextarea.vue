<script setup>
import { ref } from 'vue';
import {inject} from 'vue';

console.log(inject('name'))

defineProps({
  modelValue: String
})

let emit = defineEmits(['update:modelValue']);

let textarea = ref(null)

function onTab(){
  let t = textarea.value;

  //get caret postition/selection
  let val = t.value;
  let start = t.selectionStart;
  let end = t. selectionEnd;

  //set textarea value to: text before + tab + text after
  t.value = val.substring(0,start) + "\t" + val.substring(end);

  //put caret at the right postition again
  t.selectionStart = t.selectionEnd = start + 1;
   
}

function update(e){
  emit('update:modelValue',e.target.value)
}


</script>

<template>
    <div>
        <textarea 
        ref="textarea" 
        @keydown.tab.prevent="onTab" 
        rows="" cols="" style="width: 100%; height: 100%;"
        v-text="modelValue"
        @keyup="update"
        />
    </div>
</template>