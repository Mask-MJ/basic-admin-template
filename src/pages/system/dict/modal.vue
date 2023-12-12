<script setup lang="ts">
  defineProps({
    showModal: { type: Boolean, default: false },
    activeId: { type: Number },
  });
  const emit = defineEmits(['update:showModal']);

  const model = reactive<{ name: string; dictList: string[] }>({
    name: '',
    dictList: [],
  });
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
    title="编辑模版"
    positive-text="确认"
    negative-text="取消"
    @positive-click="submitCallback"
    @update:show="close"
  >
    <n-form ref="formRef" :model="model" label-placement="left">
      <n-form-item label="模版名称">
        <n-input v-model:value="model.name" placeholder="请输入模版名称" />
      </n-form-item>
      <n-form-item label="字典列表">
        <n-dynamic-input v-model:value="model.dictList" placeholder="请输入" />
      </n-form-item>
    </n-form>
  </n-modal>
</template>

<style lang="" scoped></style>
