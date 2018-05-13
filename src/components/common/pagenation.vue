<template>
<nav class="pagination" role="navigation" aria-label="pagination" style="margin-top:10px;">
  <a class="pagination-previous" :disabled="disablePreviousButton" :href="'/?page=' + previousPage">前のページ</a>
  <a class="pagination-next" :disabled="disableNextButtonActive" :href="'/?page=' + nextPage">次のページ</a>

</nav>
</template>

<script>
export default {
  name: 'Pagenation',
  props:['totalPageNum'],
  created: function () {
    console.log(this.currentPage)
  },
  computed: {
    currentPage: function () {
      var pageNum;
      if (this.$route.query.page === undefined) pageNum = 1
      else pageNum = this.$route.query.page
      return Number(pageNum)
    },
    previousPage: function () {
      return this.currentPage - 1
    },
    nextPage: function () {
      return this.currentPage + 1
    },
    disablePreviousButton: function () {
      if (this.currentPage === 1) {
        return true
      } else {
        return false
      }
    },
    disableNextButtonActive: function () {
      if (this.currentPage >= this.totalPageNum) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
</style>
