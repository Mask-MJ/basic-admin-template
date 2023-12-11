import type { DataTableColumns } from 'naive-ui';
import { h } from 'vue';
import { NButton, NSpace, NPopconfirm } from 'naive-ui';

export interface Project {
  no: number;
  name: string;
  type: 'project';
  creatAt: string;
  creator: string;
  updateAt: string;
  updater: string;
  children?: Pdf[];
}

export interface Pdf {
  no: number;
  name: string;
  type: 'pdf';
  path: string;
  creatAt: string;
  creator: string;
  updateAt: string;
  updater: string;
}

export const createColumns = ({
  action,
}: {
  action: (row: Project, type: number) => void;
}): DataTableColumns<Project> => {
  return [
    { type: 'selection' },
    { title: '序号', key: 'no', width: 100, align: 'center' },
    { title: '项目名称', key: 'name', align: 'center' },
    { title: '创建时间', key: 'creatAt', align: 'center' },
    { title: '创建者', key: 'creator', align: 'center' },
    { title: '更新时间', key: 'updateAt', align: 'center' },
    { title: '更新者', key: 'updater', align: 'center' },
    {
      title: 'Action',
      key: 'actions',
      width: 150,
      render(row) {
        return row.type === 'project'
          ? h(NSpace, { justify: 'center' }, () => [
              h(NButton, { type: 'primary', onClick: () => action(row, 1) }, () => '编辑'),
              h(
                NPopconfirm,
                { onPositiveClick: () => action(row, 2) },
                {
                  trigger: () => h(NButton, { type: 'error' }, () => '删除'),
                  default: () => '确认删除？',
                },
              ),
            ])
          : '';
      },
    },
  ];
};

export const data: Project[] = [
  {
    no: 1,
    name: 'Project 1',
    type: 'project',
    creatAt: '2022-01-01',
    creator: '张三',
    updateAt: '2022-01-01',
    updater: '张三',
    children: [
      {
        no: 11,
        name: 'pdf 1',
        type: 'pdf',
        path: 'https://xxx',
        creatAt: '2022-01-01',
        creator: '李四',
        updateAt: '2022-01-01',
        updater: '张三',
      },
      {
        no: 12,
        name: 'pdf 2',
        type: 'pdf',
        path: 'https://xxx',
        creatAt: '2022-01-02',
        creator: 'User 2',
        updateAt: '2022-01-02',
        updater: 'User 2',
      },
    ],
  },
  {
    no: 2,
    name: 'Project 2',
    type: 'project',
    creatAt: '2022-01-02',
    creator: 'User 2',
    updateAt: '2022-01-02',
    updater: 'User 2',
    children: [
      {
        no: 21,
        name: 'pdf 3',
        type: 'pdf',
        path: 'https://xxx',
        creatAt: '2022-01-03',
        creator: 'User 3',
        updateAt: '2022-01-03',
        updater: 'User 3',
      },
      {
        no: 22,
        name: 'pdf 4',
        type: 'pdf',
        path: 'https://xxx',
        creatAt: '2022-01-04',
        creator: 'User 4',
        updateAt: '2022-01-04',
        updater: 'User 4',
      },
    ],
  },
];
