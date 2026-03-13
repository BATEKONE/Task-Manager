<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import { computed } from 'vue';
import TaskItem from './TaskItem.vue';

const store = useTasksStore();

const tasks = computed(() => store.filteredTasks)
</script>

<template>
    <div>
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </div>
</template>