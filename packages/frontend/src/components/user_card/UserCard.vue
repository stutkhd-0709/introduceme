<template>
  <div class="user-card">
    <div class="user-card-container">
      {{ user.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types/user"
const props = defineProps<{
  user: User
}>()

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