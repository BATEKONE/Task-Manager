<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import { Task } from '@/types/task';

defineProps<{
    task: Task
}>()

const store = useTasksStore();

function toggleTask() {

}

function removeTask() {

}
</script>

<template>
    <div>
        <span>{{ task.title }}</span>
        <input type="checkbox" :checked="task.completed" @change="toggleTask" />
        <button @click="removeTask">❌</button>
    </div>
</template>