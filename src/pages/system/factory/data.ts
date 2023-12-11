import type { DataTableColumns } from 'naive-ui';
import { h } from 'vue';
import { NButton, NSpace, NSwitch, NPopconfirm } from 'naive-ui';

export interface Factory {
  no: number;
  name: string;
  status: number;
  address: string;
  creatAt: string;
  creator: string;
  updateAt: string;
  updater: string;
}

export const createColumns = ({
  action,
}: {
  action: (row: Factory, type: number) => void;
}): DataTableColumns<Factory> => {
  return [
    { type: 'selection' },
    { title: '序号', key: 'no', width: 80, align: 'center' },
    { title: '工厂名称', key: 'name', align: 'center' },
    { title: '地址', key: 'address', align: 'center' },
    {
      title: '状态',
      key: 'status',
      align: 'center',
      render(row) {
        return h(
          NSwitch,
          {
            value: row.status,
            checkedValue: 1,
            uncheckedValue: 0,
            onUpdateValue: (value: number) => {
              row.status = value;
            },
          },
          {
            checked: () => '合作中',
            unchecked: () => '已结束',
          },
        );
      },
    },
    { title: '创建时间', key: 'creatAt', align: 'center' },
    { title: '创建者', key: 'creator', align: 'center' },
    { title: '更新时间', key: 'updateAt', align: 'center' },
    { title: '更新者', key: 'updater', align: 'center' },
    {
      title: 'Action',
      key: 'actions',
      align: 'center',
      width: 300,
      render(row) {
        return h(NSpace, { justify: 'center' }, () => [
          h(NButton, { type: 'primary', onClick: () => action(row, 1) }, () => '编辑'),
          h(NButton, { type: 'info', onClick: () => action(row, 2) }, () => '项目'),
          h(NButton, { type: 'warning', onClick: () => action(row, 3) }, () => '阀门'),
          h(
            NPopconfirm,
            { onPositiveClick: () => action(row, 4) },
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

export const data: Factory[] = [
  {
    no: 1,
    name: '工厂1',
    status: 0,
    address: '广东省深圳市南山区',
    creatAt: '2022-01-01',
    creator: '张三',
    updateAt: '2022-01-01',
    updater: '张三',
  },
  {
    no: 2,
    name: '工厂2',
    status: 1,
    address: '北京市海淀区',
    creatAt: '2022-01-02',
    creator: 'User 2',
    updateAt: '2022-01-02',
    updater: 'User 2',
  },
];
