<template>
<div class="layout">
    <NavBar />
    <About />
</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import About from '@/components/About'

export default {
  components: {
    NavBar,
    About,
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