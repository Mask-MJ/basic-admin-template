<script setup lang="ts">
  import { Chart } from '@antv/g2';
  const container = ref();
  function renderBarChart(container) {
    const chart = new Chart({
      container,
      autoFit: true,
      width: 500,
      height: 500,
    });

    chart
      .line()
      .data({
        type: 'fetch',
        value: 'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv',
        transform: [
          // Mock missing data.
          {
            type: 'map',
            callback: (d) => ({
              ...d,
              close: d.date.getUTCMonth() < 3 ? NaN : d.close,
            }),
          },
        ],
      })
      .encode('x', 'date')
      .encode('y', 'close')
      .style('connect', true)
      .style('connectStroke', '#aaa');

    chart.render();
  }

  onMounted(() => {
    renderBarChart(unref(container));
  });
</script>

<template>
  <div ref="container"></div>
</template>

<style lang="" scoped></style>
