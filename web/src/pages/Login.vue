<template>
  <q-page class="row items-center justify-evenly">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md userForm">

      <q-input
        filled
        v-model="email"
        label="Email address" />
        
       <q-input
        filled
        v-model="password"
        type="password"
        label="Password" />

      <div>
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { api } from './../boot/axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      $q: useQuasar()
    }
  },
  methods: {
    async onSubmit () {
      const result = await api.post('/user/login', { email: this.email, password: this.password });
      if (result.status === 200) {
        this.$q.notify({
          color: 'green-3',
          textColor: 'white',
          icon: 'check',
          message: 'Successfully logged in'
        });
        const token = <string>result.data;
        localStorage.setItem('Auth-Token', token);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        api.defaults.headers.authorization = `Bearer ${token}`;
        this.$store.commit('loggedIn', { authenticated: true, token });
        await this.$router.push('/dashboard');
      }
      else {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: result.status === 400 ? 'Please enter a valid email' : 'Invalid login information'
        });
      }
    }
  },
});
</script>
