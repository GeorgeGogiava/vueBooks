<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import type { Author } from '@/types/author'

const props = defineProps<{
  authors: Author[]
}>()

const emit = defineEmits<{
  (e: 'edit', author: Author): void
  (e: 'delete', id: number): void
}>()
</script>

<template>
  <a-table :dataSource="authors" rowKey="id" bordered size="middle">
    <a-table-column title="ID" dataIndex="id" key="id" />
    <a-table-column title="Full Name" dataIndex="fullname" key="fullname" />

    <a-table-column title="Actions" key="actions">
      <template #default="{ record }">
        <div class="flex gap-2">
          <a-button type="link" size="small" @click="emit('edit', record)">
            <EditOutlined />
          </a-button>
          <a-button type="link" size="small" danger @click="emit('delete', record.id)">
            <DeleteOutlined />
          </a-button>
        </div>
      </template>
    </a-table-column>
  </a-table>
</template>
