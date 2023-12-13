<script setup lang="ts">
  import VuePdfEmbed from 'vue-pdf-embed';
  import PDF from '@/assets/FF Online.pdf';
  defineProps({
    showModal: { type: Boolean, default: false },
    activeId: { type: Number },
  });
  const emit = defineEmits(['update:showModal']);

  const source = ref(PDF);
  const page = ref(1);
  const pageCount = ref(1);
  const pdfRef = ref();

  const handleDocumentRender = () => {
    pageCount.value = pdfRef.value?.pageCount;
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
    class="!w-4/5"
    :show="showModal"
    preset="dialog"
    title="校验Pdf1数据"
    positive-text="录入数据库"
    negative-text="取消"
    @positive-click="submitCallback"
    @update:show="close"
  >
    <div>
      <n-pagination v-model:page="page" class="mb-4" :page-count="pageCount" />
      <n-scrollbar style="max-height: 700px">
        <div class="flex">
          <VuePdfEmbed
            ref="pdfRef"
            class="flex-1"
            :source="source"
            :page="page"
            @rendered="handleDocumentRender"
          />
          <div class="w-100">
            <n-card title="Monitor" class="mb-4">
              <n-space vertical>
                <n-input-group>
                  <n-input-group-label>Setpoint</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Travel Dechar</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Travel Target</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Travel</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Setpoint_D</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Travel_D</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Travel Deviation</n-input-group-label>
                  <n-input />
                </n-input-group>
              </n-space>
            </n-card>
            <n-card title="Instrument">
              <n-space vertical>
                <n-button type="info" dashed>TRANSDUCER</n-button>
                <n-input-group>
                  <n-input-group-label>Instrument Family</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Tag Description</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Calibration Person</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Calibration Loc.</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Calibration Date</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-input-group>
                  <n-input-group-label>Last Travel Calib Type</n-input-group-label>
                  <n-input />
                </n-input-group>
                <n-button type="info" dashed>RESOURCE</n-button>
                <n-input-group>
                  <n-input-group-label>Tag Description</n-input-group-label>
                  <n-input />
                </n-input-group>
              </n-space>
            </n-card>
          </div>
        </div>
      </n-scrollbar>
    </div>
  </n-modal>
</template>

<style lang="" scoped></style>
