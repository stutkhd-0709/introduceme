<template>
  <div class="user-card">
    <div class="user-card-container">
      <UserIcon
        :img_path="imgPath"
        :link_path="userPagePath"
      />
      <div class="user-info">
        <div class="user-name">{{ user.name }}</div>
        <div class="user-desc">{{ user.desc?.short_self_intro }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types/user"
import UserIcon from "../UserIcon.vue"
const props = defineProps<{
  user: User
}>()

const imgPath = props.user.icon || "https://blogger.googleusercontent.com/img/a/AVvXsEgxKdda6qGSPvSr5Gdq0r1vD_Dit9bDYYp61AzM1qpHwc3X1kA6emDqfEK19ktFzpOrN3_FQEu6bhojy1kFySAC26hC5MNUzh7C4mbrgk-WK_rzMCarZTbBAmmA-ogQRsFfPztTRNxmOjvRRewRrbQHDw6EpQ9ReZ3vEe4kV-1HTU4ZYJ1xgzfnDE0eBg=s563"
const userPagePath = `/users/${props.user.id}` || undefined
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
  padding-top: 40px;
  padding-bottom: 20px;
}

.user-info {
  width: 128px;
  margin: auto;
  padding-top: 8px;
  color: #656565;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.user-info div {
  width: 100%;
  word-wrap: break-word;
}

.user-name {
  font-weight: bold;
  font-size: 12px;
}

.user-desc {
  font-size: 8px;
}
</style>