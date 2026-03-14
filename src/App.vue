<script setup lang="ts">
import { onMounted, watch } from 'vue';
import AddTaskForm from './components/forms/AddTaskForm.vue';
import TaskFilters from './components/tasks/TaskFilters.vue';
import TaskList from './components/tasks/TaskList.vue';
import { useLocalStorage } from './composables/useLocalStorage';
import { useTasksStore } from './stores/tasks';

const store = useTasksStore()
const { saveTasks, loadTasks } = useLocalStorage()

onMounted(() => {
  store.tasks = loadTasks()
})

watch(
  () => store.tasks,
  (tasks) => { saveTasks(tasks) },
  { deep: true }
)
</script>

<template>
  <AddTaskForm />
  <TaskList />
  <TaskFilters />
</template>

<style scoped></style>
