<script setup lang="ts">
defineProps<{
    modelValue: string,
    placeholder: string
}>()

const emit = defineEmits(['update:modelValue'])

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<template>
    <input type="text" :value="modelValue" :placeholder="placeholder" @input="handleInput">
</template>