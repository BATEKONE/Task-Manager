<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore()

</script>

<template>
    <div>
        <button @click="store.setFilter('all')">All</button>
        <button @click="store.setFilter('active')">Active</button>
        <button @click="store.setFilter('completed')">Completed</button>
    </div>
</template>