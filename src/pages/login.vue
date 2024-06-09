<script setup lang="ts">
import LoginSvg from "@/components/svg/LoginSvg.vue";
import InputIcon from "@/vendor/components/InputIcon.vue";
import UserSvg from "@/vendor/svg/UserSvg.vue";
import InputPassword from "@/vendor/components/InputPassword.vue";
import InfoMessage from "@/vendor/Messages/InfoMessage.vue";
import ButtonDefault from "@/vendor/components/ButtonDefault.vue";
import Logo from '@/assets/img/logo.png'
import defineHead from "@/vendor/defineHead";
import useAuth from "@/composables/useAuth";
import DangerMessage from "@/vendor/Messages/DangerMessage.vue";

defineHead({
  title: "Login"
})

const {formLogin, errors, submitLoginForm} = useAuth()
</script>

<template>
  <div class="h-screen grid lg:grid-cols-2">
    <div class="bg-primary hidden lg:flex items-center justify-center">
      <div class="grid grid-rows-2 h-144 justify-center w-112 mx-auto">
        <div class="">
          <h1 class="text-indigo-900 font-bold text-4xl mb-5">¡Te damos la bienvenida!</h1>
          <p class="text-gray-700 text-3xl">Gestiona trámites, realiza tus pagos y explora tus cursos de forma
            sencilla.</p>
        </div>
        <div class="">
          <LoginSvg class="h-full w-full"/>
        </div>
      </div>
    </div>
    <div class="bg-white flex items-center justify-center">
      <div class="w-128 lg:w-112 h-114">
        <img :src="Logo" alt="" class="w-72 h-12">
        <div class="pb-14 pt-5">
          <h3 class="text-xl font-bold">La nueva experiencia colaborativa digital</h3>
          <p class="text-md">Conoce, colabora y aprende</p>
        </div>
        <div class="grid">
          <div class="mb-8">
            <InputIcon title="Usuario: código de alumno UTP"
                       v-model="formLogin.email"
                       id="username" type="text"
                       placeholder="Ingresa tu código UTP">
              <UserSvg/>
            </InputIcon>
            <DangerMessage>{{ errors.email }}</DangerMessage>
            <InfoMessage class="text-xs mt-1 mb-5">Ejemplo de usuario: U1533148 (no digitar el @utp.edu.pe)
            </InfoMessage>
          </div>
          <div class="mb-20">
            <InputPassword title="Contraseña" id="password"
                           v-model="formLogin.password"
                           placeholder="Ingresa tu contraseña"/>
            <DangerMessage>{{ errors.password }}</DangerMessage>
          </div>
          <ButtonDefault class="py-4" @click="submitLoginForm">Inicia Sesión</ButtonDefault>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>