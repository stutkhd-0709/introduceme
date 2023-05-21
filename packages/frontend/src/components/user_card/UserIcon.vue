<template>
  <div class="user-icon">
    <img :src="img_path">
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  img_path: string
}>()
</script>

<style>
.user-icon {
  position: relative;
  overflow: hidden;
  margin: auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #D9D9D9;
}

.user-icon img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
}
</style>