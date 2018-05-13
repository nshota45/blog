<template>
<div>
  <navigation></navigation>
  <div style="margin-top:20px;">
  </div>
  <section class="hero is-fullheight">
    <button class="button" v-on:click="loginWithGoogle" style="margin-right:auto;margin-left:auto;">Login</button>
  </section>
</div>
</template>

<script>
import Navigation from '@/components/common/navigation'
import VueHeader from '@/components/common/vue-header'
import Sidebar from '@/components/common/sidebar'

var GoogleAuth
var SCOPE = 'email'

export default {
  name: 'Login',
  components: {
    Navigation, VueHeader, Sidebar
  },
  methods: {
    initClient: function () {
      gapi.client.init({
        'apiKey': '', // tood
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        'clientId': '', // todo
        'scope': SCOPE
      }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance()
        var user = GoogleAuth.currentUser.get()
        GoogleAuth.signIn().then(function () {
          if (user.hasGrantedScopes(SCOPE)) {
            alert('認証に成功しました')
          }
        }, function (error) {
          if (error) alert('ログインに失敗しました')
        })
      })
    },
    loginWithGoogle: function () {
      gapi.load('client:auth2', this.initClient)
    }
  }
}
</script>
<style>
</style>
