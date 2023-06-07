
<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import firebase from 'firebase/compat/app';

export default {
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      // login authentication, If user is logged in send the user home. If not go to login. If not aregistered user then go to register.
      firebase.auth().onAuthStateChanged((user) => {
        if (!user){
          router.replace('/login')
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace('/')
        }
      })
    })
  }
}
</script>

<style lang="scss">
body {
  background: #2c3e50;
  color: #FFF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: inherit;
}
</style>
