<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Authors</h2>
      <a-button type="primary" @click="onAddAuthor">
        <template #icon><PlusOutlined /></template>
        Add Author
      </a-button>
    </div>

    <AuthorsTable :authors="authors" @edit="onEditAuthor" @delete="onDeleteAuthor" />

    
    <CrudModal
      v-model:visible="showModal"
      :title="isEditing ? 'Edit Author' : 'Add Author'"
      :initialData="selectedAuthor"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import AuthorsTable from '@/components/AuthorsTable.vue'
import CrudModal from '@/components/AuthotsCrudModal.vue'
import { fetchAuthors, createAuthor, updateAuthor, deleteAuthor } from '@/api/authors'
import { message, Modal } from 'ant-design-vue'
import type { Author } from '@/types/author'
const authors = ref<Author[]>([])
const showModal = ref(false)
const isEditing = ref(false)
const selectedAuthor = ref<{ id: number; fullname: string } | null>(null)
const serverError = ref('')

const loadAuthors = async () => {
  const response = await fetchAuthors()
   console.log('Authors response:', response)
  if (response.success && response.data) {
    authors.value = response.data
     
  } else {
    message.error(response.error?.message || 'Failed to load authors.')
  }
}

const onAddAuthor = () => {
  selectedAuthor.value = null
  isEditing.value = false
  serverError.value = ''  // ✅ clear previous error
  showModal.value = true
}

const onEditAuthor = (author: Author) => {
  selectedAuthor.value = { ...author }
  isEditing.value = true
  serverError.value = ''  // ✅ clear previous error
  showModal.value = true
}

const handleSubmit = async (data: { fullname: string }) => {
  if (isEditing.value && selectedAuthor.value) {
    const response = await updateAuthor(selectedAuthor.value.id, data)
    if (response.success) {
      message.success('Author updated!')
      showModal.value = false
      loadAuthors()
    } else {
      if (response.error?.status === 409) {
       serverError.value = (response.error.message || ['This author already exists.']).join('\n')
      } else {
        message.error('Failed to update author.')
      }
    }
  } else {
    const response = await createAuthor(data)
    if (response.success) {
      message.success('Author added!')
      showModal.value = false
      loadAuthors()
    } else {
      if (response.error?.status === 409) {
       serverError.value = (response.error.message || ['This author already exists.']).join('\n')
      } else {
        message.error('Failed to add author.')
      }
    }
  }
}


const onDeleteAuthor = (id: number) => {
  Modal.confirm({
    title: 'Are you sure you want to delete this author?',
    onOk: async () => {
      const response = await deleteAuthor(id)
      if (response.success) {
        message.success('Author deleted!')
        loadAuthors()
      } else {
        message.error('Failed to delete author.')
      }
    },
  })
}

onMounted(loadAuthors)
</script>
