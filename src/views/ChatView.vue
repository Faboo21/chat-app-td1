<script setup>
import { ref } from 'vue'
const message = ref('')
const messages = ref([])
const addMessage = () => {
  if (message.value != '') {
    messages.value.push(message.value)
    message.value = ''
  }
}
</script>
<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      <h1
        class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-white bg-gradient-to-r from-yellow-400 to-black p-4"
      >
        {{ message }}
      </h1>
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
        class="bg-black text-neutral-50 border-white border m-2"
      ></textarea>
      <button
        @click="addMessage"
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Envoyer
      </button>
    </div>
  </div>
</template>
