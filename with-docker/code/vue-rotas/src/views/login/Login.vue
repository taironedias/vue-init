<template>
  <form class="form-signin" @submit.prevent="login">
    <h1 class="h3 mb-3 font-weight-normal">Faça seu login</h1>
    <label class="sr-only">E-mail</label>
    <input
      type="email"
      class="form-control"
      placeholder="Informe seu e-mail"
      required
      autofocus
      v-model="user.email">

    <label class="sr-only">Senha</label>
    <input
      type="password"
      class="form-control"
      placeholder="Informe sua senha"
      required
      v-model="user.password">

    <button type="submit" class="btn btn-lg btn-primary btn-block">Entrar</button>
    <div class="alert alert-danger mt-3" v-if="messageError">{{ messageError }}</div>
  </form>
</template>

<script>

import EventBus from './../../event-bus'

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      messageError: ''
    }
  },
  methods: {
    login() {
      if (this.user.email === 'tairone@gmail.com' && this.user.password === 'test') {
        EventBus.$emit('authenticate', { authenticated: true })
        const url = this.$route.query.redirect || '/contatos'
        this.$router.push(url)
        return
      }

      this.messageError = 'Dados incorretos, verifique o e-mail e senha informado'
      setTimeout(() => {
        this.messageError = ''
      }, 3000)
    }
  }
}
</script>

<style scoped>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-top: -1px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
</style>