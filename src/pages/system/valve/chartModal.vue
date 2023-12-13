<script setup lang="ts">
  import Bar from './components/Bar.vue';
  import Line from './components/Line.vue';
  import Pie from './components/Pie.vue';
  import Rose from './components/Rose.vue';
  defineProps({
    showModal: { type: Boolean, default: false },
    activeId: { type: Number },
  });
  const emit = defineEmits(['update:showModal']);
  const range = ref<[number, number]>([1183135260000, Date.now()]);
  const close = () => {
    emit('update:showModal', false);
  };
  const submitCallback = () => {
    close();
  };
</script>

<template>
  <n-modal
    class="!w-4/5"
    :show="showModal"
    preset="dialog"
    title="阀门数据"
    negative-text="取消"
    @positive-click="submitCallback"
    @update:show="close"
  >
    <n-scrollbar style="max-height: 700px">
      <n-grid x-gap="12" y-gap="12" :cols="2">
        <n-gi>
          <n-card title="Travel Count" hoverable>
            <n-date-picker v-model:value="range" type="daterange" clearable />
            <Bar />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card title="Port A Pressure Sensor" hoverable>
            <n-date-picker v-model:value="range" type="daterange" clearable />
            <Line />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card title="Port B Pressure Sensor" hoverable>
            <n-date-picker v-model:value="range" type="daterange" clearable />
            <Pie />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card title="Temperature High" hoverable>
            <n-date-picker v-model:value="range" type="daterange" clearable />
            <Rose />
          </n-card>
        </n-gi>
      </n-grid>
    </n-scrollbar>
  </n-modal>
</template>
