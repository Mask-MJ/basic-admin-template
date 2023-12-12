import type { DataTableColumns } from 'naive-ui';
import { h } from 'vue';
import { NButton, NSpace, NPopconfirm } from 'naive-ui';

export interface Dict {
  no: number;
  name: string;
  creatAt: string;
  creator: string;
  updateAt: string;
  updater: string;
}

export const createColumns = ({
  action,
}: {
  action: (row: Dict, type: number) => void;
}): DataTableColumns<Dict> => {
  return [
    { type: 'selection' },
    { title: '序号', key: 'no', width: 80, align: 'center' },
    { title: '模版名称', key: 'name', align: 'center' },
    { title: '创建时间', key: 'creatAt', align: 'center' },
    { title: '创建者', key: 'creator', align: 'center' },
    { title: '更新时间', key: 'updateAt', align: 'center' },
    { title: '更新者', key: 'updater', align: 'center' },
    {
      title: 'Action',
      key: 'actions',
      width: 200,
      align: 'center',
      render(row) {
        return h(NSpace, { justify: 'center' }, () => [
          h(NButton, { type: 'primary', onClick: () => action(row, 1) }, () => '编辑'),
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

export const data: Dict[] = [
  {
    no: 1,
    name: 'FF Online',
    creatAt: '2022-01-01',
    creator: '张三',
    updateAt: '2022-01-01',
    updater: '张三',
  },
  {
    no: 2,
    name: 'FF Offline',
    creatAt: '2022-01-01',
    creator: '张三',
    updateAt: '2022-01-01',
    updater: '张三',
  },
  {
    no: 3,
    name: 'FF Online1',
    creatAt: '2022-01-02',
    creator: 'User 2',
    updateAt: '2022-01-02',
    updater: 'User 2',
  },
  {
    no: 4,
    name: 'FF Online2',
    creatAt: '2022-01-02',
    creator: 'User 2',
    updateAt: '2022-01-02',
    updater: 'User 2',
  },
  {
    no: 5,
    name: 'FF Online3',
    creatAt: '2022-01-02',
    creator: 'User 2',
    updateAt: '2022-01-02',
    updater: 'User 2',
  },
];
