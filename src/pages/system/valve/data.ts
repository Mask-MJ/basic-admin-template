import type { DataTableColumns } from 'naive-ui';
import { h } from 'vue';
import { NButton, NSpace, NPopconfirm } from 'naive-ui';

export interface Project {
  no: number;
  identifier: string;
  travel_dechar: string;
  travel: string;
  travel_deviation: string;
  supply_pressure: string;
  drive_signal: string;
  pd_inside_status: string;
}

export const createColumns = ({
  action,
}: {
  action: (row: Project, type: number) => void;
}): DataTableColumns<Project> => {
  return [
    { type: 'selection' },
    { title: '序号', key: 'no', width: 80, align: 'center' },
    { title: 'Status Monitor', width: 150, key: 'identifier', align: 'center' },
    { title: 'Travel Dechar', width: 120, key: 'travel_dechar', align: 'center' },
    { title: 'Travel', width: 100, key: 'travel', align: 'center' },
    { title: 'Travel Deviation', width: 150, key: 'travel_deviation', align: 'center' },
    { title: 'Supply Pressure', width: 150, key: 'supply_pressure', align: 'center' },
    { title: 'Drive Signal', width: 120, key: 'drive_signal', align: 'center' },
    { title: 'PD Inside Status', width: 150, key: 'pd_inside_status', align: 'center' },
    {
      title: 'Action',
      key: 'actions',
      width: 300,
      align: 'center',
      render(row) {
        return h(NSpace, { justify: 'center' }, () => [
          h(NButton, { type: 'primary', onClick: () => action(row, 1) }, () => '编辑'),
          h(NButton, { type: 'info', onClick: () => action(row, 1) }, () => '数据可视化'),
          h(
            NPopconfirm,
            { onPositiveClick: () => action(row, 2) },
            {
              trigger: () => h(NButton, { type: 'error' }, () => '删除'),
              default: () => '确认删除？',
            },
          ),
        ]);
      },
    },
  ];
};

export const data: Project[] = [
  {
    no: 1,
    identifier: '022-FV-1',
    travel_dechar: '0.52%',
    travel: '0.52%',
    travel_deviation: '0.52%',
    supply_pressure: '61.68 psi',
    drive_signal: '100.00 %',
    pd_inside_status: 'Running',
  },
  {
    no: 2,
    identifier: '022-FV-2',
    travel_dechar: '0.62%',
    travel: '0.62%',
    travel_deviation: '0.62%',
    supply_pressure: '62.68 psi',
    drive_signal: '99.00 %',
    pd_inside_status: 'Stopped',
  },
  {
    no: 3,
    identifier: '022-FV-3',
    travel_dechar: '0.72%',
    travel: '0.72%',
    travel_deviation: '0.72%',
    supply_pressure: '63.68 psi',
    drive_signal: '98.00 %',
    pd_inside_status: 'Running',
  },
  {
    no: 4,
    identifier: '022-FV-4',
    travel_dechar: '0.82%',
    travel: '0.82%',
    travel_deviation: '0.82%',
    supply_pressure: '64.68 psi',
    drive_signal: '97.00 %',
    pd_inside_status: 'Stopped',
  },
  {
    no: 5,
    identifier: '022-FV-5',
    travel_dechar: '0.92%',
    travel: '0.92%',
    travel_deviation: '0.92%',
    supply_pressure: '65.68 psi',
    drive_signal: '96.00 %',
    pd_inside_status: 'Running',
  },
];
