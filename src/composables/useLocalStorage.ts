import type { Task } from "@/types/task"

const STORAGE_KEY = "tasks"

export function useLocalStorage() {

    function saveTasks(tasks: Task[]) {
        const data = JSON.stringify(tasks)
        localStorage.setItem(STORAGE_KEY, data)
    }

    function loadTasks(): Task[] {
        const data = localStorage.getItem(STORAGE_KEY)
        if (!data) return []
        return JSON.parse(data)
    }

    return {
        saveTasks,
        loadTasks
    }
}