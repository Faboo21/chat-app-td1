<script setup>
    defineProps({
        modelValue: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" class="mt-2 mb-2 bg-black border-2 border-white rounded-md" required>
</template>