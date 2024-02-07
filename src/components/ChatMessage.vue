<script setup>
import {TrashIcon} from '@heroicons/vue/24/solid';
    defineProps({
        message: {
            type: Object,
            required: true
        }
    })
    const emit = defineEmits(['delete'])
</script>

<template>
    <div class="m-3">
        <div class="flex items-center mb-2">
            <img :src="message.user.avatar" alt="avatar" class="mr-3 rounded-full h-14 w-14">
            <div>{{ message.user.name}}</div>
            <div class="ml-2 text-xs opacity-50">{{ message.date }}</div>
            <div>
                <button class="ml-2" @click="emit('delete',message.id)"><TrashIcon class="w-5 h-5"/></button>
            </div>
        </div>
        <div class="">
            {{ message.content }}
        </div>
    </div>
</template>