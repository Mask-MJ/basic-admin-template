<script setup lang="ts">
  import type { UploadFileInfo } from 'naive-ui';

  defineProps({
    showModal: { type: Boolean, default: false },
    activeId: { type: Number },
  });
  const emit = defineEmits(['update:showModal']);

  const model = reactive<{ name: string; fileList: UploadFileInfo[] }>({
    name: '',
    fileList: [],
  });

  const handleUploadChange = (data: { fileList: UploadFileInfo[] }) => {
    model.fileList = data.fileList;
  };
  const close = () => {
    emit('update:showModal', false);
  };
  const submitCallback = () => {
    close();
  };
</script>

<template>
  <n-modal
    :show="showModal"
    preset="dialog"
    title="编辑项目"
    positive-text="确认"
    negative-text="取消"
    @positive-click="submitCallback"
    @update:show="close"
  >
    <n-form ref="formRef" :model="model" label-placement="left">
      <n-form-item label="项目名称">
        <n-input v-model:value="model.name" placeholder="请输入项目名称" />
      </n-form-item>
      <n-form-item label="文件列表">
        <n-upload v-model:file-list="model.fileList" accept=".pdf" @change="handleUploadChange">
          <n-button>上传文件</n-button>
        </n-upload>
      </n-form-item>
    </n-form>
  </n-modal>
</template>

<style lang="" scoped></style>
