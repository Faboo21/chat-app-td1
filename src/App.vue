<script setup>
    import { supabase } from '@/supabase'
    import { useUserStore } from '@/stores/user'
    import { onMounted } from 'vue';

    onMounted(async () => {
        supabase.auth.onAuthStateChange((event, session) => {
            useUserStore().fetchUserProfile(session?.user?.id)
        })
    },)
</script>

<template >
    <div class="h-full bg-black">
        <div class="bg-gradient-to-r from-blue-600 to-black">NavBar</div>
        <RouterView></RouterView>
    </div>
</template>

<style scoped></style>
