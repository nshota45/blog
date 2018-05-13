<template>
<div class="article">
  <div v-if="isLoading" style="text-align:center;margin-top:30px;">
    <rotate-square2 style="margin: 0 auto;"></rotate-square2>
    <p>Loading...</p>
  </div>
  <div v-else class="card">
    <div class="card-content">
      <div class="media">

        <div class="media-content" style="overflow: hidden;">
          <p class="title is-2">{{ article.title }}</p>
          <p class="subtitle is-6"><i class="far fa-clock"></i>{{ article.date }}</p>
          <div class="tags">
            <span class="tag is-info" v-for="(tag, tindex) in article.tags.split(',')" v-bind:key="tindex">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <img :src="article.thumbnailUrl" alt="Placeholder image" style="max-width:300px;max-height:300px;">
        </figure>
      </div>
      <hr>
      <p class="content" id="article-content">{{ article.content }}</p>
    </div>
    <footer class="card-footer" v-if="comments.length != 0">
      <table class="table is-fullwidth" style="margin:0">
        <tr style="background-color:whitesmoke;"><th>コメント ({{ comments.length }}件)</th></tr>
        <tr v-for="(c, index) in comments" v-bind:key="index">
          <td style="font-size:14px;">{{ c }}</td>
        </tr>
      </table>
    </footer>
    <footer class="card-footer" style="padding:30px;background-color:whitesmoke;">
      <input class="input is-rounded" type="text" placeholder="この記事にコメントする" v-model="inputingComment" v-on:keydown.enter="addComment">
    </footer>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { RotateSquare2 } from 'vue-loading-spinner'

var apiUrl = process.env.API_URL

export default {
  name: 'Article',
  components: {
    RotateSquare2
  },
  created: function () {
    this.getArticle()
  },
  data () {
    return {
      article: {
        id: undefined,
        title: undefined,
        content: undefined,
        thumbnailUrl: undefined,
        date: undefined,
        tags: ''
      },
      comments: [],
      isLoading: false,
      inputingComment: null
    }
  },
  methods: {
    getId: function () {
      return this.$route.params['id']
    },
    getArticle: function () {
      var articleId = this.getId()
      this.isLoading = true
      axios.get(apiUrl + '/article/' + articleId).then((res) => {
        this.article = res.data
        this.isLoading = false
      }).catch(function (err) {
        console.log(err)
        this.isLoading = false
      })
    },
    addComment: function () {
      // todo send comment to server
      if (this.inputingComment === undefined || this.inputingComment === null || this.inputingComment.trim() === '') return
      var allowComment = confirm('コメントしますか？')
      if (!allowComment) {
        this.inputingComment = null
        return
      }
      this.comments.push(this.inputingComment)
      this.inputingComment = null
    }
  }
}
</script>

<style scoped>
#article-content {
  word-break:break-all;
  white-space:pre-line;
}
</style>
