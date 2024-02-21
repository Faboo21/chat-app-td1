<script setup>
    import AppInput from '@/components/AppInput.vue';
    import { ref } from 'vue';
    import {useRouter} from 'vue-router';
    import { supabase } from '@/supabase';

    const router = useRouter()
    const email = ref('')
    const username = ref('')
    const password = ref('')

    const signup = async () => {
        const {error} = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
                data: {username : username.value}
            }
        })
        if (error){
            alert (error)
        } else {
            router.push({name : 'home'})
        }
    }
</script>

<template>
    <form @submit.prevent="signup" class="flex flex-col gap-2 p-4 mx-auto text-white max-w-96">
        <h1 class="mb-2 text-xl">Creer un compte :</h1>
        <label for="email">Email : </label>
        <AppInput v-model="email" type="email" id="email" name="email" autocomplete="email"/>
        <label for="username">Username : </label>
        <AppInput v-model="username" type="text" name="username" id="username" autocomplete="username"/>
        <label for="password">Mot de passe : </label>
        <AppInput v-model="password" type="password" name="password" id="password" autocomplete="new-password"/>
        <button type="submit" class="mt-5 text-black bg-white rounded-md">Creer un compte</button>
    </form>
</template>
