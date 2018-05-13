<template>
<div class="home">
  <div v-if="isLoading" style="text-align:center;margin-top:30px;">
    <rotate-square2 style="margin: 0 auto;"></rotate-square2>
    <p>Loading...</p>
  </div>
  <div v-else class="card sumbnail" v-for="(a, index) in articles" v-bind:key="index">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="a.thumbnailUrl" alt="Placeholder image" style="max-width: 128px;max-height: 128px;">
          </figure>
        </div>
        <div class="media-content" style="overflow: hidden;">
          <i class="far fa-clock"></i>{{ a.date }}
          <div class="tags">
            <span class="tag is-info" v-for="(tag, tindex) in a.tags.split(',')" v-bind:key="tindex">{{ tag }}</span>
          </div>
          <p class="title is-4">{{ a.title }}</p>
        </div>
      </div>
      <div class="content">{{ a.content }} <a :href="/article/ + a.id">>>続きを読む</a></div>
    </div>
  </div>
  <p>総記事数: {{ totalArticleCount }}</p>
  <pagenation :totalPageNum="totalPageNum"></pagenation>

</div>
</template>

<script>
import axios from 'axios'
import { RotateSquare2 } from 'vue-loading-spinner'
import Pagenation from '@/components/common/pagenation'
var apiUrl = process.env.API_URL

export default {
  name: 'Home',
  components: {
    Pagenation, RotateSquare2
  },
  created: function () {
    console.log(process.env)
    this.getArticles()
  },
  data () {
    return {
      articles: [], // id, title, content, thumbnailUrl, date, tags
      isLoading: false,
      totalArticleCount: 0,
      totalPageNum: 0
    }
  },
  methods: {
    getArticles: function () {
      this.isLoading = true
      var self = this
      axios.get(apiUrl + '/articles/' + this.currentPage).then((res) => {
        self.articles = res.data.articles
        self.totalArticleCount = res.data.totalCount
        self.totalPageNum = res.data.totalPageNum
        self.isLoading = false
      }).catch(function (err) {
        console.log(err)
        self.isLoading = false
      })
    }
  },
  computed: {
    currentPage: function () {
      var pageNum;
      if (this.$route.query.page === undefined) pageNum = 1
      else pageNum = this.$route.query.page
      return Number(pageNum)
    }
  }
}
</script>

<style scoped>
.sumbnail :hover{
  background-color: whitesmoke;
}
</style>
