<script setup>
    import { useUserStore } from '@/stores/user'
    import { storeToRefs} from 'pinia' 

    const {user} = storeToRefs(useUserStore())
</script>

<template>
    <header class="flex p-3 text-white bg-black item-center">
        <div v-if="user">User : {{ user.username }}</div>
        <button class="ml-auto">Déconnexion</button>
    </header>
</template>