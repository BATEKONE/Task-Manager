<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import type { Task } from '@/types/task';

const props = defineProps<{
    task: Task
}>()

const store = useTasksStore();

function toggleTask() {
    store.toggleTask(props.task.id);
}

function removeTask() {
    store.removeTask(props.task.id)
}
</script>

<template>
    <div>
        <input type="checkbox" :checked="props.task.completed" @change="toggleTask" />
        <span>{{ props.task.title }}</span>
        <button @click="removeTask">❌</button>
    </div>
</template>