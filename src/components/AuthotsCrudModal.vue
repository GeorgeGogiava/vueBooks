<template>
  <a-modal
    :visible="visible"
    :title="title"
    @ok="handleOk"
    @cancel="$emit('update:visible', false)"
    :confirmLoading="loading"
  >
    <a-form :model="formState" layout="vertical">
      <a-form-item label="Full Name" :validateStatus="serverError ? 'error' : ''" :help="serverError">
        <a-input v-model:value="formState.fullname" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  visible: boolean
  title: string
  initialData: { id: number; fullname: string } | null
}>()

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'submit', data: { fullname: string }): void
}>()

const loading = ref(false)
const formState = ref<{ fullname: string }>({ fullname: '' })
const serverError = ref<string>('')

watch(
  () => props.initialData,
  (newVal) => {
    formState.value.fullname = newVal?.fullname || ''
    serverError.value = ''
  },
  { immediate: true }
)

const handleOk = async () => {
  loading.value = true
  serverError.value = ''
  try {
    await emit('submit', { fullname: formState.value.fullname })
  } catch (e: any) {
    serverError.value = e?.message || 'Unexpected error'
  } finally {
    loading.value = false
  }
}
</script>
