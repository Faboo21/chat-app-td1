<script setup>
import AppInput from '@/components/AppInput.vue';
import { reactive } from 'vue';

const {formValues} = reactive({
    email: '',
    username: '',
    password: '',
})
</script>

<template>
    <div class="">
        <form action="" class="flex flex-col gap-2 p-4 mx-auto text-white max-w-96">
            <h1 class="mb-2 text-xl">Creer un compte :</h1>
            <label for="email">Email : </label>
            <AppInput :modelValue="formValues.email" type="email" id="email" name="email" autocomplete="email"/>
            <label for="username">Username : </label>
            <AppInput :modelValue="formValues.username" type="text" name="username" id="username" autocomplete="username"/>
            <label for="password">Mot de passe : </label>
            <AppInput :modelValue="formValues.password" type="password" name="password" id="password" autocomplete="new-password"/>
            <button type="submit" class="mt-5 text-black bg-white rounded-md">Creer un compte</button>
        </form>
    </div>
</template>
