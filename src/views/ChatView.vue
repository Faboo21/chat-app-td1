<script setup>
import {PaperAirplaneIcon} from '@heroicons/vue/24/solid';
import { ref } from 'vue'
import ChatMessage from '@/components/ChatMessage.vue';
import AppNavbar from '../components/AppNavbar.vue';

var compteur = 0
const message = ref('')
const messages = ref([])
const addMessage = () => {
  if (message.value != '') {
    messages.value.push({
      id: compteur,
      content: message.value,
      date: new Date().toLocaleDateString(),
      user: {
        name: 'Fabien',
        avatar: 'https://i.pravatar.cc/300'
      }
    })
    message.value = ''
    compteur++
  }
}
const deleteMessage = (id) => {
  messages.value = messages.value.filter((message) => message.id != id);
}
</script>
<template>
  <AppNavbar/>
  <div class="p-4 bg-gradient-to-r from-yellow-400 to-black">
    <div v-for="(message, index) in messages" :key="index">
      <ChatMessage :message="message" @delete="deleteMessage"/>
    </div>
  </div>

  <div class="bg-gradient-to-r from-red-600 to-black">
    <div class="flex p-5">
      <textarea
        v-model="message"
        name="message"
        id="message"
        cols="30"
        rows="10"
        class="m-2 bg-black border border-white text-neutral-50"
        @keydown.enter="addMessage"
      ></textarea>
      <button
        @click="addMessage"
        type="button"
        class="px-5 mb-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        <PaperAirplaneIcon class="h-5 w_5"/>
      </button>
    </div>
  </div>
</template>
