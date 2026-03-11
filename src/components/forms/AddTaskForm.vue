<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';
import { useTasksStore } from '@/stores/tasks';

const title = ref("")
const store = useTasksStore();

function submitForm() {
    if (!title.value.trim()) return

    store.addTask(title.value);
    title.value = '';
}
</script>

<template>
    <div>
        <BaseInput v-model="title" placeholder="Новая задача" />
        <BaseButton @click="submitForm">Добавить задачу</BaseButton>
    </div>
</template>