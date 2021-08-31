<template>
<div class="layout">
    <NavBar />
    <Work />
</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Work from '@/components/Work'

export default {
  components: {
    NavBar,
    Work,
  }
}
</script>

<style>
html, body {
  font-family: Montserrat, 'Courier New', Courier, monospace;
  margin: 0;
  padding: 0;
  background: black;
  color: white;
  height: 100vh;
}


.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
}
</style>