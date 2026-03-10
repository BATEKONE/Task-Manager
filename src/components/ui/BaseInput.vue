<script setup lang="ts">
const props = defineProps({
    modelValue: String,
    placeholder: String
})

const emit = defineEmits(['update:modelValue'])
console.log(props.modelValue)
</script>

<template>
    <input type="text" :value="modelValue" :placeholder="placeholder"
        @input="emit('update:modelValue', $event.target.value)">
</template>