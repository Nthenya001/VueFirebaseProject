/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'


const firebaseConfig = {
    apiKey: "AIzaSyD2geCC5_8o21o-fy5JGHGx5GazoMp8Ec8",
    authDomain: "vue-auth-yt-3d73a.firebaseapp.com",
    projectId: "vue-auth-yt-3d73a",
    storageBucket: "vue-auth-yt-3d73a.appspot.com",
    messagingSenderId: "707678608957",
    appId: "1:707678608957:web:726621d0998702a373d454"
  };
  

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
