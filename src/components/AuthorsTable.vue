<template>
  <a-table
    :columns="columns"
    :data-source="authors"
    row-key="id"
    bordered
  />
</template>

<script setup lang="ts">
defineProps<{
  authors: { id: number; fullname: string }[]
}>()

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id', width: 100 },
  { title: 'Full Name', dataIndex: 'fullname', key: 'fullname' },
]
</script>
