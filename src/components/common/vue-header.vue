<template>
  <section class="hero is-dark" id="vue-header-section">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">日記</h1>
        <p>高知→京都→神奈川→大阪→京都→東京</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VueHeader'
}
</script>

<style>
#vue-header-section{
    background: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ), url('https://tosametal.net/static/img/jam.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
