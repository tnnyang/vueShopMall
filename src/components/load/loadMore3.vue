<template>
  <iscroll-view @pullUp="load" @pullDown="refresh">
    Your contents
  </iscroll-view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    methods: {
    refresh (iscroll) {
      // Refresh current data
    },
    load (iscroll) {
      // Load new data
    }
  }
  }
}
</script>
<style scoped>
</style>