<template>
  <header>
    <div class="l-header">
      <a href='/' class="l-header-title">
        IntroduceMe
      </a>
      <div class="l-header-btn-container">
        <UserIcon class="user-icon-btn" :img_path="sample_user_img_path"/>
      </div>
    </div>
  </header>
  <HeaderNavigation />
</template>

<script setup lang="ts">
import HeaderNavigation from './HeaderNavigation.vue'
import UserIcon from '../UserIcon.vue'
import { ref } from 'vue'

const sample_user_img_path= ref("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLuW2xcJlrbLdQDiw-wTCsElgoQIvbaXRZ40pCZX9vxYuLh1W3njnzZ_SZddy3nVpXeTDZqdKX6rI-MQBECmDwL80RPHDA4d5_lBe89Z8YTbBw9LSlnkTYFbKFmLvObN6tMyyCx7kPVQiMVILHoqH-ze4DDH1n6tf6PIo06l_6w95xdmZ40m7X7Bzx9g/s664/rennai_kaeruka.png")
</script>
<style>
.l-header {
  position: relative;
  margin: 0 auto;
  max-width: 1069px;
  padding: 0 16px;
  display: flex;
}

.l-header-title {
  color: black;
  font-family: Comfortaa;
  font-size: 32px;
  margin-top: 28px;
  margin-bottom: 36px;
  text-decoration: none;
}

.l-header-btn-container {
  margin-left: auto;
  display: flex;
}

.l-header-btn-container > .user-icon-btn {
  width: 52px;
  height: 52px;
}
</style>