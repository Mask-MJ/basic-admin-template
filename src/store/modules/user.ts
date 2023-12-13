import { defineStore } from 'pinia';
import type { RemovableRef } from '@vueuse/core';
import { router } from '@/router';
import { TOKEN_KEY } from '@/utils/request/enum';
import { doLogout, getUserInfo, login, LoginParams, UserInfo } from '@/api/user';

interface UserState {
  userInfo: RemovableRef<UserInfo>;
  token: RemovableRef<string | undefined>;
  role: string;
  // 权限代码列表
  permissions: string[];
}

// user info key
export const USER_INFO_KEY = 'USER__INFO__';

export const useUserStore = defineStore('user-store', {
  state: (): UserState => ({
    // user info
    userInfo: useStorage(USER_INFO_KEY, {
      nickname: '管理员',
      permissions: [],
      role: 'manager',
      id: 1,
      username: '管理员',
    } as UserInfo),
    // token
    token: useStorage(TOKEN_KEY, '1111'),
    // role
    role: '',
    permissions: [],
  }),
  getters: {
    getToken(): string {
      return this.token || '';
    },
    getUserInfo(): UserInfo {
      return this.userInfo || ({} as UserInfo);
    },
  },
  actions: {
    setToken(info?: string) {
      this.token = info;
    },
    setUserInfo(info: UserInfo = {} as UserInfo) {
      this.userInfo = info;
    },
    setRole(role: string) {
      this.role = role;
    },
    setPermissions(permissions: string[]) {
      this.permissions = permissions;
    },
    async login(params: LoginParams): Promise<UserInfo | null> {
      try {
        const data = await login(params);
        const { accessToken } = data;
        this.setToken(accessToken);
        return this.afterLoginAction();
      } catch (error) {
        return Promise.reject(error);
      }
    },

    async afterLoginAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null;
      const userInfo = await this.getUserInfoAction();
      return userInfo;
    },
    async getUserInfoAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null;
      const result = await getUserInfo();
      this.setUserInfo(result);
      return result;
    },
    async logout() {
      if (this.getToken) {
        await doLogout();
      }
      this.setToken();
      this.setUserInfo();
      router.push('/login');
    },
  },
});
