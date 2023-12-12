<script setup lang="ts">
  import { columns2, data2, columns3, data3 } from './data';
  defineProps({
    showModal: { type: Boolean, default: false },
    activeId: { type: Number },
  });
  const emit = defineEmits(['update:showModal']);

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
    title="阀门数据详情"
    positive-text="确认"
    negative-text="取消"
    @positive-click="submitCallback"
    @update:show="close"
  >
    <n-scrollbar style="max-height: 700px">
      <n-card title="Monitor" style="margin-bottom: 16px">
        <n-descriptions label-placement="left" bordered class="mb-4">
          <n-descriptions-item label="Setpoint"> 0.00 % </n-descriptions-item>
          <n-descriptions-item label="Travel Dechar"> 0.52 % </n-descriptions-item>
          <n-descriptions-item label="Travel Target"> -25.00 % </n-descriptions-item>
          <n-descriptions-item label="Travel"> 0.52 % </n-descriptions-item>
          <n-descriptions-item label="Setpoint_D"> OPEN </n-descriptions-item>
          <n-descriptions-item label="Travel_D"> CLOSED </n-descriptions-item>
          <n-descriptions-item label="Travel Deviation"> 0.52 % </n-descriptions-item>
          <n-descriptions-item label="Pressure A"> 61.72 psi </n-descriptions-item>
          <n-descriptions-item label="Pressure B"> 0.18 psi </n-descriptions-item>
        </n-descriptions>
      </n-card>
      <n-card title="Instrument" style="margin-bottom: 16px">
        <n-descriptions label-placement="left" title="TRANSDUCER" bordered class="mb-4">
          <n-descriptions-item label="Instrument Family"> DVC6200f </n-descriptions-item>
          <n-descriptions-item label="Tag Description"> 1341-FV-81303 </n-descriptions-item>
          <n-descriptions-item label="Calibration Person"> </n-descriptions-item>
          <n-descriptions-item label="Calibration Loc."> 0.52 % </n-descriptions-item>
          <n-descriptions-item label="Calibration Date"> 2023-7-21 19:56:00 </n-descriptions-item>
          <n-descriptions-item label="Last Travel Calib Type"> Auto </n-descriptions-item>
        </n-descriptions>
        <n-descriptions label-placement="left" title="RESOURCE" bordered class="mb-4">
          <n-descriptions-item label="Tag Description"> </n-descriptions-item>
          <n-descriptions-item label="Field Serial Number"> F003005609 </n-descriptions-item>
          <n-descriptions-item label="Manufacturer"> Fisher Controls </n-descriptions-item>
          <n-descriptions-item label="Device Type"> 4602 </n-descriptions-item>
          <n-descriptions-item label="Device Revision"> 4 </n-descriptions-item>
          <n-descriptions-item label="Minimum DD Revision"> 1 </n-descriptions-item>
          <n-descriptions-item label="ITK Version"> 6 </n-descriptions-item>
          <n-descriptions-item label="Firmware Revision"> 3-01-013 </n-descriptions-item>
          <n-descriptions-item label="Standby Revision"> 2-00-023 </n-descriptions-item>
          <n-descriptions-item label="Hardware Revision"> 9 </n-descriptions-item>
          <n-descriptions-item label="Features">
            REPORTS / FAULT ST / SOFT LOCK / PWA-STATUS
          </n-descriptions-item>
          <n-descriptions-item label="Diagnostic Level"> PD </n-descriptions-item>
          <n-descriptions-item label="Function Blocks">
            AO/DO/AI/DI/PID/IS/OS/MAI/CS
          </n-descriptions-item>
          <n-descriptions-item label="Travel Control Capable"> Yes </n-descriptions-item>
          <n-descriptions-item label="Travel w/Fallback Capable"> Yes </n-descriptions-item>
          <n-descriptions-item label="Pressure Control Capable"> Yes </n-descriptions-item>
        </n-descriptions>
      </n-card>
      <n-tabs type="segment">
        <n-tab-pane name="Config" tab="Config">
          <n-data-table :columns="columns2" :data="data2" :single-line="false" />
        </n-tab-pane>
        <n-tab-pane name="Electronic" tab="Electronic">
          <n-data-table :columns="columns3" :data="data3" :single-line="false" />
        </n-tab-pane>
        <n-tab-pane name="Proximity" tab="Proximity">
          <n-data-table :columns="columns2" :data="data2" :single-line="false" />
        </n-tab-pane>
        <n-tab-pane name="Sensor" tab="Sensor">
          <n-data-table :columns="columns2" :data="data2" :single-line="false" />
        </n-tab-pane>
      </n-tabs>
    </n-scrollbar>
  </n-modal>
</template>

<style lang="" scoped></style>
