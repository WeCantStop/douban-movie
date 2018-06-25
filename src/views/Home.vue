<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <h2 @click="showModal">Test btn</h2>
    <HelloWorld msg="Hello Will"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/lib/api.js'
import { MessageBox } from 'mint-ui';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    this.fetch(api.movieDetail).then(res => {
      console.log(res)
    })
  },
  methods: {
    showModal() {
      MessageBox('提示', '操作成功');
    }
  }
}
</script>
