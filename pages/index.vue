<template>
<div class="layout">
    <NavBar />
    <Home />
</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Home from '@/components/Home'

export default {
  components: {
    NavBar,
    Home,
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