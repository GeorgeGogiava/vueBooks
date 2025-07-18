<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <WarningOutlined class="text-red-500 text-6xl mb-4" />
    <h1 class="text-4xl font-bold mb-2">404 - Page Not Found</h1>
    <p class="text-gray-500 mb-6">Sorry, the page you're looking for doesn't exist.</p>
    <a-button type="primary" @click="goHome">
      <template #icon><HomeOutlined /></template>
      Go to Homepage
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { WarningOutlined, HomeOutlined } from '@ant-design/icons-vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>
