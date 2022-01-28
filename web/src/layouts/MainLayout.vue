<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Vue Cloud
        </q-toolbar-title>

        <div class="q-pa-md userNav" v-if="!authenticated">
          <router-link
            to="/login"
            class="nav-item">
            Login
          </router-link>
          <router-link
            to="/register"
            class="nav-item">
            Register
          </router-link>
        </div>
        <div class="q-pa-md userNav" v-if="authenticated">
          <router-link
            to="#"
            class="nav-item"
            @click="logout()">
            Logout
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-if="mounted"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { AxiosResponse } from 'axios';
import { defineComponent } from 'vue';
import { api } from '../boot/axios';

export default defineComponent({
  name: 'Layout',
  methods: {
    logout() {
      localStorage.removeItem('Auth-Token');
      this.$store.commit('loggedIn', { authenticated: false, token: '' });
    },
  },
  data: () => {
    return {
      mounted: false,
    }
  },
  mounted() {
    api.get('/user').then(async (result: AxiosResponse<unknown>) => {
      this.mounted = true;
      if (result.status === 200) {
        const token = localStorage.getItem('Auth-Token');
        if (token === null) return;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        api.defaults.headers.authorization = `Bearer ${token}`;
        this.$store.commit('loggedIn', { authenticated: true, token });
        await this.$router.push('/dashboard');
      }
    }).catch(console.error);
  },
  computed: {
    authenticated() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const auth = <boolean>this.$store.getters.getLoggedIn;
      return auth;
    }
  }
});
</script>
