<template>
  <a-modal
    :open="visible"
    :title="title"
    @ok="handleOk"
    @cancel="emit('update:visible', false)"
    :confirmLoading="loading"
    destroyOnClose
  >
    <a-form :model="formState" :rules="rules" ref="formRef" layout="vertical">
      <a-form-item label="Full Name" name="fullname">
        <a-input v-model:value="formState.fullname" maxlength="50" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import type { FormInstance } from 'ant-design-vue'

// ✅ Move this to the top
const props = defineProps<{
  visible: boolean
  title: string
}>()

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'submit', data: { fullname: string }): void
}>()

const formRef = ref<FormInstance>()
const loading = ref(false)

const formState = reactive({
  fullname: '',
})

const rules = {
  fullname: [
    { required: true, message: 'Full name is required', trigger: 'blur' },
    { max: 50, message: 'Maximum 50 characters', trigger: 'blur' },
  ],
}

// ✅ Fix: now `props` is defined before using it
watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      formState.fullname = ''
    }
  }
)

const handleOk = () => {
  formRef.value?.validate().then(() => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      emit('submit', { fullname: formState.fullname })
      emit('update:visible', false)
    }, 300)
  })
}

</script>
