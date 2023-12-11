<script setup lang="ts">
  defineProps({
    showModal: { type: Boolean, default: false },
    activeId: { type: Number },
  });
  const emit = defineEmits(['update:showModal']);

  const model = reactive<{ name: string; address: string }>({
    name: '',
    address: '',
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
    title="编辑项目"
    positive-text="确认"
    negative-text="取消"
    @positive-click="submitCallback"
    @update:show="close"
  >
    <n-form ref="formRef" :model="model" label-placement="left">
      <n-form-item label="工厂名称">
        <n-input v-model:value="model.name" placeholder="请输入工厂名称" />
      </n-form-item>
      <n-form-item label="工厂地址">
        <n-input v-model:value="model.address" placeholder="请输入工厂地址" />
      </n-form-item>
    </n-form>
  </n-modal>
</template>

<style lang="" scoped></style>
