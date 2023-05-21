<template>
  <div class="card-list-container">
    <template v-for="(user, idx) in users" :key="idx">
      <UserCard :user="user"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import UserCard from "./UserCard.vue"
import type { User } from "@/types/user"
import { ref } from 'vue'

const sampleUsers = [
  {
    name: 'Akira',
    icon: undefined,
    desc: {
      short_self_intro: 'よろしくお願いします！',
    }
  },
  {
    name: 'Kenji',
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLuW2xcJlrbLdQDiw-wTCsElgoQIvbaXRZ40pCZX9vxYuLh1W3njnzZ_SZddy3nVpXeTDZqdKX6rI-MQBECmDwL80RPHDA4d5_lBe89Z8YTbBw9LSlnkTYFbKFmLvObN6tMyyCx7kPVQiMVILHoqH-ze4DDH1n6tf6PIo06l_6w95xdmZ40m7X7Bzx9g/s664/rennai_kaeruka.png",
    desc: {
      short_self_intro: 'よろしくお願いします！',
    }
  },
  {
    name: 'Akiko',
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLuW2xcJlrbLdQDiw-wTCsElgoQIvbaXRZ40pCZX9vxYuLh1W3njnzZ_SZddy3nVpXeTDZqdKX6rI-MQBECmDwL80RPHDA4d5_lBe89Z8YTbBw9LSlnkTYFbKFmLvObN6tMyyCx7kPVQiMVILHoqH-ze4DDH1n6tf6PIo06l_6w95xdmZ40m7X7Bzx9g/s664/rennai_kaeruka.png",
    desc: {
      short_self_intro: 'よろしくお願いします！',
    }
  },
  {
    name: 'Eri',
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLuW2xcJlrbLdQDiw-wTCsElgoQIvbaXRZ40pCZX9vxYuLh1W3njnzZ_SZddy3nVpXeTDZqdKX6rI-MQBECmDwL80RPHDA4d5_lBe89Z8YTbBw9LSlnkTYFbKFmLvObN6tMyyCx7kPVQiMVILHoqH-ze4DDH1n6tf6PIo06l_6w95xdmZ40m7X7Bzx9g/s664/rennai_kaeruka.png",
    desc: {
      short_self_intro: 'よろしくお願いします！',
    }
  },
  {
    name: 'Satoru',
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLuW2xcJlrbLdQDiw-wTCsElgoQIvbaXRZ40pCZX9vxYuLh1W3njnzZ_SZddy3nVpXeTDZqdKX6rI-MQBECmDwL80RPHDA4d5_lBe89Z8YTbBw9LSlnkTYFbKFmLvObN6tMyyCx7kPVQiMVILHoqH-ze4DDH1n6tf6PIo06l_6w95xdmZ40m7X7Bzx9g/s664/rennai_kaeruka.png",
    desc: {
      short_self_intro: 'よろしくお願いします！',
    }
  },
  {
    name: 'Goro',
    icon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLuW2xcJlrbLdQDiw-wTCsElgoQIvbaXRZ40pCZX9vxYuLh1W3njnzZ_SZddy3nVpXeTDZqdKX6rI-MQBECmDwL80RPHDA4d5_lBe89Z8YTbBw9LSlnkTYFbKFmLvObN6tMyyCx7kPVQiMVILHoqH-ze4DDH1n6tf6PIo06l_6w95xdmZ40m7X7Bzx9g/s664/rennai_kaeruka.png",
    desc: {
      short_self_intro: 'よろしくお願いします！',
    }
  }
]

const users = ref<User[]>([])

sampleUsers.forEach(elem => {
  users.value.push(elem)
})
</script>

<style>
.user-card {
  background-color: white;
  padding: 4px 0;
  border-radius: 24px;
}

.user-card-container {
  width: 200px;
  height: 200px;
}
</style>