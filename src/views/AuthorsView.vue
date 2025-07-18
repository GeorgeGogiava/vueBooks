<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import AuthorsTable from '@/components/AuthorsTable.vue'
import CrudModal from '@/components/AuthotsCrudModal.vue'
import { fetchAuthors, createAuthor } from '@/api/authors'
import { message } from 'ant-design-vue'

const authors = ref<{ id: number; fullname: string }[]>([])
const showModal = ref(false)

const loadAuthors = async () => {
  const response = await fetchAuthors()
  if (response.success) authors.value = response.data
}

const onAddAuthor = () => {
  showModal.value = true
}

const handleCreate = async (data: { fullname: string }) => {
  const response = await createAuthor(data)
  if (response.success) {
    message.success('Author added!')
    loadAuthors()
  } else {
    message.error('Failed to add author.')
  }
}

onMounted(() => {
  loadAuthors()
})
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Authors</h2>
      <a-button type="primary" @click="onAddAuthor">
        <template #icon><PlusOutlined /></template>
        Add Author
      </a-button>
    </div>

    <AuthorsTable :authors="authors" />

    <!-- 🔽 Modal Component -->
    <CrudModal
      v-model:visible="showModal"
      title="Add Author"
      @submit="handleCreate"
    />
  </div>
</template>
