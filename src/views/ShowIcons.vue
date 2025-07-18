<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Ant Design Vue Icons</h2>

    <a-input
      v-model:value="searchText"
      placeholder="Search icon name..."
      class="mb-4 max-w-xs"
      allow-clear
    />

    <a-table
      :columns="columns"
      :data-source="filteredIcons"
      :pagination="{ pageSize: 20 }"
      bordered
      row-key="name"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'icon'">
          <component :is="record.icon" class="text-lg" />
        </template>
        <template v-else>
          {{ record.name }}
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import * as Icons from '@ant-design/icons-vue'
import { ref, computed } from 'vue'
import type { Component } from 'vue'

interface IconRow {
  name: string
  icon: Component
}

const columns = [
  { title: 'Icon Name', dataIndex: 'name', key: 'name' },
  { title: 'Icon Preview', dataIndex: 'icon', key: 'icon' },
]

const iconData: IconRow[] = Object.entries(Icons).map(([name, icon]) => ({
  name,
  icon,
}))

const searchText = ref('')

const filteredIcons = computed(() =>
  iconData.filter((item) =>
    item.name.toLowerCase().includes(searchText.value.toLowerCase())
  )
)
</script>
