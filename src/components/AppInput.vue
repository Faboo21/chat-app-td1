<script setup>
    import { defineProps } from 'vue';
    
    const props = defineProps({
        modelValue: String
    })
    const emit = defineEmits(['update:modelValue'])

    const value = computed();
</script>

<template>
    <input v-bind="$attrs" class="mt-2 mb-2 bg-black border-2 border-white rounded-md" required>
</template>