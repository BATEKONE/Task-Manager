<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';

const newTaskTitle = ref("")
let id = ref(1);

function submitForm() {
    if (newTaskTitle.value != "") {
        localStorage.setItem(`${id.value}`, newTaskTitle.value);
        id.value++;
    }

    newTaskTitle.value = ''
    console.log(newTaskTitle.value)
}
</script>

<template>
    <div>
        <BaseInput v-model="newTaskTitle" />
        <BaseButton @click="submitForm()" />
    </div>
</template>