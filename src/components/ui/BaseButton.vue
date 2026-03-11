<script setup lang="ts">
defineProps<{
    type?: 'button' | 'submit',
    disabled?: boolean
}>()

// Сделать defineSlots
</script>

<template>
    <button :disabled="disabled" :type="type || 'button'">
        <slot />
    </button>
</template>