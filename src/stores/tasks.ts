import { defineStore } from "pinia";
import type { Task } from "@/types/task";

export const useTasksStore = defineStore('tasks', {
    state: () => {
        return {
            tasks: [] as Task[],
            filter: 'all' as 'all' | 'active' | 'completed'
        }
    },

    actions: {
        addTask(title: string) {
            this.tasks.push({
                id: Date.now(),
                title: title,
                completed: false,
                createdAt: Date.now()
            })
        },

        removeTask(id: number) {
            this.tasks = this.tasks.filter(task => task.id !== id)
        },

        toggleTask(id: number) {
            const task = this.tasks.find(task => task.id === id);

            if (task) {
                task.completed = !task.completed;
            }
        }
    }
})