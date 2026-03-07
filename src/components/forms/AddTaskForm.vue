<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';

const newTaskTitle = ref('')

function submitForm() {
    if (newTaskTitle.value == '') {
        // Не добавлять
    }

    newTaskTitle.value = ''
}
</script>

<template>
    <div>
        <input type="text">
        <BaseButton @click="submitForm" />
    </div>
</template>